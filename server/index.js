const express = require("express");
const detailRoutes = require('./detailRoutes')
const cors = require('cors')
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors())
app.use("/api", detailRoutes);

app.use((req,res,next)=>{
	const error = new Error();
	error.status = 404;
	error.msg = "Not Found"
	next(error);
})

app.use((err,req,res,next)=>{
	res.status(err.status || 500);
	res.send({
		error:{
			status: err.status || 500,
			message: err.msg
		}
	})
})

app.listen(PORT,()=>{
	console.log(`Server running on Port ${PORT}`);
})