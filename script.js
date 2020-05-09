var arrayCarte = [];

function toucheEntree (){
    if(event.keyCode == 13){
        pushArray();
        
    }
}

function afficherNombreJoueur(){
    document.getElementById("accueil").style.display = "none";
    document.getElementById("stats").style.display ="block";    
}

function constructeurLi(){
    for (var i=1 ; i<105 ; i++){
        const li = document.createElement("li");
        li.textContent = i;
        li.className="liListeVert";
        document.getElementById("listeCarte").appendChild(li);
    }
}

function pushArray(){
    elementLi = document.getElementById("listeCarte").getElementsByTagName("li");
    var numeroPush = document.getElementById("cartePlay").value;
    var numeroPushNumber = parseInt(numeroPush);
    if (arrayCarte.indexOf(numeroPushNumber) === -1 && numeroPushNumber<105 && numeroPushNumber > 0){
        arrayCarte.push(numeroPushNumber);
    }
    console.log(arrayCarte);
    
    for (var i=1 ; i<105 ; i++){
        if(arrayCarte.indexOf(i) !== -1){
            elementLi[i-1].className = "liListeRouge";
        }   
    }
    tranche1();
    tranche2();
    tranche3();
    tranche4();
    tranche5();
    tranche6();
    tranche7();
    tranche8();
    tranche9();
    tranche10();
    tranche11();
    carteRestante();
    document.getElementById("cartePlay").value=null;
}

function tranche1(){
//    supprimer span précédent
    var supprSpan = document.getElementById("li1").getElementsByTagName("span");
    while(supprSpan.length > 0){
        supprSpan[0].parentNode.removeChild(supprSpan[0]);
    }
    
// recuperer nombre de carte dispo entre la tranche
    var nombreCarteDispoTranche1 = 10;
    for (var j=0; j<arrayCarte.length; j++){
        if (arrayCarte[j] >0 && arrayCarte[j] <11){
            nombreCarteDispoTranche1 = nombreCarteDispoTranche1 - 1;
        }
    }
//    creer un span
    const span = document.createElement("span");
    span.textContent = nombreCarteDispoTranche1;
    document.getElementById("li1").appendChild(span);
}

function tranche2(){
//    supprimer span précédent
    var supprSpan2 = document.getElementById("li2").getElementsByTagName("span");
    while(supprSpan2.length > 0){
        supprSpan2[0].parentNode.removeChild(supprSpan2[0]);
    }
    // recuperer nombre de carte dispo entre la tranche
    var nombreCarteDispoTranche2 = 10;
    for (var j=0; j<arrayCarte.length; j++){
        if (arrayCarte[j] >10 && arrayCarte[j] <21){
            nombreCarteDispoTranche2 = nombreCarteDispoTranche2 - 1;
        }
    }
//    creer un span
    const span2 = document.createElement("span");
    span2.textContent = nombreCarteDispoTranche2;
    document.getElementById("li2").appendChild(span2);
}

function tranche3(){
//    supprimer span précédent
    var supprSpan3 = document.getElementById("li3").getElementsByTagName("span");
    while(supprSpan3.length > 0){
        supprSpan3[0].parentNode.removeChild(supprSpan3[0]);
    }
    // recuperer nombre de carte dispo entre la tranche
    var nombreCarteDispoTranche3 = 10;
    for (var j=0; j<arrayCarte.length; j++){
        if (arrayCarte[j] >20 && arrayCarte[j] <31){
            nombreCarteDispoTranche3 = nombreCarteDispoTranche3 - 1;
        }
    }
//    creer un span
    const span3 = document.createElement("span");
    span3.textContent = nombreCarteDispoTranche3;
    document.getElementById("li3").appendChild(span3);
}

function tranche4(){
//    supprimer span précédent
    var supprSpan4 = document.getElementById("li4").getElementsByTagName("span");
    while(supprSpan4.length > 0){
        supprSpan4[0].parentNode.removeChild(supprSpan4[0]);
    }
    // recuperer nombre de carte dispo entre la tranche
    var nombreCarteDispoTranche4 = 10;
    for (var j=0; j<arrayCarte.length; j++){
        if (arrayCarte[j] >30 && arrayCarte[j] <41){
            nombreCarteDispoTranche4 = nombreCarteDispoTranche4 - 1;
        }
    }
//    creer un span
    const span4 = document.createElement("span");
    span4.textContent = nombreCarteDispoTranche4;
    document.getElementById("li4").appendChild(span4);
}

function tranche5(){
//    supprimer span précédent
    var supprSpan5 = document.getElementById("li5").getElementsByTagName("span");
    while(supprSpan5.length > 0){
        supprSpan5[0].parentNode.removeChild(supprSpan5[0]);
    }
    // recuperer nombre de carte dispo entre la tranche
    var nombreCarteDispoTranche5 = 10;
    for (var j=0; j<arrayCarte.length; j++){
        if (arrayCarte[j] >40 && arrayCarte[j] <51){
            nombreCarteDispoTranche5 = nombreCarteDispoTranche5 - 1;
        }
    }
//    creer un span
    const span5 = document.createElement("span");
    span5.textContent = nombreCarteDispoTranche5;
    document.getElementById("li5").appendChild(span5);
}

