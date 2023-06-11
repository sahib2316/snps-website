const images = {};
const context = require.context("./", false, /\.(png|jpe?g|svg)$/);
context.keys().forEach((key) => {
  images[key] = context(key);
});

export default images;
