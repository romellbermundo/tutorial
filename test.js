import rl from "readline-sync";
let x = 0;
let y = 0;
const playerDirection = rl.question(
  `Where would you like to go? north \[N\], south \[S\], east \[E\], or west \[W\].      Player selected: `
);
if (playerDirection === "north" || playerDirection === "n") {
  y++;
  console.log(`Moving North. Your location is currently at (${x},${y})`);
//   return y;
}
