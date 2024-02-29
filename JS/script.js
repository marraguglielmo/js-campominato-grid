const gridContainer = document.querySelector('.container');
const btn = document.querySelector('button');

reset();


for(let i = 1; i <= 100; i++){
    const square = getBox(i);
    gridContainer.append(square)
}


// FUNCTIONS ///////////

function getBox(numero){
    const sq = document.createElement('div');
    sq.className = 'box';
    sq.innerHTML = numero;

    sq.addEventListener('click', function(){
        sq.classList.toggle('clicked');
    })
    
    return sq;
}


function reset(){
    gridContainer.innerHTML = '';
}