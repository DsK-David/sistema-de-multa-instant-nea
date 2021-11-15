function verificar(){
        var vel=document.getElementById("vel")
        var resu=document.getElementById("resultado")
        var agora=new Date()
        var hora=agora.getHours("")
        if(vel.value > 60){
                resu.innerHTML="Você acabou de ser multado por ecesso de velocidade ⛔"
        }
        if(vel.value <= 60){
          resu.innerHTML=" andou no limite de velocidade use sempre o sinto de segurança"
        }
        if(vel.value==""){
        				resu.innerHTML="verifica os dados"
        }
        
        if(hora > 22){
              resu.innerHTML="não multamos a noite so a polícia regional"  
        }
        
}
