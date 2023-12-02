const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player')
const timer = document.querySelector('.timer');

// 3 passo --  criar um array com nomes das imagens
const nomePersonagens = [
    'alessandra',
    'maria',
    'ester',
    'mayara',
    'sergio',
    'matheus',
    'michael',
    'william',
    'rai',
    'jhonatas',
    
];

// 2 passo -- criar elemento e card 
 const createElement = (tag, className) =>{
    const element = document.createElement(tag);
    element.className = className;
    return element;

}

// 6 passo
let firstCard = '';  
let secondCard = '';

const verificarFimJogo = () => {
    const desabilitarCard = document.querySelectorAll('.disabled-card');

    if (desabilitarCard.length === 20){
    clearInterval(this.loop);
    alert(`Parabéns, ${spanPlayer.innerHTML} , Você venceu o jogo ! Seu tempo foi de : ${timer.innerHTML}`);
    }   
}
 
// 7 passo
const checkCards = () => {
     const primeiroCard = firstCard.getAttribute('data-persona');
     const segundoCard = secondCard.getAttribute('data-persona');

     if (primeiroCard === segundoCard){
        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');
        firstCard = '';
        secondCard = '';

        verificarFimJogo ();


     }else{
        setTimeout(() => {
        firstCard.classList.remove('reveal-card');
        secondCard.classList.remove('reveal-card');

        firstCard = '';
        secondCard = '';
    },500)
    
     }

}

// 5 passo 

const revealCard = ({target}) => {
    if(target.parentNode.className.includes('reveal-card')){
        return;
    }

    if(firstCard == ''){
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    }else if( secondCard == ''){
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();

    }
    
}
// 1 passo -- criar element no html com js
const createCard = (personagem) => {

    const card = createElement('div', 'card');               
    const front = createElement('div', 'face front');               
    const back = createElement('div', 'face back');               
           
    front.style.backgroundImage = `url('../imagens/${personagem}.png')`; 

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);   // 5 passo
    card.setAttribute('data-persona', personagem);
    
    return card;

}
// 4 passo  criar uma funçao iniciar e carregar jogo que vai percorrer com a funcao forEach o array de nome 

const iniciarJogo = () => {

    const duplicaNomePersonagens= [ ... nomePersonagens, ...nomePersonagens];
    const shuffleArray= duplicaNomePersonagens.sort(() => Math.random() -0.5);

    duplicaNomePersonagens.forEach((personagem) => {

        const card = createCard(personagem);
        grid.appendChild(card);
    });
 
}

// 8 passo

const iniciarTimer = () => {

    this.loop = setInterval(()=>{
        const tempoAtual = Number(timer.innerHTML);  // pode colocar tambem +timer.innerHTML
        timer.innerHTML = tempoAtual + 1;
    }, 1000);

}

window.onload = () => {
    
    spanPlayer.innerHTML = localStorage.getItem('player');
    iniciarTimer();
    iniciarJogo();

}

