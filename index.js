// Define variables containing strings, arrays, and objects
const animalSounds = {
  moo: "cow",
  neigh: "horse",
  baa: "sheep",
  oink: "pig",
  cluck: "chicken"
};

const traditionalNames = {
  bessie: "cow",
  dolly: "sheep",
  babe: "pig",
  little: "chicken"
};

const traditionalColors = {
  blackAndWhite: "cow",
  black: "sheep",
  pink: "pig"
};

const rainbowColorsByName = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const rainbowColorsByInitial = ["red", "orange", "yellow", "green", "blue", "violet"];

const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
  nested: {
    job: "Host of The Muppet Show",
    partner: "Miss Piggy"
  }
};

// Destructuring assignments for strings
const { moo, neigh, baa, oink, cluck } = animalSounds;

const { bessie, dolly, babe, little } = traditionalNames;

const { blackAndWhite, black, pink } = traditionalColors;

// Destructuring assignments for arrays
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColorsByName;

const [r, o, y, g, b, , v] = rainbowColorsByInitial;

const [ , , , , , indg] = rainbowColorsByName;

// Destructuring assignments for objects
const { muppetName, color, song, job, partner } = muppet;

const { song2,  song4, nested: { job: nestedJob, partner: nestedPartner } } = muppet;

// Logging variables to verify destructuring assignments
console.log(moo, neigh, baa, oink, cluck);
console.log(bessie, dolly, babe, little);
console.log(blackAndWhite, black, pink);
console.log(red, orange, yellow, green, blue, indigo, violet);
console.log(r, o, y, g, b, v, indg);
console.log(muppetName, color, song, job, partner);
console.log(song2, song4, nestedJob, nestedPartner);