




const parent = document.getElementById("parent")





function addNotes() {
    const notes = document.getElementById("notes")


    // validation 
    if (notes.value.length < 5) {
        alert("invalid notes")
        return
    }

    const cardDAta = ` 

    <div class="card" style="width: 18rem;">
  <img src="https://picsum.photos/400/200" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${notes.value}</h5>
       <button class="btn btn-info" 
    onclick="edit(this)" >Edit</button>
    <button class="btn btn-danger"
    onclick = "deleteeee(this)" >Delete</button>
  </div>
</div>`

    parent.innerHTML += cardDAta
    notes.value = ""
}

function deleteall() {
    parent.innerHTML = ""
}
function edit(editbtn) {
    const updated = prompt("enter your diasters", editbtn.previousElementSibling.innerHTML)
    editbtn.previousElementSibling.innerHTML = updated
}
function deleteeee(delebtn) {
    delebtn.parentNode.parentNode.remove()

}


