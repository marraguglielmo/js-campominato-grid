const gridContainer = document.querySelector('.container');
const btn = document.querySelector('button');
const startTxt = document.querySelector('.start-txt');
const cellSelectedTxt = document.querySelector('.cell-selected');

btn.addEventListener('click', start);


// FUNCTIONS ///////////

function start(){
    startTxt.classList.add('hide');
    gridContainer.classList.remove('hide');
    cellSelectedTxt.classList.remove('hide');

    reset();

    for(let i = 1; i <= 100; i++){
        const square = getBox(i);
        gridContainer.append(square);
    }
}

function getBox(numero){
    const sq = document.createElement('div');
    sq.className = 'box';
    sq.innerHTML = numero;

    sq.addEventListener('click', function(){
        sq.classList.toggle('clicked');
        console.log(this.innerHTML);
        cellSelectedTxt.innerHTML = `<p> Cella selezionata: <strong>${this.innerHTML}</strong> </p>`;
    })
    
    return sq;
}


function reset(){
    gridContainer.innerHTML = '';
}