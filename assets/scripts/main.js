// function getData(cb) {
//     var xhr = new XMLHttpRequest();

//     xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=f21c6b7c8c4e53536dd3c21d3c610573");
//     xhr.send();

//     xhr.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             cb(JSON.parse(this.responseText));
//         }
//     };
// }

// function printDataToConsole(data) {
//     console.log(data);ß
// }

// getData(printDataToConsole);

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
    }
};

xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=f21c6b7c8c4e53536dd3c21d3c610573");

xhr.send();