module.exports = function () { 
	return function initializePoi(hook) { 
		hook.data._class = 'poi';
		hook.data._set = false;
	};
};