let addTodobutton=document.getElementById("addTodo");
let toDocontainer=document.getElementById("toDocontainer");
let inputField=document.getElementById("inputField");
addTodobutton.addEventListener('click',function(){
    var paragraph=document.createElement('p');
   paragraph.classList.add("listOftodos");
   
    paragraph.innerText=inputField.value;
    toDocontainer.appendChild(paragraph);
    inputField.value="";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration= "line-through";
        paragraph.addEventListener('dblclick',function(){
            toDocontainer.removeChild(paragraph);
        })
    })
})
let bak=document.getElementById("bakar");
bak.addEventListener('click',function(){
    alert("lwde ea nahi right wala button hai ! ");
})



