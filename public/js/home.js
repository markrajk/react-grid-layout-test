
//HOME PAGE PEOPLE SLIDER
let peopleSlides = document.querySelectorAll('.content-card-main .people');
let peopleSlidesTriggers = document.querySelectorAll('.content-card-main .people-arrow')
let peopleSlidesTriggerLeft = document.querySelector('.content-card-main .people-arrow.left')
let peopleSlidesTriggerRight = document.querySelector('.content-card-main .people-arrow.right')


if (peopleSlides.length <= 1 && peopleSlides.length) {
    peopleSlidesTriggerLeft.style.display = 'none';
    peopleSlidesTriggerRight.style.display = 'none';
}

peopleSlidesTriggers.forEach((e,i,arr) => {
    e.addEventListener('click', function() {
        let activeSlide = document.querySelector('.content-card-main .people.active');
        let currentIndex = parseInt(activeSlide.getAttribute("slide").split("-")[1]);

        if(this.classList.contains('right')) {
            activeSlide.style.animation = "slide-out-left .7s ease-in-out";
            activeSlide.classList.remove("active");
            //console.log(peopleSlides[currentIndex])
            peopleSlides[currentIndex].classList.add("active");
            peopleSlides[currentIndex].style.animation = "slide-in-left .7s ease-in-out";

            activeSlide = peopleSlides[currentIndex];
            currentIndex = parseInt(activeSlide.getAttribute("slide").split("-")[1]);

            console.log(activeSlide, currentIndex, peopleSlides.length)
            if(currentIndex >= peopleSlides.length) {
                peopleSlidesTriggerRight.style.display = "none";
                peopleSlidesTriggerLeft.style.display = "block";
            }

        }else {
            console.log(activeSlide, currentIndex, peopleSlides.length)
            activeSlide.style.animation = "slide-out-right .7s ease-in-out";
            activeSlide.classList.remove("active");
            //console.log(peopleSlides[currentIndex])
            peopleSlides[currentIndex -2].classList.add("active");
            peopleSlides[currentIndex -2].style.animation = "slide-in-right .7s ease-in-out";

            activeSlide = peopleSlides[currentIndex -2];
            currentIndex = parseInt(activeSlide.getAttribute("slide").split("-")[1]);

            console.log(activeSlide, currentIndex, peopleSlides.length)
            if(currentIndex <= 1) {
                peopleSlidesTriggerLeft.style.display = "none";
                peopleSlidesTriggerRight.style.display = "block";
            }
        }
    })
})

