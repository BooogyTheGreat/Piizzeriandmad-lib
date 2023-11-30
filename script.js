document.getElementById("btn").addEventListener("click", madLib);

function madLib() {
  let pNoun = document.getElementById("PNoun").value;
  let adjective = document.getElementById("Adjective").value;
  let verb = document.getElementById("Verb").value;
  let noun = document.getElementById("Noun").value;

  let Output = `"There are too many ${pNoun} on this ${adjective} airplane!", I screamed.
  "Somebody has to ${verb} on the ${noun} to solve this problem."`;

  document.getElementById("answer").innerHTML = Output;
}
