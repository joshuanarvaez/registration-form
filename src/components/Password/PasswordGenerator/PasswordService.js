export class PasswordService {
  static getRandomLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  static getRandomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  static getRandomNumbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  static getRandomSymbols() {
    let symbolString = `!@#$%^&*/`;
    return symbolString[Math.floor(Math.random() * symbolString.length)];
  }

  static generatePassword(passwordLength) {
    let password = '';

    for (let i = 0; i < passwordLength; i++) {
      // Generate a random lowercase letter
      password += this.getRandomLowerCase();
      // Generate a random uppercase letter
      password += this.getRandomUpperCase();
      // Generate a random number
      password += this.getRandomNumbers();
      // Generate a random symbol
      password += this.getRandomSymbols();
    }

    return password.slice(0, passwordLength);
  }
}
