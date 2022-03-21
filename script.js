var image1 ="./image1.jpg"
var image2 ="./image2.jpg"
var image3 ="./image3.jpg"
var imagearr =[image1, image2, image3]
function happybutton() {
    var randomindex =Math.floor(Math.random()* imagearr.length)
    console.log(randomindex)
    yellow.src=imagearr[randomindex]
}