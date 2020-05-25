const shuffleDeck = (data) => {
  return data
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);
};

const splitDeck = (cards) => {
  const data = [...cards];
  const half = Math.ceil(data.length / 2);

  return {
    playerOne: data.splice(0, half),
    computer: data.splice(-half),
  };
};

export { shuffleDeck, splitDeck };
