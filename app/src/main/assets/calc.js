// Pure calculation logic (no network, no storage, no tracking).
var PERCENTS = [30, 35, 40, 45, 50, 60, 70, 80, 90, 100];

// cost    = actual price + transport + carry bag
// retail  = cost + (cost * percent / 100)   -> percent is profit on total cost
function calculate(actualPrice, transport, carryBag) {
  var a = Number(actualPrice) || 0;
  var t = Number(transport) || 0;
  var c = Number(carryBag) || 0;
  var cost = a + t + c;
  return {
    cost: cost,
    rows: PERCENTS.map(function (p) {
      var profit = (cost * p) / 100;
      return { percent: p, profit: profit, retail: cost + profit };
    })
  };
}

if (typeof module !== 'undefined') { module.exports = { calculate: calculate, PERCENTS: PERCENTS }; }
