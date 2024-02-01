const btCript = document.querySelector('.bt-cript');
const texto = document.querySelector('.input-texto');
const resultado = document.querySelector('.resultado');
const paragrafoInv = document.querySelector('.paragrafo-resultado');
const imgInv = document.querySelector('.img-resultado');
const btCopiar = document.querySelector('.bt-copiar');
const btDecod = document.querySelector('.bt-descript');
const tituloInv = document.querySelector('.titulo-resultado');
const copia = document.querySelector('.result-Copiar');
const btLimpar = document.querySelector('.bt-limpar');


btCript.addEventListener('click', function cript(){
    var palavra = texto.value;
     var resultadoCript = palavra.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai")
     .replace(/o/g,"ober").replace(/u/g,"ufat");
     resultado.innerHTML =  resultadoCript;
     tituloInv.classList.add('invisivel');
     paragrafoInv.classList.add('invisivel');
     imgInv.classList.add('invisivel');
     btCopiar.classList.remove('invisivel');
     btLimpar.classList.remove('invisivel');
     copia.innerHTML = '';
    })

    btDecod.addEventListener('click', function descript(){
        var palavra = texto.value;
         var resultadoCript = palavra.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a")
         .replace(/ober/g,"o").replace(/ufat/g,"u");
         resultado.innerHTML =  resultadoCript;
         tituloInv.classList.add('invisivel');
         paragrafoInv.classList.add('invisivel');
         imgInv.classList.add('invisivel');
         btCopiar.classList.remove('invisivel');
         btLimpar.classList.remove('invisivel');
         copia.innerHTML = '';
        })

        btCopiar.addEventListener('click', function copiar(){
           const copiarResultado = resultado.innerHTML;
           navigator.clipboard.writeText(copiarResultado);
           copia.innerHTML = 'texto copiado';
        }
        )
    btLimpar.addEventListener('click', function inputVazio(){
            texto.value = '';
            copia.innerHTML = '';
            resultado.innerHTML = '';
            tituloInv.classList.remove('invisivel');
            paragrafoInv.classList.remove('invisivel');
            imgInv.classList.remove('invisivel');
            btCopiar.classList.add('invisivel');
            btLimpar.classList.add('invisivel');
    })
        
    

/*A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat" */