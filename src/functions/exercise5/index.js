const numbers = [11, 9, 13, 12];

function minorInRange(pos1, pos2, arraynumbers) {
  let menor = arraynumbers[pos1];
  for (let i = pos1; i < pos2; i++) {
    if (arraynumbers[i] < arraynumbers[i + 1]) {
      menor = arraynumbers[i];
    }
  }
  if (arraynumbers[pos2] < menor) {
    menor = arraynumbers[pos2];
  }
  return menor;
}

console.log(minorInRange(0, 3, numbers));
console.log(minorInRange(2, 3, numbers));
console.log(minorInRange(1, 3, numbers));
