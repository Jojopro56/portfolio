document.addEventListener('DOMContentLoaded', function() {
  var goUpButton = document.getElementById('go-up-button');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 60) {
      goUpButton.classList.add('show');
    } else {
      goUpButton.classList.remove('show');
    }
  });

  goUpButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
