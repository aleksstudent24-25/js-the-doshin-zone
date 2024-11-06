const id = document.getElementById("container");
let doshins = 0;
let cubeSize = 2;
let prevCubeSize = 1;

function addADoshin() {
  let randNum = Math.ceil(Math.random() * 5);
  let currentDoshin = 0;

  doshins++;

  console.log("-=- NEW LOOP -=-");
  console.log(
    `There are ${doshins} doshins and the square is ${
      cubeSize * cubeSize
    } doshins!`
  );

  id.innerHTML += `<img class="doshin" src="../images/doshin${randNum}.png" alt=""/>`;

  if (doshins == cubeSize * cubeSize) {
    cubeSize++;
    prevCubeSize++;
  }

  let height = prevCubeSize;
  let width = 0;
  let rowSize = prevCubeSize;
  let extras = doshins % rowSize;
  console.log("There are " + extras + " extras");

  document.querySelectorAll(".doshin").forEach((element) => {
    currentDoshin++;
    if (Math.ceil(doshins / height) > rowSize) {
      console.log("Row Pass");
      rowSize++;
      console.log(`The new rowsize is ${rowSize}`);
    }

    if (doshins % height == 0) {
      console.log("PASS ONE");
      width = doshins / height;
    } else if (extras > 0) {
      console.log("PASS TWO");
      console.log(`Currently there are ${extras} extras`);
      if (currentDoshin >= rowSize) {
        console.log("current doshin: " + currentDoshin);
        extras -= 1;
        currentDoshin = 0;
      }
      width = rowSize;
    } else {
      console.log("PASS THREE");
      if (extras <= 0 && rowSize >= cubeSize) {
        rowSize--;
      }
      width = rowSize;
    }

    width = element.style.setProperty("width", `${100 / width}%`); //TODO NEEDS CHANGING
    element.style.setProperty("height", `${100 / height}%`); //! DONT CHANGE
  });
}

// element.style.setProperty("width", `${100}%`);
