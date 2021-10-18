var img=document.querySelector("img");
img.addEventListener('click',()=>{
    img.style.display="none";
    document.querySelector('.click').style.display="none";
})
let count=0;
document.querySelector("input").addEventListener('click',()=>{
    console.log(document.querySelector("#opt").value)
    if(document.querySelector("#opt").value=='Brother'&&count==0){
        document.querySelector(".container").style.display="block";
        document.querySelector(".click").style.display="block";
    
    
    }
    else{
        alert("you dont know about me");
        count++;
    }
});