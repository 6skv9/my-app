import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  recipes: [
    {
      id: 1,
      title: "Paneer Butter Masala",
      description: "Rich, creamy curry made with paneer and Indian spices.",
      image:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/02/paneer-butter-masala.jpg",
    },
    {
      id: 2,
      title: "Chicken Biryani",
      description: "Fragrant basmati rice cooked with marinated chicken.",
      image:
        "https://www.cubesnjuliennes.com/wp-content/uploads/2020/01/Hyderabadi-Chicken-Biryani.jpg",
    },
    {
      id: 3,
      title: "Veg Pulao",
      description: "Delicious rice dish made with vegetables and spices.",
      image:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/vegetable-pulao-recipe.jpg",
    },
  ],
};
 
const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = recipeSlice.actions;
export default recipeSlice.reducer;
