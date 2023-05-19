const Square = require("../library/Square");

describe("Square", () => {
  it("Should render an SVG file that has a square shape and fills shape with color.", () => {
    const svg = `<rect width="200" height="200" style="fill:blue"/>`;
    const square = new Square("blue", "red", "hi");
    const squareShapeSvg = square.renderSquareShapeAndFillColor("blue");
    expect(squareShapeSvg).toEqual(svg);
  });
});

describe("Square", () => {
  it("Should render text that is 1-3 charcters and has the text color.", () => {
    const svg = `<text x="100" y="100" font-size="60" text-anchor="middle" fill="red">hi</text>

    </svg>
      `;
    const square = new Square("blue", "red", "hi");
    const TextSvg = square.renderSquareTextAndTextColor("red", "hi");
    expect(TextSvg).toEqual(svg);
  });
});