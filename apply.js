function goBack() {
  window.history.back();
}

function checkCompatibility() {
  var courseSelect = document.getElementById("course");
  var course = courseSelect.options[courseSelect.selectedIndex].value;
  var strandSelect = document.getElementById("strand");
  var strand = strandSelect.options[strandSelect.selectedIndex].value;
  if ((course == "BSIT" && strand != "TVL/ICT" && strand != "STEM") || (course == "BSCS" && strand != "STEM") || (course == "BSIS" && strand != "ABM") || (course == "BSCE" && strand != "STEM") || (course == "BSA" && strand != "GAS")) {
      alert("Selected course is not compatible with the selected SHS strand. Please choose again.");
      return false;
  }
  else{
    alert("Application was successfully submitted");
    return true;
  }
}