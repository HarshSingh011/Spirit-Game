document.querySelectorAll("img")[1].addEventListener("click",function (){
    var c = Math.floor(Math.random()*31) + 1;
    var d = "./assets/pho"+c+".jpg";
    document.querySelectorAll("img")[1].setAttribute("src",d);
    document.querySelectorAll("img")[1].classList.add("mil");
    setTimeout(function(){ document.querySelectorAll("img")[1].classList.remove("mil"); },200);
    if (c==5 || c==19) {
        document.querySelector(".at").innerHTML = "Legendary";
        document.querySelector(".at").style.color = "red";
        document.querySelector(".na").style.color = "red";
        if (c===5){ document.querySelector(".na").innerHTML="DEMON GOD";}
        else if (c===19){ document.querySelector(".na").innerHTML="GOD";}
    }
    else if ( c==9 || c==20 || c==3 || c==25 ) {
        document.querySelector(".at").innerHTML = "Epic";
        document.querySelector(".at").style.color = "#00E0FF";
        document.querySelector(".na").style.color = "#00E0FF";
        if (c===9){ document.querySelector(".na").innerHTML="KING";}
        else if (c===20){ document.querySelector(".na").innerHTML="STRONGEST";}
        else if (c===3){ document.querySelector(".na").innerHTML="GENIUS";}
        else if (c===25){ document.querySelector(".na").innerHTML="ENLIGHTENED ONE";}
    }
    else if(c==1 || c==13 || c==7 || c==8 || c==10 || c==14 ) {
        document.querySelector(".at").innerHTML = "Rare";
        document.querySelector(".at").style.color = "#FF8E00";
        document.querySelector(".na").style.color = "#FF8E00";
        if (c===1){ document.querySelector(".na").innerHTML="Friendly";}
        else if (c===13){ document.querySelector(".na").innerHTML="Lively";}
        else if (c===7){ document.querySelector(".na").innerHTML="Childish";}
        else if (c===8){ document.querySelector(".na").innerHTML="Kind";}
        else if (c===10){ document.querySelector(".na").innerHTML="Wise";}
        else if (c===14){ document.querySelector(".na").innerHTML="Hard Working";}
    }
    else if  (c==2 || c==4 || c==6 || c==11 || c==12 || c==15 || c==16 || c==17 || c==18 || c==21 || c==22 || c==23 || c==26 || c==24
        || c==27 || c==28 || c==29 || c==30 || c==31){
        document.querySelector(".at").innerHTML = "Normal";
        document.querySelector(".at").style.color = "yellow";
        document.querySelector(".na").style.color = "yellow";
        if (c==2 || c==4 || c==27){ document.querySelector(".na").innerHTML="Angry one";}
        else if (c===6 || c===11 || c==28){ document.querySelector(".na").innerHTML="Greedy";}
        else if (c===12 || c==21 || c==29){ document.querySelector(".na").innerHTML="Evil Person";}
        else if (c===15 || c===22 ){ document.querySelector(".na").innerHTML="Normal Person";}
        else if (c===16 || c==23 || c==31){ document.querySelector(".na").innerHTML="Lazy";}
        else if (c===18 || c==26){ document.querySelector(".na").innerHTML="Dead From Inside";}
        else if (c===17 || c==24 || c==30){ document.querySelector(".na").innerHTML="Negative Person";}
    }
});

document.querySelectorAll("img")[0].addEventListener("click",function (){
    var a = Math.floor(Math.random()*31) + 1;
    var b = "./assets/pic"+a+".jpg";
    document.querySelectorAll("img")[0].setAttribute("src",b);
    document.querySelectorAll("img")[0].classList.add("mil");
    setTimeout(function(){ document.querySelectorAll("img")[0].classList.remove("mil"); },200);
    if (a==3 || a==5 || a==17|| a==19) {
        document.querySelector(".ca").innerHTML = "Legendary";
        document.querySelector(".ca").style.color = "red";
        document.querySelector(".an").style.color = "red";
        if (a===3){ document.querySelector(".an").innerHTML="KILLER WHALE(ORCA)";}
        else if (a===5){ document.querySelector(".an").innerHTML="TRICERATOPS";}
        else if (a===17){ document.querySelector(".an").innerHTML="LEVIATHAN";}
        else if (a===19){ document.querySelector(".an").innerHTML="TYRANNOSAURUS";}
    }
    else if ( a==9 || a==20 || a==12 || a==25 || a==16 || a==14) {
        document.querySelector(".ca").innerHTML = "Epic";
        document.querySelector(".ca").style.color = "#00E0FF";
        document.querySelector(".an").style.color = "#00E0FF";
        if (a===9){ document.querySelector(".an").innerHTML="Greatwhite Shark";}
        else if (a===20){ document.querySelector(".an").innerHTML="STELLER SEA EAGLE";}
        else if (a===12){ document.querySelector(".an").innerHTML="TIGER";}
        else if (a===25){ document.querySelector(".an").innerHTML="ELEPHANT";}
        else if (a===16){ document.querySelector(".an").innerHTML="LION";}
        else if (a===14){ document.querySelector(".an").innerHTML="KING COBRA";}
    }
    else if(a === 1 || a ==6 || a==7 || a==8 || a==10 || a==11 || a==15 || a==21) {
        document.querySelector(".ca").innerHTML = "Rare";
        document.querySelector(".ca").style.color = "#FF8E00";
        document.querySelector(".an").style.color = "#FF8E00";
        if (a===1){ document.querySelector(".an").innerHTML="Yak";}
        else if (a===6){ document.querySelector(".an").innerHTML="Gaur";}
        else if (a===7){ document.querySelector(".an").innerHTML="Hippo";}
        else if (a===8){ document.querySelector(".an").innerHTML="Rina";}
        else if (a===10){ document.querySelector(".an").innerHTML="Crocodile";}
        else if (a===11){ document.querySelector(".an").innerHTML="Polor Bear";}
        else if (a===15){ document.querySelector(".an").innerHTML="Wolf";}
        else if (a===21){ document.querySelector(".an").innerHTML="Heyna";}
    }
    else if  (a === 2 || a==4 || a==13 || a==18 || a==22 || a==23 || a==24 || a==26 || a==27 || a==28 || a==29 || a==30 || a==31){
        document.querySelector(".ca").innerHTML = "Normal";
        document.querySelector(".ca").style.color = "yellow";
        document.querySelector(".an").style.color = "yellow";
        if (a===2){ document.querySelector(".an").innerHTML="Tiger Fish";}
        else if (a===4){ document.querySelector(".an").innerHTML="Goat";}
        else if (a===13){ document.querySelector(".an").innerHTML="Pecock";}
        else if (a===18){ document.querySelector(".an").innerHTML="Panda";}
        else if (a===22){ document.querySelector(".an").innerHTML="Zebra";}
        else if (a===23){ document.querySelector(".an").innerHTML="Giraffe";}
        else if (a===24){ document.querySelector(".an").innerHTML="Vulture";}
        else if (a===26){ document.querySelector(".an").innerHTML="Wild Boar";}
        else if (a===27){ document.querySelector(".an").innerHTML="Python";}
        else if (a===28){ document.querySelector(".an").innerHTML="chameleon";}
        else if (a===29){ document.querySelector(".an").innerHTML="Fox";}
        else if (a===30){ document.querySelector(".an").innerHTML="Horse";}
        else if (a===31){ document.querySelector(".an").innerHTML="Deer";}
    }
});
//height:600px;