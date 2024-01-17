let name = prompt("Welcome to GC mini golf! What is your name?");
let golfHoles = prompt(
  "Hi, " + name + "! Would you like to play 3 or 6 holes today?"
);
let total = 0;
let par = golfHoles * 3;
for (let i = 0; i < golfHoles; i++) {
  let score = Number(
    prompt("How many putts for hole " + (i + 1) + "? (par is 3)")
  );
  total += score;
}

let scoreDiff = total - par;

if (scoreDiff === 0) {
  console.log(
    "Good game, " + name + ". Your total par was: " + scoreDiff + "."
  );
} else if (scoreDiff < 0) {
  console.log(
    "Great job, " + name + "! Your total par was: - " + scoreDiff + "."
  );
} else if (scoreDiff > 0) {
  console.log(
    "Nice try " + name + ". Your total par was: + " + scoreDiff + "."
  );
}
