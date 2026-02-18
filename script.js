

const ratingButtons = document.querySelectorAll('.rate-btn');
const submitBtn = document.getElementById('submitBtn');
const ratingCard = document.getElementById('ratingCard');
const thankCard = document.getElementById('thankCard');
const selectedRating = document.getElementById('selectedRating');

let selectedValue = null;

ratingButtons.forEach(button => {
  button.addEventListener('click', () => {

    ratingButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    selectedValue = button.getAttribute('data-value');
  });
});

submitBtn.addEventListener('click', () => {
  if (!selectedValue) return;

  selectedRating.textContent = selectedValue;
  ratingCard.classList.add('hidden');
  thankCard.classList.remove('hidden');
});
