fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  .then(response => response.json())
  .then(data => {
    document.getElementById("title").textContent = data.title;
    document.getElementById("image").src = data.url;
    document.getElementById("description").textContent = data.explanation;
  });


document.addEventListener('DOMContentLoaded', function() {
    const fontChangerBtn = document.getElementById('fontChangerBtn');
    const body = document.body;

    fontChangerBtn.addEventListener('click', function() {
        body.classList.toggle('sans');
        fontChangerBtn.textContent = body.classList.contains('sans') 
            ? "Mansalva version" 
            : "Standard text version";
    });
});