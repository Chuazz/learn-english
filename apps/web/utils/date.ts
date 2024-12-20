const convertExpiredToDateVN = (timestamp: number) => {
	return new Date((timestamp + 7 * 3600) * 1000);
};

export { convertExpiredToDateVN };
