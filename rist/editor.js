// Retrieve Elements
const executeCodeBtn = document.querySelector(".editor__run");
const resetCodeBtn = document.querySelector(".editor__reset");
const console_ = document.querySelector(".editor__console");

// Setup Ace
let codeEditor = ace.edit("editorCode");
let defaultCode = 'print{"Hello World!"};';

let editorLib = {
  init() {
    // Configure Ace

    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict/');

    // Theme
    codeEditor.setTheme("ace/theme/twilight");

    // Set language
    codeEditor.session.setMode("ace/mode/python");
    codeEditor.setFontSize(22);

    // Set Default Code
    codeEditor.setValue(defaultCode);
  },
};

// Events
executeCodeBtn.addEventListener("click", () => {
  // Get input from the code editor
  const userCode = codeEditor.getValue();
  const params = { code: userCode };

  const url = "https://pyrist.herokuapp.com/api/run?" + new URLSearchParams(params);

  console.log(url);
  console_.innerText = "Processing....";
  try {
    fetch(url)
      .then((response) => response.json())
      .then((data) => (console_.innerText = data["stdout"] + data["stderr"]));
  } catch (err) {
    console_.innerText = err;
  }
});

resetCodeBtn.addEventListener("click", () => {
  // Clear ace editor
  codeEditor.setValue("");
});
function toggTab(clsname) {
  tc=document.getElementsByClassName("tc")
  for (i = 0; i < tc.length; i++) {
    tc[i].style.display = "none";
  }
  document.getElementByClassName(clsname).style.display = "block";
}
editorLib.init();

