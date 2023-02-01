function checkSituation() {
  // Variables
  var name, bim1, bim2, bim3, bim4;

  // Getting Values
  name = document.getElementById('name').value;
  bim1 = parseFloat(document.getElementById('b1').value);
  bim2 = parseFloat(document.getElementById('b2').value);
  bim3 = parseFloat(document.getElementById('b3').value);
  bim4 = parseFloat(document.getElementById('b4').value);

  // Checking if the values are valid
  if (name == "" || isNaN(bim1) || isNaN(bim2) || isNaN(bim3) || isNaN(bim4)) return alert("Preencha todos os campos!");
  if (bim1 < 0 || bim1 > 10 || bim2 < 0 || bim2 > 10 || bim3 < 0 || bim3 > 10 || bim4 < 0 || bim4 > 10) return alert("As notas devem estar entre 0 e 10!");

  // Calculating Total
  sum = bim1 + bim2 + bim3 + bim4;
  avg = sum / 4;

  // Display on Student Data
  var newTable = document.getElementById('boletim');
  var row = newTable.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(0);
  var cell3 = row.insertCell(0);
  var cell4 = row.insertCell(0);

  cell4.innerHTML = name;
  cell3.innerHTML = sum;
  cell2.innerHTML = avg.toFixed(2);

  if (avg >= 7) {
    cell1.innerHTML = "<font color=green>Aprovado</font>";
  } else if (avg >= 5 && avg < 7) {
    cell1.innerHTML = "<font color=red>Precisa de Prova Final</font>";
  } else {
    cell1.innerHTML = "<font color=red>Reprovado</font>";
  }

  return inputClear();
}

function inputClear() {
  document.getElementById('name').value = "";
  document.getElementById('b1').value = "";
  document.getElementById('b2').value = "";
  document.getElementById('b3').value = "";
  document.getElementById('b4').value = "";
}