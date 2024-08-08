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
    releases: {
      description: "Games coming out this year I am interested in.",
      titles: [
        {
          title: "Black Myth: Wukong",
          date: "2024-08-20",
          description: "A Chinese Souls-like with impressive graphics.",
          image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fd272d39-bad1-470b-bc82-4f8f4e9c4d79/dgxfwcl-c1b637ca-2d10-40bb-a737-306ba1824fd5.png/v1/fill/w_788,h_1014,q_70,strp/black_myth_wukong_box_art_by_watashiiz_dgxfwcl-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM2MSIsInBhdGgiOiJcL2ZcL2ZkMjcyZDM5LWJhZDEtNDcwYi1iYzgyLTRmOGY0ZTljNGQ3OVwvZGd4ZndjbC1jMWI2MzdjYS0yZDEwLTQwYmItYTczNy0zMDZiYTE4MjRmZDUucG5nIiwid2lkdGgiOiI8PTEwNTcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.0t16ur4RfkUhPsXdRMvD25tfZxkdU3L_ep1ktrBMS50",
          hype: 3
        },
        {
          title: "Visions of Mana",
          date: "2024-08-29",
          description: "Successor to the classic SNES action rpg.",
          image: "https://m.media-amazon.com/images/I/81FMeqO-IvL._AC_SL1500_.jpg",
          hype: 1,
        },
        {
          title: "Star Wars: Outlaws",
          date: "2024-08-30",
          description: "Ubisoft open world Star Wars game.",
          image: "https://m.media-amazon.com/images/I/81hwIlt5jpL._AC_UF1000,1000_QL80_.jpg",
          hype: 3,
        },
        {
          title: "Astro Bot",
          date: "2024-09-06",
          description: "Polished 3D platformer with hopefully lots of variety.",
          image: "https://m.media-amazon.com/images/I/81dMTwn-GAL._AC_SL1500_.jpg",
          hype: 2,
        },
        {
          title: "Warhammer 40,000: Space Marine 2",
          date: "2024-09-09",
          description: "Impressive visuals and potentially immersive combat gameplay.",
          image: "https://m.media-amazon.com/images/I/8192EFiAgtL._AC_SL1500_.jpg",
          hype: 2,
        },
        {
          title: "The Legend of Zelda: Echoes of Wisdom",
          date: "2024-09-26",
          description: "A new take on Zelda where we get to play as the princess.",
          image: "https://scontent-yyz1-1.xx.fbcdn.net/v/t39.30808-6/448638547_906383094866034_4463467649343463158_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nWKh3Ld0NpAQ7kNvgHCHqjH&_nc_ht=scontent-yyz1-1.xx&oh=00_AYDpMaXaOlsymOfinV4JMK6MEH1DDmaiG7Q49_550xOGMg&oe=66B9EB20",
          hype: 3,
        },
        {
          title: "Silent Hill 2",
          date: "2024-10-08",
          description: "Remake of the classic horror game. Not immensely hyped but definitely intrigued.",
          image: "https://m.media-amazon.com/images/I/71E3B-85r1L._AC_SL1500_.jpg",
          hype: 2,
        },
        {
          title: "Metaphor ReFantazio",
          date: "2024-10-11",
          description: "New JRPG from the Persona creators, should be quite epic.",
          image: "https://images.pushsquare.com/f8c81f2c373f9/metaphor-refantazio-ps5-box-art.large.jpg",
          hype: 3,
        },
        {
          title: "Call of Duty: Black Ops 6",
          date: "2024-10-25",
          description: "Interesting 80s conspiracy setting, could be an interesting short ride.",
          image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/06/call-of-duty-black-ops-6-tag-page-cover-art.jpg",
          hype: 2,
        },
        {
          title: "Mario & Luigi: Brothership",
          date: "2024-11-07",
          description: "A new entry in the series, hopefully some innovation and not too easy.",
          image: "https://m.media-amazon.com/images/I/81YGfKshDwL.jpg",
          hype: 2,
        },
        {
          title: "Assassin's Creed Shadows",
          date: "2024-11-12",
          description: "Let's wait for the reviews to see if this is worth our time.",
          image: "https://m.media-amazon.com/images/I/81Te+bRdj0L._AC_SL1500_.jpg",
          hype: 1,
        },
        {
          title: "STALKER 2: Heart of Chernobyl",
          date: "2024-11-20",
          description: "Open world atmospheric exploration.",
          image: "https://m.media-amazon.com/images/M/MV5BMzEwNTg3NjMtMmJmYy00NmI4LWJkNmUtZDliNGM2MjJmOTgzXkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_FMjpg_UX1000_.jpg",
          hype: 2,
        },
        {
          title: "Indiana Jones and the Great Circle",
          date: "2024",
          description: "Excited for this first person immersive exploration adventure!",
          image: "https://images.ctfassets.net/rporu91m20dc/378hlrYHQ3Yyyqldd4Vxom/9345e9de5d844efe71c97eb2541c3038/IJ_agnostic_2D_frontcover.jpg",
          hype: 3,
        },
        {
          title: "Dragon Age: The Veilguard",
          date: "2024",
          description: "Can they bring back this RPG series to modern standards?",
          image: "https://cdn.vox-cdn.com/thumbor/7xBpISKJ0KNEYXEcLqWQ5QkdMCM=/0x0:3840x2160/1000x1429/filters:focal(1920x1080:1921x1081)/cdn.vox-cdn.com/uploads/chorus_asset/file/25486616/Dragon_Age_The_Veilguard_Logo_16x9_72dpi_RGB.jpg",
          hype: 2,
        },
        {
          title: "Kingdom Come: Deliverance 2",
          date: "2024",
          description: "Realistic medieval RPG. I missed the first installment, but might give this one a try.",
          image: "https://m.media-amazon.com/images/I/813Kg3LBt-L._AC_SL1500_.jpg",
          hype: 2,
        },
        {
          title: "Avowed",
          date: "2025-02-18",
          description: "Delayed until next year. Hopefully has the RPG depths in gameplay and decisions that the studio is known for.",
          image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fd272d39-bad1-470b-bc82-4f8f4e9c4d79/dgqrr3u-789d1ea9-6794-4b0b-b53b-e292da1b7836.png/v1/fill/w_783,h_1020/avowed_xbox_cover_art__by_watashiiz_dgqrr3u-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTU0MyIsInBhdGgiOiJcL2ZcL2ZkMjcyZDM5LWJhZDEtNDcwYi1iYzgyLTRmOGY0ZTljNGQ3OVwvZGdxcnIzdS03ODlkMWVhOS02Nzk0LTRiMGItYjUzYi1lMjkyZGExYjc4MzYucG5nIiwid2lkdGgiOiI8PTExODUifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.bQJl2p4tw4_GM2h0z7V-p5oVy-D-zvFqoQ0jgggqKWk",
          hype: 2,
        },
      ]
    }
  }
};
