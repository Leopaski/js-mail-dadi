const usernumber= Math.floor(Math.random()*6+1);
const computernumber= Math.floor(Math.random()*6+1);
if (computernumber>usernumber) {
  document.getElementById("end").innerHTML='hai perso!'
} else if (computernumber<usernumber) {
    document.getElementById("end").innerHTML= 'daje,hai vinto'
}else {
  document.getElementById("end").innerHTML= 'avete pareggiato'
}



const listaemail = [];
const email= prompt ('inserisci la tua email');
let foundemail = false;
for(let i=0; i<= listaemail.length -1; i++){
      listaemail[i]=== email
      foundemail=true;
}

  