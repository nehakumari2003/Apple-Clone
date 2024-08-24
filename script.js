const imgs = document.getElementById('imgs');
const img = document.querySelectorAll('#imgs img');

let idx = 0;

let interval = setInterval(run, 3000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  const imgWidth = img[0].clientWidth;

  imgs.style.width = `${img.length * imgWidth}px`;

  imgs.style.transform = `translateX(${-idx * imgWidth}px)`;
 
}


function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 3000);
}
