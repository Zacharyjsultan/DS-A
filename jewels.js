function JewelsStone(jewels, stones) {
  let count = 0;
  jewels.split("").forEach((jewel) => {
    if (stones.includes(jewel)) {
      count++;
    }
  });

  return count;
}
