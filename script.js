//ES1. Crea una funziona che calcoli e ritorni la somma di due numeri interi. Se i due valori sono uguali, ritorna il triplo della somma.
/*function es1(x, y){
    if(x==y){
        return (x+y) * 3;
    } else {
        return x+y
    }
}*/
// function es1(x, y) {
//     if(x==y){
//         return (x+y) * 3
//     }
//     return x+y
// }
// function es1(x, y) {
//     let res = x+y;
//     if(x==y){
//         res *= 3
//     }
//     return res
// }

//ES2. Crea una funzione che controlli due numeri interi. Ritorna `true` se uno dei due è 50 o se la somma dei due è 50.
/*function es2(x, y){
    if(x==50 || y==50 || (x+y)==50) {
        return true
    }
    return false
}*/

//altri esempi
//Posso assegnare dei valori di deafult ai parametri che verranno usati in caso il parametro non dovesse essere specificato
//NB: per usare il valore di deafult il parametro deve essere omesso, se però è omesso non possono esserci altri parametri dopo (o verrebbero scambiati per quello di default) -> Il parametro default deve essere l'ultimo e se ce ne sono di più vanno in ordine di come possono essere omessi
/*function testDefault(a, b, c=20) {
    console.log("A", a);
    console.log("B", b);
    console.log("C", c);
}*/
// testDefault(1, 2, 3) -> a:1 b:2 c:3
// testDefault(1, 2) -> a:1 b:2 c:20
// testDefault(1, 3) -> a:1 b:3 c:20 -- non posso avere c esplicito e b deafult

// function anyDefault(a, b, c) {
//     if(a == null) a = 10
//     if(b == null) b = 20
//     if(c == null) c = 30
// }
// anyDefault(null, 3, null)

// function omettoDefault(a, b, c) {
//     if(!a) a = 10
//     if(!b) b = 20
//     if(!c) c = 30
//     console.log(a, b, c);
// }
// omettoDefault(false, "", 0)
/*function valoriDeafult(obj){
    if(obj.a == undefined) obj.a = 10
    if(obj.b == undefined) obj.b = 20
    if(obj.c == undefined) obj.c = 30
    console.log("A", obj.a);
    console.log("B", obj.b);
    console.log("C", obj.c);
}
valoriDeafult({a: false, b: 0})*/



// console.log(es2(30, 20));
// console.log(es2(40));


//ES3. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata.
/*
function es3(s, p){
    return s.substr(0, p) + s.substr(p+1)
}*/
// function es3(s, p){
//     let arr = s.split("");
//     let prima = arr.splice(0, p)
//     let dopo = arr.splice(1)
//     let nuovoArr = prima.concat(dopo)
//     return nuovoArr.toString()
// }

//ES4. Crea una funzione che ritorni il valore più alto tra tre numeri interi.
/*function es4(x, y, z) {
    if(x > y) {
        if(x > z) return x
    } else {
        if(y > z) return y
    }
    return z
}

console.log(es4(70,88,20));*/

//ES5. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna `true` se rispecchiano queste condizioni, altrimenti ritorna `false`.
/*
function es5(x,y){

    if (x>39 && x<61 || x>69 && x<101){

       if (y>39 && y<61 || y>69 && y<101) return true
    }
        return false

}

console.log(es5(80,0));*/

//ES6. Crea una funzione che crei e ritorni una nuova stringa formata ripetendo un numero dato di volte una stringa data. 
//Sia la stringa che il numero devono essere passate come parametri.
/*
function ese6(x,y){

        let fistEement = document.createElement("p");
        let textfirst = document.createTextNode(x);
        fistEement.appendChild(textfirst)
        for(var i=0; i<y;i++){
            
            console.log(fistEement)
        }
}

let x="ciao sono la nuova stringa"
let y = 6;
*/

//ES7. Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con “Los” o “New”, altrimenti ritorni `false`.

//ES8. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array con tre elementi. L’array deve essere passato come parametro.
/*Dato un array lineare costituito di dati semplici, reduce() accetta una funzione di callback che ci permette di sommare tutti i valori contenuti nell'array 
riducendoli ad un unico valore. Infatti viene restituito un valore e non un array./*let total = arr.reduce((previous, next) => {
return previous + next;});    
    console.log(total);*/
/*function es8 (x,y,z){
    let arr = [x,y,z]
    var sum = 0;
    
    for (var i= 0; i < arr.length;i++){
        sum+=arr[i]
    }
    return sum;
    // seconda opzione è usare reduce()
    //let total = arr.reduce((previous, next) => {
    //  return previous + next;
    // });
    
    //console.log(total);
}
let x=5;
let y = 9;
let z = 30;*/

