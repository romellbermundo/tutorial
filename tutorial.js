import rl from "readline-sync";
let x = 0;
let y = 0;

let enemyInfo = [
  { name: "Rattata", enemyAttack: 7, enemyLife: 100, enemyLivingStatus: 1 },
  { name: "Rattata", enemyAttack: 7, enemyLife: 100, enemyLivingStatus: 1 },
];
let playerAttack = 27;
while (true) {
  enemyLocations();
  const playerAction = rl.question(undefined, {
    hideEchoBack: true,
    mask: "",
  });

  if (playerAction === "w") {
    north();
  } else if (playerAction === "s") {
    south();
  } else if (playerAction === "d") {
    east();
  } else if (playerAction === "a") {
    west();
  } else if (playerAction === "b") {
    break;
  }
}

function enemyEncounter(enemyNum) {
  console.log(`A wild ${enemyInfo[enemyNum].name} has appeared.`);
  while (enemyInfo[enemyNum].enemyLife > 0) {
    const playerActionBattle = rl.question(undefined, {
      hideEchoBack: true,
      mask: "",
    });

    if (playerActionBattle === "k") {
      // player attacks
      enemyInfo[enemyNum].enemyLife =
        enemyInfo[enemyNum].enemyLife - playerAttack;
      console.log(
        `You have attacked ${enemyInfo[enemyNum].name} for ${playerAttack} damage. ${enemyInfo[enemyNum].name} life: ${enemyInfo[enemyNum].enemyLife}`
      );
    }
    if (playerActionBattle === "r" || playerActionBattle === "b") {
      //player runs
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

function enemyLocations() {
  if (x == 1 && y == 1 && enemyInfo[0].enemyLivingStatus == 1) {
    let enemyNum = 0;
    enemyEncounter(enemyNum);
  }
}

function north() {
  y++;
  if (y == 2) {
    y--;
    console.log(`You can't move there. You are back at (${x},${y})\n`);
  } else {
    console.log(`Moving West. Your location is currently at (${x},${y})\n`);
  }
}
function south() {
  y--;
  if (y == -2) {
    y++;
    console.log(`You can't move there. You are back at (${x},${y})\n`);
  } else {
    console.log(`Moving West. Your location is currently at (${x},${y})\n`);
  }
}
function east() {
  x++;
  if (x == 4 || (x == 1 && y == 1)) {
    x--;
    console.log(`You can't move there. You are back at (${x},${y})\n`);
  } else {
    console.log(`Moving West. Your location is currently at (${x},${y})\n`);
  }
}
function west() {
  x--;
  if (x == -3) {
    x++;
    console.log(`You can't move there. You are back at (${x},${y})\n`);
  } else {
    console.log(`Moving West. Your location is currently at (${x},${y})\n`);
  }
}
