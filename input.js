// Stores the active TCP connection object.
let connection;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput('data', stdin);
  return stdin;
}

const handleUserInput = ("data", (data) => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
    else if (key === 'w') {
      connection.write("Move: up");
    }
    else if (key === 'a') {
      connection.write("Move: left");
    }
    else if (key === "s") {
      connection.write("Move: down");
    }
    else if (key === "d") {
      connection.write("Move: right");
    }
    else if (key === "1") {
      connection.write("Say: Hello there");
    }
    else if (key === "2") {
      connection.write("Say: General Kenobi!");
    }
    else if (key === "3") {
      connection.write("Say: SSSSSSSS");
    }
  })
});


module.exports = setupInput;