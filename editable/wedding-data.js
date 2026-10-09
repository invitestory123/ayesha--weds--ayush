/**
 * wedding-data.js — Customer-facing editable data layer for rajwada-royale
 * Wedding Invitation: Ayesha & Ayush
 */

window.WEDDING_DATA = {
  couple: {
    order: "bride-first",
    groom: "Ayush",
    bride: "Ayesha",
    groomFull: "Ayush Awasthi",
    brideFull: "Ayesha Chauhan",
    monogram: "A & A",
    hashtag: "#AyeshaWedsAyush",
  },

  mainEvent: {
    title: "Ayesha & Ayush — Wedding Celebrations",
    startsAt: "2026-11-29T19:00:00+05:30",
    durationMinutes: 300,
    dateLabel: "29th – 30th November 2026",
    timeLabel: "Kanpur, Uttar Pradesh",
  },

  families: {
    groomSide: {
      parents: "Mr. & Mrs. Awasthi",
      line: "cordially invite you to celebrate the wedding of their son",
    },
    brideSide: {
      parents: "Mr. & Mrs. Chauhan",
      line: "together with the family of their daughter",
    },
  },

  invitationNote: "With the blessings of our elders and the Almighty, we warmly invite you to share in the joy and celebrations as we unite in marriage. Your presence and blessings mean the world to us.",

  story: [
    {
      year: "2023",
      title: "How It Began",
      text: "A chance meeting and an effortless connection that quickly blossomed into something truly magical.",
      image: "./editable/assets/story-1.jpg",
    },
    {
      year: "2025",
      title: "The Promise",
      text: "Surrounded by smiles, sweets, and the blessings of both families, two hearts chose a lifetime together.",
      image: "./editable/assets/story-2.jpg",
    },
    {
      year: "2026",
      title: "Forever Begins",
      text: "Stepping hand-in-hand into a sacred union, eager to celebrate every moment with the ones we cherish most.",
      image: "./editable/assets/story-3.jpg",
    },
  ],

  events: [
    {
      key: "sangeet",
      name: "Sangeet & Celebration",
      startsAt: "2026-11-29T19:00:00+05:30",
      durationMinutes: 240,
      venue: "Hotel Imperial Grand",
      address: "259, Mainawati Marg, Sambharpur, Kanpur, Uttar Pradesh 208017",
      dressCode: "Festive Indian / Indo-Western",
      dressCodeColor: "#C9A84C",
      note: "An evening filled with music, dance, celebrations, and a lavish dinner.",
    },
    {
      key: "wedding",
      name: "Wedding Ceremony",
      startsAt: "2026-11-30T19:00:00+05:30",
      durationMinutes: 300,
      venue: "Hotel Imperial Grand",
      address: "259, Mainawati Marg, Sambharpur, Kanpur, Uttar Pradesh 208017",
      dressCode: "Royal Traditional Formals",
      dressCodeColor: "#7B1E2B",
      note: "Join us for the Baraat, Varmala, and sacred Pheras followed by the wedding feast.",
    },
  ],

  venue: {
    name: "Hotel Imperial Grand",
    address: "259, Mainawati Marg, Sambharpur, Kanpur, Uttar Pradesh 208017",
    lat: 26.52937,
    lng: 80.27334,
    directionsNote: "Located on Mainawati Marg, Sambharpur, Kanpur. Valet parking is available for all guests.",
    googleMapsUrl: "https://maps.app.goo.gl/F2AAdfkUw8Pe6nFz6?g_st=ic",
  },

  gallery: [
    { src: "./editable/assets/gallery-1.jpg", alt: "Mehndi night with henna and marigolds" },
    { src: "./editable/assets/gallery-2.jpg", alt: "Sangeet dance floor with music and celebration" },
    { src: "./editable/assets/gallery-3.jpg", alt: "Decorated wedding mandap at golden hour" },
    { src: "./editable/assets/gallery-4.jpg", alt: "Baraat procession with joyful celebrations" },
  ],

  closing: {
    blessing: "Two families united in joy, eagerly looking forward to celebrating this sacred milestone with you.",
    signOff: "With love and gratitude,",
  },

  contacts: [
    { name: "Awasthi Family", phone: "+91 98765 43210" },
    { name: "Chauhan Family", phone: "+91 98123 45678" },
  ],

  media: {
    doorPanel: "./editable/assets/door-panel.png",
    couple: "./editable/assets/couple.png",
    floralCorner: "./editable/assets/floral-corner.png",
    garland: "./editable/assets/garland.png",
    lantern: "./editable/assets/lantern.png",
    footerFloral: "./editable/assets/footer-floral.jpg",
    ambientAudio: "./editable/assets/vaaroon.mp3",
  },
};
