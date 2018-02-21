module.exports = function (conn, pin) { 
	conn.pin = pin;
	return conn;
};