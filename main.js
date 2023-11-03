const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');
const episodes = document.querySelectorAll('.episode')

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 100);
        }
    })
})

/*episodes.forEach((episode, i) => {
    episodes.addEventListener('click', () => {
        episode.classList.add('active');
    })
})*/