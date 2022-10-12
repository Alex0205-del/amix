const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('sabia que dirias que si')
    alert("solo pasaba para recordarte\nque eres espectacular")
    alert("que sin ti muchas cosas de mi vida dejarian de tener sentido")
    alert("cada ves que te sientas angustiada y frustrada de la vida\naqui hay alguien que siempre te apoyará")
    alert("cada ves que sientas que no puedes mas\n entra a este link")
    alert("para q recuerdes lo valiosa que eres")
    alert("no como un diamante\nhay planetas enteros hechos de diamante")
    alert("sino como la madera\núnica en el universo")
    alert("eres fuerte\nmucho más de lo que tu crees")
    alert("no tienes idea de lo afortunado que me siento\npor tenerte en mi vida")
    alert("no puedo ofrecerte mucho\n y se que no soy la mejor persona\npero soy el que sin duda alguna\ncorreria encontra de todo\npara ir a verte triunfar")
    alert("aqui andamos")
    alert("joder\nmucho texto")
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
