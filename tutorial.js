import rl from 'readline-sync';
let x = 0
let y = 0
let i=1
let enemy1 = 1
while (true) {
    if (x==1&&y==1&&enemy1==1){
        console.log(`A wild Caterpie has appeared`);
        enemy1--;
    }
    const playerAction = rl.question(undefined, {
        hideEchoBack: true,
        mask: ''
      });
    if (playerAction === 'north' || playerAction === 'w') {
    y++; console.log(`Moving North. Your location is currently at (${x},${y})\n`);
    } else if (playerAction === 'south' || playerAction === 's'){
    y--; console.log(`Moving South. Your location is currently at (${x},${y})\n`); 
    } else if (playerAction === 'east' || playerAction === 'd'){
    x++; console.log(`Moving East. Your location is currently at (${x},${y})\n`);    
    } else if (playerAction === 'west' || playerAction === 'a'){
        x--; 
        if (x==-2&&y==0){
        x++; console.log(`You can't move there. You are back at (${x},${y})\n`); 
        } else {
        console.log(`Moving West. Your location is currently at (${x},${y})\n`);
    }
}
}


