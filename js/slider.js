var testiomnialData = [
    {
        avatar: "img/slider/slider1.svg",
        name: "Установка освітлення, монтажні роботи",
    },
    {
        avatar: "img/slider/slider2.svg",
        name: "Установка освітлення, монтажні роботи",
        
    },
    {
        avatar: "img/slider/slider3.svg",
        name: "Установка освітлення, монтажні роботи",
        
    },
    {
        avatar: "img/slider/slider4.svg",
        name: "Установка освітлення, монтажні роботи",
    },
    {
        avatar: "img/slider/slider5.svg",
        name: "Установка освітлення, монтажні роботи",
    },
    {
        avatar: "img/slider/slider3.svg",
        name: "Установка освітлення, монтажні роботи",
    }, {
        avatar: "img/slider/slider2.svg",
        name: "Установка освітлення, монтажні роботи",
    }]

const slideHolder = document.querySelector("#slideHolder")
for (let i of testiomnialData) slideHolder.innerHTML += `<div class="swiper-slide"> <div class="ImgHolder"><img src="${i.avatar}"></div><p class="ContentHolder main__slide-text">${i.name}</p></div>`

const swiper = new Swiper('#craouselContainer', {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2.3,
    loop: true,
    spaceBetween: 30,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        depth: 700,
        slideShadows: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    //autoplay: { delay: 5000 }
});
window.onresize = queryResizer
queryResizer()
function queryResizer() {
if (window.innerWidth < 990) swiper.params.slidesPerView = 2
if (window.innerWidth > 501) swiper.params.slidesPerView = 2
if (window.innerWidth > 990) swiper.params.slidesPerView = 2.3
if (window.innerWidth < 501) swiper.params.slidesPerView = 1
swiper.update() 
} 