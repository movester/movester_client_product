

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://ec2-13-125-241-245.ap-northeast-2.compute.amazonaws.com:7000",
      changeOrigin: true,
    })
  );
};