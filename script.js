document.addEventListener('DOMContentLoaded', function() {
  const table = document.querySelector('.infoTable');

  function checkScroll(){
    const rect = table.getBoundingClientRect();
    if(rect.top < window.innerHeight && rect.bottom >= 0){
      table.classList.add('show');
    }
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll();
});
