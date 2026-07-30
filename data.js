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
        subtitle: "Roadshow Guide",
        route: "Tokyo • Kyoto • Nagano",
        stamp: "✦ ROADSHOW · TOKYO 2026 ✦"
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
            address: "2 Chome-2-8 Shinjuku, Shinjuku City, Tokyo 160-0022日本",
            checkIn: "15:00",
            checkOut: "10:00",
            breakfast: "無"
        },
        {
            dates: "8/19",
            name: "京都車站南京阪飯店",
            location: "京都 JR",
            address: "55 Higashikujo Muromachi, Minami Ward, Kyoto, 601-8001日本",
            checkIn: "15:00",
            checkOut: "11:00",
            breakfast: "有"
        },
        {
            dates: "8/20",
            name: "長野東急 REI 飯店",
            location: "長野 JR",
            address: "1 Chome-28-3 Minamichitose, Nagano, 380-0823日本",
            checkIn: "15:00",
            checkOut: "10:00",
            breakfast: "無"
        },
        {
            dates: "8/21",
            name: "品川王子大飯店 N 塔",
            location: "品川 JR",
            address: "4 Chome-10-30 Takanawa, Minato City, Tokyo 108-8611日本",
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
        days: [
            {
                date: "8/17（一）",
                stops: [
                    {
                        label: "Flight",
                        time: "09:00 - 13:10",
                        link: { type: "flight", index: 0 }
                    },
                    {
                        label: "APA飯店〈新宿御苑前〉",
                        link: { type: "hotel", index: 0 }
                    }
                ]
            },
            {
                date: "8/18（二）",
                stops: [
                    { label: "不退房" },
                    { label: "上午空白無行程" },
                    {
                        label: "Hakuto(新宿)",
                        time: "13:30",
                        address: "1 Chome-1-13 Shinjuku, Shinjuku City, Tokyo 160-0022日本",
                        company: true
                    },
                    {
                        label: "APA飯店〈新宿御苑前〉",
                        link: { type: "hotel", index: 0 }
                    }
                ]
            },
            {
                date: "8/19（三）",
                stops: [
                    { label: "退房" },
                    { label: "移動往新宿(Shinjuku)" },
                    {
                        label: "Logitec",
                        time: "10:00",
                        address: "1 Chome-25-1 Nishishinjuku, Shinjuku City, Tokyo 163-0604日本",
                        company: true
                    },
                    { label: "移動往名古屋(Nagoya)" },
                    {
                        label: "Taiex",
                        time: "15:00",
                        address: "1 Chome-7-12 Wakatake, Ichinomiya, Aichi 491-0832日本",
                        company: true
                    },
                    { label: "移動往京都(Kyoto)" },
                    {
                        label: "京都車站南京阪飯店",
                        link: { type: "hotel", index: 1 }
                    }
                ]
            },
            {
                date: "8/20（四）",
                stops: [
                    { label: "退房" },
                    { label: "移動往滋賀縣(Shiga)" },
                    {
                        label: "NIPRO",
                        time: "9:30",
                        address: "61-9 Yamaderacho, Kusatsu, Shiga 525-0042日本",
                        company: true
                    },
                    { label: "移動往三重縣(Mie)" },
                    {
                        label: "Fuji",
                        time: "15:00",
                        address: "1-27 Fujicho, Yokkaichi, Mie 510-0013日本",
                        company: true
                    },
                    { label: "移動往長野縣(Nagano)" },
                    {
                        label: "長野東急 REI 飯店",
                        link: { type: "hotel", index: 2 }
                    }
                ]
            },
            {
                date: "8/21（五）",
                stops: [
                    { label: "退房" },
                    { label: "自駕往信州中野" },
                    {
                        label: "Takagi",
                        time: "10:30",
                        address: "330-2 Iwafune, Nakano, Nagano 383-0041日本",
                        company: true
                    },
                    { label: "移動往東京品川" },
                    {
                        label: "品川王子大飯店 N 塔",
                        link: { type: "hotel", index: 3 }
                    }
                ]
            },
            {
                date: "8/22（六）",
                stops: [
                    { label: "退房" },
                    {
                        label: "Flight",
                        time: "14:30 - 16:55",
                        link: { type: "flight", index: 1 }
                    }
                ]
            }
        ]
    }
};
