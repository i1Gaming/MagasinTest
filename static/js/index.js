import Swiper from '../../node_modules/swiper/swiper.mjs';

let swiperInstance;

function initSwiper() {
            
    if (window.innerWidth < 1024 && !swiperInstance) {
        swiperInstance = new Swiper('.swiper', {
            slidesPerView: 1.3,
            breakpoints: {
                768: {
                  slidesPerView: 2
                }
            }
        });
    } else if (window.innerWidth >= 1024 && swiperInstance) {
                
        swiperInstance.destroy(true, true);
        swiperInstance = undefined;
    }
}        

initSwiper();
        
window.addEventListener('resize', initSwiper);
