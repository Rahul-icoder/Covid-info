import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import SystemInfo from "./SystemInfo";
import Footer from "./Footer";
import FetchData from "../FetchData";

const Div = Styled.div`
	background-color:black;
	color:white;
	height:400px;
	width:300px;
 	border-radius:5px;
 	.form-section{
 		display:flex;
 		justify-content:center;
 	}
`;


const Select = Styled.select`
	width:300px;
	padding:0.7rem;
	font-size:1rem;
	.option{
		width:280px;
		padding:0.7rem;
		font-size:0.9rem
	}
`

const FlexSection = Styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
	height:100vh;
	background-color:#1A1A1E;
	h2{
 		text-align:center;
 		color:tomato;
 	}
`
let BASE_URL = `https://www.mohfw.gov.in/data/datanew.json`
function Details() {
	const [data] = FetchData(BASE_URL);
	const [serialNo,setSerialNo] = useState("11111");
	const [covidData,setCovidData] = useState();
	useEffect(()=>{
		if(data){
			let filterData = data.filter(item=>item.sno===serialNo);
			setCovidData(filterData[0]);
		}
	},[serialNo,data])
	return (
		<FlexSection>
			<Div>
				<div className="form-section">
					<Select onChange={(e)=>setSerialNo(e.target.value)} value={serialNo} onmousewheel="return false">
						<option className="option" value="11111">All</option>
						{
							data?.map(state=> <option key={state.sno} className="option" value={state.sno}>{state.state_name}</option>)
						}
					</Select>
				</div>
				<h2>Covid-19 Tracker</h2>
				<SystemInfo Info={covidData}/>
				<Footer/>
			</Div>
		</FlexSection>
	);
}

export default Details;
