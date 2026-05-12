// LIVE MARKET INDICES

const INDICES_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQp9P30QbhWlYzbPIdYUjhlmL8oVseRGo5vMYoIPrLpy2oEmok6kC1QAbpDBXkEX-9oiD7YcAACo2Lw/pub?output=csv";

async function loadIndices() {

  try {

    const response = await fetch(`${INDICES_URL}&t=${Date.now()}`);

    const csv = await response.text();

    const rows = csv.trim().split("\n").slice(1);

    const container = document.getElementById("indicesContainer");

    container.innerHTML = "";

    rows.forEach((row) => {

      const cols = row.split(",");

      const name = cols[0];

      const price = cols[1];

      const change = cols[2];

      const positive = !change.includes("-");

      container.innerHTML += `

        <div class="index-card">

          <div class="index-name">
            ${name}
          </div>

          <div class="index-price">
            ${Number(price).toLocaleString("en-IN")}
          </div>

          <div class="index-change ${positive ? "positive" : "negative"}">
            ${positive ? "▲" : "▼"} ${change}
          </div>

        </div>

      `;
    });

  } catch (error) {

    console.log(error);

  }
}

loadIndices();

setInterval(loadIndices, 60000);
