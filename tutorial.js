import rl from "readline-sync";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

await welcome();
let x = 0;
let y = 0;
let enemyInfo = [
  {
    name: "Pa Gong",
    enemyAttack: 7,
    enemyLife: 100,
    enemyLivingStatus: 1,
    relic: 1,
  },
  {
    name: "Lobo",
    enemyAttack: 7,
    enemyLife: 100,
    enemyLivingStatus: 1,
    relic: 1,
  },
  {
    name: "Oso",
    enemyAttack: 7,
    enemyLife: 100,
    enemyLivingStatus: 1,
    relic: 1,
  },
  {
    name: "Tutorial Dungeon Master",
    enemyAttack: 7,
    enemyLife: 100,
    enemyLivingStatus: 1,
  },
];
let playerInfo = [
  { name: "Romell", playerAttack: 27, playerLife: 100, playerMaxLife: 100 },
];

while (true) {
  enemyLocations();
  healingWell();
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
  }
  if (playerAction === "b") {
    console.log("\u2694\u2694\u2694   Game Over   \u2694\u2694\u2694");
    break;
  }
}
async function welcome() {
  console.log(`
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█▄▄░▄▄█░██░█▄░▄█▀▄▄▀█░▄▄▀██▄██░▄▄▀█░████▀▀███▄▄░▄▄█░████░▄▄████░▄▄░█░▄▄▀█░▄▀▄░█░▄▄
███░███░██░██░██░██░█░▀▀▄██░▄█░▀▀░█░████▀▀█████░███░▄▄░█░▄▄████░█▀▀█░▀▀░█░█▄█░█░▄▄
███░████▄▄▄██▄███▄▄██▄█▄▄█▄▄▄█▄██▄█▄▄██████████░███▄██▄█▄▄▄████░▀▀▄█▄██▄█▄███▄█▄▄▄
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
`); // texteditor.com
  await sleep(2000);
  console.log(`Welcome to Tutorial Area.`);
  await sleep(3000);
  console.log(
    `Oracle: You have been summoned to protect the Kingdom of Lumina but have to prove youself worthy of the power of Hero.`
  );
  console.log(
    `  Instructions: To move, hit [w] North, [s] South, [a] West, or [d] East then press Enter.`
  );
  console.log(
    `  The other things you must learn as you go. For it is by fire that gold is made.`
  );
  await sleep(5);
  console.log(`  Go forth Hero. And may the Great Spirit be with you.`);
  await sleep(3);
  console.log(
    `\nYou open your eyes and now you are transported to the tutorial area. Your current position is (0,0).`
  );
}
function healingWell() {
  if (x == 0 && y == -1) {
    playerInfo[0].playerLife = 100;
    console.log(
      `You have reached the healing well. The elves looks favourably to you and they have decided to heal your wounds.\nYour health is fully recovered. Health points: ${playerInfo[0].playerLife}`
    );
  }
}
function enemyEncounter(enemyNum) {
  console.log(
    `\u26A0\u26A0\u26A0  A wild ${enemyInfo[enemyNum].name} has appeared.  \u26A0\u26A0\u26A0  Prepare for Battle!!! ----- Attack [K], Run [R]`
  );
  while (enemyInfo[enemyNum].enemyLife > 0) {
    const playerActionBattle = rl.question(undefined, {
      hideEchoBack: true,
      mask: "",
    });

    if (playerActionBattle === "k") {
      // player attacks
      enemyInfo[enemyNum].enemyLife =
        enemyInfo[enemyNum].enemyLife - playerInfo[0].playerAttack;
      playerInfo[0].playerLife =
        playerInfo[0].playerLife - enemyInfo[enemyNum].enemyAttack;
      console.log(
        `You have attacked ${enemyInfo[enemyNum].name} for ${playerInfo[0].playerAttack} damage. ${enemyInfo[enemyNum].name}'s life: ${enemyInfo[enemyNum].enemyLife} health points\n
        ${enemyInfo[enemyNum].name} have attacked you for ${enemyInfo[enemyNum].enemyAttack} damage. ${playerInfo[0].name}'s life: ${playerInfo[0].playerLife} health points`
      );
    }
    if (playerActionBattle === "r" || playerActionBattle === "b") {
      //player runs
      console.log(
        `   You have chosen to run away from ${enemyInfo[enemyNum].name}.`
      );
      break;
    }
    if (enemyInfo[enemyNum].enemyLife <= 0) {
      enemyInfo[enemyNum].enemyLivingStatus =
        enemyInfo[enemyNum].enemyLivingStatus - 1;
      console.log(
        `\n\u2605\u2605\u2605  Victory! You have killed ${enemyInfo[enemyNum].name}.  \u2605\u2605\u2605`
      );
    }
  }
}
function finalBossEncounter() {
  let finalBoss = 3;
  console.log("Your fate is in your hands!!!");
  console.log(
    `\u26A0\u26A0\u26A0  ${enemyInfo[finalBoss].name} has appeared.  \u26A0\u26A0\u26A0  Prepare for the FINAL BATTLE!!! ----- Attack [K], Run [R]`
  );
  while (enemyInfo[3].enemyLife > 0) {
    const playerActionBattle = rl.question(undefined, {
      hideEchoBack: true,
      mask: "",
    });

    if (playerActionBattle === "k") {
      // player attacks
      enemyInfo[finalBoss].enemyLife =
        enemyInfo[finalBoss].enemyLife - playerInfo[0].playerAttack;
      playerInfo[0].playerLife =
        playerInfo[0].playerLife - enemyInfo[finalBoss].enemyAttack;
      console.log(
        `You have attacked ${enemyInfo[finalBoss].name} for ${playerInfo[0].playerAttack} damage. ${enemyInfo[finalBoss].name}'s life: ${enemyInfo[finalBoss].enemyLife} health points\n
        ${enemyInfo[finalBoss].name} have attacked you for ${enemyInfo[finalBoss].enemyAttack} damage. ${playerInfo[0].name}'s life: ${playerInfo[0].playerLife} health points`
      );
    }
    if (playerActionBattle === "r" || playerActionBattle === "b") {
      //player runs
      console.log(
        `   You have chosen to run away from ${enemyInfo[finalBoss].name}.`
      );
      break;
    }
    if (enemyInfo[finalBoss].enemyLife <= 0) {
      enemyInfo[finalBoss].enemyLivingStatus =
        enemyInfo[finalBoss].enemyLivingStatus - 1;
      console.log(
        `\n\u2605\u2605\u2605  Victory! You have killed ${enemyInfo[finalBoss].name}.  \u2605\u2605\u2605`
      );
      process.exit();
    }
  }
}
function enemyLocations() {
  if (x == 0 && y == 1 && enemyInfo[0].enemyLivingStatus == 1) {
    let enemyNum = 0;
    enemyEncounter(enemyNum);
  }
  if (x == -2 && y == 1 && enemyInfo[1].enemyLivingStatus == 1) {
    let enemyNum = 1;
    enemyEncounter(enemyNum);
  }
  if (x == -2 && y == -1 && enemyInfo[2].enemyLivingStatus == 1) {
    let enemyNum = 2;
    enemyEncounter(enemyNum);
  }
  if (x == 3 && y == 0 && enemyInfo[3].enemyLivingStatus == 1) {
    finalBossEncounter();
  }
}
function north() {
  y++;
  if (
    y == 2 ||
    (x == 1 && y == 1) ||
    (x == 2 && y == 1) ||
    (x == 3 && y == 1)
  ) {
    y--;
    console.log(
      `You are now moving north towards mountains. It is the home of the mighty and strong Canadians.\nYou chose to go back at (${x},${y})\n`
    );
  } else {
    console.log(`Moving North. Your location is currently at (${x},${y})\n`);
  }
}
function south() {
  y--;
  if (
    y == -2 ||
    (x == 1 && y == -1) ||
    (x == 2 && y == -1) ||
    (x == 3 && y == -1)
  ) {
    y++;
    console.log(
      `The river is calm but the local villagers whispers to you that it is deep. Proceeding means death.\nYou are back at (${x},${y})\n`
    );
  } else {
    console.log(`Moving South. Your location is currently at (${x},${y})\n`);
  }
}
function east() {
  x++;
  if (x == 4 || (x == 1 && y == 1) || (x == 1 && y == -1)) {
    x--;
    console.log(`You can't move there. You are back at (${x},${y})\n`);
  } else {
    console.log(`Moving East. Your location is currently at (${x},${y})\n`);
  }
}
function west() {
  x--;
  if (x == -3) {
    x++;
    console.log(
      `The forest stares at you. You feel darkness staring you back. There is no path here.\nYou are back at (${x},${y})\n`
    );
  } else {
    console.log(`Moving West. Your location is currently at (${x},${y})\n`);
  }
}
