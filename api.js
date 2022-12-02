document.querySelector('button').addEventListener('click', (data) => {
    let myParrafo = document.querySelector('p');

    fetch('https://uselessfacts.jsph.pl/random.json?language=en')
       .then(response => response.json())
       .then(data => {
          myParrafo.innerText = data.text;
       });
});