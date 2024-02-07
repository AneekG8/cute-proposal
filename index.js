const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const dummyBtn = document.getElementById("dummyBtn");
const image = document.getElementById("image");
const text = document.getElementById("text");

noBtn.addEventListener("mouseover", () => {
  noBtn.style.top = `${(Math.random() * 100) % 90}%`;
  noBtn.style.left = `${(Math.random() * 100) % 90}%`;
  dummyBtn.style.display = "none";
});

yesBtn.addEventListener("click", () => {
  image.setAttribute("src", "happy.gif");
  text.innerHTML = "Happy Propose Day!";
  text.style.transform = "translateY(-325px)";
  text.style.transition = "transform 2.5s";
  text.style.fontSize = "34px";
  document.body.style.backgroundImage = "https://i.gifer.com/Sn5.gif";
  document.getElementById("background").style.display = "block";
});
