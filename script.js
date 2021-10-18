var img=document.querySelector(".img");
var audio=new Audio("Traditional-Happy-Birthday-To-You-Song.mp3");
img.addEventListener('click',()=>{
    // img.style.display="none";
    img.src="Birthday_cake.jpg";
    document.querySelector('.click').style.display="none";
        audio.play();
        audio.loop=true;
})
let left=2;
document.querySelector("input").addEventListener('click',()=>{
    console.log(document.querySelector("#opt").value)
    if(document.querySelector("#opt").value=='Brother'&&left>0){
        document.querySelector(".container").style.display="block";
        document.querySelector(".click").style.display="block";
        img.style.display="block";
    
    
    }
    else{
        audio.pause();
        if (left==0){
            alert("you have no chance please dont call me bhaiya !!!!");
            document.querySelector("body").style.display="none";
        }
        else{
            left--;
            alert("you dont know about me"+left);
        }
        
    }
});