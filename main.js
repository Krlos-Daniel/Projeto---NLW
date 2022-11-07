function createdGame(player1, hour, player2) {
  return `
    <li>
        <img src="./assets/icon=${player1}.svg" alt="Bandeira do ${player1}" />
        <strong>${hour}</strong>
        <img src="./assets/icon=${player2}.svg" alt="Bandeira da ${player2}" />
    </li>

`
}

let delay = -0.4;
function createdCard(date, day, games) {
  delay = delay + 0.3;
    return `
    <div class="card" style="animation-delay: ${delay}">
          <h2>${date} <span>${day}</span></h2>
          <ul>
          ${games}
          </ul>
        </div>
    `
}

document.querySelector("#cards").innerHTML = 
        createdCard("24/11","quinta",createdGame("brazil", "16:00", "serbia")) +
        createdCard("28/11", "segunda", createdGame("brazil","13:00","switzerland")) +
        createdCard("02/12", "sexta", createdGame("brazil", "16:00", "cameroon"))
