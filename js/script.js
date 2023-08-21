let calcular = function(){

    let nome = document.getElementById("nome").value

    let idade = parseFloat(document.getElementById("idade").value)

    let sexo = (document.getElementById("sexo").value)

    let altura = parseFloat(document.getElementById("altura").value)
  
    let peso = parseFloat(document.getElementById("peso").value)
  
    let IMC = peso/(altura*altura)
    
    saida = document.getElementById("resultado")
      
    if(IMC < 18.5){ 
      saida.innerHTML = `${nome} ${idade}  ${sexo}  ${altura}   Você esta abaixo do peso normal`
    }
    
    else{
      if( ( IMC >= 18.5) && (IMC < 24.9) ) {
        saida.innerHTML = `${nome} ${idade}  ${sexo}  ${altura}  Você esta no peso normal`
      }
        
      else{
        if( (IMC >= 25) && (IMC <  29.9) ) {
          saida.innerHTML =  `${nome} ${idade}  ${sexo}  ${altura}  Você esta abaixo do peso levemente`
        }
          
        else{
          if( (IMC >= 30 ) && (IMC < 34.9) ){
            saida.innerHTML =  `${nome} ${idade}  ${sexo}  ${altura}    Você esta com obesidade classe I`
          }
            
          else{
            if( (IMC >= 35) && (IMC < 39.9) ){
              saida.innerHTML =  `${nome} ${idade}  ${sexo}  ${altura}    Você esta com obesidade classe II`
            }
            else{
              if( (IMC >= 40) ){
                saida.innerHTML = `${nome} ${idade}  ${sexo}  ${altura}    Você esta com obesidade grau III`
            }
            }
          }
        }
      }    
    }
}