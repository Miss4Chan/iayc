const pricingSection = document.querySelector('.section-pricing__offers');
const pricingLocationTop = window.scrollY + pricingSection.getBoundingClientRect().top;


window.onscroll = (e) => {
    if(window.innerHeight + window.scrollY >= pricingLocationTop) {
        console.log('zdravo');
        pricingSection.classList.add('slidingAnimation');
    }
}