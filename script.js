function toggleLocations() {
    var locationsList = document.getElementById('locations-list');
    if (locationsList.style.display === "none") {
        locationsList.style.display = "block";
    } else {
        locationsList.style.display = "none";
    }
}

function showLocation(location) {
    var locationImage = document.getElementById('location-image');
    var locationDescription = document.getElementById('location-description');
    
    switch(location) {
        case 'Головних вхід на територію університету':
            locationImage.src = "images/entrance.jpg";
            locationDescription.innerText = "Головний вхід на територію університету - це місце, через яке ви входите на територію університету.";
            break;
        case 'Парк':
            locationImage.src = "парк 1.jpg";
            locationDescription.innerText = "Парк на території університету - це мальовнича територія з деревами, квітами та альтанками, де можна відпочити та насолодитися природою.";
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
        case 'Головна площа':
            locationImage.src = "центр.jpg";
            locationDescription.innerText = "Головна площа університету - це центральне місце на території університету, де проводяться різні заходи та заходи.";
            break;
        
    }
}

function goToHome() {
    window.location.href = "index.html";
}

function goToSocialMedia() {
    window.location.href = "https://www.kspu.edu/";
}
