function acInfinityParser(dataFile) {
	const tempData = Object.assign({}, dataFile.data);
	const labels = ["timeStamp", "temperature", "humidity", "vpd"];

	Object.keys(tempData).map((i,val) => tempData[i] = tempData[i].slice(0,4));

	return Object.keys(tempData).reduce((accu,ind) => {
		let packet = tempData[ind];
		tempData[ind] = packet.map((curVal,i) => packet[i] = { [labels[i]]:curVal });

		if (!accu[ind]) { accu[ind] = tempData[ind] };
		
		return accu;
	},{});
};

export default acInfinityParser;