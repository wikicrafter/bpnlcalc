function calculatePNL() {
    const initialInvestment = parseFloat(document.getElementById('initialInvestment').value) || 0;
    const entryPrice = parseFloat(document.getElementById('entryPrice').value) || 0;
    const exitPrice = parseFloat(document.getElementById('exitPrice').value) || 0;
    const leverage = parseFloat(document.getElementById('leverage').value) || 1;
    const daysHeld = parseFloat(document.getElementById('daysHeld').value) || 1;
    const fundingRate = parseFloat(document.getElementById('fundingRate').value) || 0;
    const tradingFee = parseFloat(document.getElementById('tradingFee').value) || 0;

    const leverageMultiplier = 1 + (leverage / 100);
    const contractQuantity = (initialInvestment / entryPrice) * leverageMultiplier;

    const entryValue = contractQuantity * entryPrice;
    const exitValue = contractQuantity * exitPrice;

    const profitLoss = exitValue - entryValue;

    // Funding cost calculation
    const fundingCost = (entryValue + exitValue) * (fundingRate / 100) * (daysHeld / 365);

    // Trading fee calculation
    const totalTradingFee = (entryValue + exitValue) * (tradingFee / 100);

    const totalCosts = totalTradingFee + fundingCost;

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <p>Profit/Loss: $${profitLoss.toFixed(2)}</p>
        <p>Funding Cost: $${fundingCost.toFixed(2)}</p>
        <p>Total Trading Fee: $${totalTradingFee.toFixed(2)}</p>
        <p>Total Costs: $${totalCosts.toFixed(2)}</p>
    `;
}
