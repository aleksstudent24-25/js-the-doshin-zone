const id = document.getElementById("container");
let doshins = 0;
let cubeSize = 2;
let prevCubeSize = 1;

function addADoshin() {
  let randNum = Math.ceil(Math.random() * 5);
  let currentDoshin = 0;

  // let extraPics = 0;
  // if (prevCubeSize != 1) extraPics = cubeSize * cubeSize - doshins;

  doshins++;

  console.log(
    `There are ${doshins} doshins and the square is ${
      cubeSize * cubeSize
    } doshins!`
  );
  // console.log("There are " + extraPics + " extra pics");

  id.innerHTML += `<img class="doshin" src="../images/doshin${randNum}.png" alt=""/>`;

  if (doshins == cubeSize * cubeSize) {
    cubeSize++;
    prevCubeSize++;
  }

  let height = prevCubeSize;
  let width = 0;
  let rowSize = cubeSize;
  // let row = 1;

  document.querySelectorAll(".doshin").forEach((element) => {
    currentDoshin++;
    if (Math.ceil(doshins / height) > rowSize) {
      console.log("Row Pass");
      rowSize++;
    }

    // if(currentDoshin > rowSize * row && ) rowSize;

    // console.log(`THE ROW SIZE IS ${rowSize}`);

    if (doshins % prevCubeSize == 0) {
      console.log("PASS ONE");
      width = doshins / prevCubeSize;
    } else {
      console.log("PASS THREE");
      width = rowSize;
    }

    // else if (extraPics > 0 && currentDoshin >= rowSize * row) {
    //   console.log("PASS TWO");
    //   width = rowSize;
    //   row++;
    //   extraPics--;
    // }

    // else if (extraPics > 0 && currentDoshin > cubeSize * row) {
    //   width = cubeSize;
    //   extraPics--;
    //   row++;
    // console.log("PASS ONE");
    // } else if (extraPics > 0) {
    //   console.log("PASS TWO");
    //   width = cubeSize;
    // } else {
    //   console.log("PASS THREE");
    //   width = prevCubeSize;
    // }

    width = element.style.setProperty("width", `${100 / width}%`); //TODO NEEDS CHANGING
    element.style.setProperty("height", `${100 / height}%`); //! DONT CHANGE
  });
}

// element.style.setProperty("width", `${100}%`);
