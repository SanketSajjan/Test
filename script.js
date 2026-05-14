fetch('data/output.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById("date").innerText = data.date;

    let html = "";

    data.stocks.forEach(stock => {
      html += `<li>${stock}</li>`;
    });

    document.getElementById("stocks").innerHTML = html;
  });