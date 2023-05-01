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

  //forth row keyboard
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
  //second row
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
  //fourth row
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
  //five row
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

function buildHTML() {
  document.body.className = "body";
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<main class=main><h1 class="title">RSS Virtual keyboard</h1> 
     <textarea class="textarea" rows="5" cols="5"></textarea>
     <div class="keyboard"></div>
     </main>`
  );

  // create keyboard
  let keyboard = document.querySelector(".keyboard");
  let keyButtonNum = 0;
  for (let i = 0; i < englishKeyboardLayout.length; i++) {
    let innerHTML = `<div class="keyboard__row __row${i}">`;
    for (let j = 0; j < englishKeyboardLayout[i].length; j++, keyButtonNum++) {
      innerHTML += `<span class="key-button key-button${keyButtonNum}">${englishKeyboardLayout[i][j][0]}</span>`;
    }
    innerHTML += `</div>`;
    keyboard.insertAdjacentHTML("beforeend", innerHTML);
  }
}
buildHTML();

// caps lock key down
bCaps = false;
// shift key down
bShift = false;

let textarea = document.querySelector(".textarea"); // textarea for output press buttons values
let keyButtons = document.querySelectorAll(".key-button"); // all key buttons on virtual keyboard

// virtual keyboard mouse down
for (let i = 0; i < keyButtons.length; i++) {
  keyButtons[i].addEventListener("mousedown", function (event) {
    if (keyboardCode[i] == "CapsLock")
      keyButtons[i].classList.toggle("key-button_active");
    keyDown(keyboardCode[i], keyButtons[i]);
  });
}

// virtual keyboard mouse up
for (let i = 0; i < keyButtons.length; i++) {
  keyButtons[i].addEventListener("mouseup", function () {
    bShift = false;
    shiftKeyInput();
  });
}

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

//block keydown event on textarea keydown
textarea.addEventListener("keydown", function (event) {
  event.preventDefault();
  return;
});

//real keyboard keydown
document.body.addEventListener("keydown", function (event) {
  for (let i = 0; i < keyboardCode.length; i++) {
    if (event.code === keyboardCode[i]) {
      if (event.code == "CapsLock") {
        keyButtons[i].classList.toggle("key-button_active");
      } else keyButtons[i].classList.add("key-button_active");
      keyDown(keyboardCode[i], keyButtons[i]);
    }
  }
});

document.body.addEventListener("keyup", function (event) {
  for (let i = 0; i < keyboardCode.length; i++) {
    if (event.code === keyboardCode[i]) {
      if (event.code === "CapsLock") return;
      keyButtons[i].classList.remove("key-button_active");
    }
    // reset shift
    if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
      bShift = false;
      shiftKeyInput();
    }
  }
});

// change keyboard to upper case
function shiftKeyInput() {
  const nShift = !bCaps ? (bShift ? 1 : 0) : bShift ? 0 : 1;
  let buttonNum = 0;
  for (let i = 0; i < englishKeyboardLayout.length; i++) {
    for (let j = 0; j < englishKeyboardLayout[i].length; j++, buttonNum++) {
      if (englishKeyboardLayout[i][j][2] === true)
        // for letter
        keyButtons[buttonNum].textContent = englishKeyboardLayout[i][j][nShift];
      // for spec sim
      else
        keyButtons[buttonNum].textContent =
          englishKeyboardLayout[i][j][bShift ? 1 : 0];
    }
  }
}

function capsLockKeyInput() {
  const nShift = !bCaps ? (bShift ? 1 : 0) : bShift ? 0 : 1;
  let buttonNum = 0;
  for (let i = 0; i < englishKeyboardLayout.length; i++) {
    for (let j = 0; j < englishKeyboardLayout[i].length; j++, buttonNum++) {
      if (englishKeyboardLayout[i][j][2] === true)
        keyButtons[buttonNum].textContent = englishKeyboardLayout[i][j][nShift];
    }
  }
}

function keyDown(code, button) {
  let cursorPosition = textarea.selectionStart;
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
      if (cursorPosition == text.length) break;
      text =
        text.substring(0, cursorPosition) + text.substring(cursorPosition + 1);
      // set textarea value
      textarea.value = text;
      textarea.selectionStart = cursorPosition;
      textarea.selectionEnd = cursorPosition;
      break;
    }

    case "Tab":
      text =
        text.substring(0, cursorPosition) +
        "\t" +
        text.substring(cursorPosition, text.length);
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
      text =
        text.substring(0, cursorPosition) +
        "\n" +
        text.substring(cursorPosition, text.length);
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
      textarea.setSelectionRange(
        cursorPosition + button.textContent.length,
        cursorPosition + button.textContent.length
      );
      break;
  }
}
