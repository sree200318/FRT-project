// import React from "react";
// import "./Home.css";
// import { Select } from "@mui/material";
// import { TextField } from "@mui/material";
// import Button from '@mui/material/Button';


// import MenuItem from '@mui/material/MenuItem';



// const Home = () => {


// 	return (
// 		<div className="content">
// 			<div className="settings">
// 				<span style={{ fontSize: 30 }}>Quiz Settings</span>
// 				<div className="settings_select">

// 					<TextField
// 						style={{ marginBottom: 25 }}
// 						label=" Enter Your Name"
// 						varient="outlined"
// 					/>
// 					<Select >
// 						<MenuItem value={10}>Ten</MenuItem>
// 						<MenuItem value={10}>Ten</MenuItem>
// 						<MenuItem value={10}>Ten</MenuItem>
// 						<MenuItem value={10}>Ten</MenuItem>
// 						<MenuItem value={10}>Ten</MenuItem>
// 						<MenuItem value={10}>Ten</MenuItem>
// 						<MenuItem value={10}>Ten</MenuItem>
// 					</Select>

// 					<Button color="primary"
// 						onClick={() => {
// 							alert('Quiz is starting');
// 						}}
// 					>
// 						Start Quiz
// 					</Button>



// 				</div>
// 			</div>
// 			<img src="/ban.svg" className="banner" alt="quiz img"></img>
// 		</div>
// 	);
// };
// export default Home;



import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
// import Categories from "../Categories/Categories";
// import { Link } from "react-router-dom"
import "./Home.css";

const Home = ({ name, setName, fetchQuestions }) => {
	// const [category, setCategory] = useState("");
	// const [difficulty, setDifficulty] = useState("");
	const [error, setError] = useState(false);

	const navigate = useNavigate();

	const handleSubmit = () => {
		if (0) {
			setError(true);
			return;
		} else {
			setError(false);
			fetchQuestions();
			navigate('/quiz');
			// <Link to="/quiz" />
		}
	};

	return (
		<div className="content">
			<div className="settings">
				<h1>Quizee</h1>
				<span style={{ fontSize: 30 }}>Quiz Settings</span>
				<div className="settings__select">
					{error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
					<TextField
						style={{ marginBottom: 25 }}
						label="Enter Your Name"
						variant="outlined"
						onChange={(e) => setName(e.target.value)}
					/>
					{/* <TextField
						select
						label="Select Category"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
						variant="outlined"
						style={{ marginBottom: 30 }}
					>
						{Categories.map((cat) => (
							<MenuItem key={cat.category} value={cat.value}>
								{cat.category}
							</MenuItem>
						))}
					</TextField>
					<TextField
						select
						label="Select Difficulty"
						value={difficulty}
						onChange={(e) => setDifficulty(e.target.value)}
						variant="outlined"
						style={{ marginBottom: 30 }}
					>
						<MenuItem key="Easy" value="easy">
							Easy
						</MenuItem>
						<MenuItem key="Medium" value="medium">
							Medium
						</MenuItem>
						<MenuItem key="Hard" value="hard">
							Hard
						</MenuItem>
					</TextField> */}
					<Button
						variant="contained"
						color="primary"
						size="large"
						onClick={handleSubmit}
					>
						Start Quiz
					</Button><br></br>
					<Button
						variant="contained"
						color="primary"
						size="large"
						href="/form"
					>
						Create Quiz
					</Button>
				</div>
			</div>
			<img src="https://cdn.riddle.com/website/assets/homepage/img/illo-quiz-types.png" className="banner" alt="quiz app" />
		</div>
	);
};

export default Home;
