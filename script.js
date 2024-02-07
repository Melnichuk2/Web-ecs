
function showLocation(location) {
    var locationImage = document.getElementById('location-image');
    var locationDescription = document.getElementById('location-description');
    
    switch(location) {
        case 'Парк':
            locationImage.src = "jpg/парк 1.jpg";
            locationDescription.innerText = "Парк на території університету - це мальовнича територія з деревами, квітами та альтанками, де можна відпочити та насолодитися природою.";
            break;
        case 'Фонтан':
            locationImage.src = "jpg/фонтан.jpg";
            locationDescription.innerText = "Басейн на території університету - це спортивний комплекс з басейном для плавання та різноманітних водних розваг.";
            break;     
        case 'Університет':
            locationImage.src = "images/football_stadium.jpg";
            locationDescription.innerText = "Херсонський Державний Університет - найбільш відомий інститут Херсонської області. Один з найстаріших ВНЗ на півдні в Україні. Готує спеціалістів з 51 спеціальностей. Це вчителі з усіх предметів, що вивчаються в школі, вихователі дитячих закладів, інженери-педагоги, юристи, економісти, екологи, психологи, наукові співробітники, соціальні працівники, журналісти, перекладачі та ін. Професорсько-викладацький колектив складається з професорів, 58 докторів наук, 333 доцентів, кандидатів наук, 105 старших викладачів, асистентів."
            "Серед викладачів університету є почесні академіки українських і міжнародних галузевих академій, майже 40 вчених мають почесні звання у сферах професійної діяльності, зокрема народні художники й артисти, заслужені художники та тренери України, заслужені працівники в галузях освіти, науки і техники, економіки, юриспруденції, культури тощо. ";
            break;
        case 'Вхід до ліцею':
            locationImage.src = "jpg/ліцей.jpg";
            locationDescription.innerText = "Вхід до Херсонського академічного ліцею ім.О.В.Мішукова";
            break;
        case 'Центральна площа':
            locationImage.src = "jpg/центр.jpg";
            locationDescription.innerText = "Головна площа університету - це центральне місце на території університету, де проводяться різні заходи та заходи.";
            break;
        case 'Спортивний майданчик':
            locationImage.src = "jpg/спорт.jpg";
            locationDescription.innerText = "Спортивний майданчик для молоді ";
            break;   
        case 'Вхід до':
            locationImage.src = "jpg/вхідхду.jpg";
            locationDescription.innerText = "Головний вхід до уорпусу університету ";
            break;      
         
       
    }
}

function goToHome() {
    window.location.href = "index.html";
}

function goToSocialMedia() {
    
    window.location.href = "https://www.kspu.edu/";
}
