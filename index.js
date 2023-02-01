// input element
const inputEL = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");

async function fetchAPI(word) {
  try {
    infoTextEl.innerText = `Searching the meaning of ${word}`;
    console.log(word);
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url).then((res) => res.json());
    console.log(result);

    infoTextEl.style.display = "none";
    meaningContainerEl.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}

inputEL.addEventListener("keyup", (e) => {
  //   console.log(e.target.value);
  if (e.target.value && e.key === "Enter") {
    fetchAPI(e.target.value);
  }
});
