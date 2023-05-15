const initialState = [];

const animalesFiltradosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ANIMALES_FILTRADOS":
      return action.animalesFiltrados;
    default:
      return state;
  }
};

export default animalesFiltradosReducer;