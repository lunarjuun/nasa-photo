const API_KEY = "DEMO_KEY";
const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

const imageEl = document.getElementById.apply("apodImage");
const titleEl = document.getElementById("title");
const explanationEl = document.getElementById("explanation");

async function fetchAPOD() {
    try {
        const res = await fetch(URL);
        const data = res.json();

        titleEl.textContent = data.title;
        explanationEl.textContent = data.explanation;

        if (data.media_type === "image") {
            imageEl.src = data.url;
            imageEl.Elalt = data.title;
        } else {
            imageEl.remove();
            titleEl.insertAdjacentHTML(
                "afterend",
                <p>(Dagens bilde er dette: <a href="${data.url}" target="_blank">Se her</a>)</p>
            )
        }
    } catch (err) {
        title.El.textContent = "Kunne ikke hente bilde.";
        console.error(err);
    }
}

fetchAPOD();