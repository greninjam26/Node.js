/* Commands
node: start the node envirment
  add the file name after will run the fileds
.exit, control+D: stop the envirment
[TAB]: list all the variable
  if we add things like "String." we can see all the available methods
_: this mean the previous result of the calculation
*/

// file system modules
const fs = require("fs");
// webserver
const http = require("http");
const url = require("url");

////////////////////////////////////////////////////
// Files
////////////////////////////////////////////////////

// Blocking
// read from files
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

// write to files
const textOut = `This is what we know about hte avocado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log("File written!");

// Non-Blocking
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
	if (err) return console.log("ERROR!!!");

	fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
		console.log(data2);
		fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
			console.log(data3);

			// writting
			fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", error => {
				console.log("Written");
			});
		});
		console.log("Reading Again...");
	});
	console.log("Still Reading...");
});
console.log("Reading...");
