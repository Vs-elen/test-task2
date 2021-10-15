// // Решение в 7 строк:

// let row = document.querySelector('.row');

// function alignHeight() {
//   row.style.display = 'flex'
//   row.style.flexWrap = 'wrap'
// }

// alignHeight()
// window.addEventListener('resize', alignHeight);

let cards = document.querySelectorAll('.col-lg-3');
let cardsArray = [];
let windowWidth = window.innerWidth;


cards.forEach(item => {
    cardsArray.push(item);
})

function divideArr(length, array) {
    let dividedArrays = [];
    for (let i = 0; i < (array.length); i += length) {
        dividedArrays.push(array.slice(i, i + length));
    }
    return dividedArrays;
}

function evenHights(rowLength, cards) {
    let dividedArray = divideArr(rowLength, cards);

    dividedArray.forEach(array => {
        let maxHeight = 0;
        array.forEach(item => {
            item.style.height = 'auto';
        });

        array.forEach(item => {
            if (item.clientHeight > maxHeight) {
                maxHeight = item.clientHeight;
            }
        });

        array.forEach(item => {
            if ((windowWidth > 990 && windowWidth < 1200) || windowWidth >= 1200) {
                item.style.height = maxHeight + 'px';
            } 
        });
    });
}



function screenResize() {
    windowWidth = window.innerWidth;

    if (windowWidth > 990 && windowWidth < 1200) {
        evenHights(3, cardsArray);
    } else if (windowWidth >= 1200) {
        evenHights(4, cardsArray);
    } else {
        evenHights(2, cardsArray);
    }
}

screenResize();
window.addEventListener('resize', screenResize);
