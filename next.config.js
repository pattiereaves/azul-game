console.log(process.env.NODE_ENV === 'production');
console.log(process.env.NODE_ENV);

module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/azul-game' : '',
};
