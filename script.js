function calculatePNL() {
    // Get input values
    const initialInvestment = parseFloat(document.getElementById('initialInvestment').value) || 0;
    const entryPrice = parseFloat(document.getElementById('entryPrice').value) || 0;
    const exitPrice = parseFloat(document.getElementById('exitPrice').value) || 0;
    const leverage = parseFloat(document.getElementById('leverage').value) || 1;
    const hoursHeld = parseFloat(document.getElementById('hoursHeld').value) || 0;
    const fundingRate = parseFloat(document.getElementById('fundingRate').value) || 0.01; // Default 0.01%
    const tradingFee = parseFloat(document.getElementById('tradingFee').value) || 0.04; // Default 0.04% (taker)
    const positionType = document.getElementById('positionType').value;

    // Input validation
    if (initialInvestment <= 0 || entryPrice <= 0 || leverage <= 0) {
        document.getElementById('result').innerHTML = '<p class="error">Please enter valid values for investment, entry price, and leverage.</p>';
        return;
    }

    // Calculate position size (contract quantity)
    // Fixed: leverage should be used directly, not 1 + (leverage/100)
    const positionSize = (initialInvestment * leverage) / entryPrice;
    const positionValue = positionSize * entryPrice;

    // Calculate P&L based on position type
    let rawProfitLoss;
    if (positionType === 'long') {
        rawProfitLoss = positionSize * (exitPrice - entryPrice);
    } else { // short
        rawProfitLoss = positionSize * (entryPrice - exitPrice);
    }

    // Calculate funding cost (charged every 8 hours)
    const fundingIntervals = Math.floor(hoursHeld / 8);
    const fundingCost = positionValue * (fundingRate / 100) * fundingIntervals;

    // Calculate trading fees (entry + exit)
    const entryFee = positionValue * (tradingFee / 100);
    const exitValue = positionSize * exitPrice;
    const exitFee = exitValue * (tradingFee / 100);
    const totalTradingFee = entryFee + exitFee;

    // Total costs
    const totalCosts = totalTradingFee + fundingCost;

    // Net P&L after costs
    const netProfitLoss = rawProfitLoss - totalCosts;

    // Calculate ROI (Return on Investment)
    const roi = (netProfitLoss / initialInvestment) * 100;

    // Calculate liquidation price
    let liquidationPrice;
    const maintenanceMarginRate = 0.004; // 0.4% for most pairs on Binance

    if (positionType === 'long') {
        liquidationPrice = entryPrice * (1 - (1 / leverage) + maintenanceMarginRate);
    } else { // short
        liquidationPrice = entryPrice * (1 + (1 / leverage) - maintenanceMarginRate);
    }

    // Display results
    displayResults({
        positionType,
        positionSize,
        positionValue,
        entryPrice,
        exitPrice,
        leverage,
        rawProfitLoss,
        fundingCost,
        fundingIntervals,
        totalTradingFee,
        totalCosts,
        netProfitLoss,
        roi,
        liquidationPrice,
        initialInvestment
    });
}

function displayResults(data) {
    const resultElement = document.getElementById('result');
    const isProfit = data.netProfitLoss >= 0;
    const profitClass = isProfit ? 'profit' : 'loss';

    resultElement.innerHTML = `
        <div class="result-section">
            <h3>Position Details</h3>
            <div class="result-row">
                <span>Position Type:</span>
                <span class="value ${data.positionType}">${data.positionType.toUpperCase()}</span>
            </div>
            <div class="result-row">
                <span>Position Size:</span>
                <span class="value">${data.positionSize.toFixed(8)} contracts</span>
            </div>
            <div class="result-row">
                <span>Position Value:</span>
                <span class="value">$${data.positionValue.toFixed(2)}</span>
            </div>
            <div class="result-row">
                <span>Leverage:</span>
                <span class="value">${data.leverage}x</span>
            </div>
            <div class="result-row">
                <span>Liquidation Price:</span>
                <span class="value liquidation">$${data.liquidationPrice.toFixed(2)}</span>
            </div>
        </div>

        <div class="result-section">
            <h3>Profit & Loss</h3>
            <div class="result-row">
                <span>Raw P&L:</span>
                <span class="value ${data.rawProfitLoss >= 0 ? 'profit' : 'loss'}">$${data.rawProfitLoss.toFixed(2)}</span>
            </div>
            <div class="result-row">
                <span>Funding Cost:</span>
                <span class="value">-$${data.fundingCost.toFixed(2)} (${data.fundingIntervals} intervals)</span>
            </div>
            <div class="result-row">
                <span>Trading Fees:</span>
                <span class="value">-$${data.totalTradingFee.toFixed(2)}</span>
            </div>
            <div class="result-row">
                <span>Total Costs:</span>
                <span class="value">-$${data.totalCosts.toFixed(2)}</span>
            </div>
        </div>

        <div class="result-section highlight">
            <div class="result-row net-pnl">
                <span>Net P&L:</span>
                <span class="value ${profitClass}">$${data.netProfitLoss.toFixed(2)}</span>
            </div>
            <div class="result-row roi">
                <span>ROI:</span>
                <span class="value ${profitClass}">${data.roi.toFixed(2)}%</span>
            </div>
        </div>
    `;
}
