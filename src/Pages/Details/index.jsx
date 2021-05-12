import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import SystemInfo from "./SystemInfo";
import Footer from "./Footer"

const Div = Styled.div`
	background-color:black;
	color:white;
	height:60vh;
	width:60%;
 	border-radius:5px;
`;

const FlexSection = Styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
	height:100vh;
	background-color:#1A1A1E
`

function Details() {
	const [systemInfo, setSystemInfo] = useState(null);
	useEffect(() => {
		function FetchDetails(){
			fetch("http://localhost:5000/api/details")
			.then((res) => res.json())
			.then((data) => setSystemInfo(data))
			.catch((err) => console.log(err.message));
		}
		FetchDetails();
	}, []);

	console.log(systemInfo);
	return (
		<FlexSection>
			<Div>
				{systemInfo && <SystemInfo Info={systemInfo}/>}
				<Footer/>
			</Div>
		</FlexSection>
	);
}

export default Details;
