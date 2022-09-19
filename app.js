console.log("welcome to notes app");
shownotes();
let addbtn=document.getElementById("addbtn");
addbtn.addEventListener('click',function(e){
    let addtxt=document.getElementById("addtxt");
    //console.log(addtxt.value);
    let notes=localStorage.getItem("notes");
    //console.log(notes);
    if(notes==null)
    {
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
       
    }
    
    notesobj.push(addtxt.value);
   localStorage.setItem("notes",JSON.stringify(notesobj));

   addtxt.value="";
   //console.log(notesobj);
   shownotes();
})
function shownotes(){
    let notes=localStorage.getItem("notes");
    console.log(typeof(notesobj));
    if(notes==null)
    {
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
    }
    let html="";
    notesobj.forEach(function(element,index){
        html+=` <div class="card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index+1}</h5>
          <p id="p1" class="card-text">${element}</p>
          <button id="${index}" onclick="delnode(this.id)" class="btn btn-primary">Delete note</button>
        </div>
        
        </div>`
        let notes2=document.getElementById("notes");
        if(notesobj.length!=0)
        {
            notes2.innerHTML=html;
        }
        else{
            notes2="Nothing to show!! Add a note now"
        }
       
    })
}
function delnode(index){
    console.log("i am deleting a note");
    let notes=localStorage.getItem("notes");
    console.log(typeof(notesobj));
    if(notes==null)
    {
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
    }
    notesobj.splice(index,1);
    
    localStorage.setItem("notes",JSON.stringify(notesobj));
    shownotes();
}
let search=document.getElementById("searchtxt");
search.addEventListener("input",function(){
    //console.log("this fires input listener");
    let inputval=search.value;
    //console.log(inputval);
     let notecard=document.getElementsByClassName("card");
    Array.from(notecard).forEach(function(element){
    let a=document.getElementById("p1");
    let b=a.innerText;
    console.log(b);
    console.log(b.includes(inputval))
    if(b.includes(inputval))
    {
        element.style.display="block";
    }
    else{
        element.style.display="none";
    }
})

})