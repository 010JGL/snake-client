const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  //allows to receive data from the server, and log it back to us
  conn.on('data', (messageFromServer) => {   // msg form server = argument of callback
    console.log('The server says :', messageFromServer);
  });
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });
  
  conn.write("Name: J4Y");
  return conn;
};
//conn.write("Move: up");

module.exports = {
  connect 
}