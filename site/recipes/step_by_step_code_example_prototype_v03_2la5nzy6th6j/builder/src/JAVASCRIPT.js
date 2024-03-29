const s = {
  currentLineSet: 0,
}

const lineSets = [
  {
    lines: [1, 0, 0, 0, 1, 1, 1, 0, 1],
  },
  {
    lines: [2, 1, 1, 1, 2, 2, 2, 1, 2],
  },
  {
    lines: [2, 2, 2, 1, 2, 2, 2, 1, 2],
  },
  {
    lines: [2, 2, 3, 1, 2, 2, 3, 1, 2],
  },
  {
    lines: [2, 2, 3, 1, 2, 2, 4, 2, 2],
  },
  {
    lines: [2, 2, 3, 2, 2, 2, 4, 3, 2],
  },
  {
    lines: [2, 2, 3, 3, 2, 2, 4, 3, 2],
  },
]

const handleNextButtonClick = () => {
  console.log('Got Next Button Click')
  if (s.currentLineSet < lineSets.length - 1) {
    s.currentLineSet += 1
  }
  updateLines()
}

const updateLines = () => {
  const lineDivs = []
  const lineDivEls = window.codeStuff.getElementsByTagName('div')
  for (let lineIndex = 0; lineIndex < lineDivEls.length; lineIndex++) {
    const preElements = []
    const preToParse = lineDivEls[lineIndex].getElementsByTagName('pre')
    for (let i = 0; i < preToParse.length; i++) {
      preElements.push(preToParse[i])
    }
    lineDivs.push(preElements)
  }

  // hide everything:
  lineDivs.forEach((lineDiv) => {
    lineDiv.forEach((el) => {
      el.classList.add('hideit')
    })
  })

  for (let alfa = 0; alfa < lineSets[s.currentLineSet].lines.length; alfa++) {
    lineDivs[alfa][lineSets[s.currentLineSet].lines[alfa]].classList.remove(
      'hideit'
    )
    // const bravo = lineSets[0].lines[alfa]
    // lineDivs[bravo[0]][bravo[1]].classList.remove('hideit')
  }

  // lineDivs[0][0].classList.add('hideit')
  // lineDivs[0][1].classList.remove('hideit')
  // lineDivs[1][0].classList.add('hideit')
  // lineDivs[1][1].classList.remove('hideit')
  // lineDivs[4][0].classList.add('hideit')
  // lineDivs[4][1].classList.remove('hideit')
  // lineDivs[6][0].classList.add('hideit')
  // lineDivs[6][1].classList.remove('hideit')
  // lineDivs[8][0].classList.add('hideit')
  // lineDivs[8][1].classList.remove('hideit')

  // console.log(lineDivs)

  // lines[0].classList.add('hideit')
  // lines[1].classList.remove('hideit')
  // lines[10].classList.add('hideit')
  // lines[11].classList.remove('hideit')
}

const init = () => {
  window.nextView.addEventListener('click', handleNextButtonClick)
  updateLines()
}

document.addEventListener('DOMContentLoaded', init)
