import { useState } from "react";

const days = [
  {
    day: 1,
    date: "Sun, 15 Feb",
    title: "Arrival & Chatuchak Adventure",
    icon: "\u2708\uFE0F",
    color: "#E8B931",
    items: [
      { time: "06:30", title: "Depart Jakarta (CGK)", desc: "Indonesia AirAsia from Soekarno-Hatta. Boarding 05:45, departure 06:30.", type: "flight" },
      { time: "10:00", title: "Arrive Don Mueang (DMK)", desc: "Immigration, collect bags. Buy a PHYSICAL SIM card at the airport \u2014 you need a Thai phone number to register LINE, LINE MAN, Bolt & MuvMi!", type: "arrival", tip: "Go to the DTAC booth (right after baggage claim, open 24hrs) or AIS (Exit 2) or TrueMove H. Get a Tourist SIM with data + calls (~299 THB for 8 days / 15GB). Bring your PASSPORT \u2014 required for registration. Staff will install & activate it for you in minutes!", details: [
        { label: "DTAC", value: "2 booths: after baggage claim & opposite Exit 6. Open 00:00-23:59. Recommended!" },
        { label: "AIS", value: "Arrivals Hall 1, Exit 2. Largest network, best rural coverage." },
        { label: "TrueMove H", value: "3 stores in international terminal. Also available at 7-Eleven." },
        { label: "Price", value: "299 THB (~Rp135k) for 8-day 15GB 5G + calls. Up to 999 THB for 30-day unlimited." },
        { label: "You Need", value: "Passport (photo taken for registration, required by Thai law)" },
        { label: "Why Physical", value: "Thai number needed for LINE, LINE MAN, Grab, Bolt, MuvMi registration!" },
      ] },
      { time: "10:30", title: "DMK \u2192 Chatuchak Weekend Market", desc: "A1 Bus (30 THB, ~20 min) from Terminal 1 Gate 6 to BTS Mo Chit. Or SRT Red Line (15 min) to Bang Sue + MRT 1 stop.", type: "transport", details: [
        { label: "A1 Bus", value: "30 THB (~Rp14k) | Every 15 min | 20-30 min | Gate 6 T1" },
        { label: "SRT Red Line", value: "15-33 THB | Every 15 min | 15 min + MRT transfer" },
        { label: "Grab/Taxi", value: "200-350 THB (~Rp90-160k) | 15-45 min" },
      ]},
      { time: "11:00 \u2013 14:00", title: "Chatuchak Weekend Market", desc: "World's largest weekend market! 15,000+ stalls. It's SUNDAY so fully open. Clothes, handicrafts, souvenirs. Food: coconut ice cream, pad thai, mango sticky rice.", type: "activity", tip: "Store luggage at lockers near BTS Mo Chit (40-100 THB). Bring CASH \u2014 most stalls don't accept cards!" },
      { time: "14:00 \u2013 15:00", title: "\u2192 Niran Grand Hotel", desc: "BTS Mo Chit \u2192 Siam \u2192 Sukhumvit Line \u2192 Udom Suk, then Grab. Or Grab directly (~250-350 THB).", type: "transport" },
      { time: "15:00 \u2013 18:00", title: "Check-in & Rest", desc: "Niran Grand Hotel, 81/1 Soi Udomsuk 17, Sukhumvit 103, Bangna. Rooftop pool, relax.", type: "hotel" },
      { time: "18:30 \u2013 21:00", title: "Dinner Nearby", desc: "Street food along Sukhumvit 103 or Grab to Mega Bangna.", type: "food" },
    ],
  },
  {
    day: 2, date: "Mon, 16 Feb", title: "Hotel Move, Shopping & Chinatown", icon: "\uD83D\uDED2", color: "#E85D75",
    items: [
      { time: "07:30 \u2013 09:00", title: "Move to 14 Satorhn Hotel", desc: "Check out from Niran Grand Hotel \u2192 Grab/taxi to 14 Satorhn Hotel in Sathorn area. Drop bags & settle in your new base!", type: "hotel", details: [
        { label: "Hotel", value: "14 Satorhn Hotel, Sathorn Road" },
        { label: "Map", value: "maps.app.goo.gl/kUFJup5ciTMUBxJQ6" },
        { label: "Nearest BTS", value: "BTS Chong Nonsi / Surasak" },
        { label: "Nearest MRT", value: "MRT Lumphini / Silom" },
        { label: "From Niran", value: "Grab ~200-350 THB, 30-45 min" },
      ], tip: "From today onwards, Sathorn is your home base! Great central location \u2014 close to BTS Silom Line, Chinatown, nightlife & riverside." },
      { time: "09:00 \u2013 12:00", title: "Pratunam Shopping District", desc: "Wholesale fashion hub! Platinum Fashion Mall, Indra Square, 'Everything 20 Baht' stores.", type: "activity", details: [
        { label: "Tofu Pratunam", value: "Cheap eats \u2014 Kaiton Pratunam chicken rice ~50 THB" },
        { label: "All \u0E3F20 stores", value: "Petchaburi Rd \u2014 socks, accessories, phone cases" },
        { label: "Platinum Mall", value: "6 floors wholesale fashion, 9AM-8PM" },
        { label: "Getting There", value: "BTS Chong Nonsi \u2192 Siam \u2192 Ratchathewi, then walk 10 min" },
      ]},
      { time: "12:30 \u2013 17:00", title: "Chinatown, Song Wat & Neng Noi Mua", desc: "MRT Wat Mangkon to Yaowarat Road. Sampeng Lane for accessories. Song Wat Street \u2014 creative district with caf\u00E9s, galleries, street art. Neng Noi Mua for sweets. Baan Thong Street for gold.", type: "activity", tip: "Song Wat Street is the hippest area in old Bangkok \u2014 colonial architecture, hidden caf\u00E9s, perfect for couple photos!" },
      { time: "17:30 \u2013 19:00", title: "Thai Massage", desc: "Traditional Thai massage to recharge!", type: "activity", details: [
        { label: "Thai Massage", value: "200-400 THB/hr (~Rp90-180k)" },
        { label: "Foot Massage", value: "200-300 THB/hr" },
        { label: "Oil Massage", value: "300-500 THB/hr" },
      ]},
      { time: "19:00 \u2013 22:00", title: "Jodd Fairs Night Market", desc: "Near MRT Thailand Cultural Centre (Exit 4). 600+ stalls! Volcano Ribs, grilled seafood, mango sticky rice, Toro Fries.", type: "food", details: [
        { label: "Location", value: "Ratchadapisek Rd, MRT Cultural Centre Exit 4" },
        { label: "Hours", value: "5PM \u2013 1AM daily" },
        { label: "Payment", value: "Cash mostly!" },
      ], tip: "Arrive 6-7PM to beat crowds. Bring small bills!" },
    ],
  },
  {
    day: 3, date: "Tue, 17 Feb", title: "Meetings, ICONSIAM & Chinatown", icon: "\uD83D\uDCBC", color: "#4ECDC4",
    items: [
      { time: "07:00 – 09:30", title: "Morning Market Tour", desc: "Bangkok's best morning markets — authentic, cheap, buzzing! Head out early before your first meeting.", type: "activity", details: [
        { label: "Or Tor Kor", value: "Near Chatuchak. Premium fruits & Thai food. 6AM-6PM" },
        { label: "Wang Lang", value: "Thonburi side. Thai sweets & snacks. Ferry ride!" },
        { label: "Nang Loeng", value: "100+ year old market. Traditional khanom Thai" },
        { label: "Khlong Toei", value: "Largest wet market. Very local!" },
      ]},
      { time: "10:05 – 10:35", title: "Interview — Prana Wijaya", desc: "30-minute meeting. Make sure you're at a quiet spot with good WiFi — hotel or nearby café.", type: "activity", tip: "Find a quiet corner at hotel or Luka Café (5 min walk). Test your mic & WiFi beforehand!" },
      { time: "10:35 – 14:30", title: "Lunch & Free Time", desc: "Explore Sathorn/Silom area, grab lunch, or work from a café before your next meeting.", type: "food" },
      { time: "14:45 – 15:30", title: "Meeting — Amarin Sam", desc: "Google Meet call with Amarin Sam.", type: "activity", details: [
        { label: "Time", value: "2:45 PM – 3:30 PM" },
        { label: "Link", value: "meet.google.com/qny-xqgy-kor" },
        { label: "Platform", value: "Google Meet" },
      ], tip: "Join a few minutes early. Same quiet spot as your morning meeting!" },
      { time: "16:00 – 18:30", title: "ICONSIAM", desc: "Thailand's most iconic riverside mall! Luxury brands, SookSiam indoor floating market (ground floor), amazing river views. Easy to reach from Sathorn via BTS Saphan Taksin + free shuttle boat.", type: "activity", details: [
        { label: "Getting There", value: "BTS Saphan Taksin (2 stops) → free ICONSIAM shuttle boat (every 15 min)" },
        { label: "SookSiam", value: "GF — indoor floating market with street food from 77 provinces! Must-visit." },
        { label: "Hours", value: "10AM – 10PM daily" },
        { label: "Highlights", value: "River view terrace, Apple Store, Takashimaya, art exhibitions" },
      ], tip: "Don't miss SookSiam on the ground floor — it's like a floating market INSIDE the mall! Amazing Thai food from every region." },
      { time: "18:30 – 21:00", title: "Chinatown Night — Yaowarat", desc: "Take the Gold Line or Grab from ICONSIAM to Chinatown. Yaowarat Road comes alive at night! Street-side seafood, dim sum, Thai-Chinese desserts under the neon lights.", type: "food", details: [
        { label: "Getting There", value: "ICONSIAM → Grab (~80 THB, 10 min) or ferry to Saphan Taksin → MRT Wat Mangkon" },
        { label: "Must Try", value: "T&K Seafood, Nai Ek Roll Noodle, pad thai, mango sticky rice" },
        { label: "Vibe", value: "Neon-lit streets, bustling, very photogenic at night!" },
      ], tip: "Yaowarat is best after 6PM when all the street food stalls open up. Walk from MRT Wat Mangkon towards the neon signs!" },
    ],
  },
  {
    day: 4, date: "Wed, 18 Feb", title: "Sampeng, Cowork & Dib Museum", icon: "\uD83D\uDED2", color: "#7B68EE",
    items: [
      { time: "08:00 – 11:00", title: "Sampeng Market", desc: "Bangkok's oldest wholesale market in the heart of Chinatown! Narrow alleys packed with accessories, fabrics, toys, snacks at wholesale prices. Cash only!", type: "activity", details: [
        { label: "Location", value: "Sampeng Lane (Soi Wanit 1), Chinatown" },
        { label: "Getting There", value: "MRT Wat Mangkon Exit 1, then 5 min walk" },
        { label: "Hours", value: "8AM – 6PM daily (best before noon)" },
        { label: "What to Buy", value: "Accessories, bags, phone cases, fabrics, Thai snacks" },
      ], tip: "Sampeng is narrow and crowded — wear comfy shoes, bring a small bag, and keep your phone safe! Everything is negotiable." },
      { time: "11:30 – 14:00", title: "C Asean Samyan CO-OP", desc: "FREE 24/7 coworking at Samyan Mitrtown! Work session + lunch at the mall food court or 24/7 Starbucks in the same building.", type: "activity", details: [
        { label: "Getting There", value: "MRT Wat Mangkon → Sam Yan (3 stops, ~10 min)" },
        { label: "Cost", value: "FREE! Register with passport at reception" },
        { label: "Facilities", value: "Desks, phone booths, WiFi (AIS/True SIM), power outlets" },
        { label: "Lunch", value: "Samyan Mitrtown food court — Thai food 50-150 THB" },
      ], tip: "Register at the counter with your passport. Grab a desk on the upper level — quieter!" },
      { time: "14:30 – 17:30", title: "Dib Museum Bangkok", desc: "Thailand's FIRST international contemporary art museum! Repurposed 1980s warehouse. 81 works by 40 artists — Turrell, Hirst, Boonma.", type: "activity", details: [
        { label: "Ticket", value: "700 THB (~Rp315k) foreign | 550 THB Thai" },
        { label: "Buy Online", value: "dibbangkok.org → Book Tickets → date/time → credit card → QR email" },
        { label: "On-site", value: "Cash or Thai local cards ONLY! Book online!" },
        { label: "Hours", value: "Thu-Mon, 10AM-7PM | CLOSED Tue & Wed" },
        { label: "Location", value: "111 Soi Sukhumvit 40, Phra Khanong" },
        { label: "Transport", value: "MRT Sam Yan → BTS Silom Line → Phra Khanong, then Grab 5 min" },
        { label: "Must-See", value: "Turrell 'Straight Up' | Boonma 3F | Kwade courtyard" },
      ], tip: "Dib Museum is normally CLOSED on Wednesdays! Check dibbangkok.org for any special Wed openings, or swap this with Day 5 (Thursday) if needed." },
      { time: "18:00 – 19:30", title: "Dinner near EmSphere", desc: "Head to EmSphere/EmQuartier area for dinner before Tic Tac Toe. Great restaurants on BTS Phrom Phong.", type: "food" },
      { time: "20:00 – Late", title: "Tic Tac Toe Bangkok", desc: "Hottest dating bar on 5F EmSphere. NYC-lounge vibe, magenta lighting, world-class sound.", type: "nightlife", details: [
        { label: "Location", value: "5F EmSphere, 628 Sukhumvit Rd" },
        { label: "Hours", value: "7PM till late (2-3AM)" },
        { label: "Entry", value: "FREE!" },
        { label: "BTS", value: "Phrom Phong" },
        { label: "Dress", value: "Chic — no flip-flops/sportswear" },
        { label: "Music", value: "Acoustic 8:30-9:30PM → DJ sets" },
        { label: "Drinks", value: "Bottles ฿2,490+ | Cocktails ~฿440" },
        { label: "Special", value: "Thu Ladies' Night — free bottle for 4+ women" },
      ], tip: "Reserve table via Line app. Menu has hidden visuals under blue light!" },
    ],
  },
  {
    day: 5, date: "Thu, 19 Feb", title: "SkyWalk & Colorful Street Art", icon: "\uD83C\uDFA8", color: "#FF6B6B",
    items: [
      { time: "10:00 – 12:00", title: "Talad Noi & Soi Charoen Krung — Street Art", desc: "Bangkok's MOST colorful neighborhood! Open-air street art gallery. Murals by Alex Face (3-eyed bunny), Meubon (Pukruk bird), and international muralists on century-old shophouses.", type: "activity", details: [
        { label: "FREE!", value: "No entrance fee — it's a public neighborhood. Just walk & explore!" },
        { label: "Start at", value: "Soi Charoen Krung 32 — highest concentration of murals (Bukruk Festival)" },
        { label: "Must-see", value: "Alex Face bunny | Meubon's Pukruk bird | Lion Care by Bonus TMC | Steampunk gecko" },
        { label: "Then walk", value: "Soi Charoen Krung 22 → Trok San Chao Rong Kueak alley → Song Wat Road murals" },
        { label: "Cafés", value: "Mother Roaster (above mechanic shop!), Songwat Coffee Roasters" },
        { label: "Getting There", value: "From hotel: BTS Saphan Taksin (2 stops), ferry to Si Phraya pier (400m walk). Or Grab ~150 THB" },
        { label: "MRT option", value: "MRT Blue Line to Hua Lamphong, then walk 10 min or Grab 5 min" },
      ], tip: "This is Bangkok's answer to Wynwood Miami! FREE to explore, ultra-photogenic for couples. Morning light is great for photos." },
      { time: "12:00 – 13:30", title: "Lunch in Talad Noi", desc: "Grab lunch at Mother Roaster, Songwat Coffee Roasters, or nearby Chinatown street food.", type: "food" },
      { time: "14:00 – 15:00", title: "Khlong Ong Ang Walking Street", desc: "Canal-side art walk near Chinatown! Murals by Thailand's top street artists. Malee Brew + Bloom café nearby — stunning flower exhibitions & espresso with dry ice!", type: "activity", details: [
        { label: "FREE!", value: "No entrance fee. Open evening hours." },
        { label: "Location", value: "Khlong Ong Ang canal, between Chinatown and Phahurat (Little India)" },
        { label: "Must-see", value: "Alex Face meditating bunny mural | Art Alley (psychedelic black-light tunnel!)" },
        { label: "Getting There", value: "10 min walk from Talad Noi / Song Wat Road. Or MRT Sam Yot station" },
      ], tip: "Visit Malee Brew + Bloom café nearby — stunning flower exhibitions inside and amazing espresso drinks with dry ice!" },
      { time: "15:30 – 18:30", title: "Mahanakhon SkyWalk", desc: "Bangkok's highest point at 314m! 50-sec elevator to 74F. Glass tray on 78F. Visit at SUNSET!", type: "activity", details: [
        { label: "Daytime", value: "~880 THB adult (~Rp396k) | 10AM-3:30PM" },
        { label: "Sunset", value: "~880-1,000 THB | 4-6:30PM (BEST!)" },
        { label: "Buy Online", value: "Klook / GetYourGuide for 10-20% off. Show QR." },
        { label: "Getting There", value: "BTS Chong Nonsi, Exit 3, 2 min walk — right near your hotel!" },
        { label: "Hours", value: "Daily 10AM-7PM (last entry 6:30PM)" },
        { label: "Rules", value: "No bags (lockers avail). No food. Comfy shoes." },
      ], tip: "Book SUNSET ticket (4-6:30PM) — watch Bangkok go from golden hour to glittering lights! It's walking distance from 14 Satorhn!" },
      { time: "19:00 – 21:00", title: "Dinner — Sathorn Area", desc: "Dinner near the hotel after an epic sunset. Silom street food, or grab a nice meal at one of the restaurants along Sathorn.", type: "food" },
    ],
  },
  {
    day: 6, date: "Fri, 20 Feb", title: "Freelance & Explore", icon: "\uD83D\uDCBB", color: "#10B981",
    items: [
      { time: "08:00 \u2013 13:00", title: "Work Session at Caf\u00E9", desc: "Head to a laptop-friendly caf\u00E9 for a productive freelancing session. See Caf\u00E9s tab!", type: "activity", details: [
        { label: "C Asean", value: "Samyan. 24/7 FREE cowork! ~10 min from hotel." },
        { label: "Luka Caf\u00E9", value: "Silom/Pan Rd. 5 min walk! Great coffee." },
        { label: "Paper Plane", value: "40F Thong Lo. FREE cowork \u2014 skyline views!" },
        { label: "Sarnies", value: "Sukhumvit 39. 630 Mbps WiFi! Quiet 2F." },
      ], tip: "Order every ~2 hours \u2014 Bangkok caf\u00E9 etiquette. Bring a jacket, AC is freezing!" },
      { time: "13:00 \u2013 14:00", title: "Lunch", desc: "Eat at your caf\u00E9 or explore nearby options.", type: "food" },
      { time: "14:30 \u2013 18:00", title: "Last Sightseeing", desc: "Grand Palace (500 THB), Wat Pho (300 THB), Wat Arun (100 THB), or shopping at MBK / Siam.", type: "activity", details: [
        { label: "Grand Palace", value: "500 THB \u2014 Thailand's most iconic. Cover shoulders & knees." },
        { label: "Wat Pho", value: "300 THB \u2014 Giant Reclining Buddha" },
        { label: "Wat Arun", value: "100 THB \u2014 Temple of Dawn, riverside" },
        { label: "MBK Center", value: "Free entry \u2014 massive mall near BTS National Stadium" },
      ]},
      { time: "18:30 \u2013 21:00", title: "Farewell Dinner", desc: "Pick your favorite spot from the trip or try somewhere new!", type: "food" },
    ],
  },
  {
    day: 7, date: "Sat, 21 Feb", title: "Departure Day", icon: "\uD83D\uDEEB", color: "#45B7D1",
    items: [
      { time: "09:00 \u2013 12:00", title: "Last Morning", desc: "Pack, last-minute souvenirs at nearby Silom, or enjoy a slow morning. Get that final Thai iced tea!", type: "activity" },
      { time: "12:00 \u2013 13:00", title: "Check-out", desc: "Check out from 14 Satorhn Hotel. Store bags at reception if needed.", type: "hotel" },
      { time: "13:00 \u2013 14:30", title: "Last Lunch", desc: "One final Thai meal near Sathorn \u2014 make it count!", type: "food" },
      { time: "15:00 \u2013 16:30", title: "\u2192 Don Mueang Airport", desc: "From Sathorn: Grab/taxi (~350-500 THB, 45-90 min). Or BTS Chong Nonsi \u2192 Mo Chit + A1 Bus (30 THB). Arrive 2.5+ hrs early.", type: "transport", tip: "Leave EARLY! Saturday traffic can be brutal. Allow 2+ hours from Sathorn. BTS + A1 Bus is most reliable \u2014 no traffic jams!", details: [
        { label: "Grab/Taxi", value: "350-500 THB | 45-90 min | Door-to-door but traffic risk" },
        { label: "BTS + A1", value: "BTS Chong Nonsi \u2192 Siam \u2192 Mo Chit (35 min) + A1 bus (20 min, 30 THB)" },
        { label: "BTS + SRT", value: "BTS \u2192 MRT Bang Sue \u2192 SRT Red Line to DMK (15 min, 15-33 THB)" },
        { label: "Total Cost", value: "BTS ~62 THB + A1 Bus 30 THB = ~92 THB (cheapest!)" },
        { label: "Best Option", value: "BTS + A1 Bus \u2014 reliable, no traffic, ~55 min total" },
      ] },
      { time: "18:45", title: "Depart BKK \u2192 Jakarta", desc: "Indonesia AirAsia. DMK 18:45 \u2192 CGK 22:15. 3h30m. Selamat jalan, Bangkok!", type: "flight" },
    ],
  },
];

