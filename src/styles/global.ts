import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
    --white: #fff;
    --yellow: #fec63e;
    --green: #31aa39;
    --red:#f64540;
    --black: #000;
}
a {
	text-decoration: none;
}

ol, ul {
	list-style: none;
}

* {
	margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
}

h1, h2, h3, h4, h5, h6, p, a, ul {
	font-size: 1em;
	font-weight: normal;
}

body {
	font-family: Arial, Helvetica, sans-serif;
}

p {
	font-family: Georgia, "Times New Roman", serif;
	font-size: 14px;
	line-height: 20px;
}

img {
	display: block;
	max-width: 100%;
}

.nao-aparece {
	visibility: hidden;
	position: absolute;
	height: 0px;
}

#form-sucesso {
	color: var(--green);
}

#form-erro {
	color: var(--red);
}

*, *:before, *:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.grid-1, .grid-2, .grid-3, .grid-4, .grid-5, .grid-6, .grid-7, .grid-8, .grid-9, .grid-10, .grid-11, .grid-12, .grid-13, .grid-14, .grid-15, .grid-16, .grid-1-3 {
	float: left;
	margin-left: 10px;
	margin-right: 10px;
}

.grid-1 	{width: 40px;}
.grid-2 	{width: 100px;}
.grid-3 	{width: 160px;}
.grid-4 	{width: 220px;}
.grid-5 	{width: 280px;}
.grid-6 	{width: 340px;}
.grid-7 	{width: 400px;}
.grid-8 	{width: 460px;}
.grid-9 	{width: 520px;}
.grid-10 	{width: 580px;}
.grid-11 	{width: 640px;}
.grid-12 	{width: 700px;}
.grid-13 	{width: 760px;}
.grid-14 	{width: 820px;}
.grid-15 	{width: 880px;}
.grid-16 	{width: 940px;}
.grid-1-3	{width: 300px;}

@media only screen and (min-width: 788px) and (max-width: 979px) {

.grid-1		{width: 28px;}
.grid-2		{width: 76px;}
.grid-3		{width: 124px;}
.grid-4		{width: 172px;}
.grid-5		{width: 220px;}
.grid-6		{width: 268px;}
.grid-7		{width: 316px;}
.grid-8		{width: 364px;}
.grid-9		{width: 412px;}
.grid-10	{width: 460px;}
.grid-11	{width: 508px;}
.grid-12	{width: 556px;}
.grid-13	{width: 604px;}
.grid-14	{width: 652px;}
.grid-15	{width: 700px;}
.grid-16	{width: 748px;}
.grid-1-3	{width: 236px;}

}

@media only screen and (max-width: 787px) {

.grid-1, .grid-2, .grid-3, .grid-4, .grid-5, .grid-6, .grid-7, .grid-8, .grid-9, .grid-10, .grid-11, .grid-12, .grid-13, .grid-14, .grid-15, .grid-16, .grid-1-3 {
	width: 300px;
	margin: 0 0 20px 0;
	float: none;
}

.call {
	padding-top: 10px;
}

}



`
