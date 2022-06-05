function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

let color = {
  "ForegroundColour": rgbToHex(197,200,198),
  "BackgroundColour": rgbToHex(75,78,84),
  "CursorColour": rgbToHex(197,200,198),
  "Black": rgbToHex(97,97,97),
  "BoldBlack": rgbToHex(117,117,117),
  "Red": rgbToHex(223,155,153),
  "BoldRed": rgbToHex(225,119,153),
  "Green": rgbToHex(113,150,114),
  "BoldGreen": rgbToHex(152,187,153),
  "Yellow": rgbToHex(224,188,114),
  "BoldYellow": rgbToHex(255,222,153),
  "Blue": rgbToHex(150,188,220),
  "BoldBlue": rgbToHex(186,221,252),
  "Magenta": rgbToHex(223,190,189),
  "BoldMagenta": rgbToHex(255,190,189),
  "Cyan": rgbToHex(152,188,189),
  "BoldCyan": rgbToHex(151,222,223),
  "White": rgbToHex(217,217,217),
  "BoldWhite": rgbToHex(233,233,233)
}

console.log(JSON.stringify(color,4))
