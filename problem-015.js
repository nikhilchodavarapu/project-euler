// Lattice Paths
// Starting in the top left corner of a 2 ×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
/* ______
  |__|__|
  |__|__|
*/
// How many such routes are there through a 20 ×20 grid?

const findNoOfRoutes = (size) => {
  let routes = 1;
  const limit = size * 2 + 1;
  for (let i = size + 1, j = 1; i < limit, j < size + 1; i++, j++) {
    routes = routes * i / j; 
  }
  return routes;
};

findNoOfRoutes(20)