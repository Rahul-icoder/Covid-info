import React from 'react';
import Styled from 'styled-components';

const Foot = Styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
	height:30px;
	background-color:white;
	color:#1A1A1E;

`

function Footer() {
	return (
		<Foot>
			Created by Rahul
		</Foot>
	)
}

export default Footer