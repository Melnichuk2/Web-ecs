function toggleLocations() {
    var locationsToggle = document.getElementById('park-toggle','academy-toggle','university-toggle');
    if (locationsList.style.display === "none") {
        locationsList.style.display = "block";
    } else {
        locationsList.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var locationsToggle = document.getElementById('locations-toggle');
    var locationsList = document.getElementById('location-list');

    locationsToggle.addEventListener('mouseenter', function() {
        locationsList.classList.remove('hidden');
    });

    locationsList.addEventListener('mouseleave', function() {
        locationsList.classList.add('hidden');
    });

});


function showLocation(location) {
    var locationImage = document.getElementById('location-image');
    var locationDescription = document.getElementById('location-description');
    
    switch(location) {
        case 'Басейн':
            locationImage.src = "басейн.jpg";
            locationDescription.innerText = "Басейн на території університету - це спортивний комплекс з басейном для плавання та різноманітних водних розваг.";
            break;
        case 'Ліцей':
            locationImage.src = "ліцей.jpg";
            locationDescription.innerText = "Херсонський академічний ліцей ім.О.В.Мішукова";
            break;
        case 'Фонтан':
            locationImage.src = "дддд.jpg";
            locationDescription.innerText = "Фонтан";
            break;
        case 'Бібліотека':
            locationImage.src = "шшшш.jpg";
            locationDescription.innerText = "Бібліотека";
            break;
        case 'Розягальня':
            locationImage.src = "ооо.jpg";
            locationDescription.innerText = "Роздягальня";
            break;    
       
    }

}

function goToHome() {
    window.location.href = "index.html";
}

function goToSocialMedia() {
    
    window.location.href = "https://www.kspu.edu/";
}
