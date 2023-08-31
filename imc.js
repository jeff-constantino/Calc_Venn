function calcularValores() {
    let a1 = document.getElementById("txta1").value;
  
    let b1=document.getElementById("txtb1").value;
  
    let c1=document.getElementById("txtc1").value;
  
    let ab1=document.getElementById("txtab1").value;
  
    let bc1=document.getElementById("txtbc1").value;
  
    let ac1=document.getElementById("txtac1").value;
  
    let abc1=document.getElementById("txtabc1").value;
  
    let nmax1=document.getElementById("txtnmax1").value;
  
    let out1=document.getElementById("txtout1").value;

    let resultado;
    if (a1 === null||a1==="") {
      const vab1=(ab1-abc1); 
      const vbc1=(bc1-abc1);
      const vac1=(ac1-abc1);
      const vb1=(b1-vab1-vbc1-abc1);
      const vc1=(c1-vac1-vbc1-abc1);
      const vabc1=(abc1);
      const vnmax1=(nmax1);
      const vout1=(out1); 
      const va1=vnmax1-vab1-vbc1-vac1-vb1-vc1-vabc1;
      const AeB=(ab1);
      const BeC=(bc1);
      resultado = `o valor de A é:${va1} 
       o valor de B é:${vb1}
       o valor de C é:${vc1}
      o valor de AB é ${vab1}
      o valor de AC é ${vac1}
      o valor de BC é ${vbc1}
      A∩B:${AeB}
      B∩C :${BeC}
      A∩B∩C: ${vabc1}
      
      `;
       
      }

      
   
    document.getElementById("resposta1").innerHTML = resultado.replace(/\n/g, '<br>');
  }

  
  