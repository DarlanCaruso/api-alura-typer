var app = require('./express');

app.listen(process.env.PORT || 5000, function() {
	console.log('Servidor iniciado');
});