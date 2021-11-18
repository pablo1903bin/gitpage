let app = document.getElementById("typewriter");

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 200,
});

typewriter
  .pauseFor(2500)
  .typeString("  2221644216")
  .pauseFor(200)
  .deleteChars(10)
  .start();
