import numeral from 'numeral';

const formatNumber = (number: string | number) => numeral(number).format('0.0 b');

export { formatNumber };
