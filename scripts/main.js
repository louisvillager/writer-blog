const introHeaders = Array.from(
  document.getElementsByClassName("intro-header")
);

// Add event handlers to each intro header on main page
// Effectively expanding "hit box" for plus sign buttons
introHeaders.forEach(clickListener);

// FUNCTIONS

// For adding an event handler to a different DOM element from target
function clickListener(evt) {
  evt.addEventListener("click", () => {
    // console.log("On the right track");
    let j = evt.getElementsByTagName("BUTTON")[0];
    j.click();
  });
}
