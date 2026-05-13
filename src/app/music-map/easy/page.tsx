import MissionLayout, { Vocabulary, LyricLine, Game } from "@/components/MissionLayout";

const makefriendsVocab: Vocabulary[] = [
  { word: "Make", meaning: "(Verb) Membuat / Menjalin", pronunciation: "meik" },
  { word: "Friends", meaning: "(Noun) Teman-teman", pronunciation: "frends" },
  { word: "Way", meaning: "(Noun) Cara / Jalan", pronunciation: "wei" },
  { word: "Together", meaning: "(Adverb) Bersama-sama", pronunciation: "tu-ge-der" },
  { word: "Play", meaning: "(Verb) Bermain", pronunciation: "plei" },
  { word: "Share", meaning: "(Verb) Berbagi / Meminjamkan", pronunciation: "syer" },
  { word: "Take turns", meaning: "(Phrase) Bergiliran / Gantian", pronunciation: "teik terns" },
  { word: "Say", meaning: "(Verb) Mengucapkan / Berkata", pronunciation: "sei" },
  { word: "Hello", meaning: "(Phrase) Halo", pronunciation: "he-lou" },
  { word: "Goodbye", meaning: "(Phrase) Selamat Tinggal", pronunciation: "gud-bai" },
  { word: "Toys", meaning: "(Noun) Mainan", pronunciation: "tois" },
  { word: "Sing", meaning: "(Verb) Menyanyi", pronunciation: "sing" },
  { word: "Song", meaning: "(Noun) Lagu", pronunciation: "song" },
  { word: "We", meaning: "(Pronoun) Kita / Kami", pronunciation: "wi" },
  { word: "Our", meaning: "(Determiner) Milik kita / Milik kami", pronunciation: "a-wer" },
];

const makefriendscLyrics: LyricLine[] = [
  { english: "This is the way we say, \"Hello,\"", translation: "Beginilah cara kita bilang, \"Halo,\"" },
  { english: "say, \"Hello,\" say, \"Hello.\"", translation: "bilang, \"Halo,\" bilang, \"Halo.\"" },
  { english: "This is the way we say, \"Hello.\"", translation: "Beginilah cara kita bilang, \"Halo.\"" },
  { english: "Let's be friends.", translation: "Ayo berteman." },

  { english: "This is the way we share our toys,", translation: "Beginilah cara kita berbagi mainan," },
  { english: "share our toys, share our toys.", translation: "berbagi mainan, berbagi mainan." },
  { english: "This is the way we share our toys.", translation: "Beginilah cara kita berbagi mainan." },
  { english: "Let's be friends.", translation: "Ayo berteman." },

  { english: "This is the way we take turns,", translation: "Beginilah cara kita bergiliran," },
  { english: "take turns, take turns.", translation: "bergiliran, bergiliran." },
  { english: "This is the way we take turns.", translation: "Beginilah cara kita bergiliran." },
  { english: "Let's be friends.", translation: "Ayo berteman." },

  { english: "This is the way we play a game,", translation: "Beginilah cara kita bermain," },
  { english: "play a game, play a game.", translation: "bermain, bermain." },
  { english: "This is the way we play a game.", translation: "Beginilah cara kita bermain." },
  { english: "Let's be friends.", translation: "Ayo berteman." },

  { english: "This is the way we sing a song,", translation: "Beginilah cara kita bernyanyi," },
  { english: "sing a song, sing a song.", translation: "bernyanyi, bernyanyi." },
  { english: "This is the way we sing a song.", translation: "Beginilah cara kita bernyanyi." },
  { english: "Let's be friends.", translation: "Ayo berteman." },

  { english: "This is the way we say, \"Goodbye,\"", translation: "Beginilah cara kita bilang, \"Sampai jumpa,\"" },
  { english: "say, \"Goodbye,\" say, \"Goodbye.\"", translation: "bilang, \"Sampai jumpa,\" bilang, \"Sampai jumpa.\"" },
  { english: "This is the way we say, \"Goodbye.\"", translation: "Beginilah cara kita bilang, \"Sampai jumpa.\"" },
  { english: "Let's be friends.", translation: "Ayo berteman." },
];

const makefriendsGames: Game[] = [
  {
    title: "Game Find a Match",
    instruction: "Find the correct answer for each question. Match them quickly to win! (Temukan jawaban yang tepat untuk setiap pertanyaan. Pasangkan dengan cepat untuk menang!)",
    embedUrl: "https://wordwall.net/embed/play/110988/497/750"
  },
  {
    title: "Game Quiz Flying Fruit",
    instruction: "Smash the correct flying fruit to answer the question! Be careful with the wrong ones. (Hancurkan buah terbang yang benar untuk menjawab pertanyaan! Berhati-hatilah dengan buah yang salah.)",
    embedUrl: "https://wordwall.net/embed/play/110994/146/127"
  },
  {
    title: "Game SHINING Road",
    instruction: "Drive your car to the correct answer! Avoid the wrong answers to keep your car safe. (Arahkan mobilmu ke jawaban yang benar! Hindari jawaban yang salah agar mobilmu tetap aman.)",
    embedUrl: "https://wordwall.net/embed/play/111117/320/738"
  }
];

export default function EasyMission() {
  return (
    <MissionLayout
      level="Easy"
      songTitle="This Is The Way We Make Friends"
      youtubeId="AT8qLCmseuE"
      vocabulary={makefriendsVocab}
      quizEmbedUrl="https://wayground.com/join?gc=935481"
      lyrics={makefriendscLyrics}
      games={makefriendsGames}
      nextLevel="Medium"
      nextLevelHref="/music-map/medium"
      nextSongTitle="Count On Me"
    />
  );
}
