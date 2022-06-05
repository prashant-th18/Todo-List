import React, { useState } from "react";
// import styled from "styled-components";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
// 	margin: 0.5rem 0;

// 	& label {
// 		font-weight: bold;
// 		display: block;
// 		margin-bottom: 0.5rem;
// 		color: ${(props) => (props.invalid ? "red" : "black")};
// 	}
// 	// props is present by-default

// 	& input {
// 		display: block;
// 		width: 100%;
// 		border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
// 		background: ${(props) => (props.invalid ? "salmon" : "transparent")};
// 		font: inherit;
// 		line-height: 1.5rem;
// 		padding: 0 0.25rem;
// 	}

// 	& input:focus {
// 		outline: none;
// 		background: #fad0ec;
// 		border-color: #8b005d;
// 	}
// `;

const CourseInput = (props) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [isValid, setIsValid] = useState(true); // checks for valid input

	const goalInputChangeHandler = (event) => {
		if (event.target.value.trim().length > 0) {
			setIsValid(true);
		}
		setEnteredValue(event.target.value);
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		if (enteredValue.trim().length === 0) {
			setIsValid(false);
			return;
		}
		props.onAddGoal(enteredValue);
		setEnteredValue("");
	};

	return (
		<form onSubmit={formSubmitHandler}>
			{/* <div className={`form-control ${isValid ? "" : "invalid"}`}> */}
			{/* <label style={{ color: isValid ? "black" : "red" }}>Course Goal</label> */}
			{/* <FormControl className={!isValid && "invalid"}> Now styled component mai apni toh styling hai hi, saath ke saath, agr isValid false hua toh invalid class bhi paas ho jaaegi */}
			{/* Now, I have passed invalid as a property here */}
			{/* <FormControl invalid={!isValid}>
				<label>Course Goal</label>
				<input
					// style={{
					// 	borderColor: isValid ? "black" : "red",
					// 	background: isValid ? "transparent" : "salmon",
					// }}
					type="text"
					value={enteredValue}
					onChange={goalInputChangeHandler}
				/>
			</FormControl> */}
			<div
				className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
			>
				<label>Course Goal</label>
				<input
					// style={{
					// 	borderColor: isValid ? "black" : "red",
					// 	background: isValid ? "transparent" : "salmon",
					// }}
					type="text"
					value={enteredValue}
					onChange={goalInputChangeHandler}
				/>
			</div>
			{/* </div> */}
			<Button type="submit">Add Goal</Button>
		</form>
	);
};

export default CourseInput;
