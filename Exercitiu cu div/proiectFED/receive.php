<?php
if (count($_GET) > 0) {
  echo "Acest formular a fost trimis prin GET";
} elseif(count($_POST) > 0) {
  echo "Acest formular a fost trimis prin POST";
}
foreach ($_REQUEST as $key => $value) {
  if (!is_array($value)) {
    echo "<p>Numele campului este <strong>${key}</strong> iar valoarea trimisa prin formular este <em>${value}</em></p>";
  } else {
    echo "<p>Numele campului este <strong>${key}</strong> si valorile selectate sunt : </p>";
    echo "<ol>";
    foreach ($value as $k => $v) {
      echo "<li>${v}</li>";
    }
    echo "</ol>";
  }
}
?>
