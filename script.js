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

  let copiedText = '';

  // If newlineCheckbox is Checked (with serial number)
  if (newlineCheckbox.checked) {
    const lines = [];
    for (let i = 1; i <= count; i++) {
      lines.push(`${i}. ${value}`);
    }
    copiedText = lines.join('\n');
  }

  // If slashCheckbox is Checked
  else if (slashCheckbox.checked) {
    copiedText = Array(count).fill(value).join('/');
  }

  // If every checkbox is blank
  else {
    copiedText = Array(count).fill(value).join(' ');
  }

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
