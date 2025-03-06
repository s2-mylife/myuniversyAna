

let config = {
    "man": "Thiago",
    "woman": "Ana",
    "first_message": "Nos conhecemos há pouco tempo, mas a conexão que senti com você foi especial. Você é cuidadosa, carismática, tímida e ao mesmo tempo sapeca—qualidades que me encantam cada vez mais. Não sei explicar, mas há algo em você que me faz querer estar por perto. Será que foi você que o Papai do Céu colocou no meu caminho? E eu no seu? O tempo dirá.<br>Não sou de me deixar levar facilmente, mas bastou um único encontro para o seu jeito doce e tímido conquistar meu coração. Talvez seja cedo, talvez seja apenas o começo de algo bonito. Com toda sinceridade do mundo, digo que estou disposto a fazer nascer algo verdadeiro entre nós. Se formos feitos um para o outro, que seja para sempre. Mas se nossos caminhos forem diferentes, quero ser, ao menos, uma lembrança boa do seu passado. ❤️",
    "second_message": "Com toda a sinceridade e emoção, desejo fazer de você minha para a eternidade. <span class='heart'>❤️</span>",
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
