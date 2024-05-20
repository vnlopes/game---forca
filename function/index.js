const word = document.querySelector("#receiveWord");
const forca = document.querySelector(".forca");
const init = () => {
  if (word.value == "") {
    alert("Digite a palavra!");
  } else {
    forca.classList.remove("hidden");
    for (let i = 0, j = 1; i < word.value.length; i++, j++) {
      array.push(word.value.slice(i, j));
      console.log(word.value.slice(i, j));
    }
    // location.href = "game.html"
  }

  for (let i = 0; i < word.value.length; i++) {
    let line = document.createElement("div");
    line.classList.add("w-10", "h-[4px]", "bg-white");
    document.querySelector(".receive-word").appendChild(line);

    let word = document.createElement("div");
    word.classList.add(
      "letra",
      "w-10",
      "h-[50px]",
      "text-white",
      "flex",
      "justify-center"
    );
    document.querySelector(".test-word").appendChild(word);
  }
};

let array = [];

console.log(array);

const test = document.querySelector(".test");

const send = () => {
  const letra = document.querySelectorAll(".letra");
  if (array.includes(test.value)) {
    alert("tem");

    const filterletter = array.map((letra, index) => {
        return letra === test.value ? index : null;
    }).filter(posicao => posicao !== null);

    console.log(filterletter)

    letra.forEach((aq) => {
        // document.querySelector(".test-word").appendChild(word)
    });
  } else {
    alert("não tem!");
  }
};
