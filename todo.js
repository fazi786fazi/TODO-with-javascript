document.body.style.backgroundColor = "#ff9999";
document.getElementById("main").style.color = "#ff0000";
document.getElementById("main").style.border = "thick solid #000066";
document.getElementById("main").style.height = 'auto'
document.getElementById("main").style.marginTop = "100px";
document.getElementById("main").style.marginLeft = "250px";
document.getElementById("main").style.marginRight = "250px";
document.getElementById("input").style.marginLeft = "150px";
document.getElementById("input").style.marginTop = "20px";
document.getElementById("input").style.padding = "10px";
document.getElementById("input").style.width = '400px';
document.getElementById("input").style.backgroundColor = '#000066';
document.getElementById("input").style.border = '#ff3300';
document.getElementById("input").style.outlineColor = '#ff3300';
//document.getElementById("input").style.outline = 'white';
document.getElementById("input").style.color= 'white';
document.getElementById("icon").style.color= 'white';
document.getElementById("icon").style.backgroundColor= '#cc3300';
// document.getElementById("icon").style.height= '30px';
// document.getElementById("icon").style.width= '30px';
document.getElementById("icon").style.padding= '9px';
document.getElementById("icon").style.border= 'none';
document.getElementById("icon").style.cursor= 'pointer';
document.getElementById("error").style.marginLeft= "150px";
document.getElementById("error").style.color= "white";
document.getElementById("error").style.marginLeft= "150px";

document.getElementById("list").style.color= "#000066";
document.getElementById("list").style.marginLeft= "110px";
document.getElementById("list").style.width= "50%";
// document.getElementById("list").style.border= "2px solid white";






function btn(){
    document.getElementById("error").innerHTML= "";
    let input=document.getElementById("input").value;

if (input==''){
    document.getElementById("error").innerHTML= "Please Enter Taske Here";
    alert("Please Enter Taske Here in text area i am defined ")
}
else{
   let list=document.getElementById("list");
   let p=document.createElement("p");
   p.innerText=input.toUpperCase();

   let a=document.createElement("a");
   a.innerText="Delete";
   a.className="del";
   a.id="do"
   a.href="#";
   console.log("a")
   a.setAttribute("style", " color: red;   margin-left: 300px; text-decoration: none;   ")
   
   p.appendChild(a);

   
   let position= list.firstElementChild;
     if(position==null){
        list.appendChild(p);
     }
     else{
        list.insertBefore(p,position);
       
     }

   
    
   
   
}

//   document.getElementById("input").value= " ";
}

let cick=document.querySelector("ul");
cick.addEventListener('click',function(e){
    let list=document.getElementById("list");
    let p=e.target.parentNode;
    list.removeChild(p);
})








