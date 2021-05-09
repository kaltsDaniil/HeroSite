// burger
let isOpened = true
let burger = document.getElementById('burger')
const line1 = document.getElementById('line1')
const line2 = document.getElementById('line2')
const line3 = document.getElementById('line3')
const cotegor = document.getElementById('cotegor')
const properties = document.getElementById('properties')

// Navigation
let navLink = document.querySelectorAll('.nav-link')
navLink.forEach((item) => {
    item.addEventListener('click', () => {
        burger.classList.remove('opened')
        line1.classList.remove('line1-opened')
        line2.classList.remove('line2-opened')
        line3.classList.remove('line3-opened')
        isOpened= !isOpened
        cotegor.style.height = 0 + 'vh'
        cotegor.style.paddingBottom = 0 + 'rem'
        properties.classList.remove('properties')
    })
})

// See more
let moreCards = document.getElementById('more-cards')
let trendingsBtn = document.querySelector('.trendings-btn')
let isMore =  false
moreCards.style.display = 'none'

// Watch / Close
let isWatched = true
let watch = document.querySelector('.banner-watch')
let watchBtn = document.querySelector('.banner-watch__text')
let poster = document.getElementById('poster')
let video = document.getElementById('video')
video.style.display = 'none'

watch.addEventListener('click',() => {
    if (isWatched) {
        watchBtn.innerHTML = 'Return'
        poster.style.display = 'none'
        video.style.display = 'block'
        isWatched = !isWatched
        document.getElementById('video').play()
    }else{
        poster.style.display = 'block'
        video.style.display = 'none'
        watchBtn.innerHTML = 'Watch'
        isWatched = !isWatched
        document.getElementById('video').pause()
    }
})
// Search
let loop  = document.getElementById('loop')
let searchInp = document.getElementById('searchInput')
let isSearched = false
let names = ['Samantha Bowen','Rhys Birch','James Hollowayt','Joshua Walton','Patrick Elliott',`Morgan O'Neill`]
let acters = document.querySelector('.acters') 
let prompt = document.getElementById('prompt')
let searchText = document.querySelectorAll('.searchText')
function searchFunc(event){
    if (event.keyCode == 13) {
        if(names.indexOf(searchInp.value) !== -1){
            window.scrollTo({
                top:acters.offsetTop,
                behavior:"smooth"
            })
            function showActer(){
                document.querySelectorAll('.acters-card__img')[names.indexOf(searchInp.value)].style.width = 88 + '%'
                document.querySelectorAll('.acters-card__title')[names.indexOf(searchInp.value)].style.fontSize = 76 + '%'
            }
            function hideActer(){
                document.querySelectorAll('.acters-card__img')[names.indexOf(searchInp.value)].style.width = 82 + '%'
                document.querySelectorAll('.acters-card__title')[names.indexOf(searchInp.value)].style.fontSize = 70 + '%'
            }
            if (window.pageYOffset.toFixed() === acters.offsetTop) {
                alert('guy')
            }
            if(acters.offsetTop.toFixed() === window.pageYOffset.toFixed()){
                setTimeout(showActer,0)
            }else{
                setTimeout(showActer,1000)
            }
            setTimeout(hideActer,3000)
        }else{
            alert('У нас нет такого актера')
        }
    }
}
// Burger open and close
burger.addEventListener('click',() => {
    if(isOpened){
        isOpened= !isOpened
        burger.classList.add('opened')
        line1.classList.add('line1-opened')
        line2.classList.add('line2-opened')
        line3.classList.add('line3-opened')
        cotegor.style.height = 60 + 'vh'
        cotegor.style.paddingBottom = 2 + 'rem'
        properties.classList.add('properties')
    }
    else{
        burger.classList.remove('opened')
        line1.classList.remove('line1-opened')
        line2.classList.remove('line2-opened')
        line3.classList.remove('line3-opened')
        isOpened= !isOpened
        cotegor.style.height = 0 + 'vh'
        cotegor.style.paddingBottom = 0 + 'rem'
        properties.classList.remove('properties')
    }
})

navLink.forEach((item) => {
    item.addEventListener('click',() => {
        navLink.forEach((item) => {
            item.classList.remove('active')
        })
        item.classList.add('active')
    })
})

// seeMore

function seeMore(){
    if(isMore){
        isMore = !isMore
        moreCards.style.display = 'none'
        trendingsBtn.innerHTML = 'See more'
    }else{
        isMore = !isMore
        moreCards.style.display = 'flex'
        trendingsBtn.innerHTML = 'Return'
    }
}

//to begin of the site
function toTop(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}

// hide or show back-to-top 
window.addEventListener('scroll', () => {
    if(window.pageYOffset < 500){
        document.querySelector('.back-to-top').classList.add('hidden')
    }else{
        document.querySelector('.back-to-top').classList.remove('hidden')
    }
})

// search

loop.addEventListener('click', () => {
    if(!isSearched){
        searchInp.classList.add('searching')
        prompt.classList.add('searching')
        isSearched = !isSearched
    }else{
        searchInp.classList.remove('searching')
        prompt.classList.remove('searching')
        isSearched = !isSearched
    }
})

searchInp.oninput = () => {
    if(searchInp.value !== ''){
        searchText.forEach(function(item){
            if (item.innerHTML.toLowerCase().search(searchInp.value) === -1) {
                item.style.display = 'none'
            }else{
                item.style.display = 'block'
            }
        })
    }else{
        searchText.forEach(function(item){
            item.style.display = 'block'
        })
    }
}

searchText.forEach((item) => {
    item.addEventListener('click', () => {
        searchInp.value = item.innerHTML
        window.scrollTo({
            top:acters.offsetTop,
            behavior:"smooth"
        })
        function showActer(){
            document.querySelectorAll('.acters-card__img')[names.indexOf(searchInp.value)].style.width = 88 + '%'
            document.querySelectorAll('.acters-card__title')[names.indexOf(searchInp.value)].style.fontSize = 76 + '%'
        }
        function hideActer(){
            document.querySelectorAll('.acters-card__img')[names.indexOf(searchInp.value)].style.width = 82 + '%'
            document.querySelectorAll('.acters-card__title')[names.indexOf(searchInp.value)].style.fontSize = 70 + '%'
        }
        if (window.pageYOffset.toFixed() === acters.offsetTop) {
            alert('guy')
        }
        if(acters.offsetTop.toFixed() === window.pageYOffset.toFixed()){
            setTimeout(showActer,0)
        }else{
            setTimeout(showActer,1000)
        }
        setTimeout(hideActer,3000)
    })
})