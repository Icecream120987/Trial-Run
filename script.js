// script.js
window.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.getElementById('data-container');
  
    fetch('/api/data')
      .then(response => response.json())
      .then(data => {
        data.forEach(item => {
          const p = document.createElement('p');
          p.textContent = `ID: ${item.id}, Name: ${item.name}`;
          dataContainer.appendChild(p);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
  