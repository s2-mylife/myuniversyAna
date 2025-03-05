

let config = {
    "man": "Thiago",
    "woman": "Ana",
    "first_message": "Formulando...",
    "second_message": "Formulando ... <span class='heart'>❤️</span>",
  };
 
let images = [
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
  ];
  





// FUNCTIONS


document.addEventListener("DOMContentLoaded", () => {
    // Selecionar o parágrafo com o atributo 'first="message"'
    const couple = document.querySelector('h1[couple="name"]');
    const romantictext = document.querySelector('p[first="message"]');
    const message = document.querySelector('p[second="message"]');
  
    couple.innerHTML = config.man + " & " + config.woman;
    romantictext.textContent = config.first_message;
    message.innerHTML = config.second_message;
  });
