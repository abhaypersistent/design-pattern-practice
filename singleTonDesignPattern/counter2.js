import singleTonCounter from ".";

const button = document.getElementById("red");
button.addEventListener("click", () => {
  singleTonCounter.increment();
  console.log("singleTonCounter total: ", singleTonCounter.getCount());
});
