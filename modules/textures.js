function loadAsset(path) {
  let image = new Image();
  image.onload = () => {};
  image.src = `./textures/${path}.png`;
  return image;
}

// Main textures object
export default {
  init() {
    this.particlePositive = loadAsset('particles/particlePositive');
    this.particleNegative = loadAsset('particles/particleNegative');
    this.particleNeutral = loadAsset('particles/particleNeutral');
  }
}