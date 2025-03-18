// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const inputAmigo = document.getElementById('amigo');
const btnAgregarAmigo = document.querySelector('.button-add');
const btnSortearAmigo = document.querySelector('.button-draw');
const amigosContainer  = document.getElementById('listaAmigos');
const resultadoContainer  = document.getElementById('resultado');
let amigos = [];

const agregarAmigo = () => {

  const nombreAmigo = inputAmigo.value.trim();

  if(!nombreAmigo) {
    alert('Por favor, ingrese un nombre válido.');
    resetInput();
    return;
  }

  if(amigos.includes(nombreAmigo)) {
    alert('El amigo ya se encuentra en la lista.');
    resetInput();
    return;
  }

  amigos.push(nombreAmigo);

  actualizarAmigo();

  resetInput();

}

const actualizarAmigo = () =>{

  amigosContainer.innerHTML = ""; 

  for (let amigo of amigos) {
    const li = document.createElement('li');
    li.textContent = amigo;
    amigosContainer.appendChild(li);
  }
}

const sortearAmigo = () => {

  if (amigos.length === 0) {
    alert('La lista de amigos está vacía.');
    return;
  }

  const indiceRandom = Math.floor(Math.random() * amigos.length);
  const amigoRandom = amigos[indiceRandom];

  resultadoContainer.innerHTML = '';
  const li = document.createElement('li');
  li.textContent = `El amigo secreto sorteado es: ${amigoRandom}`;
  resultadoContainer.appendChild(li);

  amigosContainer.replaceChildren();
  amigos = [];
}

const resetInput = () => {
  inputAmigo.value = '';
  inputAmigo.focus();
}


btnAgregarAmigo.addEventListener('click', agregarAmigo);
btnSortearAmigo.addEventListener('click', sortearAmigo );