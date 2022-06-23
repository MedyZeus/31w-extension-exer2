(function(){

    let elBoite__modale;
    let elBoite__X;

    function creerBoiteModale() {
        elBoite__modale = document.createElement('div');
        elBoite__X = document.createElement('button');
        elBoite__X.classList.add('boite__x');
        elBoite__modale.appendChild(elBoite__X);
        
        elBoite__X.innerHTML = "X";

        elBoite__modale.classList.add('boite__modale');
        elBody = document.querySelector('body');
        elBody.appendChild(elBoite__modale);
    }

    creerBoiteModale();

    let btn = document.querySelector("#mon_bouton");
    //document.querySelector('.boite__modale');
    
    btn.addEventListener("mousedown", function(){
        console.log("Bravo, le script fonctionne");
        elBoite__modale.classList.add('boite__modale__ouvrir');
    })

    elBoite__X.addEventListener('mousedown', function(){
        elBoite__modale.classList.remove('boite__modale__ouvrir');
    })

})()