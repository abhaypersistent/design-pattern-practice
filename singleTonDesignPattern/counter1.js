import singleTonCounter from ".";

const button = document.getElementById("blue");
button.addEventListener("click", () => {
  singleTonCounter.increment();
  console.log("singleTonCounter total: ", singleTonCounter.getCount());
});
