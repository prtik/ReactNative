const formatIncome = value => {
  // Remove any non-numeric characters (except for decimal point)
  const numericValue = value.replace(/[^0-9.]/g, '');

  // Parse the numeric value and format it with commas
  const numberWithCommas = parseFloat(numericValue).toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  // Update the state
  return numberWithCommas;
};

export {formatIncome};
