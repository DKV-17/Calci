const display = document.getElementById("display");


function appendValue(value) {
  display.value += value;
}


function clearDisplay() {
  display.value = "";
}


function deleteLast() {
  display.value = display.value.slice(0, -1);
}


function Calculate() {
  try {
    display.value = eval(display.value); 
  } catch (error) {
    alert("Invalid Expression");
  }
}

