copyBtn.addEventListener('click', () => {
  let value = inputText.value + ' ';

  let copiedText = value.repeat(copyCount.value);

  // Copy the text inside the text field
  // navigator.clipboard.writeText(copiedText);

  copiedText.select();
  document.execCommand('copy');

  // print in console
  console.log(copiedText + ' ');

  alert(`Your text ${value} is copied ${copyCount.value} times!`);

  copySuccess.innerText = 'Copy Completed!!!';
});
