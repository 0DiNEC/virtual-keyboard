const englishKeyboardLayout = [
  // first row keyboard
  [
    ["`", "~"],
    ["1", "!"],
    ["2", "@"],
    ["3", "#"],
    ["4", "$"],
    ["5", "%"],
    ["6", "^"],
    ["7", "&"],
    ["8", "*"],
    ["9", "("],
    ["0", ")"],
    ["-", "_"],
    ["=", "+"],
    ["Backspace", "Backspace", "Backspace", "Backspace"],
  ],

  // second row keyboard
  [
    ["Tab", 50, "Tab", "Tab", "Tab"],
    ["q", "Q"],
    ["w", "W"],
    ["e", "E"],
    ["r", "R"],
    ["t", "T"],
    ["y", "Y"],
    ["u", "U"],
    ["i", "I"],
    ["o", "O"],
    ["p", "P"],
    ["[", "{"],
    ["]", "}"],
    ["\\", "|"],
    ["Del", "Del"],
  ],

  // third row keyboard
  [
    ["Caps Lock", "Caps Lock"],
    ["a", "A"],
    ["s", "S"],
    ["d", "D"],
    ["f", "F"],
    ["g", "G"],
    ["h", "H"],
    ["j", "J"],
    ["k", "K"],
    ["l", "L"],
    [";", ":"],
    ["'", '"'],
    ["Enter", "Enter"],
  ],

  //forth row keyboard
  [
    ["Shift", "Shift"],
    ["z", "Z"],
    ["x", "X"],
    ["c", "C"],
    ["v", "V"],
    ["b", "B"],
    ["n", "N"],
    ["m", "M"],
    [",", "<"],
    [".", ">"],
    ["/", "?"],
    ["▲", "▲"],
    ["Shift", "Shift"],
  ],

  // five row keyboard
  [
    ["Ctrl", "Ctrl"],
    ["Win", "Win"],
    ["Alt", "Alt"],
    [" ", " "],
    ["Alt", "Alt"],
    ["◄", "◄"],
    ["▼", "▼"],
    ["►", "►"],
    ["Ctrl", "Ctrl"],
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
  keyButtons[i].addEventListener("mousedown", function () {
    keyDown(keyboardCode[i], keyButtons[i]);
  });
}

// block tabulation on window
window.onkeydown = (event) => {
  if (event.key === "Tab") {
    event.preventDefault();
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
      keyButtons[i].classList.add("key-button_active");
      keyDown(keyboardCode[i], keyButtons[i]);
    }
  }
});

document.body.addEventListener("keyup", function (event) {
  for (let i = 0; i < keyboardCode.length; i++) {
    if (event.code === keyboardCode[i]) {
      keyButtons[i].classList.remove("key-button_active");
    }
  }
});

// change keyboard to upper case and change lang
function changeKeyboard() {
  let buttonNum = 0;
  for(let i=0; i< englishKeyboardLayout.length; i++) {
    for (let j =0; j< englishKeyboardLayout[i].length; j++, buttonNum++) {
      keyButtons[buttonNum].textContent = englishKeyboardLayout[i][j][1];
    }
  }
}

function keyDown(code, button) {
  let cursorPosition = textarea.selectionStart;
  let text = textarea.value;
  switch (code) {
    case "Backspace":
      if (textarea.selectionStart === 0) break;

      text =
        text.substring(0, cursorPosition - 1) + text.substring(cursorPosition);
      // set textarea value
      textarea.value = text;
      textarea.selectionStart = cursorPosition - 1;
      break;
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

      case "Shift" || "ShiftRight":
        console.log(button.textContent);
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

