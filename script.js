function dayTime() {
  document.getElementById('home').src = "day.jpg";
  document.getElementById('message').innerText = "It's day time";
  document.body.style.backgroundColor = "#f0f0f0"; 
}

function nightTime() {
  document.getElementById('home').src = "night.jpg";
  document.getElementById('message').innerText = "It's night time";
  document.body.style.backgroundColor = 	"#87CEFA";
}
