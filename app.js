let validation_key, element = document.getElementById('key');
let form = document.getElementById('form');
let error = document.getElementById('error');

if (element != null) {
    validation_key = element;
}

form.addEventListener('submit', (e) => {
        let messages = [];
        if(validation_key.value !== "265nh43aar39o9p00tz5er678sd9q") {
            messages.push('Wrong validation key');
        }
        if(messages.length > 0) {
            e.preventDefault();
            error.innerText = messages;
        }
});
