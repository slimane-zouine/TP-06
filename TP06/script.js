

const maDiv = document.createElement('div');
maDiv.id = 'maDiv'; 
document.body.appendChild(maDiv); 


const monParagraphe = document.createElement('p');
monParagraphe.textContent = ' safii KON HANII'; 
maDiv.appendChild(monParagraphe); 


monParagraphe.textContent = 'kteb chii HAJA ';


monParagraphe.style.backgroundColor = 'lightblue';
monParagraphe.style.textAlign = 'center';


maDiv.addEventListener('click', function() {
  monParagraphe.textContent = 'safii KON HANII';
});