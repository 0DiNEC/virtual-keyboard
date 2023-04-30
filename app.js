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

// virtual keyboard mouse down
let textarea = document.querySelector(".textarea");
let keyButtons = document.querySelectorAll(".key-button");
keyButtons.forEach((button) => {
  button.addEventListener(
    "mousedown",
    () => (textarea.textContent += button.textContent),
    false
  );
});

function keyDown(button) {}
