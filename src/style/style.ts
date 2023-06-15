import styled from "styled-components"

export const Container = styled.div`
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Gill Sans Extrabold", sans-serif;
`

export const Header = styled.h1<{ size? : number}>`
	margin: 0;
	padding: 0;
	color: #161616;
	text-align: center;
	font-size: ${props => props.size ? props.size : 12}rem;
	font-family: Monospace;
`

export const linkStyle = {
	textDecoration: "none",
	color : "black"
}
