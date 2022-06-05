// import styled from "styled-components";

import React from "react";

// If I have to use CSS Modules, I have to import the css file a little different
import styles from "./Button.module.css";

// In styled, we have something known as button, and this `` are used to paas something.
// Tagged template literal
// const Button = styled.button`
// 	width: 100%;
// 	font: inherit;
// 	padding: 0.5rem 1.5rem;
// 	border: 1px solid #8b005d;
// 	color: white;
// 	background: #8b005d;
// 	box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
// 	cursor: pointer;

// 	// We will take use of media-query
// 	// What we want to do is that, in case of laptop, or big screen devices we want simple button width,
// 	// otherwise, we want full width button
// 	@media (min-width: 768px) {
// 		width: auto;
// 	}
// 	// What above line does is that, if our condition which is (min-width: 768px) is met, then our width will be set to "auto", otherwise, width will be 100%

// 	// Instead of .button:focus, we use -> &:focus
// 	&:focus {
// 		outline: none;
// 	}

// 	&:hover,
// 	.button:active {
// 		background: #ac0e77;
// 		border-color: #ac0e77;
// 		box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// 	}
// `;
// This above button will work exactly the same as the below button

/*
styled.button`` -> this will ultimately provide us the button tags with styling applied using the the data we have provided in between ``
*/

const Button = (props) => {
	return (
		<button type={props.type} className={styles.button} onClick={props.onClick}>
			{props.children}
		</button>
	);
};
// How the CSS Module is different from the scenario, when we just import CSS file?
// https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/

// If we are returning our styled component directly, then there's no need to write props.children or something like that

export default Button;
