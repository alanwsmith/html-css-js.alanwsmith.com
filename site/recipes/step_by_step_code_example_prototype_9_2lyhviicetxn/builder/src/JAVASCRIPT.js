const makeElement = (
  _type,
  _id,
  _html,
  _childOf,
  _event,
  _function,
  _classes
) => {
  const newElement = document.createElement(_type)
  newElement.id = _id
  newElement.innerHTML = _html
  window[_childOf].appendChild(newElement)
  if (_event !== null) {
    newElement.addEventListener(_event, _function)
  }
  if (_classes) {
    newElement.classList.add(_classes)
  }
}

const handleNextButtonClick = () => {
  if (c.set < c.sets.length - 1) {
    updateEverything(c.set + 1)
  }
}

const handleNumberButtonClick = (event) => {
  const newIndex = parseInt(event.target.id.split('_')[1])
  updateEverything(newIndex)
}

const handlePreviousButtonClick = () => {
  if (c.set > 0) {
    updateEverything(c.set - 1)
  }
}

const makeNextButton = () => {
  makeElement(
    'button',
    'stepByStepNextButton',
    '-&gt;',
    'wrapper',
    'click',
    handleNextButtonClick,
    'stepByStepButton'
  )
}

const makeNumberButtons = () => {
  for (let i = 0; i < c.sets.length; i++) {
    let buttonText = i

    if (i === 0) {
      buttonText = 'Start'
    } else if (i === c.sets.length - 1) {
      buttonText = 'Complete'
    }

    makeElement(
      'button',
      `stepByStepNumberButton_${i}`,
      buttonText,
      'wrapper',
      'click',
      handleNumberButtonClick,
      'stepByStepButton'
    )
  }
}

const makePreviousButton = () => {
  makeElement(
    'button',
    'stepByStepPreviousButton',
    '&lt;-',
    'wrapper',
    'click',
    handlePreviousButtonClick,
    'stepByStepButton'
  )
}

const loadLines = () => {
  c.lines = c.source.split('\n')
}

const removeHighlights = () => {
  console.log('removeHighlights')

  // bail if no lines were selected
  //
  if (c.sets[c.set].highlights.length === 0) {
    c.styleOverride.innerHTML = `.ace-monokai .ace_line .ace_comment { color: green; }`
    return
  }

  const selectors = [
    '.ace_keyword',
    '.ace_lparen',
    '.ace_source',
    '.ace_rust',
    '.ace_paren',
    '.ace_function',
    '.ace_entity',
    '.ace_identifier',
    '.ace_operator',
    '.ace_support',
    '.ace_constant',
    '.ace_quoted',
    '.ace_string',
    '.ace_double',
    '.ace_punctuation',
    '.ace_rparen',
  ]

  // console.log(c.lines.length)

  const removers = []

  for (let i = 0; i < c.lines.length; i++) {
    const lineNumber = i + 1
    if (!c.sets[c.set].highlights.includes(lineNumber)) {
      for (let x = 0; x < selectors.length; x++) {
        removers.push(
          `.ace-monokai .ace_line:nth-child(${lineNumber}) ${selectors[x]} { color: #888; }`
        )
        // console.log(selectors[x])
      }
      removers.push(
        `.ace-monokai .ace_line:nth-child(${lineNumber}) .ace_comment { color: green; }`
      )
    }
    // set the comment color for the lines with content
    else {
      removers.push(
        `.ace-monokai .ace_line:nth-child(${lineNumber}) .ace_comment { color: green; }`
      )
    }
  }

  c.styleOverride.innerHTML = `${removers.join(' ')}`
  // console.log(c.styleOverride.innerHTML)
}

const updateContent = () => {
  parts = []
  for (let i = 0; i < c.lines.length; i++) {
    if (c.sets[c.set].lines.includes(i + 1)) {
      parts.push(`${c.lines[i]}`)
    } else {
      parts.push('')
    }
  }

  // add the notes
  const noteParts = c.sets[c.set].note.split('\n').filter((line) => line !== '')
  for (let n = 0; n < noteParts.length; n++) {
    const outputLine = n + c.sets[c.set].noteCoords[0] - 1
    const padding = c.sets[c.set].noteCoords[1] - parts[outputLine].length - 1
    console.log(padding)
    for (let pad = 0; pad < padding; pad++) {
      parts[outputLine] += ' '
    }
    parts[outputLine] += noteParts[n]
  }

  c.editor.setValue(parts.join('\n'), 1)
}

const updateEverything = (set) => {
  c.set = set
  updateContent()
  removeHighlights()
}

const init = () => {
  loadLines()
  c.editor = ace.edit('editor')
  c.editor.setTheme('ace/theme/monokai')
  c.editor.session.setMode('ace/mode/rust')
  c.editor.setHighlightActiveLine(false)
  c.styleOverride = document.createElement('style')
  document.body.appendChild(c.styleOverride)
  makePreviousButton()
  makeNumberButtons()
  makeNextButton()
  updateEverything(0)
}

document.addEventListener('DOMContentLoaded', init)
