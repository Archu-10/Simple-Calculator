function showValue(val) {
    document.getElementById("result").value += val;
  }
  
  function clearScreen() {
    document.getElementById("result").value = "";
  }
  
  function calculate() {
    try {
      var output = eval(document.getElementById("result").value);
      document.getElementById("result").value = output;
    } catch (e) {
      document.getElementById("result").value = "Error";
    }
  }
  