document.getElementById('game').addEventListener('keyup', ev => {
    const key = ev.key;
    const currentWord = document.querySelector('.word.current');
    const currentLetter = document.querySelector('.letter.current');
    const expected = currentLetter?.innerHTML || ' ';
    const isLetter = key.length === 1 && key !== ' ';
    const isSpace = key === ' ';
    const isBackspace = key === 'Backspace';
    const isFirstLetter = currentLetter === currentWord.firstChild;
  
    if (document.querySelector('#game.over')) {
      return;
    }
  
    console.log({key,expected});
  
    if (!window.timer && isLetter) {
      window.timer = setInterval(() => {
        if (!window.gameStart) {
          window.gameStart = (new Date()).getTime();
        }
        const currentTime = (new Date()).getTime();
        const msPassed = currentTime - window.gameStart;
        const sPassed = Math.round(msPassed / 1000);
        const sLeft = Math.round((gameTime / 1000) - sPassed);
        if (sLeft <= 0) {
          gameOver();
          return;
        }
        document.getElementById('info').innerHTML = sLeft + '';
      }, 1000);
    }
  
    if (isLetter) {
      if (currentLetter) {
        addClass(currentLetter, key === expected ? 'correct' : 'incorrect');
        removeClass(currentLetter, 'current');
        if (currentLetter.nextSibling) {
          addClass(currentLetter.nextSibling, 'current');
        }
      } else {
        const incorrectLetter = document.createElement('span');
        incorrectLetter.innerHTML = key;
        incorrectLetter.className = 'letter incorrect extra';
        currentWord.appendChild(incorrectLetter);
      }
    }
  
    if (isSpace) {
      if (expected !== ' ') {
        const lettersToInvalidate = [...document.querySelectorAll('.word.current .letter:not(.correct)')];
        lettersToInvalidate.forEach(letter => {
          addClass(letter, 'incorrect');
        });
      }
      removeClass(currentWord, 'current');
      addClass(currentWord.nextSibling, 'current');
      if (currentLetter) {
        removeClass(currentLetter, 'current');
      }
      addClass(currentWord.nextSibling.firstChild, 'current');
    }
  
    if (isBackspace) {
      if (currentLetter && isFirstLetter) {
        // make prev word current, last letter current
        removeClass(currentWord, 'current');
        addClass(currentWord.previousSibling, 'current');
        removeClass(currentLetter, 'current');
        addClass(currentWord.previousSibling.lastChild, 'current');
        removeClass(currentWord.previousSibling.lastChild, 'incorrect');
        removeClass(currentWord.previousSibling.lastChild, 'correct');
      }
      if (currentLetter && !isFirstLetter) {
        // move back one letter, invalidate letter
        removeClass(currentLetter, 'current');
        addClass(currentLetter.previousSibling, 'current');
        removeClass(currentLetter.previousSibling, 'incorrect');
        removeClass(currentLetter.previousSibling, 'correct');
      }
      if (!currentLetter) {
        addClass(currentWord.lastChild, 'current');
        removeClass(currentWord.lastChild, 'incorrect');
        removeClass(currentWord.lastChild, 'correct');
      }
    }
  
    // move lines / words
    if (currentWord.getBoundingClientRect().top > 250) {
      const words = document.getElementById('words');
      const margin = parseInt(words.style.marginTop || '0px');
      words.style.marginTop = (margin - 35) + 'px';
    }
  
    // move cursor
    const nextLetter = document.querySelector('.letter.current');
    const nextWord = document.querySelector('.word.current');
    const cursor = document.getElementById('cursor');
    cursor.style.top = (nextLetter || nextWord).getBoundingClientRect().top + 2 + 'px';
    cursor.style.left = (nextLetter || nextWord).getBoundingClientRect()[nextLetter ? 'left' : 'right'] + 'px';
  });
  
  document.getElementById('newGameBtn').addEventListener('click', () => {
    gameOver();
    newGame();
  });
  
  newGame();