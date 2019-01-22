const formatter = new Intl.NumberFormat('dk-DK', {
  style: 'currency',
  currency: 'DKK',
  minimumFractionDigits: 2,
});

export const NumberToDkk = number => {
  return formatter.format(number);
};
