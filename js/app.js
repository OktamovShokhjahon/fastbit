const navClickItems = document.querySelector(".nav_click_items");
const navClickItems2 = document.querySelector(".nav_click_items_2");
const navProfileContent = document.querySelector(".nav_profile_content");
const navProfileContent2 = document.querySelector(".nav_profile_content_2");
const toggleInput = document.getElementById("toggle-input");

document.getElementById("copyBtn").addEventListener("click", function () {
  const textToCopy = "TWn3kZTa2mYXC3DjPJH5a4UL65mZg5BLLj";

  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = textToCopy;
  document.body.appendChild(tempTextArea);

  tempTextArea.select();
  document.execCommand("copy");

  document.body.removeChild(tempTextArea);
});

if (navClickItems) {
  navProfileContent.addEventListener("click", () => {
    navClickItems.classList.toggle("hidden");
  });
}

if (navClickItems2) {
  navProfileContent2.addEventListener("click", () => {
    console.log("click");
    navClickItems2.classList.toggle("hidden");
  });
}

if (toggleInput) {
  toggleInput.addEventListener("change", function () {
    const label = document.getElementById("toggle-label");
    if (this.checked) {
      label.style.color = "#000000"; // Change the text color when toggled
    } else {
      label.style.color = "#333"; // Reset to original color
    }
  });
}
