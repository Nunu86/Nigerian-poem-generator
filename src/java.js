function displayResponse(response) {
  function check() {
    new Typewriter("#final", {
      strings: "Hope you enjoy the poem 🌷",
      autoStart: true,
      delay: 10,
    });
  }
  setTimeout(check, 1000);

  let bodyAttribute = document.querySelector("#bodyElement");
  bodyAttribute.innerHTML = response.data.answer;
}

function buttonElement(event) {
  event.preventDefault();

  let entry = document.querySelector("#example");

  let context = entry.value + `Display only the poem. Maximum of 80 words`;

  let prompt = "Tell me a Nigerian poem that is about";
  let apiKey = "8ab570aff7t8c4d757b9f03613oab792";
  let theLink = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(theLink).then(displayResponse);

  let processing = document.querySelector("#bodyElement");
  console.log(processing);
  processing.innerHTML = `One moment, fetching poem...`;

  let assignChange = document.querySelector(".sormElement");
  assignChange.classList.add("javaStyle");
}

let selectButton = document.querySelector("#formElement");
selectButton.addEventListener("submit", buttonElement);