//ES9. Crea una funzione che controlli se un array di due elementi contiene il numero 1 o il numero 3. Se li contiene, ritorna `true`, altrimenti ritorna `false`.
/*
function es9(){
    let arr = [1,6]
    if (arr.includes(1||3)){
        return true;
    }
        return false;
     
}*/

//ES10:10. Crea una funzion che controlli che un array di due elementi NON contenga i numeri 1 o 3. Se NON li contiene, ritorna `true`, altrimenti ritorna `false`.
/*
function es10(){
    let arr = [1,3]
    if (!arr.includes(1||3)){
        return true;
    }
        return false;
     
}*/

//ES11. Crea una funzione per trovare la stringa più lunga in un array di stringhe. Passa l’array come parametro e tritorna la strtinga più lunga.
/*
function es11(){
    var arr = ["cioa", "ciao questo è il corso epicode", "ciao bacci sofia", "ciao marco"]
   let parolaPiuLunga = arr.sort(function(a, b) {return  b.length - a.length;
  }); 
  return parolaPiuLunga[0];
 

}*/

/*Con la funzione passata all’algoritmo sort realizziamo un ordinamento in base alla lunghezza
 decrescente di ciascuna parola. Quindi per ottenere la parola più lunga basterà semplicemente 
 stampare il primo elemento.*/


 /*ES12. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro. 
Angolo acuto: meno di 90° ⇒ ritorna “acuto”
Angolo ottuso: tra i 90° e i 180° gradi ⇒ ritorna “ottuso”
Angolo retto: 90° ⇒ ritorna “retto”
Angolo piatto: 180° ⇒ ritorna “piatto”*/





//ES13. Crea una funzione che trovi e ritorni **l’indice** di del numero più alto in un array passato come parametro.
 /**/
/*function es13(arr){
    
    let inputs = arr.indexOf( Math.max(...arr))
    console.log(inputs)
	
    return inputs ;
    
}*/

/*function es13(arr) {
    
    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}

let  arr1 = [22,56,7,89,9];
console.log(es13(arr1));*/




//ES14. Crea una funzione per trovare e ritornare il numero PARI più alto in un array di numeri passato come parametro.
/*
function numeri(a){
 let numpari=0;
   for (var i=0; i<a.length;i++){
    
           if(a[i] % 2==0 ){
                numpari++;
                 
            }
    }
    return numpari;
   let numPari = arr.filter(item => item % 2 === 0)
    let maxNumPari = Math.max(...numPari)
    return maxNumPari;
}
let  arr1 = [22,56,7,89,9,10,12];
console.log(numeri(arr1));*/

//ES15.Crea una funzione per controllare che due numeri (passati come parametri) siano uno positivo e uno negativo.
// Ritorna `true` se la condizione è applicata, `false` se non lo è.
/*
function es15(x,y){
    if (typeof(x)=="number" && typeof(y)=="number"){
        if (x>0 && y<0 ){
            return true;
        }else{
           return false;
        }
    }
}


console.log(es15(20,-20))*/
/*
15. 
16. Crea una funzione per creare e ritornare una nuova stringa che abbia i primi tre caratteri in minuscolo e gli altri in maiuscolo. Se la stringa è più corta di tre caratteri, tutta la stringa deve essere in maiuscolo. La stringa originale deve essere passata come parametro.
17. Crea una funzione che calcoli la somma di due numeri passati come parametri. Se la loro somma è compresa tra 50 e 80, ritorna `65`, altrimenti ritorna `80`.
18. Crea una funzione per convertire un numero (passato come parametro) in una stringa basandoti su questi criteri: 
Il numero è divisibile per 3 ⇒ ritorna “Diego”
Il numero è divisibile per 5 ⇒ ritorna “Riccardo”
Il numero è divisibile per 7 ⇒ ritorna “Stefano”
Se il numero non ha 3, 5 o 7 come divisore, ritorna il numero originale.
⚠️ Se il numero è divisibile per più di una di queste opzioni, ritorna l’unione delle due stringhe. Es. 15 è divisibile per 3 e per 5, quindi il valore ritornato sarebbe “DiegoRiccardo”.
19. Crea una funzione che crei un acronimo a partire da una frase. Es. “Fabbrica Italiana Automobili Torino” deve ritornare “FIAT”.*/