function newGame(option) {
    resetGame();
    let gameElement = document.getElementById('game');
    if (gameElement) {
    removeClass(gameElement, 'over');
    }
    const selectedElement = document.querySelector('div.option-element a.mode.time.white');
    let option1 = true; // straadaa kad ir true 
    let option2 = false;// cita lieta ir jadara tur
    let option3 = false;
    

    if (option === "numbers") {
        const totalWords = 160; // Approximately 160 words
        const totalNumbers = 40; // Approximately 40 numbers
        const content = [];
      
        for (let i = 0; i < totalWords + totalNumbers; i++) {
          if (i < totalWords) {
            content.push(formatWord(randomWord()));
          } else {
            content.push(formatWord(randomNumber()));
          }
        }
      
        // Shuffle the content
        shuffleArray(content);
      
        const wordsElement = document.getElementById('words');
        wordsElement.innerHTML = ''; // Clear the existing content
      
        for (const item of content) {
          wordsElement.innerHTML += item;
        }
      
        addClass(document.querySelector('.word'), 'current');
        addClass(document.querySelector('.letter'), 'current');
      }
    else if (option === "punctuation") {
        const totalWords = 160; // Approximately 160 words
        const totalPunctuation = 40; // Approximately 40 punctuation marks
        const content = [];
      
        for (let i = 0; i < totalWords + totalPunctuation; i++) {
          if (i < totalWords) {
            content.push(formatWord(randomWord()));
          } else {
            content.push(formatWord(addRandomPunctuation(randomWord())));
          }
        }
      
        // Shuffle the content
        shuffleArray(content);
      
        const wordsElement = document.getElementById('words');
        wordsElement.innerHTML = ''; // Clear the existing content
      
        for (const item of content) {
          wordsElement.innerHTML += item;
        }
      
        addClass(document.querySelector('.word'), 'current');
        addClass(document.querySelector('.letter'), 'current');
    }
    

    else{
        document.getElementById('words').innerHTML = '';
        for (let i = 0; i < 200; i++) {
            document.getElementById('words').innerHTML += formatWord(randomWord());
        }
        addClass(document.querySelector('.word'), 'current');
        addClass(document.querySelector('.letter'), 'current');
    }

    
    // Move the cursor to the left of the first letter when starting a new game.
    const cursor = document.getElementById('cursor');
    const firstLetter = document.querySelector('.letter.current');
    document.getElementById('timer').innerHTML = (gameTime / 1000) + '';
    window.timer = null;
    if (firstLetter) {
        cursor.style.top = firstLetter.getBoundingClientRect().top + 2 + 'px';
        cursor.style.left = firstLetter.getBoundingClientRect().left + 'px';
    }

}