const selectColor = (backgroundColor: number): string => {
  switch (backgroundColor) {
    case 0:
      return "white";
    case 1:
      return "white";
    case 2:
      return "black";
    case 3:
      return "black";
    case 4:
      return "white";
    case 5:
      return "black";
    case 6:
      return "black";
    default:
      return "black";
  }
};

export default selectColor;
