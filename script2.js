const copyBtn = document.getElementById('copyBtn');
const inputText = document.getElementById('inputText');
const copyCount = document.getElementById('copyCount');
const copySuccess = document.getElementById('copySuccess');
const newlineCheckbox = document.getElementById('newlineCheckbox');
const slashCheckbox = document.getElementById('slashCheckbox');

copyBtn.addEventListener('click', () => {
  const value = inputText.value.trim();
  const count = parseInt(copyCount.value) || 1;

  // Empty input check
  if (!value) {
    copySuccess.innerText = '⚠️ Please enter some text to copy!';
    return;
  }

  // Separator logic
  let separator = '';
  if (newlineCheckbox.checked) separator += '\n';
  
  if (slashCheckbox.checked) separator += '/';
  if (!separator) separator = ' '; // default space if none checked

  // Generate copied text
  const copiedText = Array(count).fill(value).join(separator);

  // Copy to clipboard
  navigator.clipboard
    .writeText(copiedText)
    .then(() => {
      copySuccess.innerText = `✅ Your text is copied ${count} times!`;
      console.log(copiedText);
    })
    .catch((err) => {
      copySuccess.innerText = '❌ Failed to copy!';
      console.error(err);
    });
});

// Footer Text
const date = new Date();
const currentYear = date.getFullYear();
// console.log(currentYear);
document.querySelector('#footer_year').textContent = currentYear;
