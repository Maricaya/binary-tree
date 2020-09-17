// https://wancheng7.github.io/post/5590b762.html#more
// rem 适配方案
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
let htmlDOM = document.getElementsByTagName('html')[0];
htmlDOM.style.fontSize = htmlWidth / 7.5 + 'px';

window.addEventListener('resize', (e) => {
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  htmlDOM.style.fontSize = htmlWidth / 7.5 + 'px';
})
