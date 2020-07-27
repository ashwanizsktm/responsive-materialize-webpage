$(document).ready(function () {
  $('.modal').modal();
  $('.parallax').parallax();
  $('.sidenav').sidenav();
  $('.slider').slider({ full_width: true });
  $('.myreviews').carousel({
    numVisible: 7,
    shift: 30,
    padding: 20,
  })
});

function toggleModal() {
  var instance = M.Modal.getInstance($('#modal3'));
  instance.open();
}