const input = document.getElementById("searchInput");
const entries = document.querySelectorAll(".entry");

input.addEventListener("input", () => {
  const query = input.value.toLowerCase();

  entries.forEach(entry => {
    const text = entry.textContent.toLowerCase();

    if (text.includes(query)) {
      entry.style.display = "block";
    } else {
      entry.style.display = "none";
    }
  });
});
