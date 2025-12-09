# ⚡ B-PNL Calculator

> **Binance Futures Profit & Loss Calculator** - A professional-grade tool for calculating futures trading P&L with accurate formulas and a stunning UI.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://wikicrafter.github.io/bpnlcalc/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

[**🚀 Try it Live**](https://wikicrafter.github.io/bpnlcalc/)

---

## ✨ Features

### 📊 **Comprehensive Calculations**
- ✅ **Long & Short Positions** - Support for both position types
- ✅ **Liquidation Price** - Know your risk level
- ✅ **Net P&L** - Profit after all costs deducted
- ✅ **ROI Percentage** - Return on investment display
- ✅ **Accurate Funding** - 8-hour interval calculations (matches Binance)
- ✅ **Separate Fees** - Entry and exit fees calculated independently

### 🎨 **Modern UI/UX**
- 🌑 **Binance-Inspired Dark Theme** with golden accents
- ✨ **Glassmorphism Effects** and smooth animations
- 🎯 **Color-Coded Results** (Green for profit, Red for loss)
- 📱 **Fully Responsive** - Works on all devices
- ⚡ **Fast & Lightweight** - No dependencies, runs entirely in browser

### 🛡️ **Reliability**
- ✅ **Input Validation** - Prevents calculation errors
- ✅ **Error Handling** - User-friendly error messages
- ✅ **Accurate Formulas** - Mathematically verified calculations

---

## 🚀 Quick Start

Simply open `index.html` in your browser or visit the [live demo](https://wikicrafter.github.io/bpnlcalc/).

No installation, no dependencies, no build process required!

---

## 📖 How to Use

1. **Select Position Type** - Choose Long (Buy) or Short (Sell)
2. **Enter Investment** - Your initial capital
3. **Set Entry Price** - Price at which you enter the position
4. **Set Exit Price** - Price at which you exit (or target price)
5. **Choose Leverage** - 1x to 125x
6. **Set Duration** - Hours you plan to hold the position
7. **Adjust Rates** - Funding rate and trading fees (defaults provided)
8. **Calculate** - Click the button to see your P&L breakdown

---

## 🧮 Calculation Details

### Position Size
```
Position Size = (Initial Investment × Leverage) / Entry Price
```

### Profit/Loss
**Long Position:**
```
P&L = Position Size × (Exit Price - Entry Price)
```

**Short Position:**
```
P&L = Position Size × (Entry Price - Exit Price)
```

### Funding Cost
```
Funding Intervals = floor(Hours Held / 8)
Funding Cost = Position Value × (Funding Rate / 100) × Intervals
```

### Trading Fees
```
Entry Fee = Position Value × (Trading Fee / 100)
Exit Fee = Exit Value × (Trading Fee / 100)
Total Fees = Entry Fee + Exit Fee
```

### Net P&L & ROI
```
Net P&L = Raw P&L - Total Costs
ROI = (Net P&L / Initial Investment) × 100
```

### Liquidation Price
**Long Position:**
```
Liquidation = Entry Price × (1 - (1/Leverage) + Maintenance Margin Rate)
```

**Short Position:**
```
Liquidation = Entry Price × (1 + (1/Leverage) - Maintenance Margin Rate)
```

*Maintenance Margin Rate: 0.4% (standard for most Binance pairs)*

---

## 🔧 Recent Updates

### v2.0 - Major Enhancement (December 2025)

#### 🐛 **Critical Bug Fix**
- Fixed leverage calculation that was using `1 + (leverage/100)` instead of direct leverage
- This bug made all position sizes and P&L calculations incorrect

#### ✨ **New Features**
- Long/Short position support
- Liquidation price calculator
- Net P&L after costs
- ROI percentage display
- 8-hour funding intervals (previously daily)
- Input validation and error handling
- Position size display in contracts

#### 🎨 **UI Overhaul**
- Complete redesign with Binance-inspired dark theme
- Golden gradient accents (#f0b90b)
- Glassmorphism effects with backdrop blur
- Smooth animations and transitions
- Color-coded profit/loss indicators
- Responsive design for mobile
- Professional typography (Inter font)

#### 📝 **Code Quality**
- Separated calculation and display logic
- Added comprehensive comments
- Improved code organization
- Better variable naming

---

## ⚠️ Disclaimer

**This calculator is for educational and informational purposes only.** It provides simplified estimates and may not fully replicate Binance's exact calculations. Always verify results independently before making trading decisions.

**NFA & DYOR** - Not Financial Advice. Do Your Own Research.

---

## 🛠️ Technology Stack

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with animations
- **Vanilla JavaScript** - No frameworks, pure JS
- **Google Fonts** - Inter font family

---

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

## 📧 Contact

Created by [@wikicrafter](https://github.com/wikicrafter)

---

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

---

**Happy Trading! 📈**




