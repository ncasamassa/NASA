let currentDate = new Date();
let yyyy = currentDate.getFullYear();
let mm = String(currentDate.getMonth() + 1).padStart(2, '0');
let dd = String(currentDate.getDate()).padStart(2, '0');
let formattedCurrentDate = `${yyyy}-${mm}-${dd}`;
let index = 0;
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

document.addEventListener("DOMContentLoaded", function () {
    fetchAPOD(formattedCurrentDate);
});

const fetchAPOD = (date) => {
    const apiKey = 'bfvtqtEz8qnHxObZDIzLNxHPPqPtaPB33yRcajPM';
    const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            displayAPOD(data.url, data.title, data.explanation);
        })
        .catch(error => console.error('Error fetching APOD:', error));
};

    const displayAPOD = (imageUrl, title, explanation) => {
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;

        const titleElement = document.createElement('h2');
        titleElement.textContent = title;

        const explanationElement = document.createElement('p');
        explanationElement.textContent = explanation;

        const mainPictureContainer = document.getElementById('main-picture');
        mainPictureContainer.innerHTML = '';
        mainPictureContainer.appendChild(imageElement);
        mainPictureContainer.appendChild(titleElement);
        mainPictureContainer.appendChild(explanationElement);

        index++;
        // updateNavigation();
    };

// const updateNavigation = () => {

        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - index);
        
        let yyyy2 = yesterday.getFullYear();
        let mm2 = String(yesterday.getMonth() + 1).padStart(2, '0');
        let dd2 = String(yesterday.getDate()).padStart(2, '0');
        
        let formattedYesterday = `${yyyy2}-${mm2}-${dd2}`;
        console.log(formattedYesterday)

        // let tomorrow = yesterday.setDate(yesterday.getDate() - (index - 1));
        
        // let yyyy2 = tomorrow.getFullYear();
        // let mm2 = String(tomorrow.getMonth() + 1).padStart(2, '0');
        // let dd2 = String(tomorrow.getDate()).padStart(2, '0');
        
        // let formattedTomorrow = `${yyyy2}-${mm2}-${dd2}`;

        prevButton.addEventListener('click', () => fetchAPOD(formattedYesterday));
        // nextButton.addEventListener('click', () => fetchAPOD(formattedTomorrow));

    // };