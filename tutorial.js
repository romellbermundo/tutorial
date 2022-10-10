import rl from 'readline-sync';
let x = 0
let y = 0
for (let i = 0; i<5;i++) {
    const playerAction = rl.question()
    let previousDirection = ""    
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
function playerAtBoundary (){
    if (previousDirection === west){
    x++; console.log(`You can't go there. Your location is currently at (${x},${y})\n`);
    }
}


