const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')


let load = 0;

//blurring image for every 30ms & reset load value for every 30ms
let int = setInterval(blurry, 30)

function blurry(){
    load++
    if(load > 99){
        clearInterval(int)
    }
    //displaying 1 to 100 inside the image
    loadText.innerText = `${load}%`
    //making the numbers opacity from 1 to 0 disapper,
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    //blur the image
    bg.style.filter = `blur(${scale(load,0, 100, 30, 0)}px)`
}

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}