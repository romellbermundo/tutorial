import rl from "readline-sync";
let x = 0;
let y = 0;
let enemyLivingStatus = [1];
let enemyInfo = [
  { name: "Rattata", enemyAttack: 7, enemyLife: 100, enemyLivingStatus: 1,},
];
let playerAttack = 27;
while (true) {
  if (x == 1 && y == 1 && enemyInfo[0].enemyLivingStatus == 1) {
    let enemyNum = 0;
    console.log(`A wild ${enemyInfo[enemyNum].name} has appeared.`);
    while (enemyInfo[enemyNum].enemyLife > 0) {
      const playerActionBattle = rl.question(undefined, {
        hideEchoBack: true,
        mask: "",
      });

      if (playerActionBattle === "k") { // player attacks
        enemyInfo[enemyNum].enemyLife =
          enemyInfo[enemyNum].enemyLife - playerAttack;
        console.log(
          `You have attacked ${enemyInfo[enemyNum].name} for ${playerAttack} damage. ${enemyInfo[enemyNum].name} life: ${enemyInfo[enemyNum].enemyLife}`
        );
      }
      if (playerActionBattle === "r") { //player runs
        console.log(
          `You have chosen to run away from ${enemyInfo[enemyNum].name}.`
        );
        break;
      }
      if (enemyInfo[enemyNum].enemyLife <= 0) {
        enemyInfo[enemyNum].enemyLivingStatus =
          enemyInfo[enemyNum].enemyLivingStatus - 1;
        console.log(`You have killed a ${enemyInfo[enemyNum].name}.`);
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
