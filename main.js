function colorChange(element) {
  setTimeout(() => {
    element.css('background-color', 'gainsboro');
  }, 150);
}

$(document).ready(function () {
  $('#display')[0].innerText = '';
  $('body').keydown(function (event) {
    const key = event.originalEvent.key.toUpperCase();
    if (
      key === 'Q' ||
      key === 'W' ||
      key === 'E' ||
      key === 'A' ||
      key === 'S' ||
      key === 'D' ||
      key === 'Z' ||
      key === 'X' ||
      key === 'C'
    ) {
      const audio = $(`#${key}`);
      audio[0].play();
      const parent = audio[0].parentElement;
      $(`#${parent.id}`).css('background-color', 'burlywood');
      colorChange($(`#${parent.id}`));
      $('#display')[0].innerText = audio[0].innerText;
    }
  });

  $('.drum-pad').click(function (event) {
    const button = event.currentTarget.innerText;
    const audio = $(`#${button}`);
    audio[0].play();
    const parent = audio[0].parentElement;
    $(`#${parent.id}`).css('background-color', 'burlywood');
    colorChange($(`#${parent.id}`));
    $('#display')[0].innerText = audio[0].innerText;
  });
});
