window.onload=global();


function global(){
    document.getElementById("numero").addEventListener("dblclick", div1);
    document.getElementById("numero").addEventListener("mouseover", div2);
    document.getElementById("numero").addEventListener("mouseout", div3);
}


function div1(){
    let rand=Number(document.getElementById("numero").textContent);
    rand*=3;
    document.getElementById("numero").textContent=rand;
}

function div2(){

    document.getElementById("numero").style.backgroundColor="purple";
    document.getElementById("numero").style.fontFamily="sans-serif";
}

function div3(){
    document.getElementById("numero").style.backgroundColor="";
    document.getElementById("numero").style.fontFamily="";
}
