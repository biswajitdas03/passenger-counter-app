let count = 0;

const countValue = document.getElementById('count-value');
const incrementBtn = document.getElementById('increment-btn');
const resetBtn = document.getElementById('reset-btn');

console.log(countValue);

incrementBtn.addEventListener('click', function() {
    count++;
    countValue.textContent = count;
});

resetBtn.addEventListener('click', function() {
    count = 0;
    countValue.textContent = count;
});

// let count = 0;
// const countValue = document.getElementById('count-value');
// const incrementBtn = document.getElementById('increment-btn');
// const resetBtn = document.getElementById('reset-btn');

// incrementBtn.addEventListener('click',function() {
//     count++;
//     countValue.textContent = count;
// });
// resetBtn.addEventListener('click', function() {
//     count = 0;
//     countValue.textContent = count;
// });

