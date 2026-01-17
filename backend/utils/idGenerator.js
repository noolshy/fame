const { v4: uuidv4 } = require('uuid');

class IdGenerator {
  static generateMemberId() {
    const prefix = 'MEM';
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `${prefix}-${timestamp}-${random}`;
  }

  static generateApplicationId() {
    const prefix = 'APP';
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `${prefix}-${timestamp}-${random}`;
  }

  static generateUUID() {
    return uuidv4();
  }

  static generateFileName(originalName) {
    const ext = originalName.split('.').pop();
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 8);
    return `${timestamp}-${random}.${ext}`;
  }
}

module.exports = IdGenerator;