// /app/data/games.ts (atau lokasi data.ts Anda)

import { RiVisaFill } from "react-icons/ri";

// Pastikan GameData interface di page.tsx sesuai dengan ini
export interface GameData {
  slug: string;
  iconGame: string; // icongame -> iconGame
  nameGame: string; // namegame -> nameGame
  titleImgs: { alt: string; src: string }[]; // titleimg -> titleImgs
  videoUrl: string; // Video -> videoUrl
  headerImgs: { alt: string; src: string }[]; // headerimg -> headerImgs
  playStoreUrl?: string; // pstore -> playStoreUrl
  presskitUrl?: string; // presskit -> presskitUrl
  steamStoreUrl?: string; // steamstore -> steamStoreUrl
  robloxStoreUrl?: string; // robloxstore -> robloxStoreUrl
  appStoreUrl?: string; // appstore -> appStoreUrl
  descStory: string; // descstory -> descStory
  storyImgs: { alt: string; src: string }[]; // imgstory -> storyImgs
  descGameplay: string; // descgameplay -> descGameplay
  gameplayImgs: { alt: string; src: string }[]; // imggameplay -> gameplayImgs
  Title: string;
  character: {
    nameChar: string; // namechar -> nameChar
    alt: string;
    src: string;
    descChar: string; // descchar -> descChar
  }[];
  screenshots: { alt: string; src: string }[]; // screenshot -> screenshots
  partnership?: { alt: string; src: string }[]; // PartnershipLogo -> langsung inline type, atau bisa tetap pakai interface terpisah
  estimatedTime?: string;
}

