const displayIP = document.querySelector('#ip-address');

fetch('https://api.ipify.org/?format=json')
    .then((response) => response.json())
    .then((json) => {
        displayIP.value = json.ip;
    });
