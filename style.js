
function searchProducts() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const items = document.querySelectorAll('.a2');
  const noResult = document.getElementById('noResult');
  
  let matchFound = false;

  items.forEach(item => {
    const name = item.querySelector('.Medicine-Name').textContent.toLowerCase();
    const price = item.querySelector('.Price').textContent.toLowerCase();

    if (name.includes(input) || price.includes(input)) {
      item.style.display = 'flex';
      matchFound = true;
    } else {
      item.style.display = 'none';
    }
  });

  noResult.style.display = matchFound ? 'none' : 'block';
}

