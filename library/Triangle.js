class Triangle {
    constructor(color, textColor, text) {
      this.color = color;
      this.textColor = textColor;
      this.text = text;
    }
  
    renderTriangleShapeAndFillColor() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
    }
  
    renderTriangleTextAndTextColor() {
      return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
      </svg>
        `;
    }
  
    render() {
      return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    ${this.renderTriangleShapeAndFillColor()}
  
    ${this.renderTriangleTextAndTextColor()}
    `;
    }
  }
  module.exports = Triangle;