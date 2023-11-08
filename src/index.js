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
            ramenDetails(ramen)
            
         })

        function deleteButton() {

    const deleteButton = document.querySelector('#delete_button')
    deleteButton.addEventListener('click', (e)=>{
        e.preventDefault()

        img.remove()
        deleteButton.remove()

    })
}
        updateRating()
        deleteButton()
          
 } ) }



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
// event listener for the create new ramen form
const form = document.querySelector("#new-ramen")
form.addEventListener("submit", (e) => {
    e.preventDefault()

    const newRamen = {

    name: e.target.name.value,
    restaurant: e.target.restaurant.value,
    image: e.target.image.value,
    rating: e.target.rating.value,
    comment: e.target[`new-comment`].value

    }

    document.querySelector(".name").textContent = newRamen.name
    document.querySelector(".restaurant").textContent = newRamen.restaurant
    document.querySelector("#rating-display").textContent = newRamen.rating
    document.querySelector("#comment-display").textContent = newRamen.comment
    document.querySelector(".detail-image").src = newRamen.image

    const newImg = document.createElement("img")
    newImg.src = newRamen.image
    document.querySelector("#ramen-menu").append(newImg)

    newImg.addEventListener("click", (e) => {

        e.preventDefault()
        ramenDetails(newRamen)

     })

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

    const deleteButton = document.querySelector('#delete_button')
    deleteButton.addEventListener('click', (e)=>{
        

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


