$(document).ready(() => {
  let paused = true;

  $(".sound").click(() => {
    if (paused) {
      $(".sound").html("Desliga");
      $("#audio")[0].play();
      paused = !paused;
    } else {
      $(".sound").html("Ops... Infelizmente o botão de desligar quebrou🥶");
    }
  });
});
