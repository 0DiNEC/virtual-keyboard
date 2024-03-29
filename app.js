/* eslint-disable comma-dangle */
/* eslint-disable quotes */
const englishKeyboardLayout = [
  // first row keyboard
  [
    // [lower] [upper] [bCaps == Upper]
    ["`", "~", false],
    ["1", "!", false],
    ["2", "@", false],
    ["3", "#", false],
    ["4", "$", false],
    ["5", "%", false],
    ["6", "^", false],
    ["7", "&", false],
    ["8", "*", false],
    ["9", "(", false],
    ["0", ")", false],
    ["-", "_", false],
    ["=", "+", false],
    ["Backspace", "Backspace", "Backspace", "Backspace", false],
  ],

  // second row keyboard
  [
    ["Tab", "Tab", false],
    ["q", "Q", true],
    ["w", "W", true],
    ["e", "E", true],
    ["r", "R", true],
    ["t", "T", true],
    ["y", "Y", true],
    ["u", "U", true],
    ["i", "I", true],
    ["o", "O", true],
    ["p", "P", true],
    ["[", "{", false],
    ["]", "}", false],
    ["\\", "|", false],
    ["Del", "Del", false],
  ],

  // third row keyboard
  [
    ["Caps Lock", "Caps Lock", false],
    ["a", "A", true],
    ["s", "S", true],
    ["d", "D", true],
    ["f", "F", true],
    ["g", "G", true],
    ["h", "H", true],
    ["j", "J", true],
    ["k", "K", true],
    ["l", "L", true],
    [";", ":", false],
    ["'", '"', false],
    ["Enter", "Enter", false],
  ],

  // forth row keyboard
  [
    ["Shift", "Shift", false],
    ["z", "Z", true],
    ["x", "X", true],
    ["c", "C", true],
    ["v", "V", true],
    ["b", "B", true],
    ["n", "N", true],
    ["m", "M", true],
    [",", "<", false],
    [".", ">", false],
    ["/", "?", false],
    ["▲", "▲", false],
    ["Shift", "Shift", false],
  ],

  // five row keyboard
  [
    ["Ctrl", "Ctrl", false],
    ["Win", "Win", false],
    ["Alt", "Alt", false],
    [" ", " ", false],
    ["Alt", "Alt", false],
    ["◄", "◄", false],
    ["▼", "▼", false],
    ["►", "►", false],
    ["Ctrl", "Ctrl", false],
  ],
];

const russianKeyboardLayout = [
  // first row
  [
    ["ё", "Ё", true],
    ["1", "!", false],
    ["2", '"', false],
    ["3", "№", false],
    ["4", ";", false],
    ["5", "%", false],
    ["6", ":", false],
    ["7", "?", false],
    ["8", "*", false],
    ["9", "(", false],
    ["0", ")", false],
    ["-", "_", false],
    ["=", "+", false],
    ["Backspace", "Backspace", false],
  ],
  // second row
  [
    ["Tab", "Tab", false],
    ["й", "Й", true],
    ["ц", "Ц", true],
    ["у", "У", true],
    ["к", "К", true],
    ["е", "Е", true],
    ["н", "Н", true],
    ["г", "Г", true],
    ["ш", "Ш", true],
    ["щ", "Щ", true],
    ["з", "З", true],
    ["х", "Х", true],
    ["ъ", "Ъ", true],
    ["\\", "/", false],
    ["Del", "Del", false],
  ],
  // third row
  [
    ["Caps Lock", "Caps Lock", false],
    ["ф", "Ф", true],
    ["ы", "Ы", true],
    ["в", "В", true],
    ["а", "А", true],
    ["п", "П", true],
    ["р", "Р", true],
    ["о", "О", true],
    ["л", "Л", true],
    ["д", "Д", true],
    ["ж", "Ж", true],
    ["э", "Э", true],
    ["Enter", "Enter", false],
  ],
  // fourth row

  [
    ["Shift", "Shift", false],
    ["я", "Я", true],
    ["ч", "Ч", true],
    ["с", "С", true],
    ["м", "М", true],
    ["и", "И", true],
    ["т", "Т", true],
    ["ь", "Ь", true],
    ["б", "Б", true],
    ["ю", "Ю", true],
    [".", ",", false],
    ["▲", "▲", false],
    ["Shift", "Shift", false],
  ],
  // five row
  [
    ["Ctrl", "Ctrl", false],
    ["Win", "Win", false],
    ["Alt", "Alt", false],
    [" ", " ", false],
    ["Alt", "Alt", false],
    ["◄", "◄", "◄", "◄", false],
    ["▼", "▼", "▼", "▼", false],
    ["►", "►", "►", "►", false],
    ["Ctrl", "Ctrl", false],
  ],
];

