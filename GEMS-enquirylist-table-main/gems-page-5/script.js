var el = document.getElementById("sidebar");
var toggleButton = document.getElementById("sidebarCollapse");

toggleButton.onclick = function () {
  el.classList.toggle("toggled");
};
var active = document.getElementById("icon-active");
$(document).ready(function () {
  $("#sidebarCollapse2").click(function (e) {
    e.preventDefault();
    // active.style.backgroundColor="#57A4FC";
    $("#sidebar2").toggleClass("toggled");
  });
});
$(function () {
  $("#sidebarCollapse2").click(function () {
    $(this).find("#icon-active").hasClass("iconactive")
      ? $(this).find("#icon-active").removeClass("iconactive")
      : $(this).find("#icon-active").addClass("iconactive");
  });
});
