  document.querySelectorAll('.scroll-btn1').forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = button.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    });
  });

  document.querySelectorAll('.scroll-btn2').forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = button.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    });
  });

  document.querySelectorAll('.scroll-btn3').forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = button.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    });
  });

  document.querySelectorAll('.scroll-btn4').forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = button.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    });
  });