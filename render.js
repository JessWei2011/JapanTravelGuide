function renderCover(cover) {
    const el = document.getElementById("cover");
    el.innerHTML = `
        <div class="cover-box">
            <div class="illustration">${cover.emoji}</div>
            <h1>${cover.title}</h1>
            <h2>${cover.dateRange}</h2>
            <p>
                ${cover.subtitle}
                <br>
                ${cover.route}
            </p>
        </div>
    `;
}

function renderFlights(flights) {
    const el = document.getElementById("flights");

    const legsHtml = flights.map((leg, i) => `
        ${i > 0 ? "<hr>" : ""}
        <h3>${leg.title}</h3>
        <div class="info">
            ${leg.from}
            <br>↓<br>
            ${leg.to}
            <br><br>
            起飛：${leg.depart}
            <br>
            抵達：${leg.arrive}
            <br>
            航班：${leg.flightNo}
        </div>
    `).join("");

    el.innerHTML = `
        <h2 class="section-title">✈️ 航班資訊</h2>
        <div class="card flight">${legsHtml}</div>
    `;
}

function renderHotels(hotels) {
    const el = document.getElementById("hotels");

    const cardsHtml = hotels.map(hotel => `
        <div class="card hotel">
            <h3>${hotel.dates}</h3>
            <div class="info">
                ${hotel.name}
                <br>
                ${hotel.location ? `位置：${hotel.location}<br>` : ""}
                入住：${hotel.checkIn}
                <br>
                退房：${hotel.checkOut}
                <br>
                早餐：${hotel.breakfast}
            </div>
        </div>
    `).join("");

    el.innerHTML = `
        <h2 class="section-title">🏨 飯店資訊</h2>
        ${cardsHtml}
    `;
}

function renderTransport(transport) {
    const el = document.getElementById("transport");

    const legsHtml = transport.legs.map((leg, i) => `
        <hr>
        <b>${leg.label}</b>
        <br>
        ${leg.datetime}
        <br>
        ${leg.from}
        ↓
        <br>
        ${leg.to}
        <br><br>
        訂單：${leg.orderNo}
    `).join("");

    el.innerHTML = `
        <h2 class="section-title">🚗 接送機資訊</h2>
        <div class="card transport">
            <h3>${transport.title}</h3>
            <div class="info">
                聯絡方式：
                <br>
                ${transport.contactMethod}
                ${legsHtml}
            </div>
        </div>
    `;
}

function renderItinerary(itinerary) {
    const el = document.getElementById("itinerary");

    const todoHtml = itinerary.todo
        .map(item => `✔ ${item}`)
        .join("<br>\n");

    el.innerHTML = `
        <h2 class="section-title">📅 出差行程表</h2>
        <div class="card">
            <p>${itinerary.status}</p>
            <p>
                待加入：
                <br>
                ${todoHtml}
            </p>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    renderCover(TRIP_DATA.cover);
    renderFlights(TRIP_DATA.flights);
    renderHotels(TRIP_DATA.hotels);
    renderTransport(TRIP_DATA.transport);
    renderItinerary(TRIP_DATA.itinerary);
});
