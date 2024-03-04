var compliments = document.querySelector(".compliments");

var compliments_list = [
  "comel", "cantik", "pog", "very cool!", "generous", "kind", "nice", "sweet"
]

const random = () => {
  return Math.floor(Math.random() * compliments_list.length);
}

setInterval(() => {
  compliments.innerHTML = compliments_list[random()]
}, 1000);