const division = document.querySelector('.division');
const AllLi = document.querySelectorAll('li');
const indicator = document.querySelector('.indicator');

AllLi.forEach( (li, index) => {

    li.addEventListener('click', () => {
        division.querySelector('.active-list').classList.remove('active-list');
        li.classList.add('active-list');

        indicator.style.transform = `translateX(calc(${index * 90}px))`
    })

})