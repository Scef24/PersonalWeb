function openModal() {
    document.getElementById('myModal').style.display = 'block';
    console.log("clicked")
}
// document.getElementById('learnMoreBtn').onclick = openModal;
document.getElementById('learnMoreBtn').onclick = function() {
    document.getElementById('myModal').style.display = 'block';
  };
 

  document.querySelectorAll('.next-btn').forEach(button => {
    button.onclick = function() {
      const currentSection = this.parentElement;
      const nextSectionId = this.getAttribute('data-next');
      currentSection.style.display = 'none';
      document.getElementById(nextSectionId).style.display = 'block';
    };
  });
  
  document.querySelectorAll('.close, .close-btn').forEach(button => {
    button.onclick = function() {
      document.getElementById('myModal').style.display = 'none';
      document.querySelectorAll('.modal-section').forEach(section => {
        section.style.display = 'none';
      });
      document.getElementById('favoritesSection').style.display = 'block';
    };
  });
 
document.getElementById('learnMoreBtn').onclick = openModal;
  window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
      document.getElementById('myModal').style.display = 'none';
    }
  };    