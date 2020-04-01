const  {createProxyMiddleware } = require ('http-proxy-middleware');


module.exports = function(app){
	
	app.use('/api/login',createProxyMiddleware({
		target: 'http://login:8000',
		changeOrigin:true,
	})

	);
	app.use('/api/forgot',createProxyMiddleware({
		target: 'http://forgot:8003',
		changeOrigin:true,
	})

	);
	app.use('/api/register',createProxyMiddleware({
		target: 'http://register:8002',
		changeOrigin:true,
	})

	);
}