const keyboardCode = [
  // first row
  "Backquote",
  "Digit1",
  "Digit2",
  "Digit3",
  "Digit4",
  "Digit5",
  "Digit6",
  "Digit7",
  "Digit8",
  "Digit9",
  "Digit0",
  "Minus",
  "Equal",
  "Backspace",
  // second row
  "Tab",
  "KeyQ",
  "KeyW",
  "KeyE",
  "KeyR",
  "KeyT",
  "KeyY",
  "KeyU",
  "KeyI",
  "KeyO",
  "KeyP",
  "BracketLeft",
  "BracketRight",
  "Backslash",
  "Delete",
  // third row
  "CapsLock",
  "KeyA",
  "KeyS",
  "KeyD",
  "KeyF",
  "KeyG",
  "KeyH",
  "KeyJ",
  "KeyK",
  "KeyL",
  "Semicolon",
  "Quote",
  "Enter",
  // fourth row
  "ShiftLeft",
  "KeyZ",
  "KeyX",
  "KeyC",
  "KeyV",
  "KeyB",
  "KeyN",
  "KeyM",
  "Comma",
  "Period",
  "Slash",
  "ArrowUp",
  "ShiftRight",
  // five row
  "ControlLeft",
  "MetaLeft",
  "AltLeft",
  "Space",
  "AltRight",
  "ArrowLeft",
  "ArrowDown",
  "ArrowRight",
  "ControlRight",
];
let lang;
function buildHTML() {
  if (localStorage.getItem("lang") === "en") lang = englishKeyboardLayout;
  else if (localStorage.getItem("lang") === "ru") lang = russianKeyboardLayout;
  else {
    localStorage.setItem("lang", "en");
    lang = englishKeyboardLayout;
  }

  document.body.className = "body";
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<main class=main><h1 class="title">RSS Virtual keyboard</h1> 
     <textarea class="textarea" rows="5" cols="5"></textarea>
     <div class="keyboard"></div>
     </main>`
  );

  // create keyboard
  const keyboard = document.querySelector(".keyboard");
  let keyButtonNum = 0;
  for (let i = 0; i < lang.length; i++) {
    let innerHTML = `<div class="keyboard__row __row${i}">`;
    for (let j = 0; j < lang[i].length; j++, keyButtonNum++) {
      innerHTML += `<span class="key-button key-button${keyButtonNum}">${lang[i][j][0]}</span>`;
    }
    innerHTML += "</div>";
    keyboard.insertAdjacentHTML("beforeend", innerHTML);
  }

  document.body.insertAdjacentHTML(
    "beforeend",
    `<p class="info">Клавиатура создана в операционоой системе Windows</p>
    <p class="info">Для переключения языка комбинация: левые Alt + Shift </p>
    <p class="info">Для переключения RGB подсветки комбинация: правые Ctrl + Shift </p>`
    
  );
}
buildHTML();

// caps lock key down
let bCaps = false;
// shift key down
let bShift = false;

const textarea = document.querySelector(".textarea"); // textarea for output press buttons values
const keyButtons = document.querySelectorAll(".key-button"); // all key buttons on virtual keyboard
let mouseSelectionStart = textarea.selectionStart;

// change keyboard to upper case
function shiftKeyInput() {
  const nShift = !bCaps ? (bShift ? 1 : 0) : bShift ? 0 : 1;
  let buttonNum = 0;
  for (let i = 0; i < lang.length; i++) {
    for (let j = 0; j < lang[i].length; j++, buttonNum++) {
      if (lang[i][j][2] === true) {
        // for letter
        keyButtons[buttonNum].textContent = lang[i][j][nShift];
      }
      // for spec sim
      else keyButtons[buttonNum].textContent = lang[i][j][bShift ? 1 : 0];
    }
  }
}

function capsLockKeyInput() {
  const nShift = !bCaps ? (bShift ? 1 : 0) : bShift ? 0 : 1;
  let buttonNum = 0;
  for (let i = 0; i < lang.length; i++) {
    for (let j = 0; j < lang[i].length; j++, buttonNum++) {
      if (lang[i][j][2] === true) {
        keyButtons[buttonNum].textContent = lang[i][j][nShift];
      }
    }
  }
}

function keyDown(code, button) {
  const cursorPosition = textarea.selectionStart;
  let text = textarea.value;
  switch (code) {
    case "Backspace":
      if (cursorPosition === 0) break;
      text =
        text.substring(0, cursorPosition - 1) + text.substring(cursorPosition);
      // set textarea value
      textarea.value = text;
      textarea.selectionStart = cursorPosition - 1;
      break;

    case "Delete": {
      if (cursorPosition === text.length) break;
      text =
        text.substring(0, cursorPosition) + text.substring(cursorPosition + 1);
      // set textarea value
      textarea.value = text;
      textarea.selectionStart = cursorPosition;
      textarea.selectionEnd = cursorPosition;
      break;
    }

    case "Tab":
      text = `${text.substring(0, cursorPosition)}\t${text.substring(
        cursorPosition,
        text.length
      )}`;
      // set textarea value
      textarea.value = text;
      textarea.setSelectionRange(
        cursorPosition + "\t".length,
        cursorPosition + "\t".length
      );
      break;

    case "ShiftRight":
    case "ShiftLeft":
      bShift = true;
      shiftKeyInput();
      break;

    case "Enter":
      text = `${text.substring(0, cursorPosition)}\n${text.substring(
        cursorPosition,
        text.length
      )}`;
      // set textarea value
      textarea.value = text;
      textarea.setSelectionRange(
        cursorPosition + "\t".length,
        cursorPosition + "\t".length
      );
      break;

    case "CapsLock":
      bCaps = !bCaps;
      capsLockKeyInput();
      break;

    case "AltLeft":
    case "AltRight":
    case "ControlLeft":
    case "ControlRight":
    case "MetaLeft":
      break;

    default:
      text =
        text.substring(0, cursorPosition) +
        button.textContent +
        text.substring(cursorPosition, text.length);
      // set textarea value
      textarea.value = text;
      textarea.selectionStart = cursorPosition + 1;
      textarea.selectionEnd = cursorPosition + 1;
      break;
  }
}

let bShitDown = false;
// change language
function switchLanguage() {
  if (bShitDown) {
    bShitDown = false;
    if (localStorage.getItem("lang") === "en") {
      localStorage.setItem("lang", "ru");
      lang = russianKeyboardLayout;
    } else if (localStorage.getItem("lang") === "ru") {
      localStorage.setItem("lang", "en");
      lang = englishKeyboardLayout;
    }
    shiftKeyInput();
  }
}

// RGB light
let red = 255;
let green = 0;
let blue = 0;
let bRGB = false;
let bMakeRGB = false;
let bCreateRGBAgain = true; // for only one create RGB

function makeRGB() {
  if (bMakeRGB) {
    bMakeRGB = false;
    let colorInterval = setInterval(function () {
      if (bRGB) {
        for (let i = keyButtons.length - 1; i >= 0; i--) {
          keyButtons[i].style.borderColor =
            "rgb(" + red + "," + green + "," + blue + ")";
          if (red > 0 && blue === 0) {
            red--;
            green++;
          } else if (green > 0 && red === 0) {
            green--;
            blue++;
          } else if (blue > 0 && green === 0) {
            red++;
            blue--;
          }
        }
      }
    }, 112);
  }
}

// virtual keyboard mouse down
for (let i = 0; i < keyButtons.length; i++) {
  // eslint-disable-next-line no-loop-func
  keyButtons[i].addEventListener("mousedown", () => {
    textarea.selectionStart = mouseSelectionStart;
    if (keyboardCode[i] === "CapsLock") {
      keyButtons[i].classList.toggle("key-button_active");
    }
    keyDown(keyboardCode[i], keyButtons[i]);
    mouseSelectionStart = textarea.selectionStart;
  });
}

// virtual keyboard mouse up
document.addEventListener("mouseup", () => {
  if (bShift) {
    bShift = false;
    shiftKeyInput();
  }
});

// block tabulation on window
window.onkeydown = (event) => {
  switch (event.code) {
    case "Tab":
    case "AltLeft":
    case "AltRight":
    case "ControlLeft":
    case "ControlRight":
    case "MetaLeft":
      event.preventDefault();
      break;
  }
};

// block keydown event on textarea keydown
textarea.addEventListener("keydown", (event) => {
  event.preventDefault();
});

textarea.addEventListener("click", (event) => {
  mouseSelectionStart = textarea.selectionStart;
  event.preventDefault();
});

// real keyboard keydown
document.addEventListener("keydown", (event) => {
  for (let i = 0; i < keyboardCode.length; i++) {
    if (event.code === keyboardCode[i]) {
      if (event.code === "CapsLock") {
        keyButtons[i].classList.toggle("key-button_active");
      } else keyButtons[i].classList.add("key-button_active");
      keyDown(keyboardCode[i], keyButtons[i]);
    }
  }
  mouseSelectionStart = textarea.selectionStart;
});

let bAltKeyDown = false;
let bRGBControlKeyDown = false;
let bRGBShiftKeyDown = false;
let previousRGBStatus = bRGB;

document.addEventListener("keydown", (event) => {
  //Switch language
  if (event.code === "AltLeft") {
    bAltKeyDown = true;
    document.addEventListener("keydown", (eventShiftDown) => {
      if (eventShiftDown.code === "ShiftLeft") bShitDown = true;
    });
    document.addEventListener("keyup", () => {
      if (bAltKeyDown && bShitDown) {
        switchLanguage();
        bShitDown = false;
      }
    });
  }

  //RGB Make
  if (event.code === "ControlRight") {
    bRGBControlKeyDown = true;
    document.addEventListener("keydown", (eventShiftDown) => {
      if (eventShiftDown.code === "ShiftRight") {
        bRGBShiftKeyDown = true;
        previousRGBStatus = bRGB;
      }
    });
    document.addEventListener("keyup", () => {
      if (bRGBControlKeyDown && bRGBShiftKeyDown) {
        if (bCreateRGBAgain) {
          bCreateRGBAgain = false;
          bRGBShiftKeyDown = false;
          bMakeRGB = true; // Do Rgb
          bRGB = !bRGB;
          makeRGB();
        } else {

          if (!previousRGBStatus) {
            bRGB = true; 
          }
          else {
            for (let i = keyButtons.length - 1; i >= 0; i--)
              keyButtons[i].style.borderColor = "#fff";
              bRGB = false;
          }
        }
      }
    });
  }
});

document.body.addEventListener("keyup", (event) => {
  for (let i = 0; i < keyboardCode.length; i++) {
    if (event.code === keyboardCode[i]) {
      if (event.code === "CapsLock") return;
      keyButtons[i].classList.remove("key-button_active");
    }
    // reset shift
    if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
      bShift = false;
      shiftKeyInput(); // reinitialize keyboard
    }

    if (event.code === "AltLeft") bAltKeyDown = false;
  }
});

textarea.focus();
textarea.onblur = () => {
  textarea.focus();
};
