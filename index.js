// document selectors
const textArea = document.querySelector('.main__textarea')
const wordsNumber = document.querySelector('.words__number')
const lettersNumber = document.querySelector('.letters__number')
const twitterNumber = document.querySelector('.twitter__number')
const facebookNumber = document.querySelector('.facebook__number')
// constants
const FACEBOOK__MAX__LENGTH = 280
const TWITTER__MAX__LENGTH = 2200
// helpers functions
const inputHandler = () => {
    //change letters
    const text = textArea.value
    lettersNumber.innerHTML = text.length
    //change words
    const words = text.trim().split(' ')
    wordsNumber.innerHTML = text.length === 0 ? 0 : words.length
    //change twitter length
    const remainLetters = TWITTER__MAX__LENGTH - text.length
    twitterNumber.innerHTML = remainLetters > 0 ? remainLetters : 0
    if(remainLetters < 1){
        twitterNumber.classList.add('dangerouse__color')
    } else {
        twitterNumber.classList.remove('dangerouse__color')
    }
    //change facebook length
    const remainFacebookLtr = FACEBOOK__MAX__LENGTH - text.length
    facebookNumber.innerHTML = remainFacebookLtr > 0 ? remainFacebookLtr : 0
    if(remainFacebookLtr < 1){
        facebookNumber.classList.add('dangerouse__color')
    } else {
        facebookNumber.classList.remove('dangerouse__color')
    }
}
// event listeners
textArea.addEventListener('input', inputHandler)