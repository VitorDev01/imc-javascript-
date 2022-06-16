<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0">
    <title></title>
    <style> 
          *{
    
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          
          }
          body {
            background-image: linear-gradient(to bottom right, #ff5f93, #207bd8);
            
          }
          main{
            display: flex;
            height: 100vh;
            justify-content: center;
            align-items: center;
            
          
          }
          
          .container{
            display: flex;
            flex-direction: column;
            /*Efeito vidro*/
            box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
            border-radius: 5px;
            background-color: rgba(255, 255, 255, .15);
            backdrop-filter: blur(5px);
            width: 400px;
            height: 500px;
            align-items: center;
            justify-content: space-evenly;
            border-radius: 20px;
            
          }
          
          .title{
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 50px;
            font: bold 2.5rem serif;
            border-bottom: solid 5px rgba(255, 255, 255, .15);
            margin-bottom: 20px;
          }
          
          .input {
            display: flex;
            width: 300px;
            height: 50px;
            justify-content: space-between;
            align-items: center;
            
          }
          .input input {
            width: 200px;
            height: 50px;
            border-radius: 5px;
            border:none;
            outline: 0;
            font: bold 1.5rem serif;
            text-align: center;
            border-radius: 15px;
            font-family: arial;
            background-color: rgba(255, 255, 255, .15);
            color: #fff;
          }
          
          .input label {
            font: bold 1.5rem serif ;
            color: #fff;
          }
          
          button{
            width: 300px;
            height: 40px;
            font: bold 1.2rem serif;
            background: rgba(255, 255, 255, .15);
            color: #fff;
            outline: none;
            border-color: #fff;
            cursor: pointer;
            border-radius: 15px;
          }
          
          .result{
            display: flex;
            margin-top: 20px;
            align-items: center;
            width: 300px;
            height: 150px;
            border-radius: 5px;
            font: italic 1.5rem serif;
            background: rgba(255, 255, 255, .15);
            color: #fff;
            padding: 20px;
            box-sizing: border-box;
            user-select: none;
            border-radius: 25px;
          }
              
    </style>
  </head>
  <body>
    <main>
      <div class="container">

        <div class="title"> Calculadora - IMC </div>
        <div class="input">
            <label>Nome:</label>
            <input type="text" id='nome'>
        </div>
        <div class="input">
            <label>Altura:</label>
            <input type="number" id='altura'>
        </div>
        <div class="input">
            <label>Peso:</label>
            <input type="number" id='peso'>
        </div>
        <button id='calcular'>Calcular</button>

        <div class="result" id='resultado'></div>
      </div>
    </main>
   
    <script>
       
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
       
    </script>
  </body>
</html>
