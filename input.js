const { connect } = require("./client");
const net = require("net");

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // event listener
  stdin.on("data", key => handleUserInput(key));
  
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    console.log('Move: up');
    connection.write('Move: up');
  }
  if (key === 'a') {
    console.log('Move: left');
    connection.write('Move: left');
  }
  if (key === 's') {
    console.log('Move: down');
    connection.write('Move: down');
  }
  if (key === 'd') {
    console.log('Move: right');
    connection.write('Move: right');
  }
  if (key === '1') {
    console.log('Say: Hello');
    connection.write('Say: Hello');
  }
  if (key === '2') {
    console.log('Say: eslinted!');
    connection.write('Say: eslinted!');
  }
  if (key === '3') {
    console.log('Say: Where exit?');
    connection.write('Say: Where exit?');
  }

};

module.exports = {
  setupInput
}