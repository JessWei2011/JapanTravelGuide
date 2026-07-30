function renderNav(navItems) {
    const el = document.getElementById("nav");

    el.innerHTML = navItems.map((item, i) => `
        <a href="#${item.target}" class="nav-item${i === 0 ? " active" : ""}" data-target="${item.target}">
            <span class="nav-icon">${item.icon}</span>
            <span class="nav-label">${item.label}</span>
        </a>
    `).join("");
}

function initScrollSpy(navItems) {
    const navLinks = document.querySelectorAll(".nav-item");
    const sections = navItems
        .map(item => document.getElementById(item.target))
        .filter(Boolean);

    const setActive = (target) => {
        navLinks.forEach(link => {
            link.classList.toggle("active", link.dataset.target === target);
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActive(entry.target.id);
            }
        });
    }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });

    sections.forEach(section => observer.observe(section));
}

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
            <div class="stamp">${cover.stamp}</div>
        </div>
    `;
}

function infoItem(label, value) {
    return `
        <div class="info-item">
            <span class="info-label">${label}</span>
            <span class="info-value">${value}</span>
        </div>
    `;
}

function routeLine(from, to) {
    return `
        <div class="route-line">
            <span>${from}</span>
            <span class="arrow">→</span>
            <span>${to}</span>
        </div>
    `;
}

function buildMapLinks(address) {
    if (!address) return "";

    const q = encodeURIComponent(address);

    return `
        <div class="map-links">
            <a class="map-btn" href="https://www.google.com/maps/search/?api=1&query=${q}" target="_blank" rel="noopener">🗺️ Google 地圖</a>
            <a class="map-btn" href="https://maps.apple.com/?q=${q}" target="_blank" rel="noopener">📍 Apple 地圖</a>
        </div>
    `;
}

function renderFlights(flights) {
    const el = document.getElementById("flights");

    const legsHtml = flights.map((leg, i) => `
        ${i > 0 ? "<hr>" : ""}
        <h3>${leg.title}</h3>
        ${routeLine(leg.from, leg.to)}
        <div class="info-grid">
            ${infoItem("起飛", leg.depart)}
            ${infoItem("抵達", leg.arrive)}
            ${infoItem("航班", leg.flightNo)}
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
            <div class="hotel-name">${hotel.name}</div>
            <div class="info-grid">
                ${hotel.location ? infoItem("位置", hotel.location) : ""}
                ${infoItem("入住", hotel.checkIn)}
                ${infoItem("退房", hotel.checkOut)}
                ${infoItem("早餐", hotel.breakfast)}
            </div>
            ${buildMapLinks(hotel.address)}
        </div>
    `).join("");

    el.innerHTML = `
        <h2 class="section-title">🏨 飯店資訊</h2>
        ${cardsHtml}
    `;
}

function renderTransport(transport) {
    const el = document.getElementById("transport");

    const legsHtml = transport.legs.map(leg => `
        <hr>
        <div class="leg-label">${leg.label}</div>
        ${routeLine(leg.from, leg.to)}
        <div class="info-grid">
            ${infoItem("時間", leg.datetime)}
            ${infoItem("訂單", leg.orderNo)}
        </div>
    `).join("");

    el.innerHTML = `
        <h2 class="section-title">🚗 接送機資訊</h2>
        <div class="card transport">
            <h3>${transport.title}</h3>
            <div class="info-grid">
                ${infoItem("聯絡方式", transport.contactMethod)}
            </div>
            ${legsHtml}
        </div>
    `;
}

function renderItinerary(itinerary) {
    const el = document.getElementById("itinerary");

    const chipsHtml = itinerary.todo
        .map(item => `<span class="chip">✔ ${item}</span>`)
        .join("");

    el.innerHTML = `
        <h2 class="section-title">📅 出差行程表</h2>
        <div class="card">
            <p>${itinerary.status}</p>
            <p class="chip-list-label">待加入</p>
            <div class="chip-list">${chipsHtml}</div>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    renderNav(NAV_ITEMS);
    renderCover(TRIP_DATA.cover);
    renderFlights(TRIP_DATA.flights);
    renderHotels(TRIP_DATA.hotels);
    renderTransport(TRIP_DATA.transport);
    renderItinerary(TRIP_DATA.itinerary);
    initScrollSpy(NAV_ITEMS);
});
