const fs = require('fs');
const archiver = require('archiver');

module.exports = function () { 
	return function (hook) { 
		console.log(__dirname);
		let output = fs.createWriteStream('uploads/example.zip');
		let archive = archiver('zip');

		archive.pipe(output);
		archive.append('first file', { name: 'itinerary.txt' });
		archive.finalize();
	};
};
