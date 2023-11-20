// This selects the GSP location from the drop down and adds it to the script
function gspSelector() {
  const gspSelector = document.getElementById('gsp-selector');
  const selectedTariff = tariffSelector();

  if (gspSelector.value === '' || selectedTariff.value === '') {
    return;
  }

  const gsp = gspSelector.value;
  const tariff = selectedTariff.value;

// This fetches the tariff data from the API and turns the responce into a javascrit object 
fetch(tariff)
.then(response => response.json())
.then(data => {

  // This pulls the electric standing charge 
  const electricStandingCharge = data.single_register_electricity_tariffs[gsp].direct_debit_monthly.standing_charge_inc_vat.toFixed(2);
  document.getElementById('electric-standing-charge').value = electricStandingCharge;

  // This pulls the electric unit rate
  const electricUnitRate = data.single_register_electricity_tariffs[gsp].direct_debit_monthly.standard_unit_rate_inc_vat.toFixed(2);
  document.getElementById('electric-unit-rate').value = electricUnitRate;
  console.log(electricStandingCharge);

  // This pulls the gas standing charge
  const gasStandingCharge = data.single_register_gas_tariffs[gsp].direct_debit_monthly.standing_charge_inc_vat.toFixed(2);
  document.getElementById('gas-standing-charge').value = gasStandingCharge;

  // This pulls the gas standing charge
  const gasUnitRate = data.single_register_gas_tariffs[gsp].direct_debit_monthly.standard_unit_rate_inc_vat.toFixed(2);
  document.getElementById('gas-unit-rate').value = gasUnitRate;
  });
}

//This is the function to get the tariff selected in the dropdown menu
function tariffSelector() {
  return document.getElementById('tariff-selector');
}