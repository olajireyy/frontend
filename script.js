
function showCategory(categoryId) {
  // Hide all menu sections
  const categories = ['burgerlist', 'pizzalist', 'biryanilist'];
  categories.forEach(id => {
    document.getElementById(id).style.display = 'none';
  });

  // Remove active class from all tabs
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });

  // Show the selected category
  document.getElementById(categoryId).style.display = 'grid';

  // Add active class to the clicked tab
  event.target.classList.add('active');
}