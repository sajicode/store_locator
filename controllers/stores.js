// @desc Get all stores
// @route GET /api/v1/stores
// @access public
exports.getStores = (req, res, next) => {
	res.send({
		status: 'success',
		message: 'stores here'
	});
};
