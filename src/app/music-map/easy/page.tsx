import MissionLayout, { Vocabulary, LyricLine, Game } from "@/components/MissionLayout";

const makefriendsVocab: Vocabulary[] = [
  { word: "Make friends", meaning: "Berteman / Membuat teman", pronunciation: "meik frendz (/meɪk frendz/)" },
  { word: "Say hello", meaning: "Mengucapkan salam / Menyapa", pronunciation: "sei he-low (/seɪ həˈloʊ/)" },
  { word: "Share", meaning: "Berbagi", pronunciation: "syer (/ʃer/)" },
  { word: "Toys", meaning: "Mainan", pronunciation: "toyz (/tɔɪz/)" },
  { word: "Take turns", meaning: "Bergantian / Bergiliran", pronunciation: "teik ternz (/teɪk tɜːrnz/)" },
  { word: "Play", meaning: "Bermain", pronunciation: "plei (/pleɪ/)" },
  { word: "Game", meaning: "Permainan", pronunciation: "geim (/ɡeɪm/)" },
  { word: "Sing", meaning: "Menyanyi", pronunciation: "sing (/sɪŋ/)" },
  { word: "Together", meaning: "Bersama-sama", pronunciation: "tu-ge-ther (/təˈɡeð.ər/)" },
  { word: "Say goodbye", meaning: "Mengucapkan selamat tinggal / Pamit", pronunciation: "sei gud-bai (/seɪ ɡʊdˈbaɪ/)" },
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
    title: "Find a Match",
    instruction: "Match the action to the correct situation! (Cocokkan setiap tindakan dengan situasi yang tepat!)",
    embedUrl: "https://wordwall.net/embed/play/110988/497/683"
  },
  {
    title: "Quiz Flying Fruit",
    instruction: "Listen to the audio carefully, then choose the best answer to understand the meaning! (Dengarkan audio dengan seksama, lalu pilih jawaban terbaik untuk memahami artinya!)",
    embedUrl: "https://wordwall.net/embed/play/110994/146/157"
  },
  {
    title: "Game SHINING Flight",
    instruction: "Run through the maze to find the right answer! Avoid the traps and choose the action based on the song! (Berlari melalui labirin untuk menemukan jawaban yang benar! Hindari jebakan dan pilih tindakan berdasarkan lagu!)",
    embedUrl: "https://wordwall.net/embed/play/111000/840/568"
  }
];

export default function EasyMission() {
  return (
    <MissionLayout
      level="Easy"
      songTitle="This Is The Way We Make Friends"
      youtubeId="AT8qLCmseuE"
      vocabulary={makefriendsVocab}
      quizEmbedUrl="https://wayground.com/join?gc=55333377&source=liveDashboard"
      lyrics={makefriendscLyrics}
      games={makefriendsGames}
      nextLevel="Medium"
      nextLevelHref="/music-map/medium"
      nextSongTitle="You'll Be In My Heart"
    />
  );
}
