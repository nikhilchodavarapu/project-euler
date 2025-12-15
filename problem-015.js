// Lattice Paths
// Starting in the top left corner of a 2 ×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
/* ______
  |__|__|
  |__|__|
*/
// How many such routes are there through a 20 ×20 grid?
import { permutations, intersect } from "jsr:@std/collections";

const findNoOfRoutes = (size) => {
  const pattern = "1".repeat(size) + "2".repeat(size);
  return intersect(permutations(pattern).map(x => x.join(""))).length;
}