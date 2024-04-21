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






