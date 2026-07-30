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
        </div>
    `;
}

function renderFlights(flights) {
    const el = document.getElementById("flights");

    const legsHtml = flights.map((leg, i) => `
        ${i > 0 ? "<hr>" : ""}
        <div class="flight-leg scroll-target" id="flight-${i}">
            <h3>${leg.title}</h3>
            ${routeLine(leg.from, leg.to)}
            <div class="info-grid">
                ${infoItem("起飛", leg.depart)}
                ${infoItem("抵達", leg.arrive)}
                ${infoItem("航班", leg.flightNo)}
            </div>
        </div>
    `).join("");

    el.innerHTML = `
        <h2 class="section-title">✈️ 航班資訊</h2>
        <div class="card flight">${legsHtml}</div>
    `;
}

function renderHotels(hotels) {
    const el = document.getElementById("hotels");

    const cardsHtml = hotels.map((hotel, i) => `
        <div class="card hotel scroll-target" id="hotel-${i}">
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

function renderTimelineStep(stop) {
    const jumpTarget = stop.link ? `${stop.link.type}-${stop.link.index}` : null;

    let labelHtml;
    if (jumpTarget) {
        labelHtml = `<a href="#${jumpTarget}" class="step-link" data-jump="${jumpTarget}">${stop.label}</a>`;
    } else if (stop.company) {
        labelHtml = `<span class="company-badge">${stop.label}</span>`;
    } else {
        labelHtml = `<span>${stop.label}</span>`;
    }

    const timeHtml = stop.time
        ? `<div class="step-time">${stop.time}</div>`
        : "";

    const mapHtml = stop.address
        ? `<a class="step-map" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stop.address)}" target="_blank" rel="noopener">🗺️ Google 地圖</a>`
        : "";

    return `
        <div class="step">
            <div class="step-marker">
                <span class="step-dot"></span>
                <span class="step-line"></span>
            </div>
            <div class="step-body">
                <div class="step-label">${labelHtml}</div>
                ${timeHtml}
                ${mapHtml}
            </div>
        </div>
    `;
}

function renderItineraryDay(day) {
    return `
        <div class="card itinerary-day">
            <h3>${day.date}</h3>
            <div class="stepper">
                ${day.stops.map(renderTimelineStep).join("")}
            </div>
        </div>
    `;
}

function renderItinerary(itinerary) {
    const el = document.getElementById("itinerary");

    const days = itinerary.days || [];

    const daysHtml = days.length
        ? days.map(renderItineraryDay).join("")
        : `<div class="card"><p>行程資料準備中...</p></div>`;

    const noteHtml = itinerary.note
        ? `<p class="itinerary-note">${itinerary.note}</p>`
        : "";

    el.innerHTML = `
        <h2 class="section-title">📅 出差行程表</h2>
        ${daysHtml}
        ${noteHtml}
    `;
}

function initJumpLinks() {
    document.addEventListener("click", (e) => {
        const link = e.target.closest("[data-jump]");
        if (!link) return;

        const target = document.getElementById(link.dataset.jump);
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "center" });

        target.classList.remove("jump-highlight");
        void target.offsetWidth;
        target.classList.add("jump-highlight");
        setTimeout(() => target.classList.remove("jump-highlight"), 1600);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderNav(NAV_ITEMS);
    renderCover(TRIP_DATA.cover);
    renderFlights(TRIP_DATA.flights);
    renderTransport(TRIP_DATA.transport);
    renderItinerary(TRIP_DATA.itinerary);
    renderHotels(TRIP_DATA.hotels);
    initScrollSpy(NAV_ITEMS);
    initJumpLinks();
});
