/***********
This is ComplexJS, a Javascript library that supports Complex Numbers
Made by: HotdoGuy90
Git Repo: https://github.com/HotdoGuy90/ComplexJS
Version: 1.0.0
***********/

function Complex(real, imag) {
    this.real = real;
    this.imag = imag;
}

Complex.prototype.add = function (other) {
    return new Complex(this.real + other.real, this.imag + other.imag);
};
Complex.prototype.subtract = function (other) {
    return new Complex(this.real - other.real, this.imag - other.imag);
};
Complex.prototype.multiply = function (other) {
    return new Complex(this.real * other.real, this.imag * other.imag);
};
Complex.prototype.divide = function (other) {
    return new Complex(this.real / other.real, this.imag / other.imag);
};
Complex.prototype.abs = function () {
    return Math.sqrt(this.real * this.real + this.imag * this.imag);
};
Complex.prototype.show = function () {
    if (Math.abs(this.imag) !== this.imag) {
        return `(${this.real}${this.imag}i)`;
    }
    return `(${this.real}+${this.imag}i)`;
};
Complex.prototype.exponent = function (expon) {
    return new Complex(Math.pow(this.real, expon) - Math.pow(this.imag, expon), expon * this.real * this.imag);
}

window.Complex = Complex;
