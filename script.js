function changeText() {
    document.getElementById("message").textContent = "The text has been changed!";
  }
  
  function changeColor() {
    document.getElementById("heading").style.color = "blue";
  }
  
  function addOrRemove() {
    const container = document.getElementById("box-container");
    const existingBox = document.getElementById("new-box");
  
    if (existingBox) {
      existingBox.remove(); // remove if it already exists
    } else {
      const box = document.createElement("div");
      box.id = "new-box";
      box.textContent = "This is a new box!";
      box.style.padding = "10px";
      box.style.marginTop = "10px";
      box.style.border = "1px solid black";
      container.appendChild(box);
    }
  }
  