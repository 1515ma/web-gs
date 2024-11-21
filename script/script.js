
const formulario = document.getElementById('meuFormulario');

formulario.addEventListener('submit', (event) => {
  
    event.preventDefault();

 
    alert('Formulário enviado com sucesso!');

   
});

let radio = document.querySelector('.manual-btn')
let cont = 1


setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
}