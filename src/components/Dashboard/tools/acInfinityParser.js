
function acInfinityParser(dataFile) {
	const tempData = Object.assign({}, dataFile.data);
	const labels = ["timeStamp", "temperature", "humidity", "vpd"];

	return Object.keys(tempData).reduce((accu,ind) => {
		let packet = tempData[ind].slice(0,4);
		packet = packet.map((curVal,i) => packet[i] = { [labels[i]]: curVal });

		if (!accu[ind]) { accu[ind] = packet };

		return accu;
	},{});
};

export default acInfinityParser;