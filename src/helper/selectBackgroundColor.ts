const selectBackgroundColor = (backgroundColor: number): string => {
  switch (backgroundColor) {
    case 0:
      return "#000000";
    case 1:
      return "#6E6E6E";
    case 2:
      return "#A4A4A4";
    case 3:
      return "#ffffff";
    case 4:
      return "#0B173B";
    case 5:
      return "#F5A9F2";
    case 6:
      return "#CEECF5";
    default:
      return "#ECE0F8";
  }
};

export default selectBackgroundColor;
