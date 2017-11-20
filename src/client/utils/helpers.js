module.exports.delay = function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);

    });
}

module.exports.autoBind = function autoBind(self) {
	for (const key of Object.getOwnPropertyNames(self.constructor.prototype)) {
		const val = self[key];

		if (key !== 'constructor' && typeof val === 'function') {
			self[key] = val.bind(self);
		}
	}

	return self;
};