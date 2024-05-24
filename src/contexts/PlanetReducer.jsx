/**
 * CustomReducer.jsx
 * 
 * Use useReducer when:
 * + The next state depends on the previous state
 * + The state is complex
 * + You want to keep business logic:
 *   + as a pure function
 *   + in a separate module
 * + You want to be able to test easily
 */


const initialState = {
  json: [],
  index: 0,
  maxIndex: 0,
  src: "",
  name: ""
}


const reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case "SET_JSON":
      return setJSON(state, payload)

    case "SET_INDEX":
      return setIndex(state, payload)

    default:
      return {...state}
  }
}



function setJSON( state, json ) {
  const maxIndex = json.length - 1
  return { ...state, json, maxIndex } // assume json is valid
}



function setIndex( state, direction ) {
  let { json, index, maxIndex } = state

  if (isNaN(direction)) { // direction may be a numerical index
    switch (direction) {
      case "previous":
        index -= 1
      break

      case "next":
        index += 1
      break
    }

  } else {
    index = parseInt(direction) // in case it had a floating point
  }

  // Cycle through the entries
  if ( index < 0 ) {
    index = maxIndex
  } else if ( index > maxIndex ) {
    index = 0
  }

  const planet = json[index]
  const { name, src } = planet

  return { ...state, index, src, name }
}



export { reducer, initialState }
