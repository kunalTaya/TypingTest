
const words = 'in one good real one not school set they state high life consider on and not come what also for set point can want as while with of order child about school thing never hold find order each too between program work end you home place around while place problem end begin interest while public or where see time those increase interest be give end think seem small as both another a child same eye you between way do who into again good fact than under very head become real possible some write know however late each that with because that place nation only for each change form consider we would interest with world so order or run more open that large write turn never over open each over change still old take hold need give by consider line only leave while what set up number part form want against great problem can because head so first this here would course become help year first end want both fact public long word down also long for without new turn against the because write seem line interest call not if line thing what work people way may old consider leave hold want life between most place may if go who need fact such program where which end off child down change to from people high during people find to however into small new general it do that could old for last get another hand much eye great no work and with but good there last think can around use like number never since world need what we around part show new come seem while some and since still small these you general which seem will place come order form how about just also they with state late use both early too lead general seem there point take general seem few out like might under if ask while such interest feel word right again how about system such between late want fact up problem stand new say move a lead small however large public out by eye here over so be way use like say people work for since interest so face order school good not most run problem group run she late other problem real form what just high no man do under would to each too end point give number child through so this large see get form also all those course to work during about he plan still so like down he look down where course at who plan way so since come against he all who at world because while so few last these mean take house who old way large no first too now off would in this course present order home public school back own little about he develop of do over help day house stand present another by few come that down last or use say take would each even govern play around back under some line think she even when from do real problem between long as there school do as mean to all on other good may from might call world thing life turn of he look last problem after get show want need thing old other during be again develop come from consider the now number say life interest to system only group world same state school one problem between for turn run at very against eye must go both still all a as so after play eye little be those should out after which these both much house become both school this he real and may mean time by real number other as feel at end ask plan come turn by all head increase he present increase use stand after see order lead than system here ask in of look point little too without each for both but right we come world much own set we right off long those stand go both but under now must real general then before with much those at no of we only back these person plan from run new as own take early just increase only look open follow get that on system the mean plan man over it possible if most late line would first without real hand say turn point small set at in system however to be home show new again come under because about show face child know person large program how over could thing from out world while nation stand part run have look what many system order some one program you great could write day do he any also where child late face eye run still again on by as call high the must by late little mean never another seem to leave because for day against public long number word about after much need open change also'.split(' ');

const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "Don't count the days, make the days count. - Muhammad Ali",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "If you want to live a happy life, tie it to a goal, not to people or things. - Albert Einstein",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "Life is short, and it is up to you to make it sweet. - Sarah Louise Delany",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The best revenge is massive success. - Frank Sinatra",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
    "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "In the midst of winter, I found there was, within me, an invincible summer. - Albert Camus",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "I attribute my success to this: I never gave or took an excuse. - Florence Nightingale",
    "Do not wait for leaders; do it alone, person to person. - Mother Teresa",
    "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
    "Our lives begin to end the day we become silent about things that matter. - Martin Luther King Jr.",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "Change is the law of life. And those who look only to the past or present are certain to miss the future. - John F. Kennedy",
    "It is our choices that show what we truly are, far more than our abilities. - J.K. Rowling",
    "The best way to predict the future is to create it. - Peter Drucker",
    "To succeed in life, you need two things: ignorance and confidence. - Mark Twain",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
  ];
  
  
const wordsCount = words.length;
const gameTime = 60 * 1000;
window.timer = null;
window.gameStart = null;
window.pauseTime = 0;
//varbuttu straadaa
function randomQuote(){
    const random = Math.ceil(Math.random() * quotes.length);
    return quotes[random -1];
}

//svariga lieta
function addRandomPunctuation(word) {
    const punctuation = [',', '.', "'", '"', '?', '!', '(', ')', '[', ']', '{', '}', '-', '—', '...', ':', ';'];
  
    // Randomly select a punctuation from the array
    const randomPunctuation = punctuation[Math.floor(Math.random() * punctuation.length)];
  
    // Add the selected punctuation to the word
    return word + randomPunctuation;
  }


function randomWord() {
    const randomIndex = Math.ceil(Math.random() * wordsCount);
    return words[randomIndex - 1];
  }
// izmantosi sho funkciju lai iegutu random skaitli
function randomNumber() {
    const numDigits = Math.floor(Math.random() * 4) + 1; // Generates a random number of digits between 1 and 4.
    let result = "";
  
    for (let i = 0; i < numDigits; i++) {
      const digit = Math.floor(Math.random() * 10); // Generates a random digit between 0 and 9.
      result += digit;
    }
  
    return result;
  }
  

