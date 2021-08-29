/* Vi laver vores variabler */
let cpr = "231281-1685";
let dag = Number(cpr[0]);
let dag2 = Number(cpr[1]);
let maaned = ""; 
let aar = "";

//If or else statement. 
 if(cpr[0]=="0"){ // Tjek om det første cifre i CPR-numret er 0.
 dag = "ok";
 console.log("Det første tal er 0")   // Hvis det er 0.
 }else {
     dag = "ikke ok" // Hvis det ikke er 0. 
 }

 if(cpr[1] >= 1 && cpr[1] <9){ /* Tjek om det andet cifre i CPR-numret er over 1 og under 9 */
 dag2 = "ok";
 console.log("Det andet tal er mellem 1 og 9")   
 }else {
     dag2 = "ikke ok"
 }

 let dag1_2 = dag.concat(dag2); /* Vi slår to strings sammen, og tjekker om de to cifre er et gyldigt tal. */
 if(cpr[0&&1] >= 1 && cpr[0&&1] <=31){
    dag1_2 = "ok";
    console.log("Tallet er imellem 1-31")   
    }else {
        dag1_2 = "ikke ok"
    }

