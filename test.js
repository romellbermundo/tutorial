let stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding("utf8");
stdin.on("data", function (playerAction) {
  // ctrl-c ( end of text )
  console.log(`The key is ${playerAction}.`);
  if (playerAction === "\u0003") {
    process.exit();
  }
});
