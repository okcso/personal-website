const containerEl = document.querySelector(".hero-words");

const careers = ["an Engineer", "a Student", "a Builder"];

let careerIndex = 0;

let characterIndex = 0;

let pause = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `<h3>Hey, I'm ${careers[careerIndex].slice(0, characterIndex)}</h3>`;

  if (characterIndex === careers[careerIndex].length) {
    pause = 1;
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }

  if (pause) {
    pause = 0;
    setTimeout(updateText, 2000);
  } else {
    setTimeout(updateText, 100);
  }
  
}
/*
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links
        document.querySelectorAll('.sidebar a').forEach(item => item.classList.remove('active'));
        // Add to the clicked one
        this.classList.add('active');
    });
});
*/
/*
window.onscroll = function() {
    const header = document.getElementById("sidebar");
    // Change '500' to the height of your hero section
    if (window.pageYOffset > 500) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};
*/
