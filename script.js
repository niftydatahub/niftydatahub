const stocks = [
  "RELIANCE.NS",
  "TCS.NS",
  "HDFCBANK.NS",
  "INFY.NS",
  "ICICIBANK.NS",
  "ITC.NS",
  "SBIN.NS",
  "BHARTIARTL.NS",
  "LT.NS",
  "ASIANPAINT.NS",
  "AXISBANK.NS",
  "BAJFINANCE.NS",
  "BAJAJFINSV.NS",
  "HCLTECH.NS",
  "KOTAKBANK.NS",
  "MARUTI.NS",
  "SUNPHARMA.NS",
  "TITAN.NS",
  "ULTRACEMCO.NS",
  "WIPRO.NS"
];

const table = document.createElement("table");

table.style.width = "100%";
table.style.borderCollapse = "collapse";
table.style.color = "white";

table.innerHTML = `
<tr>
  <th>Stock</th>
  <th>Price</th>
  <th>52H</th>
  <th>52L</th>
  <th>Change%</th>
</tr>
`;

document.body.appendChild(table);

stocks.forEach(symbol => {

  const price = (Math.random() * 4000 + 500).toFixed(2);
  const high52 = (price * 1.2).toFixed(2);
  const low52 = (price * 0.7).toFixed(2);
  const change = (Math.random() * 4 - 2).toFixed(2);

  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${symbol}</td>
    <td>₹${price}</td>
    <td>₹${high52}</td>
    <td>₹${low52}</td>
    <td style="color:${change >= 0 ? 'lime' : 'red'}">
      ${change}%
    </td>
  `;

  row.style.textAlign = "center";
  row.style.borderBottom = "1px solid #333";
  row.style.height = "45px";

  table.appendChild(row);

});
