import React from 'react';
import Styled from "styled-components";

const InfoDiv = Styled.div`
	padding:0.7rem;	
	h3{
		text-align:center;
		font-family: cursive;
	}
	h4{
		text-align:center;
		font-family: sans-serif;
	}
`;

const CustomCard = Styled.div`
	display:flex;
	justify-content:space-evenly;
	margin:3rem 2rem;
	font: -webkit-small-control;
`

const Flex = Styled.div`
	display:flex;
	justify-content:space-between;
	align-item:center;
	font-size:0.9rem;
	color:#C5CBE3;
	.span{
		margin-left:1.6rem;
	}
`

function MiddleDetails({Info}){
	return(
		<CustomCard>
			<div className="section">
				<Flex>
					<p>UPTIME :</p><p className="span">{~~Info.upTime}</p>
				</Flex>
				<Flex>
					<p>ARCH :</p><p className="span">{Info.arch}</p>
				</Flex>
				<Flex>
					<p>CORE :</p><p className="span">{Info.core}</p>
				</Flex>
				<Flex>
					<p>PROCESS ID :</p><p className="span">{Info.ProcessId}</p>
				</Flex>
			</div>
			<div className="section">
				<Flex>
					<p>OS TYPE :</p><p className="span">{Info.osType}</p>
				</Flex>
				<Flex>
					<p>OS VERSION :</p><p className="span">{Info.osVersion}</p>
				</Flex>
				<Flex>
					<p>TOTAL MEM. :</p><p className="span">{~~Info.totalMem}{"  MB"}</p>
				</Flex>
				<Flex>
					<p>Free MEM. :</p><p className="span">{~~Info.freeMem}{"  MB"}</p>
				</Flex>
			</div>
		</CustomCard>
	)
}

function SystemInfo({Info}) {
	return (
		<InfoDiv>
			<h3>{Info.model}</h3>
			<h4>HOST NAME : {Info.hostName}</h4>
			<MiddleDetails {...{Info}}/>
		</InfoDiv>
	)
}

export default SystemInfo;