const cafes = [
  { name: "C Asean Samyan CO-OP", area: "Samyan Mitrtown Mall", wifi: "AIS/True SIM needed", vibe: "Library / Serious", power: "Abundant \u2014 desks, phone booths", hours: "24/7 \u2014 FREE!", cost: "FREE! (bring passport/ID)", highlight: "FREE 24/7 coworking with desks, phone booths, multiple levels. Register with passport. ~10 min from hotel via MRT.", bts: "MRT Sam Yan", stars: 5, tags: ["24/7", "FREE", "NEARBY"] },
  { name: "Luka Caf\u00E9", area: "Silom / Pan Road", wifi: "High-speed", vibe: "Creative / Trendy", power: "Charging stations", hours: "8AM\u20136PM", cost: "Coffee 100-150 THB, mains 180-350 THB", highlight: "5 min walk from hotel! Trendy with wood, greenery. Great avo toast & specialty coffee. Dog-friendly!", bts: "BTS Chong Nonsi", stars: 5, tags: ["NEARBY"] },
  { name: "Le Caf\u00E9 Ph\u00E9nix", area: "Ekkamai (near BTS)", wifi: "Reliable", vibe: "Stylish & Quiet", power: "Plenty", hours: "24/7!", cost: "Coffee 90-140 THB", highlight: "Hidden gem open 24 hours! Perfect for night owls or working with Jakarta timezone clients.", bts: "BTS Ekkamai", stars: 4, tags: ["24/7"] },
  { name: "Coffee Club (Staybridge)", area: "Thonglor", wifi: "Hotel WiFi", vibe: "Casual / Reliable", power: "Available", hours: "24/7!", cost: "Coffee 100-160 THB", highlight: "Open 24/7 inside Staybridge Suites. Comfortable, reliable. Avoid 7-10:30AM breakfast rush.", bts: "BTS Thong Lo", stars: 4, tags: ["24/7"] },
  { name: "Sarnies Sukhumvit", area: "Sukhumvit Soi 39", wifi: "630 Mbps!", vibe: "Minimal & Cozy", power: "Plenty upstairs", hours: "8AM\u201310PM", cost: "Coffee 100-150 THB, mains 200-400 THB", highlight: "Blazing fast 630 Mbps WiFi, quiet 2nd floor workspace. Japanese-themed. One of BKK's best.", bts: "BTS Phrom Phong", stars: 5, tags: ["FAST WIFI"] },
  { name: "Paper Plane Project", area: "Thong Lo (40th Floor!)", wifi: "Fast, stable", vibe: "Library Quiet", power: "Most seats", hours: "~8AM\u20136PM", cost: "Just buy coffee (~120 THB+) \u2014 no entry fee!", highlight: "FREE coworking on the 40th floor with jaw-dropping Bangkok skyline views. Recently renovated, stylish.", bts: "BTS Thong Lo", stars: 5, tags: ["FREE", "VIEWS"] },
  { name: "The Commons Thonglor", area: "Thonglor Soi 17", wifi: "Fast & stable", vibe: "Social / Community", power: "Indoor outlets", hours: "8AM\u201312AM", cost: "Coffee 100-160 THB, various vendors", highlight: "Community lifestyle space with food vendors. Productive before 5PM, social hub after.", bts: "BTS Thong Lo", stars: 4, tags: ["LATE NIGHT"] },
  { name: "Open House", area: "6F Central Embassy, Phloen Chit", wifi: "Good", vibe: "Premium / Bookstore", power: "At tables", hours: "10AM\u20139PM", cost: "Coffee 130-180 THB", highlight: "Open-concept bookstore + restaurants + caf\u00E9s. Lots of tables for working. Instagram-worthy.", bts: "BTS Phloen Chit", stars: 4, tags: [] },
];

