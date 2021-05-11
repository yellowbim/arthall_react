// setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {


    // main으로 가는 경우는 aws 서버 주소로 호출하게 해놨음
    app.use(
        '/main',
        createProxyMiddleware({
            // target: 'http://ec2-13-125-199-82.ap-northeast-2.compute.amazonaws.com:8080/test',
            target: 'http://localhost:8083',
            changeOrigin: true,
        }))

    // auth 포함 하위 route에 대해서는 localhost:5000/v1을 domain으로 하여 proxy설정
    app.use(
        '/GetkobisData',
        createProxyMiddleware({
            target: 'http://localhost:8083',
            changeOrigin: true,
        }))

    // dummy 포함 하위 route에 대해서는 localhost:6000/v1을 domain으로 하여 proxy설정
    app.use(
        '/v1',
        createProxyMiddleware({
            target: 'https://openapi.naver.com',
            changeOrigin: true,
        }))
}