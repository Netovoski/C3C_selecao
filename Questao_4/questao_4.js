//Substituir 900 pelo numero desejado
let i = 1;
while(i<900){
    if (i % 5 == 0 && i % 9 == 0) {
        console.log("LuidyMoura");
    } else if(i%9 == 0 ){
        console.log("Moura");
    } else if (i%5==0){
        console.log("Luidy");
    } else{
        console.log(i);
    }
    i+=1;
}