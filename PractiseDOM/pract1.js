function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));

    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }

    return "";
}

function deleteCookie(cname) {
    document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
}

var button = document.getElementById('button');
var inisession = getCookie("name");

if(inisession){
    document.getElementById("welcomeMessage").innerText = "¡Bienvenido, " + inisession + "!";
} 

button.addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    if (!name) {
        console.log("Por favor, introduce un nombre válido.");
    } else {
        if (inisession === name) {
            console.log("El nombre ingresado ya está guardado.");
            return;
        }
        setCookie('name', name, 7);
        location.reload();
    }
}); 
