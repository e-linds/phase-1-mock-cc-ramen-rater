fetch("http://localhost:3000/ramens")
.then(r => r.json())
.then(ramens => {
    const firstRamen =  ramens[0]
   ramenDetails(firstRamen)

    createImages(ramens)

})


function createImages(array) {
    const div = document.querySelector("#ramen-menu")
    array.forEach((ramen) => {

        const img = document.createElement("img")
        div.append(img)
        img.src = ramen.image

        img.addEventListener("click", (e) => {
            e.preventDefault()
            ramenDetails(ramen)
            
        })
        updateRating()
      
     
    })

    deleteRamen()
}

//this function articulates the info from each ramen
function ramenDetails(single) {

    const name = document.querySelector(".name")
    const restaurant = document.querySelector(".restaurant")
    const image = document.querySelector(".detail-image")
    const rating = document.querySelector("#rating-display")
    const comment = document.querySelector("#comment-display")

    name.textContent = single.name
    restaurant.textContent = single.restaurant 
    image.src = single.image
    rating.textContent = single.rating
    comment.textContent = single.comment
}

const form = document.querySelector("#new-ramen")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = e.target.name.value
    const restaurant = e.target.restaurant.value
    const img = e.target.image.value
    const rating = e.target.rating.value
    const comment = e.target[`new-comment`].value

    document.querySelector(".name").textContent = name
    document.querySelector(".restaurant").textContent = restaurant
    document.querySelector("#rating-display").textContent = rating
    document.querySelector("#comment-display").textContent = comment
    document.querySelector(".detail-image").src = img

})

function updateRating(){
   const form = document.querySelector('#edit-ramen')
    form.addEventListener('submit', (e) =>{
        e.preventDefault()
        const rating = e.target.rating.value
        const comment = e.target[`new-comment`].value
        document.querySelector("#rating-display").textContent = rating
        document.querySelector("#comment-display").textContent = comment
        
    })

}
function deleteRamen(){

    const deleteButton = document.querySelector('#delete_button')
    deleteButton.addEventListener('click', (e)=>{
        e.preventDefault()
        
    const name = document.querySelector(".name")
    const restaurant = document.querySelector(".restaurant")
    const image = document.querySelector(".detail-image")
    const rating = document.querySelector("#rating-display")
    const comment = document.querySelector("#comment-display")

    name.remove()
    restaurant.remove()
    image.remove()
    rating.remove()
    comment.remove()

    deleteButton.remove()

})

}