const practicalInfo = [
  { title: "\u2708\uFE0F Getting to Don Mueang (DMK)", items: [
    "FROM 14 SATORHN HOTEL (Sathorn area):",
    "Grab/Taxi: 350-500 THB, 45-90 min depending on traffic",
    "BTS + A1 Bus: Chong Nonsi \u2192 Siam \u2192 Mo Chit (35 min) \u2192 A1 bus to DMK (30 THB, 20 min)",
    "BTS + SRT Red Line: BTS to MRT Bang Sue \u2192 SRT Red Line to Don Mueang (15 min, 15-33 THB)",
    "\u26A0\uFE0F Allow 2-2.5 hours total! Traffic is unpredictable, especially rush hour (7-9AM, 4-7PM)",
    "Cheapest: BTS (~62 THB) + A1 Bus (30 THB) = ~92 THB total",
    "Fastest: Grab/taxi early morning or late night (~45 min, ~350 THB)",
    "Most reliable: BTS to Mo Chit + A1 Bus \u2014 no traffic delays, ~55 min total",
  ]},
  { title: "\uD83D\uDCB3 Money & ATMs", items: [
    "ATMs charge 150-250 THB (~Rp67-112k) per foreign withdrawal",
    "AEON ATMs = lowest at 150 THB (Big C, Lotus, malls)",
    "Max: 20,000-30,000 THB/transaction",
    "ALWAYS choose 'Decline Conversion' / 'Charge in THB' \u2014 saves 3-5%!",
    "BETTER: Bring IDR/USD cash \u2192 exchange at SuperRich (Pratunam/Siam)",
    "Markets & street food = CASH ONLY. Grab accepts cards.",
  ]},
  { title: "\uD83D\uDCF1 Thai SIM Card (Physical)", items: [
    "Buy at DMK airport arrivals \u2014 DTAC, AIS, or TrueMove H booths",
    "DTAC recommended: 2 booths, open 24hrs, good speed & coverage",
    "Tourist SIM: 299 THB (8 days, 15GB 5G + calls) up to 999 THB (30 days, unlimited)",
    "Passport required for registration (Thai law). Staff installs & activates for you.",
    "Both of you need separate SIM cards!",
    "Thai number needed to register: LINE, LINE MAN, Grab, Bolt, MuvMi",
    "Top up later via provider app (DTAC app cheaper!) or any 7-Eleven",
    "After SIM: download LINE, LINE MAN (food delivery), Grab, Bolt, MuvMi",
  ]},
  { title: "\uD83D\uDEF5 Scooter Rental", items: [
    "Daily: 250-400 THB/day for Honda Click 125cc",
    "Weekly: 1,400-2,000 THB. Deposit: 2,000-5,000 cash (NEVER passport!)",
    "Shops: Fatboy's (Ekkamai/Silom), ZipBikes, Rent A Scooter BKK",
    "Need IDP with motorcycle endorsement. Helmet required (500 THB fine).",
    "\u26A0\uFE0F BTS/MRT + Grab honestly safer for tourists in BKK traffic!",
  ]},
  { title: "\uD83D\uDE87 Getting Around", items: [
    "BTS Skytrain: 16-62 THB. MRT: 17-42 THB. Fast & clean.",
    "Grab: Like Gojek \u2014 cars, bikes, food delivery. Cash or card.",
    "Bolt: Ride-hailing alternative, often cheaper than Grab!",
    "MuvMi: Electric tuk-tuk app! Fixed price, no bargaining. 6:30AM-10PM.",
    "MuvMi zones: Rattanakosin (Grand Palace), Sukhumvit, Silom, Ari, Chula-Samyan + more",
    "MuvMi how-to: Download app \u2192 register \u2192 pick-up/drop-off \u2192 top up wallet (credit card) \u2192 scan QR on tuk-tuk",
    "MuvMi Tourist Pass: 499 THB/person \u2014 unlimited private rides all day!",
    "LINE MAN: Thailand's top food delivery app (like GoFood). Order via LINE.",
    "River boats: 15-40 THB. Great for Grand Palace area.",
    "Get Rabbit Card at BTS: 200 THB (100 deposit + 100 credit).",
  ]},
  { title: "\uD83D\uDCB1 Currency", items: [
    "1 THB \u2248 Rp 450 | 100 THB \u2248 Rp 45k | 1,000 THB \u2248 Rp 450k",
    "Budget couple/day: 2-3k THB (~Rp900k-1.35jt)",
    "Mid-range: 4-6k THB (~Rp1.8-2.7jt)",
    "Comfortable: 6-10k THB (~Rp2.7-4.5jt)",
  ]},
  { title: "\uD83C\uDFE8 Hotels", items: [
    "Day 1: Niran Grand Hotel \u2014 81/1 Soi Udomsuk 17, Sukhumvit 103, Bangna",
    "Day 2-7: 14 Satorhn Hotel \u2014 Sathorn Road (maps.app.goo.gl/kUFJup5ciTMUBxJQ6)",
    "14 Satorhn nearest BTS: Chong Nonsi / Surasak",
    "14 Satorhn nearest MRT: Lumphini / Silom",
    "Great central location \u2014 walking distance to Silom, Mahanakhon, nightlife",
  ]},
];

