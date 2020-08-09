document.getElementById("get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
    const number = document.getElementById("number").value;
    console.log(number);

    const xhr = new XMLHttpRequest;

    xhr.open("GET", `https://api.icndb.com/jokes/random/${number}`, true)

    xhr.onload = function () {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);

            let output = '';

            console.log(response);

            response.value.forEach(function (joke) {
                output += `<li> ${joke.joke} </li>`;
            });

            document.getElementById("list").innerHTML = output;
        }
    }

    xhr.send();

    e.preventDefault();
}