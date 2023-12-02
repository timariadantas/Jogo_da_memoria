const input = document.querySelector('.login_input');   
const button = document.querySelector('.login_button');  
const form = document.querySelector('.login_form'); 

const validaInput = ({ target }) => {                    
 if (target.value.length > 2){                            
    button.removeAttribute('disabled');
    return;                                    
}                        
    button.setAttribute('disabled', '');   

}                                          



function enviarSubmit (event){
    event.preventDefault();               /*é um metodo uma funcao ,para bloquear o comportamento padrao do formu*/                                     /** ele envia os dados depois recarrega */
    localStorage.setItem('player',input.value);   
    window.location = 'pages/game.html';        /*setItem(salva informaçoes) ele espera 2 para. chave e valor */
}


input.addEventListener('input', validaInput);  
form.addEventListener('submit', enviarSubmit);