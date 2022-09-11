const loader = document.querySelector('.loader')
const loaderTitle = document.querySelector('.loader-title')
const loaderSpinner = document.querySelector('.loader-spinner')
const leftSection = document.querySelector('.left-section')
const rightSection = document.querySelector('.right-section')

/**
 * Colors must be Hexa code or RGB code
 * @param {string} _backgroundColor 
 * @param {string} _color 
 * @param {number} _duration 
 * @param {string} _title 
 * @param {string} _spinnerColor 
 */
function setLoader(_backgroundColor = '#fff', _color = '#000', _duration = 500, _title = 'Loading...', _spinnerColor = '#000') {
    loader.style.backgroundColor = _backgroundColor
    loaderTitle.style.color = _color
    loaderTitle.innerText = _title
    loaderSpinner.style.borderColor = `${_spinnerColor} var(--black) ${_spinnerColor} var(--black)`
    loaderSpinner.style.animationDuration = `${_duration}ms`
}

setLoader('#fff', 'var(--black)', 500, 'Wingle', 'var(--yellow)')

leftSection.style.animationName = 'fadeElement-in-left'
leftSection.style.animationDuration = '3s'
leftSection.style.animationTimingFunction = 'linear'
leftSection.style.animationIterationCount = '1'

rightSection.style.animationName = 'fadeElement-in-right'
rightSection.style.animationDuration = '3s'
rightSection.style.animationTimingFunction = 'linear'
rightSection.style.animationIterationCount = '1'

setTimeout(() => {
    loader.style.animationName = 'fadeout'
    loader.style.animationDuration = '1s'
    loader.style.animationTimingFunction = 'easy-in'
    loader.style.animationIterationCount = '1'
    loader.addEventListener('animationend', () => {
        loader.style.display = 'none'
    })
}, 1000)