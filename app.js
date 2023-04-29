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

const keyboardCode = [];

function buildHTML() {
  document.body.className = "body";
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<main class=main><h1 class="title">RSS Virtual keyboard</h1> 
     <textarea class="textarea" rows="5" cols="5"></textarea>
     <div class="keyboard"></div>
     </main>`
  );

  let keyboard = document.querySelector(".keyboard");
  let keyButtonNum = 0;
  for (let i = 0; i < englishKeyboardLayout.length; i++) {
    let innerHTML = `<div class="keyboard__row __row${i}">`;
    for (let j = 0; j < englishKeyboardLayout[i].length; j++, keyButtonNum++) {
      innerHTML += `<span class="key-button key-button${keyButtonNum}">${englishKeyboardLayout[i][j][0]} </span>`;
    }
    innerHTML += `</div>`;
    keyboard.insertAdjacentHTML("beforeend", innerHTML);
  }
}
buildHTML();
