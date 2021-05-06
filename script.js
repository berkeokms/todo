 var input = document.getElementById("input");
 var button1 = document.getElementById("button");
 const containerNew=document.querySelector(".containerNew");

 input.addEventListener("keydown", function(event) {
 
   if (event.keyCode === 13) {

     event.preventDefault();

     document.getElementById("button").click();
   }
 });

 button1.onclick = () => {

     if (input.value == "" ) {

        alert("Kelime veya Cümle Giriniz..")

     } else {
      const containerNew=document.querySelector(".containerNew");
     
     
      var li = document.createElement("li");
      var cancel = document.createElement("IMG");
         
         cancel.src = "cancel.svg"
         cancel.className = "cancel"
         
         
         containerNew.className="containerNew";
         li.className = "aga";
         li.className="gag";
     
 
          
         var t = document.createTextNode(input.value);
         li.appendChild(t);
         li.appendChild(cancel);

         containerNew.appendChild(li);
    
         input.value = "";
        
        }

 }

 
 document.querySelector(".containerNew").onclick = (e) => {
    if (e.target.className == "cancel")
       e.target.parentElement.remove();
       else if(e.target.className == "gag")
       e.target.className = "aga";
    else if(e.target.className == "aga")
       e.target.className = "gag";
 }


