
function countingSheep(n) {
  if (n > 0) {
  console.log(`${n}: Another sheep jumps over the fence`);
  n -= 1;
  countingSheep(n);
  } 
  else {return console.log('All sheep jumped over the fence')}
}

countingSheep(3)