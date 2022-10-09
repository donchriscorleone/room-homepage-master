const body = document.querySelector('body');
const burger = document.querySelector('.btn-burger');
const next = document.querySelector('.button-control-next');
const prev = document.querySelector('.button-control-prev');
const header = document.querySelector('header');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavClose = document.querySelector('.btn-close');
const mainNav = document.querySelector('.nav');


const firstBlockTitle = document.querySelector('h1.block--title');
const firstBlockDescription = document.querySelector('p.block--description');

let isMobile = false;
let index = 0;

const texts = [
    {
        title: 'Discover innovative ways to decorate',
        imagePath: () => {
            return `url(./images/${isMobile ? 'mobile' : 'desktop'}-image-hero-1.jpg)`
        },
        desc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."},
    {
        title: 'We are available all across the globe',
        imagePath: () => {
            return `url(./images/${isMobile ? 'mobile' : 'desktop'}-image-hero-2.jpg)`
        },
        desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."},
    {
        title: 'Manufactured with the best materials',
        imagePath: () => {
            return `url(./images/${isMobile ? 'mobile' : 'desktop'}-image-hero-3.jpg)`
        },
        desc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."},
]


window.addEventListener('load', (e) => {
    isMobile = window.innerWidth < 1000;
    if (!isMobile) {
        mobileNav.classList.add('close');
        mainNav.classList.remove('display-none')
        body.classList.remove('bg-overlay');
    }

    updateElements(index);
})

window.addEventListener('resize', (e) => {
    isMobile = window.innerWidth < 1000;
    if (!isMobile) {
        mobileNav.classList.add('close');
        mainNav.classList.remove('display-none')
        body.classList.remove('bg-overlay');
    }
    updateElements(index);
})

next.addEventListener('click', (e) => {
    if (index === texts.length) index = 0;

    updateElements(index++);
})

prev.addEventListener('click', (e) => {
    if (index === 0) index = texts.length;

    updateElements(--index);
})

function updateElements(index) {
    const text = texts[index];
    header.style.backgroundImage = text.imagePath();
    firstBlockTitle.innerHTML = text.title;
    firstBlockDescription.innerHTML = text.desc;
}

burger.addEventListener('click', (e) => {
    const navClassList = mainNav.classList;
    const mobileNavClassList = mobileNav.classList;

    if (isMobile) {
        navClassList.add('display-none');
        mobileNavClassList.remove('close');
        body.classList.add('bg-overlay');
    }
})

mobileNavClose.addEventListener('click', (e) => {
    if (isMobile) {
        mainNav.classList.remove('display-none')
        mobileNav.classList.add('close')
        body.classList.remove('bg-overlay');
    }
})