const btnMobile = document.getElementById('btn-mobile'); 
const nav = document.getElementById('nav');
function toggleMenu()
{
  nav.classList.toggle('active');//toogle = remova caso tenha a class, add se n tiver
}

btnMobile.addEventListener('click', toggleMenu);
//qunado clicar no li tirar a class active
const li = document.getElementById('menu');
li.addEventListener('click', sairmenu);

function sairmenu() // para quando houver um click fora do menu ele recue
{
    nav.classList.remove('active');
}
const btn = document.querySelector('.div-btn');// chamdno o elemento do hmtl
const darkmode = document.querySelector(':root');//chamdno o elemento do hmtl
btn.onclick = function()// quando houver um click no btn adicionara se tiver e removera se tiver a class active
{
    this.classList.toggle('active')
    darkmode.classList.toggle('active')    
}

let imgdomomento = 0 // temos 4 imagens porem elas serão contadas do 0 até o 3
let imgs = document.querySelectorAll('#slider img')// pegando os documentos do html
let maximodeimg = imgs.length //limitando um numero de o a 3 para as imagenw

function proximaImg()// fução para ir para a prxima imagem
{
  imgs[imgdomomento].classList.remove("selecionada")// removendo a class selecionada pois toda vez q retona precisa  estar sem ela para que não adicione uma class ja ativa

  imgdomomento++// somando mais 1 a cada vez q a imagem é passada 
   
  if (imgdomomento >= maximodeimg)// uma condição para o slider ficar em loop
  {
    imgdomomento = 0
  }
  imgs[imgdomomento].classList.add("selecionada")// adicionando a class selecionada para aparecer a imagem
}

function iniciar() // para iniciarmos a função de passar a images e faze-las ficarem com setinterval
{
  proximaImg()
  tempo = setInterval(proximaImg, 3000)
}

window.addEventListener("load", iniciar)// toda vez q a pagina carregar será executado a função