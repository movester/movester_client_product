

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://ec2-3-39-191-168.ap-northeast-2.compute.amazonaws.com:8000/",
      changeOrigin: true,
    })
  );
};