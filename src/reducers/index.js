
const CHANGE_COLOR = 'CHANGE_COLOR'

export default function (state, action) { 
  if (!state) {
    state = { themeColor: 'red' }
  }
  switch (action.type) {
    case CHANGE_COLOR:
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
}

export const changeColor = (color) => {
  return { type: CHANGE_COLOR, color }
}
