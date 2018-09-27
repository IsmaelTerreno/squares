import uuid from 'uuid/v1';
/**
 * Square entity.
 */
class Square {
  constructor(idX, colorX, borderX, sizeX) {
    this.color = colorX;
    this.border = borderX;
    this.size = sizeX;
    this.id = idX || uuid();
  }
}

export default Square;
