(function(){

    let btn = document.querySelector("#mon_bouton");
    let elBoite__modale = document.createElement('div');
    elBoite__modale.classList.add('boite__modale');
    elBody = document.querySelector('body');
    elBody.appendChild(elBoite__modale);

    //document.querySelector('.boite__modale');
    
    
    btn.addEventListener("mousedown", function(){
        console.log("Bravo, le script fonctionne");
    })
})()