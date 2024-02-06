function toggleLocations() {
    var locationsToggle = document.getElementById('park-toggle','academy-toggle','university-toggle');
    if (locationsList.style.display === "none") {
        locationsList.style.display = "block";
    } else {
        locationsList.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var parkToggle = document.getElementById('park-toggle');
    var universityToggle = document.getElementById('university-toggle');
    var academyToggle = document.getElementById('academy-toggle');
    var locationsList = document.getElementById('location-list');

    parkToggle.addEventListener('mouseenter', function() {
        locationsList.classList.remove('hidden');
    });

    universityToggle.addEventListener('mouseenter', function() {
        locationsList.classList.remove('hidden');
    });

    academyToggle.addEventListener('mouseenter', function() {
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
        case 'Головних вхід на територію університету':
            locationImage.src = "images/entrance.jpg";
            locationDescription.innerText = "Головний вхід на територію університету - це місце, через яке ви входите на територію університету.";
            break;
        case 'Басейн':
            locationImage.src = "басейн.jpg";
            locationDescription.innerText = "Басейн на території університету - це спортивний комплекс з басейном для плавання та різноманітних водних розваг.";
            break;
        case 'Міні футбольний стадіон':
            locationImage.src = "images/football_stadium.jpg";
            locationDescription.innerText = "Міні футбольний стадіон - це спортивний майданчик для ігор у футбол на невеликому масштабі.";
            break;
        case 'Вхід до Херсонського академічног ліцею ім.О.В.Мішукова':
            locationImage.src = "ліцей.jpg";
            locationDescription.innerText = "Херсонський академічний ліцей ім.О.В.Мішукова";
            break;
        case 'Фонтан':
            locationImage.src = "ліцей.jpg";
            locationDescription.innerText = "Фонтан";
            break;
        case 'Бібліотека':
            locationImage.src = "ліцей.jpg";
            locationDescription.innerText = "Бібліотека";
            break;
        case 'Розягальня':
            locationImage.src = "ліцей.jpg";
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
