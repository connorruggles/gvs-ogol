class Square {
    constructor(color, textColor, text) {
      this.color = color;
      this.textColor = textColor;
      this.text = text;
    }
    renderSquareShapeAndFillColor() {
      return `<rect width="200" height="200" style="fill:${this.color}"/>`;
    }
  
    renderSquareTextAndTextColor() {
      return `<text x="100" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
      </svg>
        `;
    }
  
    render() {
      return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    ${this.renderSquareShapeAndFillColor()}
  
    ${this.renderSquareTextAndTextColor()}
    `;
    }
  }
  module.exports = Square;