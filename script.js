var right = document.querySelector("#right");
var left = document.querySelector("#left");
var nameid = document.querySelector("#name");
var emailid = document.querySelector("#email");
var img = document.querySelector("img");

var count = 0;
var currentIndex = -1;
var dataStore = [];

function displayUserData(index) {
    var userData = dataStore[index];
    img.src = userData.imgsrc;
    nameid.textContent = `Name: ${userData.name}`;
    emailid.textContent = `Email: ${userData.email}`;
}

right.addEventListener("click", function() {
    fetch('https://randomuser.me/api/')
        .then(data => data.json())
        .then(result => {
            var user = {
                name: result.results[0].name.first,
                imgsrc: result.results[0].picture.large,
                email: result.results[0].email
            };

            dataStore.push(user);
            currentIndex++;
            displayUserData(currentIndex);
        });

    count++;
});

left.addEventListener("click", function() {
    if (currentIndex > 0) {
        currentIndex--;
        displayUserData(currentIndex);
    } else {
        alert("No previous data available. Please move forward first.");
    }
});
55