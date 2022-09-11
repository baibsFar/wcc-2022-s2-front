const snorkeling = document.querySelectorAll('.pics-container.snorkeling div')
const hiking = document.querySelectorAll('.pics-container.hiking div')
const kayaking = document.querySelectorAll('.pics-container.kayaking div')
const basicPath = 'assets/img/portraits/portrait'

let i = 1
snorkeling.forEach(pic => {
    pic.style.background = `url(${basicPath}-${i++}.jpg)`
    pic.style.backgroundPosition = 'center'
    pic.style.backgroundRepeat = 'no-repeat'
    pic.style.backgroundSize = 'cover'
})

hiking.forEach(pic => {
    pic.style.background = `url(${basicPath}-${i++}.jpg)`
    pic.style.backgroundPosition = 'center'
    pic.style.backgroundRepeat = 'no-repeat'
    pic.style.backgroundSize = 'cover'
})

kayaking.forEach(pic => {
    pic.style.background = `url(${basicPath}-${i++}.jpg)`
    pic.style.backgroundPosition = 'center'
    pic.style.backgroundRepeat = 'no-repeat'
    pic.style.backgroundSize = 'cover'
})