let next = document.querySelector(".nxt")
let previus = document.querySelector(".pre")
let images = ["1.jpg", "2.jpg", "3.jpg"]
let count = 0;

let div = document.querySelector(".mainDiv")
div.style.backgroundImage = `url(${images[count]})`

next.addEventListener("click", function(){
    console.log(count);
    count++
   if(count > images.length-1){
    count = 0
   }
    div.style.backgroundImage = `url(${images[count]})`
})

previus.addEventListener("click", function(){
    //div.style.backgroundImage = `url(${images[count-=1]})`
    count--
    console.log(count);
    if(count < 0){
        count = images.length-1
    }
    div.style.backgroundImage = `url(${images[count]})`
})