const TC = { flight: "#3B82F6", arrival: "#10B981", transport: "#F59E0B", activity: "#8B5CF6", hotel: "#EC4899", food: "#EF4444", nightlife: "#6366F1" };
const TI = { flight: "\u2708\uFE0F", arrival: "\uD83D\uDEEC", transport: "\uD83D\uDE8C", activity: "\uD83C\uDFAF", hotel: "\uD83C\uDFE8", food: "\uD83C\uDF5C", nightlife: "\uD83C\uDFB5" };
const tagColors = { "24/7": "#10B981", "FREE": "#3B82F6", "NEARBY": "#EC4899", "FAST WIFI": "#F59E0B", "VIEWS": "#8B5CF6", "LATE NIGHT": "#6366F1" };

function getInitialTab() {
  const start = new Date(2026, 1, 15); // Feb 15, 2026
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  start.setHours(0, 0, 0, 0);
  const diff = Math.floor((today - start) / 86400000);
  return Math.max(0, Math.min(diff, 6));
}

export default function App() {
  const [tab, setTab] = useState(getInitialTab);
  const [exp, setExp] = useState({});
  const [cafeOpen, setCafeOpen] = useState(null);
  const [infoOpen, setInfoOpen] = useState(null);
  const tog = (k) => setExp((p) => ({ ...p, [k]: !p[k] }));
  const tabs = [...days.map((d) => ({ l: `D${d.day}`, s: d.date.split(", ")[0], i: d.icon, c: d.color })), { l: "Caf\u00E9s", s: "24/7", i: "\u2615", c: "#10B981" }, { l: "Info", s: "Tips", i: "\uD83D\uDCCB", c: "#4ECDC4" }];

  return (
    <div style={{ fontFamily: "'Segoe UI',-apple-system,sans-serif", background: "linear-gradient(135deg,#0f0c29,#1a1a2e 50%,#16213e)", color: "#e8e8e8", minHeight: "100vh", WebkitTapHighlightColor: "transparent" }}>
      <div style={{ background: "linear-gradient(135deg,#E8B931,#E85D75 50%,#7B68EE)", padding: "32px 20px 22px", paddingTop: "max(32px, env(safe-area-inset-top, 32px))", textAlign: "center" }}>
        <div style={{ fontSize: 40 }}>{"\uD83C\uDDF9\uD83C\uDDED"}</div>
        <h1 style={{ fontSize: 26, fontWeight: 800, margin: "4px 0", color: "#fff", textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>BANGKOK ITINERARY</h1>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.9)", margin: 0 }}>Jakarta → Bangkok • 15–21 Feb 2026 • 7 Days</p>
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", margin: "3px 0 0" }}>Couple's adventure + freelance work guide {"\uD83D\uDC95\uD83D\uDCBB"}</p>
      </div>

      <div style={{ display: "flex", background: "rgba(15,12,41,0.95)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.05)", position: "sticky", top: 0, zIndex: 10, padding: "8px 4px 6px", gap: 2 }}>
        {tabs.map((t, i) => {
          const active = tab === i;
          return (
            <button key={i} onClick={() => { setTab(i); window.scrollTo({ top: 0, behavior: "smooth" }); }} style={{ flex: "1 1 0", minWidth: 0, padding: "8px 2px 6px", border: "none", background: active ? `${t.c}18` : "transparent", color: active ? t.c : "#556", cursor: "pointer", fontSize: 10, fontWeight: active ? 700 : 500, textAlign: "center", touchAction: "manipulation", transition: "all 0.2s ease", borderRadius: 10, position: "relative" }}>
              <div style={{ fontSize: active ? 20 : 17, lineHeight: 1, transition: "font-size 0.2s ease", filter: active ? `drop-shadow(0 0 6px ${t.c}60)` : "none" }}>{t.i}</div>
              <div style={{ marginTop: 3, fontSize: 9, whiteSpace: "nowrap", letterSpacing: active ? 0.5 : 0 }}>{t.l}</div>
              {active && <div style={{ width: 4, height: 4, borderRadius: "50%", background: t.c, margin: "4px auto 0", boxShadow: `0 0 6px ${t.c}` }} />}
              {!active && <div style={{ fontSize: 7, opacity: 0.5, marginTop: 2 }}>{t.s}</div>}
            </button>
          );
        })}
      </div>

      <div style={{ maxWidth: 660, margin: "0 auto", padding: "14px 12px" }}>
        {tab < 7 && (() => { const d = days[tab]; return (<div>
          <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 3px", color: d.color }}>{d.icon} Day {d.day}: {d.title}</h2>
          <p style={{ fontSize: 11, color: "#666", margin: "0 0 14px" }}>{d.date}</p>
          {d.items.map((it, i) => { const k = `${tab}-${i}`; const o = exp[k]; const hm = it.details || it.tip; return (
            <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 32 }}>
                <div style={{ width: 30, height: 30, borderRadius: "50%", background: TC[it.type] || "#666", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>{TI[it.type] || "\uD83D\uDCCC"}</div>
                {i < d.items.length - 1 && <div style={{ width: 2, flex: 1, minHeight: 16, background: `${TC[it.type]}30` }} />}
              </div>
              <div onClick={() => hm && tog(k)} style={{ flex: 1, background: "rgba(255,255,255,0.03)", borderRadius: 12, padding: "12px 14px", border: `1px solid ${TC[it.type]}15`, cursor: hm ? "pointer" : "default", touchAction: "manipulation", transition: "background 0.15s" }}>
                <div style={{ fontSize: 11, color: TC[it.type], fontWeight: 600 }}>{it.time}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#eee", margin: "2px 0 3px" }}>{it.title}</div>
                <div style={{ fontSize: 13, color: "#aaa", lineHeight: 1.5 }}>{it.desc}</div>
                {hm && <div style={{ fontSize: 10, color: TC[it.type], marginTop: 6, fontWeight: 600, opacity: 0.6 }}>{o ? "\u25B2 Less" : "\u25BC Tap for details"}</div>}
                {o && it.details && <div style={{ marginTop: 8, borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 6 }}>
                  {it.details.map((dd, j) => (<div key={j} style={{ display: "flex", gap: 6, marginBottom: 5, fontSize: 12, lineHeight: 1.4 }}>
                    <span style={{ color: TC[it.type], fontWeight: 600, minWidth: 82, flexShrink: 0 }}>{dd.label}</span>
                    <span style={{ color: "#bbb" }}>{dd.value}</span>
                  </div>))}
                </div>}
                {o && it.tip && <div style={{ marginTop: 8, padding: "8px 10px", background: "rgba(232,185,49,0.06)", borderRadius: 6, fontSize: 12, color: "#E8B931", lineHeight: 1.4, borderLeft: "3px solid #E8B931" }}>{it.tip}</div>}
              </div>
            </div>
          );})}
        </div>);})()}

        {tab === 7 && (<div>
          <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 3px", color: "#10B981" }}>{"\u2615"} 24/7 & Nearby Caf\u00E9s</h2>
          <p style={{ fontSize: 12, color: "#888", margin: "0 0 6px", lineHeight: 1.4 }}>Laptop-friendly spots near 14 Satorhn Hotel with fast WiFi & power outlets.</p>
          <p style={{ fontSize: 11, color: "#666", margin: "0 0 14px", lineHeight: 1.4 }}>Sorted by proximity & 24/7 availability. Nearest BTS: Chong Nonsi / Surasak.</p>
          {cafes.map((c, i) => (<div key={i} onClick={() => setCafeOpen(cafeOpen === i ? null : i)} style={{ background: "rgba(255,255,255,0.03)", borderRadius: 12, marginBottom: 10, padding: "12px 14px", border: "1px solid rgba(16,185,129,0.1)", cursor: "pointer", touchAction: "manipulation" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#eee" }}>{c.name}</div>
                <div style={{ fontSize: 11, color: "#10B981", fontWeight: 500, marginTop: 1 }}>{c.area}</div>
              </div>
              <div style={{ fontSize: 11, color: "#666", flexShrink: 0, marginLeft: 8 }}>{"\u2B50".repeat(c.stars)}</div>
            </div>
            {c.tags && c.tags.length > 0 && <div style={{ display: "flex", gap: 5, marginTop: 6, flexWrap: "wrap" }}>
              {c.tags.map((tag, ti) => (<span key={ti} style={{ fontSize: 9, fontWeight: 700, color: "#fff", background: tagColors[tag] || "#666", padding: "2px 7px", borderRadius: 10, letterSpacing: 0.5 }}>{tag}</span>))}
            </div>}
            <div style={{ fontSize: 12, color: "#999", marginTop: 6, lineHeight: 1.4 }}>{c.highlight}</div>
            {cafeOpen === i && <div style={{ marginTop: 10, borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 8 }}>
              {[["WiFi", c.wifi], ["Vibe", c.vibe], ["Power", c.power], ["Hours", c.hours], ["Cost", c.cost], ["Transport", c.bts]].map(([l, v], j) => (
                <div key={j} style={{ display: "flex", gap: 8, marginBottom: 4, fontSize: 12 }}>
                  <span style={{ color: "#10B981", fontWeight: 600, minWidth: 70, flexShrink: 0 }}>{l}</span>
                  <span style={{ color: "#bbb" }}>{v}</span>
                </div>
              ))}
            </div>}
            <div style={{ fontSize: 9, color: "#10B981", marginTop: 6, fontWeight: 600, opacity: 0.5 }}>{cafeOpen === i ? "\u25B2 Less" : "\u25BC Details"}</div>
          </div>))}
          <div style={{ marginTop: 16, padding: "12px 14px", background: "rgba(232,185,49,0.05)", borderRadius: 10, borderLeft: "3px solid #E8B931" }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#E8B931", marginBottom: 4 }}>Caf\u00E9 Etiquette</div>
            <div style={{ fontSize: 12, color: "#aaa", lineHeight: 1.5 }}>Order every ~2 hrs for long sessions. Bring a jacket \u2014 BKK caf\u00E9 AC is FREEZING. WiFi password usually on receipt. Use headphones for calls!</div>
          </div>
        </div>)}

        {tab === 8 && (<div>
          <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: "#4ECDC4" }}>{"\uD83D\uDCCB"} Essential Travel Info</h2>
          {practicalInfo.map((s, i) => (<div key={i} style={{ background: "rgba(255,255,255,0.03)", borderRadius: 12, marginBottom: 10, overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)" }}>
            <button onClick={() => setInfoOpen(infoOpen === i ? null : i)} style={{ width: "100%", padding: "12px 14px", background: "none", border: "none", color: "#ddd", fontSize: 14, fontWeight: 600, textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", touchAction: "manipulation", minHeight: 48 }}>
              {s.title}
              <span style={{ fontSize: 11, color: "#555", transform: infoOpen === i ? "rotate(180deg)" : "none", transition: "0.2s" }}>{"\u25BC"}</span>
            </button>
            {infoOpen === i && <div style={{ padding: "0 14px 12px" }}>
              {s.items.map((it, j) => (<div key={j} style={{ padding: "5px 0", borderTop: j ? "1px solid rgba(255,255,255,0.03)" : "none", fontSize: 12.5, lineHeight: 1.5, color: it.startsWith("\u26A0\uFE0F") ? "#F59E0B" : it === it.toUpperCase() && it.includes(":") ? "#EC4899" : "#aaa" }}>{"\u2022"} {it}</div>))}
            </div>}
          </div>))}
          <div style={{ background: "linear-gradient(135deg,rgba(232,185,49,0.07),rgba(78,205,196,0.07))", borderRadius: 12, padding: 14, marginTop: 14, border: "1px solid rgba(232,185,49,0.12)" }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: "#E8B931", margin: "0 0 8px" }}>{"\uD83D\uDE8C"} DMK Arrival Checklist</h3>
            <div style={{ fontSize: 12.5, lineHeight: 1.65, color: "#aaa" }}>
              <p style={{ fontWeight: 600, color: "#EC4899", margin: "0 0 4px" }}>Step 1: Buy Thai SIM Card</p>
              <p style={{ margin: "0 0 3px" }}>DTAC booth (after baggage claim) {"\u2192"} passport {"\u2192"} pick Tourist SIM (299 THB) {"\u2192"} staff installs</p>
              <p style={{ fontWeight: 600, color: "#EC4899", margin: "10px 0 4px" }}>Step 2: Register Your Apps</p>
              <p style={{ margin: "0 0 3px" }}>Download & register with Thai number: LINE {"\u2192"} LINE MAN {"\u2192"} Grab {"\u2192"} Bolt {"\u2192"} MuvMi</p>
              <p style={{ fontWeight: 600, color: "#4ECDC4", margin: "10px 0 4px" }}>Step 3: A1 Bus to Chatuchak</p>
              <p style={{ margin: "0 0 3px" }}>T1 Arrivals {"\u2192"} Gate 6 {"\u2192"} Blue A1 bus {"\u2192"} 30 THB cash {"\u2192"} BTS Mo Chit (~20 min)</p>
              <p style={{ fontWeight: 600, color: "#4ECDC4", margin: "10px 0 4px" }}>Alt: SRT Red Line</p>
              <p style={{ margin: 0 }}>T1 {"\u2192"} SRT station {"\u2192"} Bang Sue Grand (15 min) {"\u2192"} MRT Blue Line {"\u2192"} Chatuchak (1 stop)</p>
            </div>
          </div>

          <div style={{ background: "linear-gradient(135deg,rgba(56,189,248,0.07),rgba(78,205,196,0.07))", borderRadius: 12, padding: 14, marginTop: 14, border: "1px solid rgba(56,189,248,0.12)" }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: "#38BDF8", margin: "0 0 8px" }}>{"\u2708\uFE0F"} Getting Back to DMK (from Sathorn)</h3>
            <div style={{ fontSize: 12.5, lineHeight: 1.65, color: "#aaa" }}>
              <p style={{ fontWeight: 600, color: "#10B981", margin: "0 0 4px" }}>Option 1: BTS + A1 Bus (Most Reliable)</p>
              <p style={{ margin: "0 0 3px" }}>BTS Chong Nonsi {"\u2192"} Siam {"\u2192"} Mo Chit (35 min, ~62 THB) {"\u2192"} A1 Bus to DMK (20 min, 30 THB)</p>
              <p style={{ fontSize: 11, color: "#666", margin: "0 0 8px" }}>Total: ~55 min, ~92 THB | No traffic jams!</p>
              <p style={{ fontWeight: 600, color: "#10B981", margin: "0 0 4px" }}>Option 2: BTS + SRT Red Line</p>
              <p style={{ margin: "0 0 3px" }}>BTS {"\u2192"} MRT Bang Sue {"\u2192"} SRT Red Line to Don Mueang (15 min, 15-33 THB)</p>
              <p style={{ fontSize: 11, color: "#666", margin: "0 0 8px" }}>Total: ~50 min, ~80-100 THB | Fastest train option</p>
              <p style={{ fontWeight: 600, color: "#F59E0B", margin: "0 0 4px" }}>Option 3: Grab / Taxi (Door-to-door)</p>
              <p style={{ margin: "0 0 3px" }}>350-500 THB | 45-90 min depending on traffic</p>
              <p style={{ fontSize: 11, color: "#F59E0B", margin: "0 0 3px" }}>{"\u26A0\uFE0F"} Rush hour (7-9AM, 4-7PM) can take 1.5-2 hours!</p>
              <p style={{ fontSize: 12, color: "#EC4899", fontWeight: 600, margin: "10px 0 0" }}>Always allow 2-2.5 hours from Sathorn to DMK gate!</p>
            </div>
          </div>
        </div>)}
      </div>

      <div style={{ textAlign: "center", padding: "20px 14px", paddingBottom: "max(20px, env(safe-area-inset-bottom, 20px))", fontSize: 10, color: "#666", borderTop: "1px solid rgba(255,255,255,0.05)", marginTop: 16 }}>
        {"\uD83C\uDDEE\uD83C\uDDE9"} Jakarta {"\u2192"} {"\uD83C\uDDF9\uD83C\uDDED"} Bangkok {"\u2022"} Feb 15-21, 2026 {"\u2022"} Indonesia AirAsia {"\u2022"} Prices approximate
      </div>
    </div>
  );
}
