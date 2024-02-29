const gridContainer = document.querySelector('.container');
const btn = document.querySelector('button');

reset();


for(let i = 1; i <= 100; i++){
    gridContainer.append()

}


// FUNCTIONS ///////////
function reset(){
    gridContainer.innerHTML = '';
}

function box(){
    const sq = document.createElement('div');
    sq.className = 'box';
    console.log(sq);
}

box();