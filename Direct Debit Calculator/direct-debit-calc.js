function calculateDirectDebit(event) {
    event.preventDefault();

    // Electric variables
    const elecEac = parseFloat(document.getElementById("electric-eac").value) || 0;
    const elecUnitRate = parseFloat(document.getElementById("electric-unit-rate").value) || 0;
    const elecStandingCharge = parseFloat(document.getElementById("electric-standing-charge").value) || 0;

      // Gas variables
      const gasAq = parseFloat(document.getElementById("gas-aq").value) || 0;
      const gasUnitRate = parseFloat(document.getElementById("gas-unit-rate").value) || 0;
      const gasStandingCharge = parseFloat(document.getElementById("gas-standing-charge").value) || 0;

    // Calculate the VAT amount using a fixed VAT rate of 20%
    const totalElecUsage = elecEac * (elecUnitRate / 100);
    const totalelecStandingCharge = (elecStandingCharge / 100) * 365;

    const totalGasUsage = gasAq * (gasUnitRate / 100);
    const totalGasStandingCharge = (gasStandingCharge / 100) * 365;

    // Calculate the total amount including VAT
    const electricTotal = totalElecUsage + totalelecStandingCharge;
    const gasTotal = totalGasUsage + totalGasStandingCharge;
    const total = (electricTotal + gasTotal) / 12; 

    // Display the total amount including VAT
    if (isNaN(total)) {
      return "";
    }
    document.getElementById("electricTotal").textContent = "£" + electricTotal.toFixed(2);
    document.getElementById("gasTotal").textContent = "£" + gasTotal.toFixed(2);
    document.getElementById("total").textContent = "£" + total.toFixed(2);

}