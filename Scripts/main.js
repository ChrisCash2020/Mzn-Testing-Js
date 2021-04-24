// let myImage = document.querySelector('img');
// myImage.onclick = () => {
//   let mySrc = myImage.getAttribute('src');
//   if (mySrc === 'images/firefox-icon.png') {
//     myImage.setAttribute('src', 'images/firefox-icon-blue.png');
//   } else {
//     myImage.setAttribute('src', 'images/firefox-icon.png');
//   }
// };
// let myButton = document.querySelector('button');
// let myHeading = document.querySelector('h1');
// let setUserName = () => {
//   let myName = prompt('Please enter your name.');
//   if (!myName) {
//     setUserName();
//   } else {
//     localStorage.setItem('name', myName);
//     myHeading.textContent = 'Mozilla is cool, ' + myName;
//   }
// };
// if (!localStorage.getItem('name')) {
//   setUserName();
// } else {
//   let storedName = localStorage.getItem('name');
//   myHeading.textContent = 'Mozilla is cool, ' + storedName;
// }
// myButton.onclick = () => {
//   setUserName();
// };
// console.log(23 + 97 + 10 + 20 + 10 + 20);
// console.log((4 + 6 + 9) / 77);
// let a = 10;
// console.log(a);
// console.log(9 * a);
// let b = 7 * a;
// console.log(b);
// const max = 57;
// const actual = max - 13;
// const percentage = actual / max;
// console.log(percentage);

//did by myself lmao baby steps
let login = document.querySelector('input');
login.onclick = () => {
  let loginPrompt = prompt("Who's there?");
  if (loginPrompt == null) {
    return alert('Canceled');
  } else if (loginPrompt == 'Admin') {
    let passCorrect = prompt('Password?');
    if (passCorrect == 'TheMaster') {
      return alert('Welcome!');
    } else if (passCorrect == window.onbeforeunload) {
      return alert('Canceled');
    } else {
      return alert('Wrong password');
    }
  } else {
    return alert("I don't know you");
  }
};
//the name of JS

// let begin = prompt('What\'s the "official" name of JavaScript');

// if (begin == 'ECMAScript') {
//   alert('Right!');
// } else {
//   alert('You don\'t know "ECMAScript"!');
// }

//show the sign

// let begin = prompt('Type a Number');

// if (begin >= 1) {
//   alert(1);
// } else if (begin < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

//rewrite if into ?
// let mozillTest = a + b < 4 ? 'Below' : 'Over';
// console.log(mozillTest());


//rewrite if into ?
let message = login=='Employee'? 'Hello': login == 'Director'? 'Grettings': login == '' ? 'No Login': 