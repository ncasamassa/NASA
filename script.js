let currentDate = new Date();
let index = 0;
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

const fetchAPOD = (idx) => {
  currentDate.setDate(currentDate.getDate() - idx);
  let yyyy = currentDate.getFullYear();
  let mm = String(currentDate.getMonth() + 1).padStart(2, "0");
  let dd = String(currentDate.getDate()).padStart(2, "0");
  let formattedCurrentDate = `${yyyy}-${mm}-${dd}`;
  console.log(formattedCurrentDate);

  const apiKey = "bfvtqtEz8qnHxObZDIzLNxHPPqPtaPB33yRcajPM";
  const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${formattedCurrentDate}`;

  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      displayAPOD(data.url, data.title, data.explanation);
    })
    .catch((error) => console.error("Error fetching APOD:", error));
};

const displayAPOD = (imageUrl, title, explanation) => {
  const imageElement = document.createElement("img");
  imageElement.src = imageUrl;

  const titleElement = document.createElement("h2");
  titleElement.textContent = title;

  const explanationElement = document.createElement("p");
  explanationElement.textContent = explanation;

  const mainPictureContainer = document.getElementById("main-picture");
  mainPictureContainer.innerHTML = "";
  mainPictureContainer.appendChild(imageElement);
  mainPictureContainer.appendChild(titleElement);
  mainPictureContainer.appendChild(explanationElement);
};

fetchAPOD(index);
prevButton.addEventListener("click", () => fetchAPOD(index + 1));
nextButton.addEventListener("click", () => fetchAPOD(index - 1));
