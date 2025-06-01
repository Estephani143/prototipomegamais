document.addEventListener("DOMContentLoaded", () => {
    const accordionItems = document.querySelectorAll('.accordion-item');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
    
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.5 
    });
  
    
    accordionItems.forEach(item => {
      observer.observe(item);
    });
  });
