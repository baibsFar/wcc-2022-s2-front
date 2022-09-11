const loader = document.querySelector('.loader')
const loaderTitle = document.querySelector('.loader-title')
const loaderSpinner = document.querySelector('.loader-spinner')

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

setTimeout(() => {
    loader.style.animationName = 'fadeout'
    loader.style.animationDuration = '2s'
    loader.style.animationTimingFunction = 'easy-in'
    loader.style.animationIterationCount = '1'
    loader.addEventListener('animationend', () => {
        loader.style.display = 'none'
    })
}, 2000)