const Triangle = require("../library/Triangle");

describe("Triangle", () => {
  it("Should render an SVG file that has a triangle shape and fills shape with color.", () => {
    const svg = `<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`;
    const triangle = new Triangle("blue", "red", "hi");
    const triangleShapeSvg = triangle.renderTriangleShapeAndFillColor("blue");
    expect(triangleShapeSvg).toEqual(svg);
  });
});

describe("Triangle", () => {
  it("Should render text that is 1-3 charcters and has the text color.", () => {
    const svg = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">hi</text>

    </svg>
      `;
    const triangle = new Triangle("blue", "red", "hi");
    const TextSvg = triangle.renderTriangleTextAndTextColor("red", "hi");
    expect(TextSvg).toEqual(svg);
  });
});