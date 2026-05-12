const parent = document.getElementById("parent")
function addNotes() {
    const notes = document.getElementById("notes")
    // validation 
    if (notes.value.length < 5) {
        alert("invalid notes")
        return
    }

    const userobj = {
        notes: notes.value,
    }

    const usernotes = localStorage.getItem("usernotes")
    if (!usernotes) {
        // first notes aya hai
        localStorage.setItem("usernotes", JSON.stringify([userobj]))
    } else {
        // first notes nhi hai 
        const getNotes = JSON.parse(usernotes)
        // console.log(getNotes);
        getNotes.push(userobj)
        localStorage.setItem("usernotes", JSON.stringify(getNotes))

    }
    alert("notes created!")

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


    // localstorage ma data save ho rha hai




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




