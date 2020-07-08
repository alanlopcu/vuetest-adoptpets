export default {
  animalsCount: (state) => {
    return state.cats.lenght + state.dogs.lenght
  },
  getAllCats: (state) => {
    return state.pets.filter((pet) => {
      return pet.species === 'cat'
    })
  }
}