function tranche6(){
//    supprimer span précédent
    var supprSpan6 = document.getElementById("li6").getElementsByTagName("span");
    while(supprSpan6.length > 0){
        supprSpan6[0].parentNode.removeChild(supprSpan6[0]);
    }
    // recuperer nombre de carte dispo entre la tranche
    var nombreCarteDispoTranche6 = 10;
    for (var j=0; j<arrayCarte.length; j++){
        if (arrayCarte[j] >50 && arrayCarte[j] <61){
            nombreCarteDispoTranche6 = nombreCarteDispoTranche6 - 1;
        }
    }
//    creer un span
    const span6 = document.createElement("span");
    span6.textContent = nombreCarteDispoTranche6;
    document.getElementById("li6").appendChild(span6);
}

function tranche7(){
//    supprimer span précédent
    var supprSpan7 = document.getElementById("li7").getElementsByTagName("span");
    while(supprSpan7.length > 0){
        supprSpan7[0].parentNode.removeChild(supprSpan7[0]);
    }
    // recuperer nombre de carte dispo entre la tranche
    var nombreCarteDispoTranche7 = 10;
    for (var j=0; j<arrayCarte.length; j++){
        if (arrayCarte[j] >60 && arrayCarte[j] <71){
            nombreCarteDispoTranche7 = nombreCarteDispoTranche7 - 1;
        }
    }
//    creer un span
    const span7 = document.createElement("span");
    span7.textContent = nombreCarteDispoTranche7;
    document.getElementById("li7").appendChild(span7);
}

function tranche8(){
//    supprimer span précédent
    var supprSpan8 = document.getElementById("li8").getElementsByTagName("span");
    while(supprSpan8.length > 0){
        supprSpan8[0].parentNode.removeChild(supprSpan8[0]);
    }
    // recuperer nombre de carte dispo entre la tranche
    var nombreCarteDispoTranche8 = 10;
    for (var j=0; j<arrayCarte.length; j++){
        if (arrayCarte[j] >70 && arrayCarte[j] <81){
            nombreCarteDispoTranche8 = nombreCarteDispoTranche8 - 1;
        }
    }
//    creer un span
    const span8 = document.createElement("span");
    span8.textContent = nombreCarteDispoTranche8;
    document.getElementById("li8").appendChild(span8);
}

function tranche9(){
//    supprimer span précédent
    var supprSpan9 = document.getElementById("li9").getElementsByTagName("span");
    while(supprSpan9.length > 0){
        supprSpan9[0].parentNode.removeChild(supprSpan9[0]);
    }
    // recuperer nombre de carte dispo entre la tranche
    var nombreCarteDispoTranche9 = 10;
    for (var j=0; j<arrayCarte.length; j++){
        if (arrayCarte[j] >80 && arrayCarte[j] <91){
            nombreCarteDispoTranche9 = nombreCarteDispoTranche9 - 1;
        }
    }
//    creer un span
    const span9 = document.createElement("span");
    span9.textContent = nombreCarteDispoTranche9;
    document.getElementById("li9").appendChild(span9);
}

function tranche10(){
//    supprimer span précédent
    var supprSpan10 = document.getElementById("li10").getElementsByTagName("span");
    while(supprSpan10.length > 0){
        supprSpan10[0].parentNode.removeChild(supprSpan10[0]);
    }
    // recuperer nombre de carte dispo entre la tranche
    var nombreCarteDispoTranche10 = 10;
    for (var j=0; j<arrayCarte.length; j++){
        if (arrayCarte[j] >90 && arrayCarte[j] <101){
            nombreCarteDispoTranche10 = nombreCarteDispoTranche10 - 1;
        }
    }
//    creer un span
    const span10 = document.createElement("span");
    span10.textContent = nombreCarteDispoTranche10;
    document.getElementById("li10").appendChild(span10);
}

function tranche11(){
//    supprimer span précédent
    var supprSpan11 = document.getElementById("li11").getElementsByTagName("span");
    while(supprSpan11.length > 0){
        supprSpan11[0].parentNode.removeChild(supprSpan11[0]);
    }
    // recuperer nombre de carte dispo entre la tranche
    var nombreCarteDispoTranche11 = 4;
    for (var j=0; j<arrayCarte.length; j++){
        if (arrayCarte[j] >100 && arrayCarte[j] <105){
            nombreCarteDispoTranche11 = nombreCarteDispoTranche11 - 1;
        }
    }
//    creer un span
    const span11 = document.createElement("span");
    span11.textContent = nombreCarteDispoTranche11;
    document.getElementById("li11").appendChild(span11);
}

function carteRestante (){
    //    supprimer span précédent
    var supprSpanCarteRestante = document.getElementById("carte_restante").getElementsByTagName("span");
    while(supprSpanCarteRestante.length > 0){
        supprSpanCarteRestante[0].parentNode.removeChild(supprSpanCarteRestante[0]);
    }
    
// recuperer nombre de carte dispo entre la tranche
    var nombreJoueur = document.getElementById("inputNombreJoueur").value;
    var nombreCarte = nombreJoueur * 10;
    nombreCarte = nombreCarte - arrayCarte.length;
    
//    creer un span
    const spanCarteRestante = document.createElement("span");
    spanCarteRestante.textContent = nombreCarte;
    document.getElementById("carte_restante").appendChild(spanCarteRestante);
    
}

constructeurLi();