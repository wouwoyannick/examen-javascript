
// var bouton=document.querySelector("j'aime")
// var card=document.querySelector("card")
// var aff=document.querySelector(".affiche")
// var nbre=document.getElementById("nber")


// var aff=document.querySelector("jaime")



// bouton.addEventListener("click",function() {


//   var wordToTab=mot.value.split("")

//   var reverseWord=wordToTab.reverse()


//   var tabToword=reverseWord.join("")


//   aff.textContent=tabToword

// })



var principal=document.getElementById("principal")

var RomantiqueAll=document.querySelectorAll("#romantique")


RomantiqueAll.forEach((item)=>{
  item.addEventListener("click",function() {
    var src=item.getAttribute("src")



    principal.setAttribute("src",src)

  })
  
})

// var aff1=document.querySelector(".jaime")


// var rep1=1


// bouton.addEventListener("click",function(){
 
//   aff1.forEach((item)=>{
//     if (item.checked===true) {
//       if (item.getAttribute("id")==="j'aime") {
//         rep1=1
//         aff1.innerHTML='<span style="color:green">vous afficher le pop-up</span>'
//       }  
//     }

//   })


//   var somme=rep1

//   span.textContent=somme+"/1"
//   alert(somme);

// })











// bouton.addEventListener("click",function () {
//   liste.innerHTML=liste.innerHTML+'<li class="list-group-item">'+jaime.value+'</li>'
// })

























