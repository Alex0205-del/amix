const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('ME REGUSTAS\n COMO NO TE LO IMAGINAS')
    alert("NECESITABA CONFESARTELO")
    alert("PERO NO PASA NADA SI NO ES MUTUO")
    alert("PODEMOS SEGUIR SIENDO AMIGOS")
    alert("SOLO QUERIA QUE LO SUPIERAS")
    alert("NO PODIA ESTAR EL RESTO DE MI VIDA SIN CONFESARTELO")
    alert("ESPERO TU RESPUESTA ")
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})