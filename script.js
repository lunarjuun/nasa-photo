



























































// const API_KEY = "DEMO_KEY";
// const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

// const imageEl = document.getElementById("apodImage");
// const titleEl = document.getElementById("title");
// const explanationEl = document.getElementById("explanation");

// async function fetchAPOD() {
//   try {
//     const res = await fetch(url);
//     const data = await res.json();

//     if (data.media_type === "image") {
//       // 👉 bilde
//       titleEl.textContent = data.title;
//       explanationEl.textContent = data.explanation;
//       imageEl.src = data.url;
//       imageEl.alt = data.title;
//       imageEl.hidden = false;
//     } else {
//       // 👉 video
//       titleEl.textContent = "Ingen bilde i dag 😢";
//       explanationEl.innerHTML = `Dagens APOD er en video: <a href="https://apod.nasa.gov/apod/astropix.html" target="_blank">Se her</a>`;
//       imageEl.hidden = true;
//     } 
//   } catch (err) {
//     titleEl.textContent = "Kunne ikke hente bilde 😢";
//     console.error(err);
//   }
// }

// fetchAPOD();
