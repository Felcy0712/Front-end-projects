const sliderContainer = document.querySelector('.slider-container')
const sliderRight = document.querySelector('.right-slide')
const sliderLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
//all div in the slide right needed here the bg images
const slideLength = sliderRight.querySelectorAll('div').length

console.log(slideLength)


let activeSlideIndex = 0
//the left slide goes up which is negative value with 100vh
sliderLeft.style.top = `-${(slideLength - 1) * 100}vh`
upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))


//if we change slide the height need to get updated as per the size of window
//and the slide index value get incremented when it goes up and 0 when reaches the height limit
const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex > slideLength -1){
            activeSlideIndex = 0
        }
    }
    else if(direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = slideLength - 1
        }
    }
//transformation for up and down in y axis
  sliderRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
  sliderLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
 
}
