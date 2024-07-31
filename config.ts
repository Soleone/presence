export const config = {
  site: {
    title: "Soleone",
    description: "An overview of my projects and interests",
  },
  navigation: [
    { path: "/", label: "Home" },
    { path: "/games", label: "Games" },
    // { path: "/about", label: "About" },
    // { path: "/socials", label: "Socials" },
    // { path: "/portfolio", label: "Portfolio" },
  ],
  extensions: {
    games: [
      {
        title: "Black Myth: Wukong",
        date: "2024-08-20",
        description: "A Chinese Souls-like with impressive graphics.",
        image: "https://hyperpc.ae/images/company/promo/black-myth-wukong-promo/main/black-myth-wukong-mobile-banner.jpg",
      },
      {
        title: "Visions of Mana",
        date: "2024-08-29",
        description: "Successor to the classic SNES action rpg.",
        image: "https://m.media-amazon.com/images/M/MV5BNWU0ZmYxNjYtYzgyYi00ZjczLTljMmMtZTUyNDJhNjA4Yzc4XkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_.jpg",
      },
      {
        title: "Star Wars: Outlaws",
        date: "2024-08-30",
        description: "Ubisoft open world Star Wars game.",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202306/3020/bca42b94af09b7a7ffd27fcb76a7bb1e46b60ed0c5f99322.png",
      },
    ]
  }
};
