var slowo, slowa=[], dl, guess=[],proby=0, strzal; pic;
var trafienie=false;


function start(){
    slowa=["pasja","gra","komputer","maltańczyk","generator"];
    slowo = slowa[Math.floor(Math.random()*slowa.length)];
    dl=slowo.length;

    for(var i=0; i<dl; i++){
        guess[i]="_";
    }
    document.getElementById("passw").innerHTML = guess.join(" ");

}

function sprawdz(){
    trafienie=false;
    strzal= document.getElementById("inp").value;
    for(var j=0; j<slowo.length; j++){
        if(slowo[j]==strzal && proby[j]=="_"){
            guess[j]=strzal;
            dl--;
            trafienie=true;
            document.getElementById("passw").innerHTML = guess.join(" ");
        }
    }
    document.getElementById("inp").value="";

    if(trafienie==false && proby<9 ){
        proby++;
        pic = "o"+ proby + ".png";
        document.getElementById("szubienica").innerHTML='<img src=" '+ pic +'">';

    }
    if (dl==0 && proby<9){
        document.getElementById("wynik").innerHTML="Wygrana";
        document.getElementById("wynik").style.backgroundColor="blue";
    }
    if (proby==9){
        document.getElementById("wynik").innerHTMl="Przegrana"
        document.getElementById("wynik").style.backgroundColor="red"
    }

}