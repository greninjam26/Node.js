/* NPM
1. when starting a project we first need to run
  npm init
this will create a package.json
2. then we start to install packages
  we can do npm install [name]@[version number], or npm i [name]
    Version Number is optional
    without a name, npm will install all the packages list in the package.json file
  we can delete installed packages with:
    npm uninstall [name]
3. we also need to update packages
  npm outdated: this will check on wether there are any packages that is outdated, it will provide a table of outdated packages or nothing when there are none
  npm update [name]: this will udpate the package to the newest acceptable version, which might not be the latest depend on the restriction in the package.json file

Packages: there are 2 types
the reason that the node_modules folder have so many different folders is because the dependencies we installed need dependencies to work
  1. regular(simple) dependencies: our project need the code from the package to run properly
    npm install slugify
      help to make the url cleaner nad more readable
  2. developer dependencies: only needed to help with developement, the code of the project don't rely on these dependencies to run. Just addons to help with development
    npm install nodemon --save-dev
      nodemon will restart the node application when we make changes to the work directory
  3. global dependencies: these are the packages that install to work anyway on the machine. This way we don't need to install package like nodemon for every node.js project we create
    npm i nodemon --global
    ** for mac this might not work, do this:
      sudo npm i nodemon --global
      This will tell you to input the password to login to the macbook
        Note: it will not display the you have type anything, just type the password and hit return
Version Number:
  like 1.18.11, 1.4.5
  the 1st number is the Major Version: 
    this one can include changes that completely break the current code with huge changes, like different function name and parameters
  the 2nd number is the Minor Version: 
    there are new features added, but no breaking changes. all the additions are backward compatiable. Basicly, the new releases will not break the current code. 
  the 3rd number is the Patch Version: 
    every new version means more bugs are fixed
  There are also symboles in front of the version number:
    ^: we can update for new Minor and Patch Versions
    ~: we can update for new Patch Versions
    *(usually don't do this): we can update for all new versions
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

// HTTP and HTTPS: the later have extra ecryption
// steps to access a website
// 1. DNS covert the url with domain name to the real url of the website
// 2. TCP/IP socket connection
//    break about the responds, send them, then put them back together
// 3. client send HTTP/HTTPS requests
// 4. server send HTTP/HTTPS responds