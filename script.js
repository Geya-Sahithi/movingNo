const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, see you on the 1st of December!";
  gif.src =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWFydWxraXY1NmxiMzd5dWFjY2o3NXo1aW5xbmZra3E1ZnFzdHJ4cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RPSXdpgvKh7d3FOvFo/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
