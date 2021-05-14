import React from 'react';
import Styled from "styled-components";

const InfoDiv = Styled.div`
	display:flex;
	justify-content:space-between;
	align-items:center;
	padding:0.7rem;	
	height:300px;
`;


const Flex = Styled.div`
	display:flex;
	flex-direction:column;
	font-size:0.9rem;
	color:#C5CBE3;
	p{
		font-size:1.4rem;
		color:#dcdcbb;
	}
`


function SystemInfo({Info}) {
	return (
		<InfoDiv>
			<Flex>
				<p>Active</p>
				<p>Recovered</p>
				<p>Death</p>
			</Flex>
			<Flex>
				<p>{Info?.new_active}</p>
				<p>{Info?.new_cured}</p>
				<p>{Info?.new_death}</p>
			</Flex>
		</InfoDiv>
	)
}

export default SystemInfo;