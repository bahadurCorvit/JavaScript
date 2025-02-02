function searchWord() {
  let word = document.getElementById("wordInput").value;
  let resultDiv = document.getElementById("result");

  if (word === "") {
    resultDiv.innerHTML = "<p class='text-danger'>Please enter a word.</p>";
    return;
  }

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.title) {
        resultDiv.innerHTML = `<p class='text-danger'>Word not found.</p>`;
      } else {
        let definition = data[0].meanings[0].definitions[0].definition;
        resultDiv.innerHTML = `<p><strong>Definition:</strong> ${definition}</p>`;
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      resultDiv.innerHTML = `<p class='text-danger'>Something went wrong. Try again.</p>`;
    });
}
