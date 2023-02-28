document.getElementById("enlace_1").addEventListener("click",hideAndSeek);
document.getElementById("enlace_2").addEventListener("click",hideAndSeek);
document.getElementById("enlace_3").addEventListener("click",hideAndSeek);

function hideAndSeek(e){

    switch(e.target.id){

        case "enlace_1":
            var a=document.getElementById("contenidos_1").style.visibility;
            document.getElementById("contenidos_1").style.visibility = a =='hidden' ? '' : 'hidden';
            document.getElementById("enlace_1").innerHTML= a=='' ? 'seek' : 'hide';

        break;


        case "enlace_2":
            var b=document.getElementById("contenidos_2").style.visibility;
            document.getElementById("contenidos_2").style.visibility = b =='hidden' ? '' : 'hidden';
            document.getElementById("enlace_2").innerHTML= b=='' ? 'seek' : 'hide';
    
        break;


        case "enlace_3":
            var c=document.getElementById("contenidos_3").style.visibility;
            document.getElementById("contenidos_3").style.visibility = c =='hidden' ? '' : 'hidden';
            document.getElementById("enlace_3").innerHTML= c=='' ? 'seek' : 'hide';
        
        break;
    }

}
