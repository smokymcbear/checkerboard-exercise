// checkerboards are 7  rows x 9 columns

// black and red
function standardCheckerBoard() {
  for ( i = 0; i < 63; i++) {
    if ( i % 2 === 0) {
      let div = document.createElement('div');
      div.style.backgroundColor = "red"
      div.style.float = "left"
      div.style.width = "11.1%"
      div.style.paddingBottom = "11.1%"
      document.body.append(div)
    } else {
      let div = document.createElement('div');
      div.style.backgroundColor = "black"
      div.style.float = "left"
      div.style.width = "11.1%"
      div.style.paddingBottom = "11.1%"
      document.body.append(div)
    }
  }
}

// standardCheckerBoard()

function randomColorBoard() {
  for ( i = 0; i < 63; i++) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let div = document.createElement('div');
    div.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")"
    div.style.float = "left"
    div.style.width = "11.1%"
    div.style.paddingBottom = "11.1%"
    document.body.append(div)
  }
}

// randomColorBoard()

function gradientBoard() {
  // let color1 =
  for ( i = 0; i < 63; i++) {
    if ( i % 2 === 0) {
      let div = document.createElement('div');
      div.style.background = "linear-gradient(blue, teal)"
      div.style.float = "left"
      div.style.width = "11.1%"
      div.style.paddingBottom = "11.1%"
      document.body.append(div)
    } else {
      let div = document.createElement('div');
      div.style.background = "linear-gradient(violet, purple)"
      div.style.float = "left"
      div.style.width = "11.1%"
      div.style.paddingBottom = "11.1%"
      document.body.append(div)
    }
  }
}


gradientBoard()
