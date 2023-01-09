import "./App.css";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import Frm from "./Pages/Form/Form"
function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);
  const handleShuffle = (datas) => {
    // return questions.sort(() => Math.random() - 0.5);
    // handleShuffle([questions(questions => [...questions].sort(() => Math.random() - 0.5))]);
    return datas.sort(() => Math.random() - 0.5);

  };

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      // `https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`
      `http://localhost:8800/`
    );
    console.log(data);
    handleShuffle(data);
    setQuestions(data);
  };
  return (
    <div className="app">
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home
            name={name}
            setName={setName}
            fetchQuestions={fetchQuestions}
          />} />
        </Routes>
        <Routes>
          <Route path="/quiz" element={<Quiz
            name={name}
            questions={questions}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />} />
        </Routes>
        <Routes>
          <Route path="/result" element={<Result
            score={score}
          />} />
        </Routes>
      <Routes>
          <Route path="/form" element={<Frm
          />} />
        </Routes>
      </Router>
      <div style={{ textAlign: "center", marginBottom: 10 }}>
         {" "}
        <a
          href=""
          style={{ cursor: "pointer" }}
        >
          Take Your Challenge Now
        </a>

      </div>
      {/* <Footer /> */}
    </div >
  );
}

export default App;

// import axios from "axios";
// import { useState } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";

// import Home from "./Pages/Home/Home";
// import Quiz from "./Pages/Quiz/Quiz";
// import Result from "./Pages/Result/Result";

// function App() {
//   const [questions, setQuestions] = useState();
//   const [name, setName] = useState();
//   const [score, setScore] = useState(0);

//   const fetchQuestions = async (category = "", difficulty = "") => {
//     const { data } = await axios.get(
//       `https://opentdb.com/api.php?amount=10${category && `&category=${category}`
//       }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
//     );

//     setQuestions(data.results);
//   };

//   return (
//     <BrowserRouter>
//       <div className="app" style={{ backgroundImage: 'url("/ques1.png")' }}>
//         <Header />
//         <Routes>
//           <Route path="/" exact>
//             <Home
//               name={name}
//               setName={setName}
//               fetchQuestions={fetchQuestions}
//             />
//           </Route>
//         </Routes>
//         <Routes>
//           <Route path="/quiz">
//             <Quiz
//               name={name}
//               questions={questions}
//               score={score}
//               setScore={setScore}
//               setQuestions={setQuestions}
//             />
//           </Route>
//         </Routes>
//         <Routes>
//           <Route path="/result">
//             <Result name={name} score={score} />
//           </Route>
//         </Routes>
//       </div>
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;
