class Circle {
    constructor(color, textColor, text) {
      this.color = color;
      this.textColor = textColor;
      this.text = text;
    }
    renderCircleShapeAndFillColor() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  
    renderCircleTextAndTextColor() {
      return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
      </svg>
      `;
    }
  
    render() {
      return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
    ${this.renderCircleShapeAndFillColor()}
  
    ${this.renderCircleTextAndTextColor()}
    `;
    }
  }
  module.exports = Circle;