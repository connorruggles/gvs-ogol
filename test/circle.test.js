const Circle = require("../library/Circle.js");

describe("Circle", () => {
  it("Should render an SVG file that has a circle shape and fills shape with color.", () => {
    const svg = `<circle cx="150" cy="100" r="80" fill="blue" />`;
    const circle = new Circle("blue", "red", "hi");
    const circleShapeSvg = circle.renderCircleShapeAndFillColor("blue");
    expect(circleShapeSvg).toEqual(svg);
  });
});

describe("Circle", () => {
  it("Should render text that is 1-3 charcters and has the text color.", () => {
    const svg = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">hi</text>
  
    </svg>
    `;
    const circle = new Circle("blue", "red", "hi");
    const TextSvg = circle.renderCircleTextAndTextColor("red", "hi");
    expect(TextSvg).toEqual(svg);
  });
});