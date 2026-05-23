/* NPM
1. when starting a project we first need to run
  npm init
this will create a package.json
2. then we start to install packages

Packages: there are 2 types(for installiation, we can do npm install, or npm i)
the reason that the node_modules folder have so many different folders is because the dependencies we installed need dependencies to work
  1. regular(simple) dependencies: our project need the code from the package to run properly
    npm install slugify
  2. developer dependencies: only needed to help with developement, the code of the project don't rely on these dependencies to run. Just addons to help with development
    npm install nodemon --save-dev
      nodemon will restart the node application when we make changes to the work directory
  3. global dependencies: these are the packages that install to work anyway on the machine. This way we don't need to install package like nodemon for every node.js project we create
    npm i nodemon --global
    ** for mac this might not work, do this:
      sudo npm i nodemon --global
      This will tell you to input the password to login to the macbook
        Note: it will not display the you have type anything, just type the password and hit return
 */

/* Commands
node(nodemon: with the package it autoupdate the application when the code changes): start the node envirment
  add the file name after will run the fileds
.exit, control+D: stop the envirment
[TAB]: list all the variable
  if we add things like "String." we can see all the available methods
_: this mean the previous result of the calculation
*/

// IN NODE.JS, each individual file is treated as a module

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
