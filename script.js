var img=document.querySelector(".img");
var audio=new Audio("Traditional-Happy-Birthday-To-You-Song.mp3");
img.addEventListener('click',()=>{
    // img.style.display="none";
    img.src="Birthday_cake.jpg";
    document.querySelector('.click').style.display="none";
        audio.play();
})
let count=0;
document.querySelector("input").addEventListener('click',()=>{
    console.log(document.querySelector("#opt").value)
    if(document.querySelector("#opt").value=='Brother'&&count==0){
        document.querySelector(".container").style.display="block";
        document.querySelector(".click").style.display="block";
        img.style.display="block";
    
    
    }
    else{
        count++;
        alert("you dont know about me and you are trying time :"+count);
        audio.pause();
    }
});