import rl from "readline-sync";
let x = 0;
let y = 0;
let i = 1;
let enemy = [1];
let enemy1 = [{ name: "Birdie", enemyAttack: 7, enemyLife: 100 }];
let playerAttack = 7;
while (true) {
  if (x == 1 && y == 1 && enemy[0] == 1) {
    console.log(`A wild Caterpie has appeared.`);
    while (enemy1[0].enemyLife > 0) {
      const playerActionBattle = rl.question(undefined, {
        hideEchoBack: true,
        mask: "",
      });

      if (playerActionBattle === "attack" || playerActionBattle === "k") {
        enemy1[0].enemyLife = enemy1[0].enemyLife - playerAttack;
        console.log(
          `You have attacked Caterpie for ${enemy1[0].enemyAttack} damage. Caterpie life: ${enemy1[0].enemyLife}`
        );
      }
      if (playerActionBattle === "run" || playerActionBattle === "r") {
          console.log(`You have chosen to run away from Caterpie.`);
          break
      }
      if (enemy1[0].enemyLife <= 0) {
        enemy[0] = enemy[0] - 1;
        console.log("You have killed a CaterPie.");
      }
    }
  }
  const playerAction = rl.question(undefined, {
    hideEchoBack: true,
    mask: "",
  });
  if (playerAction === "north" || playerAction === "w") {
    y++;
    console.log(`Moving North. Your location is currently at (${x},${y})\n`);
  } else if (playerAction === "south" || playerAction === "s") {
    y--;
    console.log(`Moving South. Your location is currently at (${x},${y})\n`);
  } else if (playerAction === "east" || playerAction === "d") {
    x++;
    console.log(`Moving East. Your location is currently at (${x},${y})\n`);
  } else if (playerAction === "west" || playerAction === "a") {
    x--;
    if (x == -2 && y == 0) {
      x++;
      console.log(`You can't move there. You are back at (${x},${y})\n`);
    } else {
      console.log(`Moving West. Your location is currently at (${x},${y})\n`);
    }
  } else if (playerAction === "b") {
    break;
  }
}
