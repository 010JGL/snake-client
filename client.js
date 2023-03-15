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
  conn.on('data', (messageFromServer) => {
    console.log('The server says :', messageFromServer);
  });

  return conn;
};


module.exports = {
  connect 
}