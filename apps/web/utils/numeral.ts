import numeral from 'numeral';

numeral.register('locale', 'vi-vn', {
	delimiters: {
		thousands: '.',
		decimal: ',',
	},
	abbreviations: {
		thousand: 'k',
		million: 'm',
		billion: 'b',
		trillion: 't',
	},
	ordinal: (number) => {
		return number === 1 ? 'er' : 'ème';
	},
	currency: {
		symbol: '₫',
	},
});

numeral.locale('vi-vn');

export { numeral };
