$(document).ready(() => {
  let paused = true;

  $(".sound").click(() => {
    if (paused) {
      $(".sound").html("Desliga");
      $("#audio")[0].play();
    } else {
      $(".sound").html("Liga");
      $("#audio")[0].pause();
    }

    paused = !paused;
  });
});
