document.addEventListener("DOMContentLoaded", () => {
    fetchData("character")
})
function fetchData(){

    fetch("  http://localhost:3000/characters")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(element => {
            showCharacter(element)
            
        });
    })
    
}
function showCharacter(character){
    const list = document.getElementById("list")
    const name = document.createElement("li") 
    name.innerHTML = character.name
    list.append(name)
    name.addEventListener("click", () =>{
        showOneCharacter(character)
    })
}
function showOneCharacter(character){
    document.getElementById("names").innerHTML = character.name
    document.getElementById("images").src = character.image
    const button = document.getElementById("likes")
    button.textContent = `likes ${character.votes}`
    button.addEventListener("click", ()=>{
        character.votes++
        console.log(character.votes)
        button.textContent = `likes ${character.votes}`
    } )
}


