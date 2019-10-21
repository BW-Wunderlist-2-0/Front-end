// Reducers index.js
const initialState = {
  tasks: [
    {
      userid: 1,
      id: 1,
      item: "",
      datemade: "",
      recurring: false
    },
    {
      userid: 1,
      id: 2,
      item: "",
      datemade: "",
      recurring: false
    }
  ]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
}
