// Retrieve Elements
const executeCodeBtn = document.querySelector(".editor__run");
const resetCodeBtn = document.querySelector(".editor__reset");
const console_ = document.querySelector(".editor__console");
const co_ = document.querySelector(".compiled_");

let codeEditor = co_;
let defaultCode = 'print{"Hello World!"};';

codeEditor.text = defaultCode;
// Events
executeCodeBtn.addEventListener("click", () => {
  // Get input from the code editor
  const userCode = codeEditor.text;
  const params = { code: userCode };

  const url = "https://pyrist.herokuapp.com/api/run?" + new URLSearchParams(params);

  console.log(url);
  console_.innerText = "Processing....";
  try {
    fetch(url)
      .then((response) => response.json())
      .then((data) => (co_.text = data['stdout']))
      .then((data) => (console_.innerText = data['stderr']));
  } catch (err) {
    console_.innerText = err;
  }
});

resetCodeBtn.addEventListener("click", () => {
  // Clear ace editor
  codeEditor.text = "";
});