function formatWord(word) {
    const letters = word.split('').map(letter => `<span class='letter'>${letter}</span>`);
    return `<div class='word'>${letters.join('')}</div>`;
}


function addClass(el, name) {
    if (el) {
        el.className += ' ' + name;
    }
}

function removeClass(el, name) {
    el.className = el.className.replace(name, '');
}

function resetGame() {
    if (window.timer) {
      clearInterval(window.timer);
      window.timer = null;
    }
    window.gameStart = null;
    document.getElementById('timer').innerHTML = gameTime / 1000 + '';
  }
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}   

function newGame(option) {
    resetGame();
    let gameElement = document.getElementById('game');
    if (gameElement) {
        removeClass(gameElement, 'over');
    }
    const selectedElement = document.querySelector('div.option-element a.mode.time.white');
    let option1 = true; // Works when true 
    let option2 = false; // Another condition, implement logic here
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

    } else if (option === "punctuation") {

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
    } else if (option === "combined") {
        // Logic for combined punctuation and numbers
        const totalWords = 160; // Approximately 160 words
        const totalPunctuationAndNumbers = 40; // Approximately 40 punctuation marks and numbers combined
        const content = [];
      
        for (let i = 0; i < totalWords + totalPunctuationAndNumbers; i++) {
            if (i < totalWords) {
                content.push(formatWord(randomWord()));
            } else {
                // Decide whether to add punctuation or number based on your logic
                if (Math.random() < 0.5) {
                    content.push(formatWord(addRandomPunctuation(randomWord())));
                } else {
                    content.push(formatWord(randomNumber()));
                }
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
    } else {
        // Default logic if none of the specific conditions were met
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


function gameOver() {
    clearInterval(window.timer);
    addClass(document.getElementById('game'), 'over');
    const result = getWpm();
    document.getElementById('timer').innerHTML = `WPM: ${result}`;
}

function getWpm() {
    const words = [...document.querySelectorAll('.word')];
    const lastTypedWord = document.querySelector('.word.current');
    const lastTypedWordIndex = words.indexOf(lastTypedWord) + 1;
    const typedWords = words.slice(0, lastTypedWordIndex);
    const correctWords = typedWords.filter(word => {
      const letters = [...word.children];
      const incorrectLetters = letters.filter(letter => letter.className.includes('incorrect'));
      const correctLetters = letters.filter(letter => letter.className.includes('correct'));
      return incorrectLetters.length === 0 && correctLetters.length === letters.length;
    });
    return correctWords.length / gameTime * 60000;
  }

function addClass(el, name) {
    if (el) {
        el.className += ' ' + name;
    }
}
function removeClass(el, name) {
    el.className = el.className.replace(name, '');
}
let currentGameMode = ''; // Variable to store the current game mode

function toggleColor(element) {
    const optionElements = document.querySelectorAll('.option-element a.white');
    
    if (!element.classList.contains('white') && element.classList.contains('numbers'))  {    
        currentGameMode = 'numbers';
        newGame(currentGameMode);
        addClass(element, 'white');
        console.log("do something");
    } else if (!element.classList.contains('white') && element.classList.contains('punctuation')) {
        currentGameMode = 'punctuation';
        newGame(currentGameMode);
        addClass(element, 'white');
        console.log("do something");
    } else if (element.classList.contains('time') && element.classList.contains('white')){
        console.log("this should be time");
    } else {
        currentGameMode = '';
        newGame(); // Default mode if none of the conditions were met
        removeClass(element, 'white');
    }

    // Check if both 'numbers' and 'punctuation' have 'white' class
    const numbersElement = document.querySelector('.option-element a.mode.numbers.white');
    const punctuationElement = document.querySelector('.option-element a.mode.punctuation.white');

    if (numbersElement && punctuationElement) {
        currentGameMode = 'combined';
        newGame(currentGameMode);
        console.log("do something for combined mode");
    }
}



newGame();

function refresh(){
    if (currentGameMode) {
        newGame(currentGameMode); // Refresh based on the current game mode
    } else {
        newGame(); // Default mode if no specific mode is set
    }
}
document.getElementById("refresh").addEventListener("click", () => refresh());





let currentWordIndex = 1; // Initialize the index of the current word.
const selectedElement = document.querySelector('div.option-element a.mode.time.white');
document.getElementById('game').addEventListener('keydown', ev => {
    const key = ev.key;
    const currentWord = document.querySelector('.word.current');
    const currentLetter = document.querySelector('.letter.current');
    const expected = currentLetter?.innerHTML || ' ';
    const isBackspace = key === 'Backspace';
    const isSpace = key === ' ';
    const firstLetter = currentLetter === (currentWord?.firstChild || undefined);
    const isLetter = key.length === 1 && key !== ' ';
    
    console.log({ key, expected });
    console.log(currentWord.getBoundingClientRect().top);

    if (document.querySelector('#game.over')) {
        return;
    }

    if (!window.timer && isLetter && selectedElement.classList.contains('time')) {
        window.timer = setInterval(() => {
          if (!window.gameStart) {
            window.gameStart = (new Date()).getTime();
          }
          const currentTime = (new Date()).getTime();
          const msPassed = currentTime - window.gameStart;
          const sPassed = Math.round(msPassed / 1000);
          const sLeft = Math.round((gameTime / 1000) - sPassed);
          console.log(sPassed);
          if (sLeft <= 0) {
            gameOver();
            return;
          }
          document.getElementById('timer').innerHTML = sLeft + '';
        }, 1000);
      }

    if (isLetter) {
        if (currentLetter) {
            addClass(currentLetter, key === expected ? 'correct' : 'incorrect');
            removeClass(currentLetter, 'current');
            addClass(currentLetter.nextSibling, 'current');
        } else if (!currentLetter) {
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
        currentWordIndex++; // Increment the current word index.
    }if (isBackspace) {
        const isCurrentWordVisible = currentWord.previousSibling? currentWord.previousSibling.getBoundingClientRect().top > 177: true; 
        //console.log(isCurrentWordVisible + ' ' + currentWord.getBoundingClientRect().top );
        console.log("the 1st if works");
        if (currentWord && firstLetter && currentWordIndex > 1 && isCurrentWordVisible) {
            console.log("the 2nd if works");
            // Only allow backspace if it's not the first letter of the first word and within visibility threshold.
            removeClass(currentWord, 'current');
            if (currentWord.previousSibling) {
                console.log("the 3rd if works");       
                addClass(currentWord.previousSibling, 'current');
                const lastChild = currentWord.previousSibling.lastChild;
                if (lastChild) {
                    addClass(lastChild, 'current');
                    removeClass(lastChild, 'incorrect');
                    removeClass(lastChild, 'correct');
                    if (lastChild.classList.contains('extra')) {
                        lastChild.remove(); // Remove extra letters when pressing Backspace.
                    }
                }
            }
            removeClass(currentLetter, 'current');
            currentWordIndex--; // Decrement the current word index if possible.
        } else if (currentLetter && !firstLetter && currentLetter.getBoundingClientRect().top <= 280) {
            removeClass(currentLetter, 'current');
            addClass(currentLetter.previousSibling, 'current');
            removeClass(currentLetter.previousSibling, 'correct');
            removeClass(currentLetter.previousSibling, 'incorrect');
        } else if (!currentLetter && isCurrentWordVisible) {
            if (currentWord && currentWord.lastChild !== null) {
                const lastExtra = currentWord.lastChild;
                if (lastExtra.classList.contains('extra')) {
                    lastExtra.remove(); // Remove extra letters when pressing Backspace.
                } else {
                    addClass(lastExtra, 'current');
                    removeClass(lastExtra, 'incorrect');
                    removeClass(lastExtra, 'correct');
                }
            }
        }
    }
    
    if (currentWord.getBoundingClientRect().top > 280) {
        const words = document.getElementById('words');
        const margin = parseInt(words.style.marginTop || '0px');
        words.style.marginTop = (margin - 35) + 'px';
    }
    



    const nextLetter = document.querySelector('.letter.current');
    const nextWord = document.querySelector('.word.current');
    const cursor = document.getElementById('cursor');

    if (nextLetter || nextWord) {
        // Check if either nextLetter or nextWord is defined before accessing properties.
        cursor.style.top = (nextLetter || nextWord).getBoundingClientRect().top + 2 + 'px';
        cursor.style.left = (nextLetter || nextWord).getBoundingClientRect()[nextLetter ? 'left' : 'right'] + 'px';
    } else {
        // Handle the case where neither nextLetter nor nextWord is defined.
        // You can choose to hide or disable the cursor or take other appropriate actions.
        cursor.style.display = 'none'; // For example, hide the cursor.
    }

});









