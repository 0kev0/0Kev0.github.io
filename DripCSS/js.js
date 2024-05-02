const gradienteMouse = document.getElementById('welcome');

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
//trakea posicion del mouse
    const percentX = (mouseX / window.innerWidth) * 100;
    const percentY = (mouseY / window.innerHeight) * 100;

    gradienteMouse.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgb(146, 144, 195), rgb(62, 6, 95))`;
});

const gradienteMouse_bento = document.getElementById('bento');

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const percentX = (mouseX / window.innerWidth) * 100;
    const percentY = (mouseY / window.innerHeight) * 100;

    gradienteMouse_bento.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%,rgb(62, 6, 95), rgb(112, 11, 151), rgb(142, 5, 194)`;
});

const gradienteMouse_bentoA = document.getElementById('bentoA');

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const percentX = (mouseX / window.innerWidth) * 100;
    const percentY = (mouseY / window.innerHeight) * 100;

    gradienteMouse_bentoA.style.boxShadow = ` 1px 1px radial-gradient(circle at ${percentX}% ${percentY}%,rgb(62, 6, 95), rgb(112, 11, 151), rgb(142, 5, 194)`;
});

function nav() {
    var side = document.getElementById('sidebar');
    if (side.style.display === 'none' || side.style.display === '') {
        side.style.display = 'block';
    } else {
        side.style.display = 'none';
    }
}

function copyCodeToClipboard() {
    var codeElements = document.querySelectorAll("p.t3");
    var code = "";
    codeElements.forEach(function(element) {
        code += element.textContent.trim() + "\n";
    });

    var tempInput = document.createElement("textarea");
    tempInput.value = code;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    var successAlert = document.getElementById("success-alert");
    successAlert.style.display = "block";
    setTimeout(function() {
        successAlert.style.display = "none";
    }, 2000);
}

function ocultar(){
    var x = document.getElementById('sidebar');
    x.style.display="none"
}

function menu() {
    var items = document.querySelectorAll("a.item");
    for (var i = 0; i < items.length; i++) {
        if (items[i].style.display === "none") {
            items[i].style.display = "block"; // o el estilo que corresponda
        } else {
            items[i].style.display = "none";
        }
    }
}