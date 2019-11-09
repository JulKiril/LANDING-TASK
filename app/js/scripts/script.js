
//Header fixed
(function(){
    let header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50){
            header.classList.add('header_active');
        }
        else{
            header.classList.remove('header_active');
        }
    }
}());

//Burger menu
(function(){
    let burgerMenu = document.querySelector('.header__nav');
    let burger = document.querySelector('.burger');
    let burgerMenuClose = document.querySelector('.header__nav-close');
    let burgerLink = document.querySelectorAll('.header__link');
    for(let i = 0; i<burgerLink.length; i++){
        burgerLink[i].addEventListener('click', () =>{
            burgerMenu.classList.remove('header__nav-active');
        })
    }
    burger.addEventListener('click', function () {
        burgerMenu.classList.add('header__nav-active');
    })
    burgerMenuClose.addEventListener('click', ()=>{
        burgerMenu.classList.remove('header__nav-active');
    })
}());

//Services animation
if (window.screen.width >= 1200){
let motionPath = MorphSVGPlugin.pathDataToBezier("#motionPath",{align:'.point'});
console.log(motionPath);
const pointPath = {
    curviness: 1.25,
    autorotate: true,
    type:"cubic",
    values: motionPath
}
TweenLite.set(".point", {xPercent:-50, yPercent:-50});
const tween = new TimelineLite();
tween.add(
    TweenLite.to(".point", 1,{
        bezier: pointPath
    })
);
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: ".services",
    duration: 2300,
    triggerHook: 0.3
})
    .setTween(tween)
    // .addIndicators()
    .addTo(controller);
}

// GOOGLE MAP
let map;
let addr = document.querySelectorAll('.contacts__card');
let add = document.querySelectorAll('.contacts__card-address');
let city = document.querySelectorAll('.contacts__card-city');
let iconBase = 'images/m.png';
let activeAdd;
let currentCity = document.querySelector('.contacts-current__title');
let currentAdd = document.querySelector('.contacts-current__address');
let locations = [
    {lat:34.052234, lng: -118.243685},
    {lat:40.712775, lng: -74.005973},
    {lat:42.3602534, lng: -71.0582912},
    {lat:42.331427, lng: -83.045754}
]

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.712775, lng: -74.005973},
        zoom: 10
    });

    for(let k=0; k<addr.length; k++){

        let marker = new google.maps.Marker({
            position: locations[k],
            map: map,
            icon: iconBase
        });

        addr[k].addEventListener('click', ()=>{


            activeAdd = document.querySelector('.contacts__card--active');
            activeAdd.classList.remove('contacts__card--active');
            addr[k].classList.add('contacts__card--active');
            currentCity.innerHTML = city[k].innerHTML;
            currentAdd.innerHTML = add[k].innerHTML;
            marker.position = new google.maps.LatLng(locations[k]);
            map.setCenter(locations[k]);

        })
    }
}


