const os = require("os");
const process = require('process');
const express = require("express");
const router = express.Router();


const systemInfo = () => {
	const SystemDetails = {};
	SystemDetails.hostName = os.hostname();
	SystemDetails.arch = os.arch();
	SystemDetails.freeMem = os.freemem() / (1024 * 1024);
	SystemDetails.model = os.cpus()[0].model;
	SystemDetails.core = os.cpus().length;
	SystemDetails.totalMem = os.totalmem() / (1024 * 1024);
	SystemDetails.osType = os.type();
	SystemDetails.upTime = os.uptime() / 60;
	SystemDetails.osVersion = os.version();
	SystemDetails.ProcessId = process.pid
	return SystemDetails;
};

router.get("/details", (req, res, next) => {
	const info = systemInfo();
	res.send(info);
});

module.exports = router;
