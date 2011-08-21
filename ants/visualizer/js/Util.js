/**
 * Random provides functions to generate random numbers in integer ranges.
 */
Random = {
	/**
	 * returns an integer in the range [0..range[
	 * 
	 * @param {number}
	 *            range the exclusive limit of the range
	 */
	range : function(range) {
		return Math.random() * range | 0;
	},
	/**
	 * returns an integer in the range [from..to]
	 * 
	 * @param {number}
	 *            from the low value of the range (inclusive)
	 * @param {number}
	 *            to the high value of the range (inclusive)
	 */
	fromTo : function(from, to) {
		return from + (Math.random() * (1 + to - from) | 0);
	}
};

Math.wrapAround = function(x, range) {
	return x - Math.floor(x / range) * range;
};

Quirks = {
	fullImageShadowSupport : !(window.navigator && window.navigator.userAgent
			.match(/\b(Firefox\/5\.|Chrome\/1[23]\.).*/))
};

Function.prototype.extend = function(clazz) {
	var property = undefined;
	for (property in clazz.prototype) {
		this.prototype[property] = clazz.prototype[property];
	}
};