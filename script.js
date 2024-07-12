
const heading = document.querySelector('.heading');

let today = new Date();



// heading.textContent = today;
// heading.textContent = today.getSeconds();
// heading.textContent = today.getMinutes();
// heading.textContent = today.getHours();
// heading.textContent = today.getTime();            // milli seconds
// heading.textContent = today.getDate();            // day
// heading.textContent = today.getMonth();           // month
// heading.textContent = today.getFullYear();        // year
// heading.textContent = today.toLocaleDateString(); // 7/7/2024
// heading.textContent = today.toDateString();       // Sun Jul 07 2024
// heading.textContent = today.toLocaleTimeString(); // 11:22:01 AM
// heading.textContent = today.toTimeString();       // 11:23:08 GMT+0530 (India Standard Time)



// greeting
// let hours = today.getHours();

// if (hours >= 6 && hours < 12) {
//     heading.textContent = "Good Morning..!";
// } else if (hours >= 12 && hours < 4) {
//     heading.textContent = "Good Afternoon..!";
// } else {
//     heading.textContent = "Good Evening..!";
// }



// timer
// const timer = () => {
//     const timerFunction = new Date();

//     let hour = timerFunction.getHours();
//     let mins = String(timerFunction.getMinutes()).padStart(2, 0);
//     let seconds = String(timerFunction.getSeconds()).padStart(2, 0);

//     return `${hour} : ${mins} : ${seconds}`;
// }

// setInterval(() => {
//     heading.textContent = timer();
// }, 1000)




// like
// const likeIcon = document.querySelector('#icon');
// const clickBtn = document.querySelector('#likeBtn');

// likeIcon.src = "./heart.png"
// likeIcon.alt = "like";

// with click
// clickBtn.addEventListener('click', () => {
//     if (clickBtn.textContent === 'Like') {
//         likeIcon.src = './heart (1).png';
//         clickBtn.textContent = 'Unlike';
//     } else {
//         likeIcon.src = './heart.png';
//         clickBtn.textContent = 'Like';
//     }
// })

// with dblclick
// likeIcon.addEventListener('dblclick', () => {
//     if (likeIcon.alt === 'like') {
//         likeIcon.src = './heart (1).png';
//         likeIcon.alt = 'Unlike';
//     } else {
//         likeIcon.src = './heart.png';
//         likeIcon.alt = 'Like';
//     }
// })