export const games: GameData[] = [
  {
    slug: "juragan-fauna",
    iconGame: "/games/Icons/jf.png", // icongame -> iconGame
    nameGame: "Juragan Fauna", // namegame -> nameGame
    titleImgs: [{ alt: "source", src: "/games/Title/jf.png" }], // titleimg -> titleImgs
    videoUrl: "https://www.youtube.com/embed/TeFmVMtdsSU", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/jf.png",
      },
    ],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.Trimatra.JuraganFauna&hl=en-ID", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "", // robloxstore -> robloxStoreUrl
    descStory:
      "🎮 Ready to become a zoo owner?? Come on, experience the JURAGAN FAUNA zoo management simulation. You will be a real tycoon who owns a cool zoo, complete with exotic animals and all kinds of fun.\n 🏞️ Starting from scratch, you will lead your zoo business. you borrowed 20 billion rupiah from moneylenders, and that means you have to invest smartly so you can pay off debt. Buy a large area of ​​land and choose cute animals that are protected legally, and everything will be according to government regulations!", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/jf/1.webp" },
      { alt: "source", src: "/games/Screenshot/jf/5.webp" },
    ],
    descGameplay:
      "💰 Not only animals, at JURAGAN FAUNA you can also buy and sell goods with cool buildings. There is a grocery store to buy meat, vegetables and fruits for animals. Electronics shop to buy arcade machines, gocarts etc. A one stop shop to buy daily decorations and equipment. Government buildings are very important for land expansion, and don't forget to stop by the Minister of Forestry Building to add to your animal collection! \n👨‍💼 Make your business run smoothly, you can also hire workers. Cleaning service so that your zoo is kept clean, security, counter keepers, and animal caretakers make your beloved animals feel comfortable. Are you sure your business wont fall apart? That means you are ready to become a true JOURNEY! \n🛒 Outside the zoo, unique sellers are ready to accompany your day. Try the savory meatballs, fresh cendol ice, typical ketoprak, and grilled sausages that are even more delicious with their secret spices. Want to entertain yourself? Exciting toys and colorful balloons are ready to accompany you. Ice cream that always makes your heart float, plus pop noodle hits are also available! Can you become the owner of the coolest and most successful zoo? There are challenges waiting, strategies to be followed, and quests to be completed! Download JURAGAN FAUNA right now and start an exciting zoo business adventure. Be the boss, earn money, achieve achievements and show everyone who is the most powerful in this zoo! 🌍🦁🐯🐻", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/jf/2.webp" },
      { alt: "source", src: "/games/Screenshot/jf/3.webp" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "source", src: "/games/Screenshot/jf/1.webp" },
      { alt: "source", src: "/games/Screenshot/jf/2.webp" },
      { alt: "source", src: "/games/Screenshot/jf/3.webp" },
      { alt: "source", src: "/games/Screenshot/jf/4.webp" },
      { alt: "source", src: "/games/Screenshot/jf/5.webp" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "3 Months",
  }, //Juragan Fauna
  {
    slug: "aku-si-juragan-empang",
    iconGame: "/games/Icons/asje.png", // icongame -> iconGame
    nameGame: "Aku Si Juragan Empang", // namegame -> nameGame
    titleImgs: [{ alt: "source", src: "/games/Title/asje.png" }], // titleimg -> titleImgs
    videoUrl: "https://www.youtube.com/embed/DFXH6e4h_OQ?si=1RpcsZq4qRvuNBl4", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/asje.png",
      },
    ],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.TrimatraKajew.Empang&hl=id", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "", // robloxstore -> robloxStoreUrl
    descStory:
      "🎮 Ready to become a pond owner? Come on, experience the “I AM THE POND OWNER” pond management simulation. You will become a real owner who inherits a pond from your father. Can you continue your father's struggle to manage the pond?", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/asje/1.webp" },
      { alt: "source", src: "/games/Screenshot/asje/5.webp" },
    ],
    descGameplay:
      "🏞️ You will be taught directly by Abah, and of course, you will become Abah's successor as a fish pond owner \n💰 Pak Kumis has all the fish and pellets you need, so make sure to shop at Pak Kumis often!\n👨‍💼 To keep your pond business running smoothly, you also need to cultivate the fish. Buy the fry from Mr. Kumis and take care of the fish until they grow into adults!\n🛒 People will line up at the counter to fish in your pond, so make sure you always keep your fish stock replenished!", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/asje/2.webp" },
      { alt: "source", src: "/games/Screenshot/asje/3.webp" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "source", src: "/games/Screenshot/asje/1.webp" },
      { alt: "source", src: "/games/Screenshot/asje/2.webp" },
      { alt: "source", src: "/games/Screenshot/asje/3.webp" },
      { alt: "source", src: "/games/Screenshot/asje/4.webp" },
      { alt: "source", src: "/games/Screenshot/asje/5.webp" },
      { alt: "source", src: "/games/Screenshot/asje/6.webp" },
      { alt: "source", src: "/games/Screenshot/asje/7.webp" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [{ alt: "KajewDev", src: "/kajew.png" }], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "3 Months",
  }, //Juragan Empang
  {
    slug: "aku-si-juragan-ayam",
    iconGame: "/games/Icons/asja.png", // icongame -> iconGame
    nameGame: "Aaku Si Juragan Ayam", // namegame -> nameGame
    titleImgs: [{ alt: "source", src: "/games/Title/asja.png" }], // titleimg -> titleImgs
    videoUrl: "https://www.youtube.com/embed/Hn59HyjtUks?si=Bf579K7FU7YcQVaH", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/asja.png",
      },
    ],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.trimatrakajew.ayam", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "", // robloxstore -> robloxStoreUrl
    descStory:
      " Ready to become a chicken farmer? Come on, try the “AKU SI JURAGAN AyamG” pond management simulation experience. You will become a real farmer by starting a chicken farming business from scratch. Are you capable of becoming a successful chicken farmer?", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/asja/3.webp" },
      { alt: "source", src: "/games/Screenshot/asja/5.webp" },
    ],
    descGameplay:
      "🏞️ You're about to start your own chicken farm business!\n💰 Buy chicken chicks and raise them! Don't forget to hatch the eggs—the more chickens you have, the more money you'll make!\n👨‍💼 For extra fun, you can participate in chicken fights with others!\n🛒 Don’t forget... you have business partners and you have to send chicken stock to the city!", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/asja/2.webp" },
      { alt: "source", src: "/games/Screenshot/asja/3.webp" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "source", src: "/games/Screenshot/asja/1.webp" },
      { alt: "source", src: "/games/Screenshot/asja/2.webp" },
      { alt: "source", src: "/games/Screenshot/asja/3.webp" },
      { alt: "source", src: "/games/Screenshot/asja/4.webp" },
      { alt: "source", src: "/games/Screenshot/asja/5.webp" },
      { alt: "source", src: "/games/Screenshot/asja/6.webp" },
      { alt: "source", src: "/games/Screenshot/asja/7.webp" },
      { alt: "source", src: "/games/Screenshot/asja/Screenshot_17.png" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [
      {
        alt: "KajewDev",
        src: "/kajew.png",
      },
    ], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "3 Months",
  }, //Juragan Ayam
  {
    slug: "legendary-fish-hunter",
    iconGame: "/games/Icons/lfh.png", // icongame -> iconGame
    nameGame: "Juragan Fauna", // namegame -> nameGame
    titleImgs: [{ alt: "source", src: "/games/Title/lfh.png" }], // titleimg -> titleImgs
    videoUrl: "https://www.youtube.com/embed/dgE0w5cqXa4?si=yxIgtJbkZ2uawBmS", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/lfh.png",
      },
    ],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.Trimatra.LegendaryFishHunter", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "", // robloxstore -> robloxStoreUrl
    descStory:
      "In a vast and mysterious world, legends of legendary fish have captivated the hearts of many sailors. It is said that behind the fog and rolling waves lie giant sea creatures and treasures never before discovered by humans.\nYou are a legendary fish hunter who begins your journey from a small fishing village. Armed with courage and your grandfather's first fishing rod, you sail through storms, conquer the seas, and hunt creatures that only exist in stories.But the farther you sail, the more secrets of the ocean are revealed—and not all of them are friendly. Behind the peaceful waves, something is waiting in the depths...", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/lfh/5.jpg" },
    ],
    descGameplay:
      "Legendary Fish Hunter invites you to explore the vast ocean in a fishing adventure full of mystery and challenges. Catch hundreds of rare fish, face legendary sea monsters, and discover hidden treasures in the depths of the ocean.\nBuild and customize your ship, upgrade your fishing gear, and display your catches in your own aquarium. Explore five unique biomes, meet the residents of Fishing Village, and uncover ancient secrets hidden beneath the waves.\nEnjoy it all anytime, anywhere—because this game can be played entirely offline. Get ready to become a true legendary fish hunter!", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/lfh/3.jpg" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "LegendaryFishHunter", src: "/games/Screenshot/lfh/1.jpg" },
      { alt: "LegendaryFishHunter", src: "/games/Screenshot/lfh/2.jpg" },
      { alt: "LegendaryFishHunter", src: "/games/Screenshot/lfh/3.jpg" },
      { alt: "LegendaryFishHunter", src: "/games/Screenshot/lfh/4.jpg" },
      { alt: "LegendaryFishHunter", src: "/games/Screenshot/lfh/5.jpg" },
      { alt: "LegendaryFishHunter", src: "/games/Screenshot/lfh/6.jpg" },
      { alt: "LegendaryFishHunter", src: "/games/Screenshot/lfh/7.jpg" },
      { alt: "LegendaryFishHunter", src: "/games/Screenshot/lfh/9.jpg" },
      { alt: "LegendaryFishHunter", src: "/games/Screenshot/lfh/10.jpg" },
      { alt: "LegendaryFishHunter", src: "/games/Screenshot/lfh/11.png" },
      { alt: "LegendaryFishHunter", src: "/games/Screenshot/lfh/12.png" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [
      {
        alt: "Akhir Pekan Studio",
        src: "/akhirpekan.png",
      },
    ], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "3 Months",
  }, // LFH
  {
    slug: "sim-panitia",
    iconGame: "/games/Icons/sp17.png", // icongame -> iconGame
    nameGame: "Simulator Panitia 17 Agustus", // namegame -> nameGame
    titleImgs: [], // titleimg -> titleImgs
    videoUrl: "", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/sp17.png",
      },
    ],
    playStoreUrl: "", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "", // robloxstore -> robloxStoreUrl
    descStory:
      "Join the excitement of organizing Indonesia’s Independence Day celebration!\nWelcome to Simulator Panitia 17 Agustus, a unique simulation game where you take on the role of the head committee for the annual 17 August festivities.\n\nAfter being chosen by the village chief, you must lead the preparations for a series of traditional competitions that bring the whole community together. From recruiting team members to managing budgets and interacting with villagers, every decision you make will shape the success of the celebration.\n\nCan you unite your village and create the most memorable Independence Day festival ever? 🇮🇩", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/sp17ags/1.png" },
    ],
    descGameplay:
      "Take charge as the Head Committee and experience the fun and challenges of planning a 17 August celebration! You are chosen by the village chief to make sure the event runs smoothly. Meet interesting villagers and recruit them to join your team, then prepare traditional games like sack races and cracker-eating contests. Complete exciting missions to collect staff, gather items, and unlock new areas for the celebration. Manage your budget carefully, using funds from the village and player donations to buy all the event supplies you need. Talk to villagers, invite them to participate, and collect registration fees to support the event. You can even rent land from locals to hold the competitions. Show your best management and leadership skills, and make the Independence Day celebration in your village a huge success — organizing 17 August has never been this fun! 🎉", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/sp17ags/8.png" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      {
        alt: "Simulator Panitia 17 Agustus",
        src: "/games/Screenshot/sp17ags/1.png",
      },
      {
        alt: "Simulator Panitia 17 Agustus",
        src: "/games/Screenshot/sp17ags/2.png",
      },
      {
        alt: "Simulator Panitia 17 Agustus",
        src: "/games/Screenshot/sp17ags/3.png",
      },
      {
        alt: "Simulator Panitia 17 Agustus",
        src: "/games/Screenshot/sp17ags/4.png",
      },
      {
        alt: "Simulator Panitia 17 Agustus",
        src: "/games/Screenshot/sp17ags/5.png",
      },
      {
        alt: "Simulator Panitia 17 Agustus",
        src: "/games/Screenshot/sp17ags/6.png",
      },
      {
        alt: "Simulator Panitia 17 Agustus",
        src: "/games/Screenshot/sp17ags/7.png",
      },
      {
        alt: "Simulator Panitia 17 Agustus",
        src: "/games/Screenshot/sp17ags/8.png",
      },
      {
        alt: "Simulator Panitia 17 Agustus",
        src: "/games/Screenshot/sp17ags/9.png",
      },
      {
        alt: "Simulator Panitia 17 Agustus",
        src: "/games/Screenshot/sp17ags/10.png",
      },
      {
        alt: "Simulator Panitia 17 Agustus",
        src: "/games/Screenshot/sp17ags/11.png",
      },
      {
        alt: "Simulator Panitia 17 Agustus",
        src: "/games/Screenshot/sp17ags/12.png",
      },
      {
        alt: "Simulator Panitia 17 Agustus",
        src: "/games/Screenshot/sp17ags/13.png",
      },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [
      {
        alt: "",
        src: "/lemau.png",
      },
    ], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "1.5 Months",
  }, // Sim 17 Agustus
  {
    slug: "aku-si-juragan-kosan",
    iconGame: "/games/Icons/asjk.png", // icongame -> iconGame
    nameGame: "Aku Si Juragan Kosan", // namegame -> nameGame
    titleImgs: [{ alt: "source", src: "/games/Title/asjk.png" }], // titleimg -> titleImgs
    videoUrl: "https://www.youtube.com/embed/9-VPLv0rkjA?si=2Tv6HA6PdSvNF71B", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/asjk.png",
      },
    ],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.TrimatraKajew.Kosan", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "", // robloxstore -> robloxStoreUrl
    descStory:
      "In a rapidly growing city, you begin your journey as the owner of a small boarding house on the side of the road. With determination and a little savings, your dream is simple—to become the most successful boarding house owner in town!\nHowever, the road to success is not as easy as you might imagine. You must deal with tenants of various personalities, repair damaged facilities, manage finances, and compete with other landlords. Starting with a single simple room, you gradually build a large property empire that spans multiple cities.\nCan you survive the tenant drama and business challenges, or will you go bankrupt along the way? All decisions are in your hands as a true boarding house landlord!", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/asjk/Screenshot_7.png" },
    ],
    descGameplay:
      "I Am the Dorm Owner is a fun and realistic business simulation game! Build and manage your own dorm, from designing rooms and finding tenants to taking care of daily facilities.\nManage your finances, set rental prices, and make sure your tenants are happy—but be careful, some may be late with payments or cause trouble! Upgrade facilities, expand your business to various locations, and make your boarding house the most sought-after in town.\nWith relaxed yet strategic gameplay, every decision determines your success. Prove that you deserve to be called the true Boarding House Boss!", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/asjk/Screenshot_3.png" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      {
        alt: "ASJK",
        src: "/games/Screenshot/asjk/Screenshot_1.png",
      },
      {
        alt: "ASJK",
        src: "/games/Screenshot/asjk/Screenshot_2.png",
      },
      {
        alt: "ASJK",
        src: "/games/Screenshot/asjk/Screenshot_3.png",
      },
      {
        alt: "ASJK",
        src: "/games/Screenshot/asjk/Screenshot_4.png",
      },
      {
        alt: "ASJK",
        src: "/games/Screenshot/asjk/Screenshot_5.png",
      },
      {
        alt: "ASJK",
        src: "/games/Screenshot/asjk/Screenshot_6.png",
      },
      {
        alt: "ASJK",
        src: "/games/Screenshot/asjk/Screenshot_7.png",
      },
      {
        alt: "ASJK",
        src: "/games/Screenshot/asjk/Screenshot_8.png",
      },
      {
        alt: "ASJK",
        src: "/games/Screenshot/asjk/Screenshot_9.png",
      },
      {
        alt: "ASJK",
        src: "/games/Screenshot/asjk/Screenshot_10.png",
      },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [
      {
        alt: "Kajew",
        src: "/kajew.png",
      },
    ], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "3 Months",
  }, // Juragan Kosan
  {
    slug: "juragan-nasipadang",
    iconGame: "/games/Icons/jnp.png", // icongame -> iconGame
    nameGame: "Aku Si Juragan Kosan", // namegame -> nameGame
    titleImgs: [{ alt: "source", src: "/games/Title/jnp.png" }], // titleimg -> titleImgs
    videoUrl: "https://www.youtube.com/embed/UPZJvyZIX90?si=JLresps2nM1sUpmW", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/jnp.png",
      },
    ],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.TrimatraStudio.JuraganNasiPadang", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "", // robloxstore -> robloxStoreUrl
    descStory:
      " Amidst the hustle and bustle of the city, you begin your journey from a small Nasi Padang stall on the side of the road. With strong determination and a family recipe passed down from generation to generation, you dream of building the largest and most famous Padang restaurant in the city.\nHowever, the road to success is not easy. You must deal with diverse customers, maintain the taste of your dishes, manage finances, and compete with other restaurants that keep popping up. From just a few servings of rendang and gulai, you will grow into a legendary culinary entrepreneur.\nCan you maintain the authentic taste while expanding your business? It's time to prove that you are a true Padang Rice Master!", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/jnp/8.webp" },
    ],
    descGameplay:
      "Juragan Nasi Padang is a culinary and business simulation game that combines the excitement of cooking with restaurant management strategy.\nCook signature dishes such as Rendang, Gulai, Ayam Pop, and various other authentic menus using the best ingredients that you buy yourself at the market. Manage your stock before the restaurant opens, serve customers quickly, and ensure that every dish is served perfectly.\n\nBuild and upgrade your restaurant—from a simple stall to a grand Padang restaurant. Add tables, decorations, and facilities to make customers feel more at home. With first-person and third-person modes, you can choose to cook directly in the kitchen or oversee the entire restaurant from above.\n\nGrow your business by launching online delivery services, monitor daily financial reports, and expand branches to strategic locations. Every decision you make determines whether your restaurant will become everyone's favorite or go out of business. ", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/jnp/7.webp" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "Juragan Nasi Padang", src: "/games/Screenshot/jnp/1.webp" },
      { alt: "Juragan Nasi Padang", src: "/games/Screenshot/jnp/2.webp" },
      { alt: "Juragan Nasi Padang", src: "/games/Screenshot/jnp/3.webp" },
      { alt: "Juragan Nasi Padang", src: "/games/Screenshot/jnp/4.webp" },
      { alt: "Juragan Nasi Padang", src: "/games/Screenshot/jnp/5.webp" },
      { alt: "Juragan Nasi Padang", src: "/games/Screenshot/jnp/6.webp" },
      { alt: "Juragan Nasi Padang", src: "/games/Screenshot/jnp/7.webp" },
      { alt: "Juragan Nasi Padang", src: "/games/Screenshot/jnp/8.webp" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "4 Months",
  }, // Nasi Padang
  {
    slug: "aku-si-juragan-pasar",
    iconGame: "/games/Icons/asjp.png", // icongame -> iconGame
    nameGame: "Aku Si Juragan Kosan", // namegame -> nameGame
    titleImgs: [{ alt: "source", src: "/games/Title/Pasar2.png" }], // titleimg -> titleImgs
    videoUrl: "", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/pasar.png",
      },
    ],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.TrimatraKajew.Pasar", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "", // robloxstore -> robloxStoreUrl
    descStory:
      " After years of being managed by your uncle, the small market in the center of town is now entirely yours. As the successor to the market owner, you now have a huge responsibility—to preserve traditions, rebuild the market's glory, and turn it into the busiest trading center in town.\n\n With your uncle's guidance, you will learn how to manage tenants, maintain cleanliness, and satisfy visitors. But be careful — if you let your guard down, stalls could go empty and visitors could leave! Now is the time to prove that you are capable of continuing the family legacy and becoming a true Market Master!", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/asjp/5.webp" },
    ],
    descGameplay:
      "I Am the Market Boss is an exciting and relaxing management simulation game where you play the role of a market manager tasked with keeping the business running smoothly.\n\nRent out stalls or tenant spaces to merchants to earn income, make sure all spaces are filled, and don't let the market become deserted! Use the rental income to open more new tenant spaces and expand the market area to make it even busier.\n\nAdd attractive facilities such as massage chairs, vending machines, and unique decorations to make visitors feel more at home and increase your income. With proper planning, you can turn your uncle's small market into a prosperous and vibrant economic hub!\n\nBuild, manage, and expand — prove that you deserve the title of number one Market Master! 💰🛒", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/asjp/3.webp" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "Aku Si Juragan Pasar", src: "/games/Screenshot/asjp/1.webp" },
      { alt: "Aku Si Juragan Pasar", src: "/games/Screenshot/asjp/2.webp" },
      { alt: "Aku Si Juragan Pasar", src: "/games/Screenshot/asjp/3.webp" },
      { alt: "Aku Si Juragan Pasar", src: "/games/Screenshot/asjp/4.webp" },
      { alt: "Aku Si Juragan Pasar", src: "/games/Screenshot/asjp/5.webp" },
      { alt: "Aku Si Juragan Pasar", src: "/games/Screenshot/asjp/6.webp" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [
      {
        alt: "KajewDev",
        src: "/kajew.png",
      },
    ], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "4 Months",
  }, //Juragan Pasar
  {
    slug: "hole-digger",
    iconGame: "/games/Icons/hd.png", // icongame -> iconGame
    nameGame: "Hole Digger : Lets Dig A Hole!", // namegame -> nameGame
    titleImgs: [{ alt: "source", src: "/games/Title/hd.png" }], // titleimg -> titleImgs
    videoUrl: "https://www.youtube.com/embed/Y_v3re0SMpw?si=CinsPQCbcuPhXCMX", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/hd.png",
      },
    ],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.Trimatra.HoleDigger", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "", // robloxstore -> robloxStoreUrl
    descStory:
      "Have you ever wondered what lies hidden beneath your backyard? In Hole Digger Simulator, you begin your journey as an amateur digger curious about the secrets beneath the ground. Armed with an old shovel and great determination, you start digging, little by little, breaking through layers of soil, rock, and mysterious underground spaces.\nHowever, the deeper you dig, the more secrets are revealed—from ancient artifacts and hidden treasures to something you probably shouldn't have found. Can you reach depths never explored by humans and uncover the greatest mystery beneath the earth?", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/hd/1.webp" },
    ],
    descGameplay:
      "Hole Digger Simulator is an exciting digging simulation game that combines exploration, strategy, and unlimited adventure. Start from your backyard and dig in any direction you want — every meter you descend brings new surprises and opportunities to discover riches.\n\nCollect treasures and rare artifacts, sell your findings, then use the profits to upgrade your shovel, tools, and special equipment such as lanterns, ropes, and explosives to break through hard rocks.\nThe deeper you dig, the tougher the challenges become — the ground gets harder, lighting becomes more limited, and the mysteries grow darker.\n\nUnlock new locations, discover mysterious mines, and dig as deep as possible to prove yourself as the best digger in the world!\nAre you ready to penetrate the earth's core and uncover the secrets buried beneath it?", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/hd/8.webp" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "Aku Si Juragan Pasar", src: "/games/Screenshot/hd/1.webp" },
      { alt: "Aku Si Juragan Pasar", src: "/games/Screenshot/hd/2.webp" },
      { alt: "Aku Si Juragan Pasar", src: "/games/Screenshot/hd/3.webp" },
      { alt: "Aku Si Juragan Pasar", src: "/games/Screenshot/hd/4.webp" },
      { alt: "Aku Si Juragan Pasar", src: "/games/Screenshot/hd/5.webp" },
      { alt: "Aku Si Juragan Pasar", src: "/games/Screenshot/hd/6.webp" },
      { alt: "Aku Si Juragan Pasar", src: "/games/Screenshot/hd/7.webp" },
      { alt: "Aku Si Juragan Pasar", src: "/games/Screenshot/hd/8 .webp" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "1.5 Months",
  }, //Hole Digger
  {
    slug: "death-paths",
    iconGame: "/games/Icons/tdp.png", // icongame -> iconGame
    nameGame: "The Death Paths", // namegame -> nameGame
    titleImgs: [{ alt: "source", src: "/games/Title/tdp.png" }], // titleimg -> titleImgs
    videoUrl: "https://www.youtube.com/embed/S9ggLhYRc88?si=u6LNNojPxadWNvEw", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/tdp.png",
      },
    ],
    playStoreUrl: "", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "#", // steamstore -> steamStoreUrl
    robloxStoreUrl: "", // robloxstore -> robloxStoreUrl
    descStory:
      "In a remote village in Sukabumi, a horrific tragedy occurred without explanation.\nBodies were found in terrible condition, and the police team sent to investigate disappeared without a trace.\n\nYou are the only police officer to survive the accident on the way to the village. In the eerie silence, you walk toward the evacuation point, passing through a deserted forest road, a destroyed bridge, and an abandoned village.\nBut every step brings new questions—is this tragedy the work of humans, or something older than mere legend?\n\nFaint traces on the ground, whispers among the trees, and shadows following in the darkness—all lead you deeper toward a truth that should never have been uncovered.\nAnd at the end of every path… death awaits.", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/tdp/11.png" },
    ],
    descGameplay:
      "The Death Paths is a first-person investigative psychological horror experience that emphasizes atmosphere, silence, and inner tension.\nNo weapons. No resistance. Just you, a flashlight, and the fear that guides your steps.\n\nUse the UV Flashlight to reveal bloodstains and hidden clues invisible to the naked eye. \nEach clue brings you closer to the village's mystery, but also closer to something watching you from the darkness.\n\nExploration is linear yet rich in detail, offering a psychologically intense journey through locations like a silent forest, a burned-out car, and a deserted village.\nIn the full version, players will be taken to abandoned areas with complex puzzles, secret rooms, and multiple endings depending on their decisions and discoveries.\n\nNothing is truly silent in that village.\nSome secrets… are best left buried.", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/tdp/10.jpg" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "The Death Path", src: "/games/Screenshot/tdp/DPSS1.png" },
      { alt: "The Death Path", src: "/games/Screenshot/tdp/DPSS2.png" },
      { alt: "The Death Path", src: "/games/Screenshot/tdp/DPSS3.png" },
      { alt: "The Death Path", src: "/games/Screenshot/tdp/DPSS4.png" },
      { alt: "The Death Path", src: "/games/Screenshot/tdp/DPSS5.png" },
      { alt: "The Death Path", src: "/games/Screenshot/tdp/DPSS6.png" },
      { alt: "The Death Path", src: "/games/Screenshot/tdp/DPSS7.png" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "5 Months",
  }, //The Death Paths
  {
    slug: "steal-animegirl",
    iconGame: "/games/Icons/sag.png", // icongame -> iconGame
    nameGame: "Steal an Anime Girl", // namegame -> nameGame
    titleImgs: [{ alt: "source", src: "/games/Title/sag.png" }], // titleimg -> titleImgs
    videoUrl: "", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/sag.png",
      },
    ],
    playStoreUrl: "", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl:
      "https://www.roblox.com/games/91901171676586/Steal-an-Anime-Girl", // robloxstore -> robloxStoreUrl
    descStory:
      "In a world where countless anime universes collide, heroes and villains coexist in chaos.\nBut hidden in the shadows is a figure whispered about in every realm — The Thief, a legend known for one thing: stealing the most iconic anime girls from across dimensions.\n\nNow, you are their successor.\nArmed with skill, charm, and a bit of luck, you’ll infiltrate one anime world after another — stealing characters once thought untouchable. But every heist has its risks. Rival thieves, guardians, and vengeful heroes will stop at nothing to take back what you’ve stolen.\n\nWill you become the next legend… or just another thief lost to the void?", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/sag/sag1.png" },
    ],
    descGameplay:
      "Steal an Anime Girl is a fast-paced sneak and collection simulator with light strategy and action elements.\nYour mission: infiltrate anime worlds, avoid detection, and steal your favorite heroines before anyone notices.\n\nBuild your exclusive vault of stolen characters, upgrade your thief skills, and defend your collection from rival players trying to take them back.\nEach character brings unique bonuses and powers that enhance your future heists and unlock deeper layers of the game.\n\nMaster stealth, speed, and cunning as you climb the ranks of the underworld.\nIn a universe where every anime realm collides, only one thief can own it all.", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/sag/1.png" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "Steal an Anime Girls", src: "/games/Screenshot/sag/1.png" },
      { alt: "Steal an Anime Girls", src: "/games/Screenshot/sag/2.png" },
      { alt: "Steal an Anime Girls", src: "/games/Screenshot/sag/3.png" },
      { alt: "Steal an Anime Girls", src: "/games/Screenshot/sag/4.png" },
      { alt: "Steal an Anime Girls", src: "/games/Screenshot/sag/5.png" },
      { alt: "Steal an Anime Girls", src: "/games/Screenshot/sag/6.png" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [{ alt: "RIVRS", src: "/rivrs.png" }], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "1 Months",
  }, //StealAnime
  {
    slug: "steal-sneakers",
    iconGame: "/games/Icons/sas.png", // icongame -> iconGame
    nameGame: "Steal a Sneakers", // namegame -> nameGame
    titleImgs: [], // titleimg -> titleImgs
    videoUrl: "", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/sas.png",
      },
    ],
    playStoreUrl: "", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl:
      "https://www.roblox.com/games/84024220008213/Steal-A-Sneaker", // robloxstore -> robloxStoreUrl
    descStory:
      "In a city where hype is everything, sneakers aren’t just shoes — they’re power, status, and obsession.\nYou start as a street-level thief with nothing but speed, style, and a dream: to steal the rarest kicks and build a sneaker empire that the city will never forget.\n\nBut every heist comes with risk. Rival thieves lurk in the shadows, ready to snatch your loot and take your crown.\nOnly the smartest, fastest, and boldest will rise from the alleys to the top of the sneaker underworld.\n\nWill you become the ultimate sneaker legend… or lose it all chasing hype?", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/sas/5.png" },
    ],
    descGameplay:
      "Sneaker Thief is a fast-paced urban heist simulator where every move counts.\n👟 Sneak through the city to steal legendary sneakers hidden across the map.\n💰 Sell and collect your loot to expand your sneaker stash.\n🏪 Upgrade your shop to showcase your rare finds and flex your growing empire.\n🛡️ Defend your collection from rival thieves who want what’s yours.\n⚡ Rebirth and unlock new abilities to steal faster, smarter, and cleaner than ever before.\n\nEvery sneaker tells a story. Every heist builds your legend.\nAre you ready to rule the streets as the ultimate sneaker thief?", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/sas/1.png" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "Steal a Sneakers", src: "/games/Screenshot/sas/1.png" },
      { alt: "Steal a Sneakers", src: "/games/Screenshot/sas/2.png" },
      { alt: "Steal a Sneakers", src: "/games/Screenshot/sas/3.png" },
      { alt: "Steal a Sneakers", src: "/games/Screenshot/sas/4.png" },
      { alt: "Steal a Sneakers", src: "/games/Screenshot/sas/5.png" },
      { alt: "Steal a Sneakers", src: "/games/Screenshot/sas/6.png" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [
      {
        alt: "RIVRS",
        src: "/rivrs.png",
      },
    ], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "1 Months",
  }, //StealSneakers
  {
    slug: "steal-army",
    iconGame: "/games/Icons/saa.png", // icongame -> iconGame
    nameGame: "Steal a Army", // namegame -> nameGame
    titleImgs: [], // titleimg -> titleImgs
    videoUrl: "", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/saa.png",
      },
    ],
    playStoreUrl: "", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl:
      "https://www.roblox.com/games/137450204024991/Steal-an-Army", // robloxstore -> robloxStoreUrl
    descStory:
      "In a world where power is everything, you start with nothing but determination and a single recruit. The land is ruled by rival generals, each commanding massive armies and unstoppable machines of war. To survive, you must build your own army — not just by recruiting, but by stealing troops, tanks, and choppers from others. Every battle strengthens your forces and brings you one step closer to becoming the ultimate Army General. But remember — in this world, loyalty is earned, and armies can be taken just as easily as they’re built.", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/saa/2.png" },
    ],
    descGameplay:
      "Steal an Army combines base-building, combat, and chaos in a fast-paced military simulation!\nRecruit soldiers, expand your base, and raid other players to steal their troops and vehicles. Use your earnings to upgrade weapons, unlock troll gear, and strengthen your defenses. Rebirth to boost your stats and dominate the battlefield even faster. Whether you prefer strategy or pure chaos, every choice you make defines your rise to power.", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/saa/3.png" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "Steal an Army", src: "/games/Screenshot/saa/1.png" },
      { alt: "Steal an Army", src: "/games/Screenshot/saa/2.png" },
      { alt: "Steal an Army", src: "/games/Screenshot/saa/3.png" },
      { alt: "Steal an Army", src: "/games/Screenshot/saa/4.png" },
      { alt: "Steal an Army", src: "/games/Screenshot/saa/5.png" },
      { alt: "Steal an Army", src: "/games/Screenshot/saa/6.png" },
      { alt: "Steal an Army", src: "/games/Screenshot/saa/7.png" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [
      {
        alt: "RIVRS",
        src: "/rivrs.png",
      },
    ], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "1 Months",
  }, //StealArmy
  {
    slug: "throw-my-ride",
    iconGame: "/games/Icons/tmr.png", // icongame -> iconGame
    nameGame: "Throw My Ride!", // namegame -> nameGame
    titleImgs: [], // titleimg -> titleImgs
    videoUrl: "https://www.youtube.com/embed/WaLr-8j4U80?si=NlWirzsmPl6xbld9", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/tmr.png",
      },
    ],
    playStoreUrl: "", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "https://www.roblox.com/games/73611144922902/Throw-My-Ride", // robloxstore -> robloxStoreUrl
    descStory:
      "In a world where speed alone isn’t enough, one challenge reigns supreme — how far can you throw your car? You’re a daring mechanic-turned-launcher, obsessed with pushing machines beyond their limits. From scrap junkers to supercars, every vehicle is a new experiment in chaos, flight, and distance. It’s not just about driving anymore… it’s about launching your ride into the stratosphere and proving you’ve got what it takes to defy gravity itself.", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/tmr/4.png" },
    ],
    descGameplay:
      "Throw My Ride is a physics-based car-launching simulator where power meets precision!\nLoad your car into a massive slingshot, fire it across wild landscapes, and watch it bounce, flip, and soar for record-breaking distances. Earn rewards based on how far you travel, then use them to upgrade your car, slingshot, and launch tower. Unlock new vehicles, explore extreme zones, and perfect your timing to reach impossible heights. Every launch brings you closer to the ultimate goal — the farthest throw in the world!", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/tmr/7.png" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "Throw My Ride!", src: "/games/Screenshot/tmr/1.png" },
      { alt: "Throw My Ride!", src: "/games/Screenshot/tmr/2.png" },
      { alt: "Throw My Ride!", src: "/games/Screenshot/tmr/3.png" },
      { alt: "Throw My Ride!", src: "/games/Screenshot/tmr/4.png" },
      { alt: "Throw My Ride!", src: "/games/Screenshot/tmr/5.png" },
      { alt: "Throw My Ride!", src: "/games/Screenshot/tmr/6.png" },
      { alt: "Throw My Ride!", src: "/games/Screenshot/tmr/7.png" },
      { alt: "Throw My Ride!", src: "/games/Screenshot/tmr/8.png" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [
      {
        alt: "RIVRS",
        src: "/rivrs.png",
      },
    ], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "1 Months",
  }, //Throw My Ride
  {
    slug: "mount-kalcer",
    iconGame: "/games/Icons/mk.png", // icongame -> iconGame
    nameGame: "Mount Kalcer", // namegame -> nameGame
    titleImgs: [], // titleimg -> titleImgs
    videoUrl: "https://www.youtube.com/embed/qLD4xgRLP00?si=Fet3WndXeDaOGL7A", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/mk.png",
      },
    ],
    playStoreUrl: "", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl:
      "https://www.roblox.com/games/101961766985364/NEW-Gunung-Kalcer", // robloxstore -> robloxStoreUrl
    descStory:
      "Gunung Kalcer bukan gunung biasa — ia hanya muncul di bawah cahaya bulan.\nKonon, siapa pun yang berhasil mencapai puncaknya akan menemukan arti sejati dari “malam yang hidup”.\nKamu dan teman-temanmu memulai perjalanan menuju puncak mistis ini, menembus kabut tebal, melintasi lembah bercahaya, dan menghadapi makhluk bayangan yang menjaga rahasia gunung.\nNamun, semakin tinggi kamu mendaki, semakin nyata keajaiban yang menunggu di atas sana — tempat di mana bintang, musik, dan persahabatan bersatu di bawah bulan sabit besar..", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/mk/2.png" },
    ],
    descGameplay:
      "Gunung Kalcer adalah game petualangan sosial penuh misteri dan fantasi.\nJelajahi jalur malam yang indah, hindari rintangan, dan gunakan kekuatan unik seperti berubah menjadi rusa ajaib atau terbang di langit berbintang.\nBekerjasama dengan teman untuk melewati jalan berbahaya, membawa satu sama lain melewati jurang, dan menaklukkan monster bayangan yang menghalangi jalan menuju puncak.\nNikmati momen santai di atas gunung — berfoto, berjoget, atau sekadar menatap ribuan bintang setelah perjalanan panjangmu.\nSetiap langkah membawa kisah baru, dan setiap puncak adalah kenangan tak terlupakan.", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/mk/1.png" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "Throw My Ride!", src: "/games/Screenshot/mk/1.png" },
      { alt: "Throw My Ride!", src: "/games/Screenshot/mk/2.png" },
      { alt: "Throw My Ride!", src: "/games/Screenshot/mk/3.png" },
      { alt: "Throw My Ride!", src: "/games/Screenshot/mk/4.png" },
      { alt: "Throw My Ride!", src: "/games/Screenshot/mk/5.png" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [
      {
        alt: "GOOMI",
        src: "/goomi.png",
      },
    ], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "3 Weeks",
  }, //Mout Kalcer
  {
    slug: "mount-halimun",
    iconGame: "/games/Icons/HalimunIco.png", // icongame -> iconGame
    nameGame: "Mount Halimun", // namegame -> nameGame
    titleImgs: [], // titleimg -> titleImgs
    videoUrl: "https://www.youtube.com/embed/bHJ5iEH4kMY?si=D2TaVLv6VfMJCxDe", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/mh.png",
      },
    ],
    playStoreUrl: "", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl:
      "https://www.roblox.com/games/118045026130013/BARU-Mount-Halimun-HD", // robloxstore -> robloxStoreUrl
    descStory:
      "Hidden deep within the misty rainforests of West Java lies Mount Halimun — a legendary peak closed to the public to protect its sacred wilderness. But in this world, you’re given a rare chance to explore what few have ever seen.\nStep into the heart of the jungle, listen to the whisper of the wind, and uncover the mountain’s hidden stories. Every trail tells a tale, every discovery connects you closer to nature, and every step brings you nearer to the summit shrouded in legend.", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/mh/4.png" },
    ],
    descGameplay:
      "Mount Halimun HD offers a breathtaking blend of adventure, exploration, and education.\nImmerse yourself in stunning HD visuals as you traverse misty forests and rugged trails. Record your progress in the Mountain Journal, collect educational articles about nature and conservation, and uncover hidden knowledge along the way.\nBring your friends on the journey — carry each other through tough paths, share discoveries, and capture unforgettable moments at the peak.\nThis is more than a climb; it’s a journey of friendship, discovery, and respect for nature’s untold beauty.", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/mh/8.png" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "Throw My Ride!", src: "/games/Screenshot/mh/1.png" },
      { alt: "Throw My Ride!", src: "/games/Screenshot/mh/2.png" },
      { alt: "Throw My Ride!", src: "/games/Screenshot/mh/3.png" },
      { alt: "Throw My Ride!", src: "/games/Screenshot/mh/4.png" },
      { alt: "Throw My Ride!", src: "/games/Screenshot/mh/5.png" },
      { alt: "Throw My Ride!", src: "/games/Screenshot/mh/6.png" },
      { alt: "Throw My Ride!", src: "/games/Screenshot/mh/7.png" },
      { alt: "Throw My Ride!", src: "/games/Screenshot/mh/8.png" },
      { alt: "Throw My Ride!", src: "/games/Screenshot/mh/9.png" },
      { alt: "Throw My Ride!", src: "/games/Screenshot/mh/10.png" },
      { alt: "Throw My Ride!", src: "/games/Screenshot/mh/11.png" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "1.5 Months",
  }, //Halimun
  {
    slug: "mount-nirwana",
    iconGame: "/games/Icons/Nirwana.png", // icongame -> iconGame
    nameGame: "Mount Nirwana", // namegame -> nameGame
    titleImgs: [], // titleimg -> titleImgs
    videoUrl: "https://www.youtube.com/embed/PN-dwr4vlrw?si=ByXNKwJ46ds5NQRL", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/nwn.png",
      },
    ],
    playStoreUrl: "", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl:
      "http://roblox.com/games/106386957111185/BARU-Gunung-Nirwana-HD", // robloxstore -> robloxStoreUrl
    descStory:
      "High above the clouds lies Mount Nirwana, a mystical peak known as the “Roof of Heaven.\nLegends say that those who reach its summit will find inner peace and hear the whispers of the wind that carries ancient secrets.\n\nYou are one of the few brave souls chosen to ascend this sacred mountain — not for glory, but for understanding. As you climb through misty forests, glowing valleys, and tranquil skies, you’ll uncover fragments of forgotten stories about the bond between nature and the human spirit.\n\nEach step brings you closer to enlightenment… and to the breathtaking serenity that only Nirwana can offer.", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/mn/4.png" },
    ],
    descGameplay:
      "Gunung Nirwana HD blends exploration, learning, and social adventure in one immersive mountain-climbing experience.\n\n🏔️ Explore & Discover:\nTrek through tropical forests, misty cliffs, and luminous peaks rendered in stunning HD detail.\n\n📖 Record Your Journey:\nKeep an Adventure Journal that logs your milestones, discoveries, and photos from each expedition.\n\n🧠 Learn & Grow:\nCollect educational insights and real-world mountaineering facts as you progress.\n\n🤝 Climb Together:\nTeam up with friends to explore, carry each other through challenges, and share unforgettable moments at the summit.\n\nFind your calm, embrace the challenge, and uncover the hidden beauty of Mount Nirwana — where peace meets adventure. 🌤️", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/mn/8.png" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "Mount Nirwana", src: "/games/Screenshot/mn/1.png" },
      { alt: "Mount Nirwana", src: "/games/Screenshot/mn/2.png" },
      { alt: "Mount Nirwana", src: "/games/Screenshot/mn/3.png" },
      { alt: "Mount Nirwana", src: "/games/Screenshot/mn/4.png" },
      { alt: "Mount Nirwana", src: "/games/Screenshot/mn/5.png" },
      { alt: "Mount Nirwana", src: "/games/Screenshot/mn/6.png" },
      { alt: "Mount Nirwana", src: "/games/Screenshot/mn/7.png" },
      { alt: "Mount Nirwana", src: "/games/Screenshot/mn/8.png" },
      { alt: "Mount Nirwana", src: "/games/Screenshot/mn/9.png" },
      { alt: "Mount Nirwana", src: "/games/Screenshot/mn/10.png" },
      { alt: "Mount Nirwana", src: "/games/Screenshot/mn/11.png" },
      { alt: "Mount Nirwana", src: "/games/Screenshot/mn/12.png" },
      { alt: "Mount Nirwana", src: "/games/Screenshot/mn/13.png" },
      { alt: "Mount Nirwana", src: "/games/Screenshot/mn/14.png" },
      { alt: "Mount Nirwana", src: "/games/Screenshot/mn/15.png" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "1.5 Months",
  }, //Nirwana
  {
    slug: "mount-renjana",
    iconGame: "/games/Icons/Renjana.png", // icongame -> iconGame
    nameGame: "Mount Renjana", // namegame -> nameGame
    titleImgs: [], // titleimg -> titleImgs
    videoUrl: "https://www.youtube.com/embed/6V3YRjaPD3k?si=pFooSgP9BLxq4Lm-", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/mr.png",
      },
    ],
    playStoreUrl: "", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl:
      "http://roblox.com/games/118090050965113/BARU-Gunung-Renjana-HD", // robloxstore -> robloxStoreUrl
    descStory:
      "Welcome to Mount Renjana, a mountain where every step echoes with emotion.\nThis is not just a climb — it’s a heartfelt journey through nature’s beauty, longing, and self-discovery.\nAs the sun pierces through the misty forests and the wind whispers across the cliffs, you’ll feel the mountain calling to your soul.\n\nEach trail tells a story of love, loss, and hope — guiding you toward the true summit: the peak of your own heart.\n\nMount Renjana is where silence speaks, memories awaken, and nature embraces your spirit.\nWill you find peace at the top, or discover something even deeper within yourself?", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/mr/2.png" },
    ],
    descGameplay:
      "🌿 Explore and Discover:\nTraverse breathtaking HD landscapes filled with serene forests, glowing valleys, and mist-covered cliffs.\n\n🧭 Emotional Journey:\nUncover hidden messages, journal entries, and visual stories that connect your climb to the mountain’s soul.\n\n🤝 Social Adventure:\nInvite friends to join your ascent, share quiet moments, or reach the summit together under the golden sky.\n\n📖 Journey Log:\nRecord your milestones and reflections in your personal climbing journal — your memories will stay forever on Mount Renjana.\n\nMount Renjana isn’t just about reaching the top — it’s about finding the meaning of the climb itself. 🌙", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/mr/8.png" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "Mount Renjana", src: "/games/Screenshot/mr/1.png" },
      { alt: "Mount Renjana", src: "/games/Screenshot/mr/2.png" },
      { alt: "Mount Renjana", src: "/games/Screenshot/mr/3.png" },
      { alt: "Mount Renjana", src: "/games/Screenshot/mr/4.png" },
      { alt: "Mount Renjana", src: "/games/Screenshot/mr/5.png" },
      { alt: "Mount Renjana", src: "/games/Screenshot/mr/6.png" },
      { alt: "Mount Renjana", src: "/games/Screenshot/mr/7.png" },
      { alt: "Mount Renjana", src: "/games/Screenshot/mr/8.png" },
      { alt: "Mount Renjana", src: "/games/Screenshot/mr/9.png" },
      { alt: "Mount Renjana", src: "/games/Screenshot/mr/10.png" },
      { alt: "Mount Renjana", src: "/games/Screenshot/mr/12.png" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "1.5 Months",
  }, //Renjana
  {
    slug: "quarantine-brainrot",
    iconGame: "/games/Icons/qb.png", // icongame -> iconGame
    nameGame: "Quarantine A Brainrot", // namegame -> nameGame
    titleImgs: [], // titleimg -> titleImgs
    videoUrl: "", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/qb.png",
      },
    ],
    playStoreUrl: "", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl:
      "https://www.roblox.com/games/97365289307749/Kill-A-Brainrot", // robloxstore -> robloxStoreUrl
    descStory: "(not Ready Yet!)", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/qb/5.png" },
    ],
    descGameplay: "(not ready yet)", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/qb/3.png" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "Quarantine a Brainrot", src: "/games/Screenshot/qb/1.png" },
      { alt: "Quarantine a Brainrot", src: "/games/Screenshot/qb/2.png" },
      { alt: "Quarantine a Brainrot", src: "/games/Screenshot/qb/3.png" },
      { alt: "Quarantine a Brainrot", src: "/games/Screenshot/qb/4.png" },
      { alt: "Quarantine a Brainrot", src: "/games/Screenshot/qb/5.png" },
      { alt: "Quarantine a Brainrot", src: "/games/Screenshot/qb/6.png" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [
      {
        alt: "RIVRS",
        src: "/rivrs.png",
      },
    ], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "1 Months",
  }, //Quarantine A BrainRot
  {
    slug: "marching-run",
    iconGame: "/games/Icons/mrun.png", // icongame -> iconGame
    nameGame: "Marching Run", // namegame -> nameGame
    titleImgs: [], // titleimg -> titleImgs
    videoUrl: "https://www.youtube.com/embed/5Jn1cBXbulE?si=0fdBYHOefzX-yL4I", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/mrun.png",
      },
    ],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.Tazkan.MarchingRun", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "", // robloxstore -> robloxStoreUrl
    descStory:
      "Get ready for an epic challenge in Marching Run\nLead your team across dangerous gaps and tricky paths. Every person is tied together on a long stick — one wrong move and everyone could fall! Gather enough people to build a strong bridge and make it safely to the other side. Stay alert, avoid obstacles, and keep your group together no matter what. Can you guide your team to victory? 🌉💪", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/mrun/3.jpg" },
    ],
    descGameplay:
      "In this fun and challenging game, your goal is to collect as many people as possible to cross the abyss. The more people you gather, the longer your stick becomes — helping you reach the next platform. But be careful! Obstacles and traps are everywhere, and one mistake can send your whole group falling.\n\nMove smart, react fast, and plan your path carefully.\nMarch together, cross the abyss, and prove your skills in this exciting team-based adventure! 🚶‍♂️🚶‍♀️🔥", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/mrun/5.jpg" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "Marching Run", src: "/games/Screenshot/mrun/1.jpg" },
      { alt: "Marching Run", src: "/games/Screenshot/mrun/2.jpg" },
      { alt: "Marching Run", src: "/games/Screenshot/mrun/3.jpg" },
      { alt: "Marching Run", src: "/games/Screenshot/mrun/4.jpg" },
      { alt: "Marching Run", src: "/games/Screenshot/mrun/5.jpg" },
      { alt: "Marching Run", src: "/games/Screenshot/mrun/6.jpg" },
      { alt: "Marching Run", src: "/games/Screenshot/mrun/7.jpg" },
      { alt: "Marching Run", src: "/games/Screenshot/mrun/8.jpg" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "1 Months",
  }, // Marching Run
  {
    slug: "slimy-floor",
    iconGame: "/games/Icons/sf.png", // icongame -> iconGame
    nameGame: "Slimy Floor", // namegame -> nameGame
    titleImgs: [], // titleimg -> titleImgs
    videoUrl: "", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/sf.png",
      },
    ],
    playStoreUrl: "", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "", // robloxstore -> robloxStoreUrl
    descStory:
      "Welcome to a world of soft, squishy fun! In Super ASMR Slime, you’ll dive into a relaxing and satisfying adventure where every move feels smooth and soothing. Guide your colorful balls as they roll and slide across a soft slime floor, mixing colors and creating oddly satisfying sounds. It’s a simple, calming experience designed to help you unwind and enjoy the pure joy of motion and texture. 💫", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/sf/3.png" },
    ],
    descGameplay:
      "In Super ASMR Slime, your goal is to gather all the balls and guide them safely across the bouncy slime floor. Feel the realistic slime physics as the balls move, stretch, and squish their way forward!\n\nUse smooth controls to collect every ball, avoid obstacles, and enjoy the relaxing ASMR effects with every move. Each level brings new textures, colors, and sounds to keep your senses delighted.\n\nPlay, relax, and let the slime soothe your mind — it’s ASMR fun like never before! 🩵✨", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/sf/5.png" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "Slimy Floor", src: "/games/Screenshot/sf/1.png" },
      { alt: "Slimy Floor", src: "/games/Screenshot/sf/2.png" },
      { alt: "Slimy Floor", src: "/games/Screenshot/sf/3.png" },
      { alt: "Slimy Floor", src: "/games/Screenshot/sf/4.png" },
      { alt: "Slimy Floor", src: "/games/Screenshot/sf/5.png" },
      { alt: "Slimy Floor", src: "/games/Screenshot/sf/6.png" },
      { alt: "Slimy Floor", src: "/games/Screenshot/sf/7.png" },
      { alt: "Slimy Floor", src: "/games/Screenshot/sf/8.png" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "1 Months",
  }, // Slimy
  {
    slug: "land-control",
    iconGame: "/games/Icons/lc.png", // icongame -> iconGame
    nameGame: "Land Control", // namegame -> nameGame
    titleImgs: [], // titleimg -> titleImgs
    videoUrl: "", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/lc.png",
      },
    ],
    playStoreUrl: "", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "", // robloxstore -> robloxStoreUrl
    descStory:
      "Welcome to a world of soft, squishy fun! In Super ASMR Slime, you’ll dive into a relaxing and satisfying adventure where every move feels smooth and soothing. Guide your colorful balls as they roll and slide across a soft slime floor, mixing colors and creating oddly satisfying sounds. It’s a simple, calming experience designed to help you unwind and enjoy the pure joy of motion and texture. 💫", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/lc/3.png" },
    ],
    descGameplay:
      "In Super ASMR Slime, your goal is to gather all the balls and guide them safely across the bouncy slime floor. Feel the realistic slime physics as the balls move, stretch, and squish their way forward!\n\nUse smooth controls to collect every ball, avoid obstacles, and enjoy the relaxing ASMR effects with every move. Each level brings new textures, colors, and sounds to keep your senses delighted.\n\nPlay, relax, and let the slime soothe your mind — it’s ASMR fun like never before! 🩵✨", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/lc/5.png" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "Land Control", src: "/games/Screenshot/lc/1.png" },
      { alt: "Land Control", src: "/games/Screenshot/lc/2.png" },
      { alt: "Land Control", src: "/games/Screenshot/lc/3.png" },
      { alt: "Land Control", src: "/games/Screenshot/lc/4.png" },
      { alt: "Land Control", src: "/games/Screenshot/lc/5.png" },
      { alt: "Land Control", src: "/games/Screenshot/lc/6.png" },
      { alt: "Land Control", src: "/games/Screenshot/lc/7.png" },
      { alt: "Land Control", src: "/games/Screenshot/lc/8.png" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "1 Months",
  }, // Land Control
  {
    slug: "land-fight",
    iconGame: "/games/Icons/lf.png", // icongame -> iconGame
    nameGame: "Land Fight", // namegame -> nameGame
    titleImgs: [], // titleimg -> titleImgs
    videoUrl: "", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/lf.png",
      },
    ],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.TrimatraStudio.LandFight&hl=id", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "", // robloxstore -> robloxStoreUrl
    descStory:
      "Welcome to the battlefield of Castle Conqueror — a world where only the strongest can rule! Gather your army, expand your power, and capture every castle that stands in your way. Compete against rival forces who are all fighting for control. The faster you grow, the closer you are to becoming the ultimate ruler. Can you conquer them all and claim every castle as your own? ⚔️👑", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/lf/3.png" },
    ],
    descGameplay:
      "In this fast-paced strategy game, your goal is to gather troops, expand your army, and capture castles before your enemies do. Move quickly, plan your attacks, and defend your territory from rival players. Each castle you conquer makes your army stronger — but your enemies won’t make it easy!\n\nUse smart tactics, upgrade your forces, and dominate the map to prove your leadership. Take over all the castles and show everyone who the true king is! 🏹🔥", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/lf/5.png" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "Land Control", src: "/games/Screenshot/lf/1.png" },
      { alt: "Land Control", src: "/games/Screenshot/lf/2.png" },
      { alt: "Land Control", src: "/games/Screenshot/lf/3.png" },
      { alt: "Land Control", src: "/games/Screenshot/lf/4.png" },
      { alt: "Land Control", src: "/games/Screenshot/lf/5.png" },
      { alt: "Land Control", src: "/games/Screenshot/lf/6.png" },
      { alt: "Land Control", src: "/games/Screenshot/lf/7.png" },
      { alt: "Land Control", src: "/games/Screenshot/lf/8.png" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "1 Months",
  }, // Land Fight
  {
    slug: "crowd-painter",
    iconGame: "/games/Icons/cp.png", // icongame -> iconGame
    nameGame: "Crowd Painter", // namegame -> nameGame
    titleImgs: [], // titleimg -> titleImgs
    videoUrl: "", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/cp.png",
      },
    ],
    playStoreUrl: "", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "", // robloxstore -> robloxStoreUrl
    descStory:
      "Step into a colorful world of strategy and creativity in Crowd Painter!\nYou wield the power of color — your paint weapon can turn anyone you touch into your ally. Spread your color across the battlefield, transform white crowds into your team, and lead them to victory! The more you paint, the stronger your army becomes. Can you build the biggest team and take over every castle? 🌈⚔️", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/cp/3.png" },
    ],
    descGameplay:
      "In Painter Clash, your mission is to paint and conquer!\nUse your painter’s weapon to color the crowds around you — everyone you paint becomes part of your army. Multiply your allies, overpower your enemies, and storm their castles to claim victory.\n\nMove fast, think smart, and spread your color across the map. The more allies you gather, the greater your power!\n\n How many allies can you create before the battle ends? 🎨🔥", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/cp/5.png" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "Land Control", src: "/games/Screenshot/cp/1.png" },
      { alt: "Land Control", src: "/games/Screenshot/cp/2.png" },
      { alt: "Land Control", src: "/games/Screenshot/cp/3.png" },
      { alt: "Land Control", src: "/games/Screenshot/cp/4.png" },
      { alt: "Land Control", src: "/games/Screenshot/cp/5.png" },
      { alt: "Land Control", src: "/games/Screenshot/cp/6.png" },
      { alt: "Land Control", src: "/games/Screenshot/cp/7.png" },
      { alt: "Land Control", src: "/games/Screenshot/cp/8.png" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "1 Months",
  }, // crowd Painter
  {
    slug: "centipede-run",
    iconGame: "/games/Icons/cr.png", // icongame -> iconGame
    nameGame: "Centipede Run", // namegame -> nameGame
    titleImgs: [], // titleimg -> titleImgs
    videoUrl: "", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/cr.png",
      },
    ],
    playStoreUrl: "", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "", // robloxstore -> robloxStoreUrl
    descStory:
      "Step into a colorful world of strategy and creativity in Crowd Painter!\nYou wield the power of color — your paint weapon can turn anyone you touch into your ally. Spread your color across the battlefield, transform white crowds into your team, and lead them to victory! The more you paint, the stronger your army becomes. Can you build the biggest team and take over every castle? 🌈⚔️", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/cr/3.png" },
    ],
    descGameplay:
      "Move your centipede and aim carefully to eat as many insects as possible. Each bug you devour makes your body longer and boosts your score. But watch out — larger animals can attack and eat parts of your centipede!\n\nUse smart movements to dodge danger, collect food, and grow endlessly.\nHow long can you survive and how big can your centipede get? 🐍🔥", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/cr/5.png" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "Land Control", src: "/games/Screenshot/cr/1.png" },
      { alt: "Land Control", src: "/games/Screenshot/cr/2.png" },
      { alt: "Land Control", src: "/games/Screenshot/cr/3.png" },
      { alt: "Land Control", src: "/games/Screenshot/cr/4.png" },
      { alt: "Land Control", src: "/games/Screenshot/cr/5.png" },
      { alt: "Land Control", src: "/games/Screenshot/cr/6.png" },
      { alt: "Land Control", src: "/games/Screenshot/cr/7.png" },
      { alt: "Land Control", src: "/games/Screenshot/cr/8.png" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "1 Months",
  }, // Centipede Run
  {
    slug: "lato-lato",
    iconGame: "/games/Icons/ltlt.png", // icongame -> iconGame
    nameGame: "Lato-Lato 3D", // namegame -> nameGame
    titleImgs: [], // titleimg -> titleImgs
    videoUrl: "", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/ltlt.png",
      },
    ],
    playStoreUrl: "", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "", // robloxstore -> robloxStoreUrl
    descStory:
      "Experience the timeless fun of Latto-Latto, the classic toy that has fascinated generations! Swing the two balls rhythmically, listen to the satisfying clacking sound, and master the art of perfect timing. What begins as a simple motion quickly becomes an addictive challenge — can you keep the rhythm going without missing a beat?\n\nThe more precise and steady your swings, the better the sound and the higher your score. Feel the nostalgia, enjoy the rhythm, and let the Latto-Latto sound take you back to the joy of simple play. 🔵🔵✨", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/ltlt/3.png" },
    ],
    descGameplay:
      "In Latto-Latto, your goal is to swing the two balls in perfect rhythm. Tap or swipe to control the speed and angle of each swing — too fast or too slow, and the balls will lose sync! Keep the timing right to make them collide smoothly and produce the iconic clack-clack sound.\n\nEarn points by maintaining the rhythm and reaching longer combos. As you progress, the speed increases and your reflexes are put to the test.\nCan you master the rhythm and become the ultimate Latto-Latto champion? 🕹️🎵", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/ltlt/5.png" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "Latto-Latto", src: "/games/Screenshot/ltlt/1.png" },
      { alt: "Latto-Latto", src: "/games/Screenshot/ltlt/2.png" },
      { alt: "Latto-Latto", src: "/games/Screenshot/ltlt/3.png" },
      { alt: "Latto-Latto", src: "/games/Screenshot/ltlt/4.png" },
      { alt: "Latto-Latto", src: "/games/Screenshot/ltlt/5.png" },
      { alt: "Latto-Latto", src: "/games/Screenshot/ltlt/6.png" },
      { alt: "Latto-Latto", src: "/games/Screenshot/ltlt/7.png" },
      { alt: "Latto-Latto", src: "/games/Screenshot/ltlt/8.png" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "1 Months",
  }, // Latto-Lattos
  {
    slug: "gamelanku",
    iconGame: "/games/Icons/gamelanku.png", // icongame -> iconGame
    nameGame: "Gamelanku", // namegame -> nameGame
    titleImgs: [
      {
        alt: "",
        src: "/games/Title/gamelanku.png",
      },
    ], // titleimg -> titleImgs
    videoUrl: "https://www.youtube.com/embed/xW1b5tMf1Dw?si=FNuB6M4y7ZQ8NFGu", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/gamelanku.jpg",
      },
    ],
    playStoreUrl: "", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "", // robloxstore -> robloxStoreUrl
    descStory:
      "Discover the beauty of traditional Indonesian music with Gamelanku — a fun and interactive way to experience the sound of the gamelan right from your device! Feel the rhythm, explore various traditional instruments, and enjoy the sensation of playing authentic Indonesian music anytime, anywhere. Whether you’re a beginner or an experienced musician, Gamelanku lets you connect with the rich culture of the archipelago through music. 🎵✨", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/gamelanku/3.jpg" },
    ],
    descGameplay:
      "In Gamelanku, you can play a variety of traditional Indonesian instruments using your gadget. Enjoy realistic sounds and responsive touch controls that make every note come alive. Choose from classic instruments like Saron, Bonang, Gendang, Gong, Angklung, and Karinding, plus new additions like Suling and Gambang.\n\nFeatures include multitouch support, music tutorials, recording tools, and even custom tutorial creation so you can share your own songs. Chat with players around the world through Global Chat and personalize your experience with a custom Avatar Profile.\n\nPlay, learn, and share the spirit of Indonesian music — all in one app! 🎧🇮🇩", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/gamelanku/2.jpg" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "Latto-Latto", src: "/games/Screenshot/gamelanku/1.png" },
      { alt: "Latto-Latto", src: "/games/Screenshot/gamelanku/2.jpg" },
      { alt: "Latto-Latto", src: "/games/Screenshot/gamelanku/3.jpg" },
      { alt: "Latto-Latto", src: "/games/Screenshot/gamelanku/4.jpg" },
      { alt: "Latto-Latto", src: "/games/Screenshot/gamelanku/5.jpg" },
      { alt: "Latto-Latto", src: "/games/Screenshot/gamelanku/6.jpg" },
      { alt: "Latto-Latto", src: "/games/Screenshot/gamelanku/7.jpg" },
      { alt: "Latto-Latto", src: "/games/Screenshot/gamelanku/8.jpg" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "1 Months",
  }, // Gamelanku
  {
    slug: "dropstack-ball",
    iconGame: "/games/Icons/dsb.png", // icongame -> iconGame
    nameGame: "Dropstack Ball", // namegame -> nameGame
    titleImgs: [], // titleimg -> titleImgs
    videoUrl: "https://www.youtube.com/embed/Yyu0V30ysXo?si=D_awHdlQwwqmjT6H", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/dsb.png",
      },
    ],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.match3blaster.DropStackBallFall", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "", // robloxstore -> robloxStoreUrl
    descStory:
      "Get ready for the most addictive falling ball experience ever! Helix Stack Blast brings endless fun and excitement with simple one-touch gameplay and smooth performance optimized for all devices. Watch the ball fall through colorful helix towers, smash through platforms, and feel the thrill as you go deeper and faster. Can you reach the bottom without hitting the wrong color? 🎯🔥", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/dsb/SS3.png" },
    ],
    descGameplay:
      "In Helix Stack Blast, your goal is simple — control the falling ball and break through the helix platforms to reach the bottom. Tap or hold to make the ball smash through stacks, but watch out for the forbidden color zones or it’s game over!\n\nThe longer you survive, the faster the action gets, making every level more exciting and challenging. Easy to play, hard to master, and super satisfying — the perfect casual game to test your reflexes and timing.\nDownload now and enjoy the most addictive Dropstack Ball game ever! 🏆🎮", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/dsb/SS5.png" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "Dropstack ball", src: "/games/Screenshot/dsb/SS1.png" },
      { alt: "Dropstack ball", src: "/games/Screenshot/dsb/SS2.png" },
      { alt: "Dropstack ball", src: "/games/Screenshot/dsb/SS3.png" },
      { alt: "Dropstack ball", src: "/games/Screenshot/dsb/SS4.png" },
      { alt: "Dropstack ball", src: "/games/Screenshot/dsb/SS5.png" },
      { alt: "Dropstack ball", src: "/games/Screenshot/dsb/SS6.png" },
      { alt: "Dropstack ball", src: "/games/Screenshot/dsb/SS7.png" },
      { alt: "Dropstack ball", src: "/games/Screenshot/dsb/SS8.png" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [{ alt: "Tazkan Games", src: "/tazkan.png" }], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "1 Months",
  }, // Dropstack Ball
  {
    slug: "tts-gaul",
    iconGame: "/games/Icons/tts.png", // icongame -> iconGame
    nameGame: "TTS Gaul", // namegame -> nameGame
    titleImgs: [
      {
        alt: "source",
        src: "/games/Title/ttsh.png",
      },
    ], // titleimg -> titleImgs
    videoUrl: "", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/header2.png",
      },
    ],
    playStoreUrl: "", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "", // robloxstore -> robloxStoreUrl
    descStory:
      "Get ready for a fun and modern twist on the classic crossword puzzle! TTS Gaul brings a fresh, exciting crossword experience with a unique outer-space theme. Whether you’re young or just young at heart, this game lets you relive the joy of solving crosswords — now with a cool and casual vibe.\n\nPlay anytime, anywhere — even offline without internet! Solve puzzles from easy to challenging levels, train your brain, and enjoy hours of entertainment. With words that mix everyday language and modern slang, TTS Gaul is perfect for players of all ages who love word games and brain teasers. 🚀🧠", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/tts/7.png" },
    ],
    descGameplay:
      "In TTS Gaul, your mission is to complete crossword puzzles by finding the right words from the given letters. It’s easy to start, but the challenge grows as you advance through over 900 levels — each with unique difficulty and creative clues.\n\nEnjoy a relaxing space-themed background, fun music and vibration effects, and handy features like letter shuffling, hints, and extra chances to help you solve tricky puzzles. The game is completely free and offline playable, so you can enjoy it anytime, anywhere!\n\nSimple to play, relaxing to enjoy, and endlessly satisfying — TTS Gaul is the crossword game that makes you smile while keeping your brain sharp. ✨", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/tts/2.png" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "TTS Gaul", src: "/games/Screenshot/tts/2.png" },
      { alt: "TTS Gaul", src: "/games/Screenshot/tts/3.png" },
      { alt: "TTS Gaul", src: "/games/Screenshot/tts/4.png" },
      { alt: "TTS Gaul", src: "/games/Screenshot/tts/5.png" },
      { alt: "TTS Gaul", src: "/games/Screenshot/tts/6.png" },
      { alt: "TTS Gaul", src: "/games/Screenshot/tts/7.png" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [{ alt: "DeFarel Studio", src: "/defarel.png" }], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "1 Months",
  }, // TTS Gaul
  {
    slug: "worms-planet",
    iconGame: "/games/Icons/wp.png", // icongame -> iconGame
    nameGame: "Worm Planet", // namegame -> nameGame
    titleImgs: [
      {
        alt: "source",
        src: "/games/Title/wp.png",
      },
    ], // titleimg -> titleImgs
    videoUrl: "", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/Header.png",
      },
    ],
    playStoreUrl: "", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "", // robloxstore -> robloxStoreUrl
    descStory:
      "Welcome to Snake Zone: Worm Planet Cacing io — a world full of speed, strategy, and survival!\nStart as a small worm and grow bigger by eating glowing orbs scattered across the arena. Compete with other players from around the world, avoid collisions, and become the biggest worm on the planet. Every move counts — one mistake can end your journey!\n\nShow your skills, climb the leaderboard, and prove that you’re the ultimate worm champion! 🌎🔥", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/wp/7.png" },
    ],
    descGameplay:
      "In Snake Zone: Worm Planet Cacing io, your goal is simple — eat, grow, and survive! Move smoothly through the arena, collect glowing dots to make your worm longer, and use smart tactics to trap your opponents.\n\nChoose from many different worm skins and colorful backgrounds to match your style. Challenge your friends, beat their scores, and dominate the battlefield.\n\nEasy to play, fun to master, and endlessly addictive — download now and show the world who’s the best in Snake Zone: Worm Planet Cacing io! 🏆🐛", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/wp/2.png" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "TTS Gaul", src: "/games/Screenshot/wp/1.png" },
      { alt: "TTS Gaul", src: "/games/Screenshot/wp/2.png" },
      { alt: "TTS Gaul", src: "/games/Screenshot/wp/4.png" },
      { alt: "TTS Gaul", src: "/games/Screenshot/wp/5.png" },
      { alt: "TTS Gaul", src: "/games/Screenshot/wp/6.png" },
      { alt: "TTS Gaul", src: "/games/Screenshot/wp/7.png" },
      { alt: "TTS Gaul", src: "/games/Screenshot/wp/8.png" },
      { alt: "TTS Gaul", src: "/games/Screenshot/wp/9.png" },
      { alt: "TTS Gaul", src: "/games/Screenshot/wp/10.png" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [{ alt: "DeFarel Studio", src: "/defarel.png" }], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "1 Months",
  }, // Worms Planet
  {
    slug: "beauty-race",
    iconGame: "/games/Icons/br.png", // icongame -> iconGame
    nameGame: "Beauty Race", // namegame -> nameGame
    titleImgs: [], // titleimg -> titleImgs
    videoUrl: "https://www.youtube.com/embed/DMrtwgnf0Ew", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/br.png",
      },
    ],
    playStoreUrl: "", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "", // robloxstore -> robloxStoreUrl
    descStory:
      "Welcome to Beauty Run, a fun and exciting race where style and strategy come together!\nSwitch between different characters to match the path ahead, stay ahead of your rivals, and reach the finish line in style. Every choice you make decides whether you win or fall behind — are you ready to show off your best look and fastest moves? ✨👠", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/br/4.jpg" },
    ],
    descGameplay:
      "In Beauty Run, you’ll race through colorful tracks filled with changing paths and challenges. Choose the right character for each path — whether it’s sporty, elegant, or casual — and keep your speed up to beat your opponents.\n\nFinish first to earn big bonuses, unlock new stylish characters, and conquer every level. Simple to play, exciting to master — Beauty Run is the ultimate race of fashion and fun! 👗🏁", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/br/2.jpg" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "Beauty Run", src: "/games/Screenshot/br/1.jpg" },
      { alt: "Beauty Run", src: "/games/Screenshot/br/2.jpg" },
      { alt: "Beauty Run", src: "/games/Screenshot/br/4.jpg" },
      { alt: "Beauty Run", src: "/games/Screenshot/br/5.jpg" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [{ alt: "Voodoo", src: "/voodoo.png" }], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "1 Months",
  }, // Beauty Race
  {
    slug: "wipe-it",
    iconGame: "/games/Icons/wipeit.png", // icongame -> iconGame
    nameGame: "Wipe It", // namegame -> nameGame
    titleImgs: [], // titleimg -> titleImgs
    videoUrl: "", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/wipeit.png",
      },
    ],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.TazkanGames.WipeIt", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "", // robloxstore -> robloxStoreUrl
    descStory:
      "Welcome to a world full of fun and challenges! Your mission is simple — clean up all the grass and collect as many coins as you can. But be careful! You must stay on the grass at all times — if you move off it, the game is over. Can you clear every level and become the ultimate grass cleaner? 🍀💰", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/wipeit/4.webp" },
    ],
    descGameplay:
      "In this exciting puzzle game, your goal is to clear all the grass and collect coins to earn points. Swipe to move your character across the grassy field, but don’t step off the grass or you’ll lose!\n\nEach level gets trickier with tighter spaces and more obstacles to avoid. Plan your moves carefully, grab all the coins, and enjoy endless fun and challenges.\n\nPlay now and test your skills — can you clean every patch perfectly? 🌱🔥", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/wipeit/2.webp" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "TTS Gaul", src: "/games/Screenshot/wipeit/1.webp" },
      { alt: "TTS Gaul", src: "/games/Screenshot/wipeit/2.webp" },
      { alt: "TTS Gaul", src: "/games/Screenshot/wipeit/4.webp" },
      { alt: "TTS Gaul", src: "/games/Screenshot/wipeit/5.webp" },
      { alt: "TTS Gaul", src: "/games/Screenshot/wipeit/6.webp" },
      { alt: "TTS Gaul", src: "/games/Screenshot/wipeit/7.webp" },
      { alt: "TTS Gaul", src: "/games/Screenshot/wipeit/8.webp" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [{ alt: "Tazkan Games", src: "/tazkan.png" }], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "1 Months",
  }, // Wipe it
  {
    slug: "hungry-scream",
    iconGame: "/games/Icons/hs.png", // icongame -> iconGame
    nameGame: "Hungry Scream", // namegame -> nameGame
    titleImgs: [], // titleimg -> titleImgs
    videoUrl: "", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/hs.png",
      },
    ],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.TrimatraStudio.HungryScream", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "", // robloxstore -> robloxStoreUrl
    descStory:
      "Get ready for a hilarious food challenge! In this fun and fast-paced game, your goal is simple — eat all the food on the screen without leaving a single bite. Time your moves perfectly, open your mouth wide, and enjoy the rush of gobbling everything in sight. Can you eat it all before the food disappears? 😋🥢", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/hs/4.webp" },
    ],
    descGameplay:
      "Tap at the right moment to open your mouth and eat every piece of food that appears. Miss the timing, and the food will fall — no leftovers allowed! The faster and more accurate you are, the higher your score.\n\nEach level brings more food, faster movement, and tougher timing challenges.\nSimple, funny, and super addictive — how much food can you eat? 🍕🔥", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/hs/2.webp" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "TTS Gaul", src: "/games/Screenshot/hs/1.webp" },
      { alt: "TTS Gaul", src: "/games/Screenshot/hs/2.webp" },
      { alt: "TTS Gaul", src: "/games/Screenshot/hs/4.webp" },
      { alt: "TTS Gaul", src: "/games/Screenshot/hs/5.webp" },
      { alt: "TTS Gaul", src: "/games/Screenshot/hs/6.webp" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [{ alt: "Tazkan Games", src: "/tazkan.png" }], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "1 Months",
  }, // Hungry Scream
  {
    slug: "falling-floor",
    iconGame: "/games/Icons/ff.png", // icongame -> iconGame
    nameGame: "Falling Floor", // namegame -> nameGame
    titleImgs: [], // titleimg -> titleImgs
    videoUrl: "", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/ff.png",
      },
    ],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.tazkangames.FallingFloor", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "", // robloxstore -> robloxStoreUrl
    descStory:
      "Welcome to Falling Floor.io, the ultimate survival arena! Your mission is simple — stay alive as long as you can and don’t fall! But you’re not alone… 16 other players are fighting for survival on a disappearing hex floor. Every step you take makes the tiles vanish — one wrong move, and you’re out!\n\nArmed with your powerful Death Fist, you can punch nearby enemies and send them flying off the arena. Outsmart, outlast, and outfight everyone to become the last one standing! 💥🏆", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/ff/4.webp" },
    ],
    descGameplay:
      "In Falling Floor.io, you’ll run, jump, and dodge across a hexagonal floor that disappears as you step on it. Stay alert and keep moving — once a tile breaks, it’s gone for good!\n\nUse your Death Fist weapon to knock opponents away and clear your path to victory. The arena is chaotic, the floor keeps falling, and only the most skilled players will survive.\n\nCan you stay on your feet and be the last player standing in the arena? 🌪️🔥", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/ff/2.webp" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "Falling Floor", src: "/games/Screenshot/ff/1.webp" },
      { alt: "Falling Floor", src: "/games/Screenshot/ff/2.webp" },
      { alt: "Falling Floor", src: "/games/Screenshot/ff/4.webp" },
      { alt: "Falling Floor", src: "/games/Screenshot/ff/5.webp" },
      { alt: "Falling Floor", src: "/games/Screenshot/ff/6.webp" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [{ alt: "Tazkan Games", src: "/tazkan.png" }], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "1 Months",
  }, // Falling Fkoor
  {
    slug: "slice",
    iconGame: "/games/Icons/ms.png", // icongame -> iconGame
    nameGame: "Mr Slice 3D", // namegame -> nameGame
    titleImgs: [], // titleimg -> titleImgs
    videoUrl: "", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/ms.png",
      },
    ],
    playStoreUrl: "", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "", // robloxstore -> robloxStoreUrl
    descStory:
      "Step into the action in Dash & Slice Fruit 3D, an exciting and fast-paced samurai adventure! You are the last samurai, and your mission is to dash through obstacles and slice every fruit that comes your way. Move with speed, precision, and style as you prove your mastery of the blade. Can you slice them all and become the ultimate fruit warrior? 🍉⚔️", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/ms/4.jpg" },
    ],
    descGameplay:
      "In Dash & Slice Fruit 3D, swipe to move, dodge obstacles, and slash fruits in your path. Time your moves perfectly to perform smooth combos and earn high scores.\n\nEach level brings faster action, more obstacles, and a greater challenge — only true samurai reflexes can survive!\n\nTest your focus, speed, and precision.\nSlash them all and show the world you are the last samurai! 🥭🔥", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/ms/2.jpg" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "MR SLICE 3D", src: "/games/Screenshot/ms/1.jpg" },
      { alt: "MR SLICE 3D", src: "/games/Screenshot/ms/2.jpg" },
      { alt: "MR SLICE 3D", src: "/games/Screenshot/ms/4.jpg" },
      { alt: "MR SLICE 3D", src: "/games/Screenshot/ms/5.jpg" },
      { alt: "MR SLICE 3D", src: "/games/Screenshot/ms/6.jpg" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [{ alt: "Tazkan Games", src: "/tazkan.png" }], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "1 Months",
  }, // MR SLICE 3D
  {
    slug: "flex-fight",
    iconGame: "/games/Icons/flexf.webp", // icongame -> iconGame
    nameGame: "Flex Fight", // namegame -> nameGame
    titleImgs: [], // titleimg -> titleImgs
    videoUrl: "https://www.youtube.com/embed/qKyonCxUu8k", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "source",
        src: "/games/Header/flexf.png",
      },
    ],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.TrimatraStudio.FlexFight", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "", // robloxstore -> robloxStoreUrl
    descStory:
      "The great body battle has begun! Eat food in the arena to grow bigger and stronger. Use your size to lift and throw your enemies out of the ring. Stay alert — they can do the same to you! Be the last one standing to win the match!", // descstory -> descStory
    storyImgs: [
      // imgstory -> storyImgs
      { alt: "source", src: "/games/Screenshot/flexf/4.png" },
    ],
    descGameplay:
      "Eat to Grow: Move around the arena and consume food to increase your body size and power.\nBattle Enemies: Use your strength to lift and throw opponents out of the ring.\nDefend Yourself: When caught, tap the screen rapidly to escape from your enemy’s grip before it’s too late!\nSurvive and Win: Stay in the ring, outsmart your rivals, and be the last one standing to win the match!\nColorful Arenas: Enjoy vibrant visuals and exciting battles in the Rainbow Blue Origin arena.", // descgameplay -> descGameplay
    gameplayImgs: [
      // imggameplay -> gameplayImgs
      { alt: "source", src: "/games/Screenshot/flexf/2.png" },
    ],
    Title: "",
    character: [
      {
        nameChar: "", // namechar -> nameChar
        alt: "",
        src: "",
        descChar: "", // descchar -> descChar
      },
    ],
    screenshots: [
      // screenshot -> screenshots
      { alt: "Flex Fight", src: "/games/Screenshot/flexf/1.png" },
      { alt: "Flex Fight", src: "/games/Screenshot/flexf/2.png" },
      { alt: "Flex Fight", src: "/games/Screenshot/flexf/4.png" },
      { alt: "Flex Fight", src: "/games/Screenshot/flexf/5.png" },
      { alt: "Flex Fight", src: "/games/Screenshot/flexf/6.png" },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [{ alt: "Tazkan Games", src: "/tazkan.png" }], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "1 Months",
  }, //flex fight
  {
    slug: "partyclub",
    iconGame: "/portfolio/IconSalon512.png", // icongame -> iconGame
    nameGame: "Project Party Club", // namegame -> nameGame
    titleImgs: [], // titleimg -> titleImgs
    videoUrl: "https://www.youtube.com/embed/oY4AsCYNNyE?si=2EYHP7TLHTgK9lmj", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "Project Party Club",
        src: "/portfolio/ThumbnailSalon.png",
      },
    ],
    playStoreUrl: "", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "https://www.roblox.com/games/81688725739094/", // robloxstore -> robloxStoreUrl
    descStory:
      "is an open-air festival map featuring vibrant neon lights, a futuristic DJ booth, and a large main stage under the night sky. The entire area is filled with festival decorations like hanging lights, glowing bars, cozy outdoor lounges, and a wide dance floor. The atmosphere is energetic, modern, and perfect for players to chill and party together.", // descstory -> descStory
    storyImgs: [
      {
        alt: "Project Party Club",
        src: "/games/Screenshot/PParty/PParty2.png",
      },
    ],
    descGameplay:
      "🕺Dance & Expression System: Players can choose from a variety of dance moves and expressions to show off their style on the dance floor & Synchronized Dance.\n 🗺️ Explore Outdoor Map : Aesthetic neon photo spots let players take cool avatar snapshots with a stylish night backdrop. \n 😎 Social Hangout: Comfortable lounge areas let players chat, sit, and interact freely without the loud crowd. ", // descgameplay -> descGameplay
    gameplayImgs: [
      {
        alt: "Project Party Club",
        src: "/games/Screenshot/PParty/PParty7.png",
      },
    ],
    Title: "",
    character: [],
    screenshots: [
      // screenshot -> screenshots
      {
        alt: "Project Party Club",
        src: "/games/Screenshot/PParty/PParty1.png",
      },
      {
        alt: "Project Party Club",
        src: "/games/Screenshot/PParty/PParty2.png",
      },
      {
        alt: "Project Party Club",
        src: "/games/Screenshot/PParty/PParty3.png",
      },
      {
        alt: "Project Party Club",
        src: "/games/Screenshot/PParty/PParty4.png",
      },
      {
        alt: "Project Party Club",
        src: "/games/Screenshot/PParty/PParty5.png",
      },
      {
        alt: "Project Party Club",
        src: "/games/Screenshot/PParty/PParty6.png",
      },
      {
        alt: "Project Party Club",
        src: "/games/Screenshot/PParty/PParty7.png",
      },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "3 Mount",
  }, // Salon De Fiestas
  {
    slug: "fighter-rbx",
    iconGame: "/portfolio/IconFight.png", // icongame -> iconGame
    nameGame: "Fighter", // namegame -> nameGame
    titleImgs: [], // titleimg -> titleImgs
    videoUrl: "https://www.youtube.com/embed/re1MKHMgwBo?si=Nk-CArd-2Qndx3qs", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "Fighters",
        src: "/portfolio/ThumbnailFight.png",
      },
    ],
    playStoreUrl: "", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "https://www.roblox.com/games/92980025166786", // robloxstore -> robloxStoreUrl
    descStory:
      "Masuki sebuah kota kecil yang tampak tenang di siang hari, namun berubah menjadi arena pertarungan bebas di malam hari. Urban Clash: Rooftop Duel adalah game duel fighting bertempo cepat yang membawa pemain ke lingkungan perkotaan sempit dengan banyak titik strategis.", // descstory -> descStory
    storyImgs: [
      {
        alt: "Fighters",
        src: "/games/Screenshot/figherrbx/PFighter8.png",
      },
    ],
    descGameplay:
      "🥊1v1 Duel atau Free-for-All — Tantang pemain lain dalam pertarungan tangan kosong atau pakai senjata ringan.\n 🔥 Skill & Power-Ups — Temukan buff sementara, seperti speed boost, damage boost, atau shield.\n 🏢Arena Perkotaan — Gang sempit, jalan kecil, dan sudut-sudut kota menjadi tempat duel yang tak terduga.", // descgameplay -> descGameplay
    gameplayImgs: [
      {
        alt: "Fighters",
        src: "/games/Screenshot/figherrbx/PFighter3.png",
      },
    ],
    Title: "",
    character: [],
    screenshots: [
      // screenshot -> screenshots
      {
        src: "/games/Screenshot/figherrbx/PFighter1.png",
        alt: "Fighters",
      },
      {
        src: "/games/Screenshot/figherrbx/PFighter2.png",
        alt: "Fighters",
      },
      {
        src: "/games/Screenshot/figherrbx/PFighter3.png",
        alt: "Fighters",
      },
      {
        src: "/games/Screenshot/figherrbx/PFighter4.png",
        alt: "Fighters",
      },
      {
        src: "/games/Screenshot/figherrbx/PFighter5.png",
        alt: "Fighters",
      },
      {
        src: "/games/Screenshot/figherrbx/PFighter6.png",
        alt: "Fighters",
      },
      {
        src: "/games/Screenshot/figherrbx/PFighter7.png",
        alt: "Fighters",
      },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "3 Mount",
  }, // Figters Roblox
  {
    slug: "pals-garden",
    iconGame: "", // icongame -> iconGame
    nameGame: "Pal's Garden", // namegame -> nameGame
    titleImgs: [], // titleimg -> titleImgs
    videoUrl: "", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "Pals Garden",
        src: "/games/Screenshot/palgarden/PalsGraden3.png",
      },
    ],
    playStoreUrl: "", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "https://www.roblox.com/games/99663778584132", // robloxstore -> robloxStoreUrl
    descStory:
      "Selamat datang di Pals Garden, dunia berkebun yang hangat dan penuh warna di mana kamu bisa menanam, merawat, dan mengoleksi tanaman bersama teman-teman! Di game ini, setiap pemain membangun kebunnya sendiri sambil mengeksplorasi area baru dan menemukan tanaman unik.\n\n Mulai dari bibit kecil hingga tanaman langka, semua tumbuh subur jika kamu merawatnya dengan baik. Kamu juga bisa mengadopsi Garden Pals—makhluk kecil lucu yang membantu merawat tamanmu dan memberikan bonus khusus!", // descstory -> descStory
    storyImgs: [
      {
        alt: "Pals Garden",
        src: "/games/Screenshot/palgarden/PalsGraden2.png",
      },
    ],
    descGameplay:
      "🌱 Tanam & Rawat Tanaman : Pilih bibit, tanam di plot kebunmu, siram, pupuk, dan lihat tumbuhnya!\n🌼 Koleksi Tanaman Langka : Kumpulkan ratusan tanaman unik—bunga, tanaman tropis, kaktus, jamur ajaib, hingga tanaman fantasi.\n🧿 Garden Pals (Teman Kebun): Makhluk kecil yang bisa membantu mempercepat pertumbuhan, mencari bibit langka, atau menjaga tanamanmu.\n🌍 Eksplorasi Bioma : Jelajahi hutan, pantai, gunung, gua jamur, hingga taman sakura untuk menemukan tanaman baru.\n🧪 Hybrid System : Gabungkan dua tanaman untuk membuat varietas baru yang lebih cantik dan bernilai.\n🏡 Decor & Upgrade: Hias kebunmu dengan pagar, jalan setapak, kolam mini, lampu, dan dekorasi cozy lainnya.\n🤝 Co-Op Mode: Kunjungi kebun pemain lain, bantu menyiram tanaman mereka, dan dapatkan hadiah.\n💰 Trading & Market : Perdagangan tanaman dan bibit langka dengan pemain lain.", // descgameplay -> descGameplay
    gameplayImgs: [
      {
        alt: "Pals Garden",
        src: "/games/Screenshot/palgarden/PalsGraden1.png",
      },
    ],
    Title: "",
    character: [],
    screenshots: [
      // screenshot -> screenshots
      {
        src: "/games/Screenshot/palgarden/PalsGraden1.png",
        alt: "Pals Garden",
      },
      {
        src: "/games/Screenshot/palgarden/PalsGraden2.png",
        alt: "Pals Garden",
      },
      {
        src: "/games/Screenshot/palgarden/PalsGraden3.png",
        alt: "Pals Garden",
      },
      {
        src: "/games/Screenshot/palgarden/PalsGraden4.png",
        alt: "Pals Garden",
      },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "2 Mount",
  }, // Pals Garden
  {
    slug: "speedlimitsim",
    iconGame: "/portfolio/SpeedLimit/IconSLS.png", // icongame -> iconGame
    nameGame: "Speed Limit Simulator", // namegame -> nameGame
    titleImgs: [], // titleimg -> titleImgs
    videoUrl: "https://www.youtube.com/embed/ItAIUjFhTBQ?si=8MZlHzLXlFX2smXP", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "Speed Limit Simulator",
        src: "/portfolio/SpeedLimit/SLSThumbnail.png",
      },
    ],
    playStoreUrl: "", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "https://www.roblox.com/games/126540984936932", // robloxstore -> robloxStoreUrl
    descStory:
      "🏎️ Speed Limit Simulator: GET FLASHED! 📸\n\nWelcome to the wildest racing game on Roblox!\n\nStart with a slow car, train up, and turn into a supersonic beast! 🚀",
    storyImgs: [
      {
        alt: "Speed Limit Simulator",
        src: "/portfolio/SpeedLimit/Screenshot_1.png",
      },
    ],
    descGameplay:
      "💥 Break the Limit: Drive so fast the Police Radars BLOW UP!\n🚓 Don't get Caught: A cop car is right behind you... keep moving!\n🐶 Pet System: Hatch eggs to get multipliers!\n🎨Customize: Cool skins, neon trails, and wild auras!", // descgameplay -> descGameplay
    gameplayImgs: [
      {
        alt: "Speed Limit Simulator",
        src: "/portfolio/SpeedLimit/Screenshot_2.png",
      },
    ],
    Title: "",
    character: [],
    screenshots: [
      // screenshot -> screenshots
      {
        src: "/portfolio/SpeedLimit/Screenshot_1.png",
        alt: "Pals Garden",
      },
      {
        src: "/portfolio/SpeedLimit/Screenshot_2.png",
        alt: "Pals Garden",
      },
      {
        src: "/portfolio/SpeedLimit/Screenshot_3.png",
        alt: "Pals Garden",
      },
      {
        src: "/portfolio/SpeedLimit/Screenshot_4.png",
        alt: "Pals Garden",
      },
      {
        src: "/portfolio/SpeedLimit/Screenshot_5.png",
        alt: "Pals Garden",
      },
      {
        src: "/portfolio/SpeedLimit/Screenshot_6.png",
        alt: "Pals Garden",
      },

      {
        src: "/portfolio/SpeedLimit/Zone1.png",
        alt: "Speed Limit Simulator",
      },
      {
        src: "/portfolio/SpeedLimit/Zone2.png",
        alt: "Speed Limit Simulator",
      },
      {
        src: "/portfolio/SpeedLimit/Zone3.png",
        alt: "Speed Limit Simulator",
      },
      {
        src: "/portfolio/SpeedLimit/Zone4.png",
        alt: "Speed Limit Simulator",
      },
      {
        src: "/portfolio/SpeedLimit/Zone5.png",
        alt: "Speed Limit Simulator",
      },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "2 Mount",
  }, // Speed Limit Sim
  {
    slug: "tesate-anomali",
    iconGame: "/portfolio/TeSate/Icon512.png", // icongame -> iconGame
    nameGame: "Te Sate Anomali", // namegame -> nameGame
    titleImgs: [{ alt: "Te Sate Anomali", src: "/portfolio/TeSate/Title.png" }], // titleimg -> titleImgs
    videoUrl: "", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "Te Sate Anomali",
        src: "/portfolio/TeSate/Thumbnail1024.png",
      },
    ],
    playStoreUrl: "", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "https://www.roblox.com/games/11641066988168", // robloxstore -> robloxStoreUrl
    descStory:
      "Sate Anomali is a game about a satay seller who is placed on a quiet and haunted street with strange, mysterious buyers and ghosts.", // descstory -> descStory
    storyImgs: [
      {
        alt: "Te Sate Anomali",
        src: "/portfolio/TeSate/Screenshot_3.png",
      },
    ],
    descGameplay:
      "Keep selling satay until the target is met. Don't let the anomalies bother you.", // descgameplay -> descGameplay
    gameplayImgs: [
      {
        alt: "Te Sate Anomali",
        src: "/portfolio/TeSate/Screenshot_1.png",
      },
    ],
    Title: "",
    character: [],
    screenshots: [
      // screenshot -> screenshots
      {
        src: "/portfolio/TeSate/Screenshot_1.png",
        alt: "Te Sate Anomali",
      },
      {
        src: "/portfolio/TeSate/Screenshot_2.png",
        alt: "Te Sate Anomali",
      },
      {
        src: "/portfolio/TeSate/Screenshot_3.png",
        alt: "Te Sate Anomali",
      },
      {
        src: "/portfolio/TeSate/Screenshot_4.png",
        alt: "Te Sate Anomali",
      },
      {
        src: "/portfolio/TeSate/Screenshot_5.png",
        alt: "Te Sate Anomali",
      },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "2 Mount",
  }, // Te Sate Anomali
  {
    slug: "mancing-mania",
    iconGame: "/portfolio/mancing/IconMancing512.png", // icongame -> iconGame
    nameGame: "Mancing Mania", // namegame -> nameGame
    titleImgs: [], // titleimg -> titleImgs
    videoUrl: "https://www.youtube.com/embed/euGNunFB4PM?si=EWODzNRq-hQGlKvB", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "Mancing Mania",
        src: "/portfolio/mancing/ThumbnailMancing.png",
      },
    ],
    playStoreUrl: "", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "https://www.roblox.com/games/104683666584105", // robloxstore -> robloxStoreUrl
    descStory:
      "Sate Anomali is a game about a satay seller who is placed on a quiet and haunted street with strange, mysterious buyers and ghosts.", // descstory -> descStory
    storyImgs: [
      {
        alt: "Mancing Mania",
        src: "/portfolio/mancing/Screenshot_3.png",
      },
    ],
    descGameplay:
      "Keep selling satay until the target is met. Don't let the anomalies bother you.", // descgameplay -> descGameplay
    gameplayImgs: [
      {
        alt: "Mancing Mania",
        src: "/portfolio/mancing/Screenshot_1.png",
      },
    ],
    Title: "",
    character: [],
    screenshots: [
      // screenshot -> screenshots
      {
        src: "/portfolio/mancing/Screenshot_1.png",
        alt: "Mancing Mania",
      },
      {
        src: "/portfolio/mancing/Screenshot_2.png",
        alt: "Mancing Mania",
      },
      {
        src: "/portfolio/mancing/Screenshot_3.png",
        alt: "Mancing Mania",
      },
      {
        src: "/portfolio/mancing/Screenshot_4.png",
        alt: "Mancing Mania",
      },
      {
        src: "/portfolio/mancing/Screenshot_5.png",
        alt: "Mancing Mania",
      },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "2 Mount",
  }, // Mancing Mania
  {
    slug: "bungee-jump",
    iconGame: "/portfolio/BungeeJump/BungeeIcon.png", // icongame -> iconGame
    nameGame: "Bungee Jump", // namegame -> nameGame
    titleImgs: [], // titleimg -> titleImgs
    videoUrl: "https://www.youtube.com/embed/CaGDQ8TiJRc?si=fwGhDsHe2bHJOphO", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "Bungee Jump",
        src: "/portfolio/BungeeJump/BungeeBanner.png",
      },
    ],
    playStoreUrl: "", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "https://www.roblox.com/games/90812038071748", // robloxstore -> robloxStoreUrl
    descStory:
      "🧠 Dive, Grab, Get Rich! 🪢💸\n🕹️ How to Play\n🎯 Leap from the edge and aim for the rarest brainrots on the lower platforms!\n🧺 Collect as many as you can before your bungee cord pulls you back up.\n🚀 Upgrade everything to reach deeper levels and unlock the ultimate brainrot collection!", // descstory -> descStory
    storyImgs: [
      {
        alt: "Bungee Jump",
        src: "/portfolio/BungeeJump/BungeeJump1.png",
      },
    ],
    descGameplay:
      "✨ Level Up Your Gameplay\n📏 Longer Ropes: Reach the deepest, most legendary platforms!\n⚡ Hyper Speed: Dive and bounce back faster to grind even more money.\n🎒 Max Capacity: Carry a mountain of brainrot in a single jump.\n🏰 Base Upgrades: Build the ultimate headquarters to boost your earnings!\n🌈 Collect special mutated brainrots for massive multipliers!", // descgameplay -> descGameplay
    gameplayImgs: [
      {
        alt: "Bungee Jump",
        src: "/portfolio/BungeeJump/BungeeJump2.png",
      },
    ],
    Title: "",
    character: [],
    screenshots: [
      // screenshot -> screenshots
      {
        src: "/portfolio/BungeeJump/BungeeJump1.png",
        alt: "Bungee Jump",
      },
      {
        src: "/portfolio/BungeeJump/BungeeJump2.png",
        alt: "Bungee Jump",
      },
      {
        src: "/portfolio/BungeeJump/BungeeJump3.png",
        alt: "Bungee Jump",
      },
      {
        src: "/portfolio/BungeeJump/BungeeJump4.png",
        alt: "Bungee Jump",
      },
      {
        src: "/portfolio/BungeeJump/BungeeJump5.png",
        alt: "Bungee Jump",
      },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [
      {
        alt: "RIVRS",
        src: "/rivrs.png",
      },
    ], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "1 Month",
  }, // Bungee Jump
  {
    slug: "smash-tape",
    iconGame: "/portfolio/BungeeJump/BungeeIcon.png", // icongame -> iconGame
    nameGame: "Bungee Jump", // namegame -> nameGame
    titleImgs: [], // titleimg -> titleImgs
    videoUrl: "https://www.youtube.com/embed/CaGDQ8TiJRc?si=fwGhDsHe2bHJOphO", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "Bungee Jump",
        src: "/portfolio/BungeeJump/BungeeBanner.png",
      },
    ],
    playStoreUrl: "", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl: "https://www.roblox.com/games/90812038071748", // robloxstore -> robloxStoreUrl
    descStory:
      "🧠 Dive, Grab, Get Rich! 🪢💸\n🕹️ How to Play\n🎯 Leap from the edge and aim for the rarest brainrots on the lower platforms!\n🧺 Collect as many as you can before your bungee cord pulls you back up.\n🚀 Upgrade everything to reach deeper levels and unlock the ultimate brainrot collection!", // descstory -> descStory
    storyImgs: [
      {
        alt: "Bungee Jump",
        src: "/portfolio/BungeeJump/BungeeJump1.png",
      },
    ],
    descGameplay:
      "✨ Level Up Your Gameplay\n📏 Longer Ropes: Reach the deepest, most legendary platforms!\n⚡ Hyper Speed: Dive and bounce back faster to grind even more money.\n🎒 Max Capacity: Carry a mountain of brainrot in a single jump.\n🏰 Base Upgrades: Build the ultimate headquarters to boost your earnings!\n🌈 Collect special mutated brainrots for massive multipliers!", // descgameplay -> descGameplay
    gameplayImgs: [
      {
        alt: "Bungee Jump",
        src: "/portfolio/BungeeJump/BungeeJump2.png",
      },
    ],
    Title: "",
    character: [],
    screenshots: [
      // screenshot -> screenshots
      {
        src: "/portfolio/BungeeJump/BungeeJump1.png",
        alt: "Bungee Jump",
      },
      {
        src: "/portfolio/BungeeJump/BungeeJump2.png",
        alt: "Bungee Jump",
      },
      {
        src: "/portfolio/BungeeJump/BungeeJump3.png",
        alt: "Bungee Jump",
      },
      {
        src: "/portfolio/BungeeJump/BungeeJump4.png",
        alt: "Bungee Jump",
      },
      {
        src: "/portfolio/BungeeJump/BungeeJump5.png",
        alt: "Bungee Jump",
      },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [
      {
        alt: "RIVRS",
        src: "/rivrs.png",
      },
    ], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "1 Month",
  }, // Smash Tape

  //Non Public Projects

  {
    slug: "adminpanel-roblox",
    iconGame: "", // icongame -> iconGame
    nameGame: "Admin Panel Roblox", // namegame -> nameGame
    titleImgs: [], // titleimg -> titleImgs
    videoUrl: "", // Video -> videoUrl
    headerImgs: [
      // headerimg -> headerImgs
      {
        alt: "Te Sate Anomali",
        src: "/games/Screenshot/tesateanomaly/TeSateAnomaly3.png",
      },
    ],
    playStoreUrl: "", // pstore -> playStoreUrl
    appStoreUrl: "",
    presskitUrl: "", // presskit -> presskitUrl
    steamStoreUrl: "", // steamstore -> steamStoreUrl
    robloxStoreUrl:
      "https://www.roblox.com/share?code=8e9407cd447716468874e60c50fbeed6&type=ExperienceDetails&stamp=1768972689018", // robloxstore -> robloxStoreUrl
    descStory:
      "Selamat datang di Pals Garden, dunia berkebun yang hangat dan penuh warna di mana kamu bisa menanam, merawat, dan mengoleksi tanaman bersama teman-teman! Di game ini, setiap pemain membangun kebunnya sendiri sambil mengeksplorasi area baru dan menemukan tanaman unik.\n\n Mulai dari bibit kecil hingga tanaman langka, semua tumbuh subur jika kamu merawatnya dengan baik. Kamu juga bisa mengadopsi Garden Pals—makhluk kecil lucu yang membantu merawat tamanmu dan memberikan bonus khusus!", // descstory -> descStory
    storyImgs: [
      {
        alt: "Pals Garden",
        src: "/games/Screenshot/palgarden/PalsGraden2.png",
      },
    ],
    descGameplay:
      "🌱 Tanam & Rawat Tanaman : Pilih bibit, tanam di plot kebunmu, siram, pupuk, dan lihat tumbuhnya!\n🌼 Koleksi Tanaman Langka : Kumpulkan ratusan tanaman unik—bunga, tanaman tropis, kaktus, jamur ajaib, hingga tanaman fantasi.\n🧿 Garden Pals (Teman Kebun): Makhluk kecil yang bisa membantu mempercepat pertumbuhan, mencari bibit langka, atau menjaga tanamanmu.\n🌍 Eksplorasi Bioma : Jelajahi hutan, pantai, gunung, gua jamur, hingga taman sakura untuk menemukan tanaman baru.\n🧪 Hybrid System : Gabungkan dua tanaman untuk membuat varietas baru yang lebih cantik dan bernilai.\n🏡 Decor & Upgrade: Hias kebunmu dengan pagar, jalan setapak, kolam mini, lampu, dan dekorasi cozy lainnya.\n🤝 Co-Op Mode: Kunjungi kebun pemain lain, bantu menyiram tanaman mereka, dan dapatkan hadiah.\n💰 Trading & Market : Perdagangan tanaman dan bibit langka dengan pemain lain.", // descgameplay -> descGameplay
    gameplayImgs: [
      {
        alt: "Pals Garden",
        src: "/games/Screenshot/palgarden/PalsGraden1.png",
      },
    ],
    Title: "",
    character: [],
    screenshots: [
      // screenshot -> screenshots
      {
        src: "/games/Screenshot/palgarden/PalsGraden1.png",
        alt: "Pals Garden",
      },
      {
        src: "/games/Screenshot/palgarden/PalsGraden2.png",
        alt: "Pals Garden",
      },
      {
        src: "/games/Screenshot/palgarden/PalsGraden3.png",
        alt: "Pals Garden",
      },
      {
        src: "/games/Screenshot/palgarden/PalsGraden4.png",
        alt: "Pals Garden",
      },
    ],
    // *** PERBAIKAN DI SINI: Array kosong untuk game tanpa partner ***
    partnership: [], // Ini akan memicu "Developed By" dan logo sendiri
    estimatedTime: "2 Mount",
  }, // Admin
];
