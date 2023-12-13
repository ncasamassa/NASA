document.addEventListener("DOMContentLoaded", function () {
    const apiKey = 'bfvtqtEz8qnHxObZDIzLNxHPPqPtaPB33yRcajPM';
    let currentDate = new Date();
    
   const fetchAPOD = (date) => {
    const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

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

        updateNavigation();
    };

    // const updateNavigation = () => {
    //     const prevButton = document.getElementById('prevButton');
    //     const nextButton = document.getElementById('nextButton');

    //     let yesterday = new Date();
    //     yesterday.setDate(yesterday.getDate() - 1);

    //     prevButton.addEventListener('click', () => fetchAPOD(yesterday));
    //     nextButton.addEventListener('click', () => fetchAPOD(currentDate));

    //     console.log(yesterday);
    //     console.log(currentDate);
    // };

    fetchAPOD(currentDate);
});
