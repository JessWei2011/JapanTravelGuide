const NAV_ITEMS = [
    { target: "cover", icon: "🏠", label: "首頁" },
    { target: "flights", icon: "✈️", label: "航班" },
    { target: "hotels", icon: "🏨", label: "飯店" },
    { target: "transport", icon: "🚗", label: "接送" },
    { target: "itinerary", icon: "📅", label: "行程" }
];

const TRIP_DATA = {
    cover: {
        emoji: "✈️ 🧳 📘",
        title: "東京羽田出差",
        dateRange: "2026.08.17 – 2026.08.22",
        subtitle: "Business Trip Guide",
        route: "Tokyo • Kyoto • Nagano",
        stamp: "✦ BUSINESS TRIP · TOKYO 2026 ✦"
    },

    flights: [
        {
            title: "去程｜08/17 星期一",
            from: "(TSA) 松山機場 T1",
            to: "(HND) 羽田機場 T3",
            depart: "09:00",
            arrive: "13:10",
            flightNo: "CI0220 (V)"
        },
        {
            title: "回程｜08/22 星期六",
            from: "(HND) 羽田機場 T3",
            to: "(TSA) 松山機場 T1",
            depart: "14:30",
            arrive: "16:55",
            flightNo: "CI0221 (Q)"
        }
    ],

    hotels: [
        {
            dates: "8/17 - 8/18",
            name: "APA飯店〈新宿御苑前〉",
            location: null,
            checkIn: "15:00",
            checkOut: "10:00",
            breakfast: "無"
        },
        {
            dates: "8/19",
            name: "京都車站南京阪飯店",
            location: "京都 JR",
            checkIn: "15:00",
            checkOut: "11:00",
            breakfast: "有"
        },
        {
            dates: "8/20",
            name: "長野東急 REI 飯店",
            location: "長野 JR",
            checkIn: "15:00",
            checkOut: "10:00",
            breakfast: "無"
        },
        {
            dates: "8/21",
            name: "品川王子大飯店 N 塔",
            location: "品川 JR",
            checkIn: "15:00",
            checkOut: "11:00",
            breakfast: "有"
        }
    ],

    transport: {
        title: "KKDAY 高級型 7座",
        contactMethod: "WhatsApp",
        legs: [
            {
                label: "去程接機",
                datetime: "08/17 13:10",
                from: "HND 東京羽田國際機場 T3",
                to: "APA飯店〈新宿御苑前〉",
                orderNo: "#26KK289830330"
            },
            {
                label: "回程送機",
                datetime: "08/22 11:20",
                from: "品川王子大飯店 N 塔",
                to: "HND 東京羽田國際機場 T3",
                orderNo: "#26KK282630514"
            }
        ]
    },

    itinerary: {
        status: "行程資料準備中...",
        todo: [
            "客戶拜訪",
            "會議時間",
            "JR交通",
            "午餐安排"
        ]
    }
};
