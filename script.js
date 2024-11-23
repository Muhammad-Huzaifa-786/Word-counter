const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const alphabetCount = document.getElementById("alphabetCount");

textInput.addEventListener("input", () => {
  const text = textInput.value.trim();

  // Count words
  const words = text === "" ? 0 : text.split(/\s+/).length;

  // Count alphabets (excluding spaces and special characters)
  const alphabets = text.replace(/[^a-zA-Z]/g, "").length;

  // Update the counts
  wordCount.textContent = words;
  alphabetCount.textContent = alphabets;
});