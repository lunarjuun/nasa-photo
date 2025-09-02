let currentDate = new Date(); // defaults to today

function formatDate(date) {
  return date.toISOString().split("T")[0]; // YYYY-MM-DD
}

function fetchApod(date) {
  fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("title").textContent = data.title;
      document.getElementById("image").src = data.url;
      document.getElementById("description").textContent = data.explanation;
      document.getElementById("date").textContent = `Date: ${data.date}`;
    })
    .catch(err => console.error("Error fetching APOD:", err));

    const imageEl = document.getElementById("image");
    const videoEl = document.getElementById("video");

    if  (data.media_type === "image") {
      imageEl.src = data.url;
      imageEl.style.display = "block";
      videoEl.style.display = "none";
  } else if (data.media_type === "video") {
      videoEl.src = data.url;
      imageEl.style.display = "block";
      videoEl.style.display = "none";
  }
}

// switch to previous day

document.getElementById("prevBtn").addEventListener("click", () => {
  currentDate.setDate(currentDate.getDate() - 1);
  fetchApod(formatDate(currentDate));
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentDate.setDate(currentDate.getDate() + 1);
  fetchApod(formatDate(currentDate));
});

// switch to next day

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

fetchApod(formatDate(currentDate));