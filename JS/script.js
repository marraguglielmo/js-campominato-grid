const gridContainer = document.querySelector('.container');
const btn = document.querySelector('button');

reset();


for(let i = 1; i <= 100; i++){
    const square = getBox();
    console.log(square);
}


// FUNCTIONS ///////////

function getBox(){
    const sq = document.createElement('div');
    sq.className = 'box';

    return sq;
}


function reset(){
    gridContainer.innerHTML = '';
}