        const calcular = document.getElementById('calcular');
       
       
       function imc () {
       //value pega o valor do input tipo texto 
           const nome = document.getElementById('nome').value;
         
           const altura = document.getElementById('altura').value;
           
           const peso = document.getElementById('peso').value;
         
          const resultado = document.getElementById('resultado');
          
         //verificação 
         if (nome !== '' && altura !== '' && peso !== '') {
           
           const valorIMC = (peso / (altura * altura )).toFixed(1);
           //toFixed arredondar 1 casa decimal
           let clasificacao = '';
           
           if (valorIMC <18.5) {
             clasificacao = 'abaixo do peso.';
           }
           
           else if (valorIMC < 25) {
             clasificacao = 'com peso ideal.';
           }
           
           else if (valorIMC < 30) {
             clasificacao = 'levemente acima do peso.';
           }
           
           else if ( valorIMC < 35) {
             clasificacao = 'com obesidade grau 1.';
           }
           
           else if ( valorIMC < 40) {
             clasificacao = 'com obesidade grau 2.';
           }
            else {
              clasificacao = 'com obesidade grau 3 Alerta!';
            }
    
          //textContent para conteúdo dentro da div 
          resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${clasificacao}`;
          } 
          else {
            resultado.textContent = 'Preencha todos os campos!';
          }
         
       }
       
       calcular.addEventListener('click', imc);
       