import {useState,useEffect} from "react";

const FetchData = (url) =>{
	const [data,setData] = useState(null);
	useEffect(()=>{
		if(url)
			fetch(url)
				.then((res) => res.json())
				.then((data) => setData(data))
				.catch((err) => console.log(err.message));
	},[url])
	return [data];
}

export default FetchData;