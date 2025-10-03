copyBtn.addEventListener('click', () => {
  const checkbox = document.getElementById('newlineCheckbox');
  const value = inputText.value;
  const count = parseInt(copyCount.value) || 1;

  // Use space if checkbox is not checked by user
  const separator = checkbox.checked ? '\n' : ' ';

  // using join insted of Repeat
  const copiedText = Array(count).fill(value).join(separator);

  // Copy to Clipboard
  navigator.clipboard.writeText(copiedText);

  // Console and alert
  console.log(copiedText);
  alert(`Your text "${value}" is copied ${count} times!`);
  copySuccess.innerText = 'Copy Completed!!!';
});
