/*var mainTitle = document.getElementById("mainTitle");

console.log("This is an element of type:", mainTitle.nodeType);
console.log("the Inner HTML is" , mainTitle.innerHTML );
console.log("Child nodes: ", mainTitle.childNodes.length);
 var myLinks= document.getElementsByTagName("a");
 console.log("Links: " , myLinks.length);
 */

 var mainContent= document.getElementById("mainContent");
 mainContent.setAttribute("align", "right");

 mainTitle= document.getElementById("mainTitle");
 console.log(mainTitle.innerHTML);

 var sidebar= document.getElementById("sidebar");
 console.log(sidebar.innerHTML);

 //creating the element
 var newHeading= document.createElement("h1");
 var newParagraph= document.createElement("p");

 //to add content, either use innerHTML
 newHeading.innerHTML="Did You Know?";
 newParagraph.innerHTML="Califonia produces over 17 million gallons of wine each year!";

 //and we still need to attach them to the document!
 document.getElementById("trivia").appendChild(newHeading);
 document.getElementById("trivia").appendChild(newParagraph);



 //EVENTS
// document.onclick= function(){
 //    alert("you clicked somewhere in the document");
// }
function prepareEventHandlers() {

    var myImage = document.getElementById("mainContent");
    myImage.onclick= function(){
        alert("you clicked the image");
    }
}

window.onload = function() {
    //prep anything we need to
    prepareEventHandlers();
}