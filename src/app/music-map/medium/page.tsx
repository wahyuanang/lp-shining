import MissionLayout, { Vocabulary, LyricLine, Game } from "@/components/MissionLayout";

const mediumVocab: Vocabulary[] = [
  { word: "Lost", meaning: "Tersesat / Hilang", pronunciation: "lost (/lɔːst/)" },
  { word: "Middle", meaning: "Tengah", pronunciation: "mi-dl (/ˈmɪd.əl/)" },
  { word: "Sea", meaning: "Laut", pronunciation: "sii (/siː/)" },
  { word: "Made of", meaning: "Terdiri dari / Terbuat dari (Dalam lagu ini bermakna: Karakter asli / Ketangguhan kita)", pronunciation: "meid of (/meɪd ʌv/)" },
  { word: "In need", meaning: "Dalam kesulitan / Membutuhkan bantuan", pronunciation: "in niid (/ɪn niːd/)" },
  { word: "Cry on", meaning: "Menangis (bersandar)", pronunciation: "krai on (/kraɪ ɒn/)" },
  { word: "Let go", meaning: "Melepaskan", pronunciation: "let gou (/let ɡoʊ/)" },
  { word: "Fall asleep", meaning: "Tertidur", pronunciation: "fol e-slip (/fɔːl əˈsliːp/)" },
];

const mediumLyrics: LyricLine[] = [
  { english: "If you ever find yourself stuck in the middle of the sea", translation: "Jika kau terombang-ambing di tengah lautan" },
  { english: "I'll sail the world to find you", translation: "Kan kulayari seluruh lautan 'tuk temukanmu" },
  { english: "If you ever find yourself lost in the dark and you can't see", translation: "Jika kau tersesat dalam gelap dan kau tak bisa melihat" },
  { english: "I'll be the light to guide you", translation: "Aku akan menjadi cahaya yang membimbingmu" },
  { english: "Find out what we're made of", translation: "Temukan diri kita yang sebenarnya" },
  { english: "When we are called to help our friends in need", translation: "Saat kita terpanggil untuk membantu teman yang membutuhkan" },
  { english: "You can count on me like one, two, three", translation: "Kau bisa mengandalkanku seperti satu, dua, tiga" },
  { english: "I'll be there", translation: "Aku akan datang" },
  { english: "And I know when I need it, I can count on you like four, three, two", translation: "Dan aku tahu saat aku membutuhkannya, aku bisa mengandalkanmu seperti empat, tiga, dua" },
  { english: "And you'll be there", translation: "Dan kau akan datang" },
  { english: "'Cause that's what friends are supposed to do, oh, yeah", translation: "Karena begitulah seharusnya teman, oh, yeah" },
  { english: "Ooh-ooh-ooh-ooh-ooh, ooh-ooh-ooh-ooh, ooh, yeah, yeah", translation: "Ooh-ooh-ooh-ooh-ooh, ooh-ooh-ooh-ooh, ooh, yeah, yeah" },

  { english: "If you're tossin' and you're turnin' and you just can't fall asleep", translation: "Jika kau sedang resah dan gelisah dan kau tak bisa tidur" },
  { english: "I'll sing a song beside you", translation: "Kan kunyanyikan lagu di sisimu" },
  { english: "And if you ever forget how much you really mean to me", translation: "Dan jika kau lupa betapa berartinya dirimu bagiku" },
  { english: "Every day I will remind you, oh", translation: "Setiap hari aku akan mengingatkanmu, oh" },
  { english: "Find out what we're made of", translation: "Mencari tahu terbuat dari apa diri kita" },
  { english: "When we are called to help our friends in need", translation: "Saat kita terpanggil untuk membantu teman yang membutuhkan" },

  { english: "You can count on me like one, two, three", translation: "Kau bisa mengandalkanku seperti satu, dua, tiga" },
  { english: "I'll be there", translation: "Aku akan datang" },
  { english: "And I know when I need it, I can count on you like four, three, two", translation: "Dan aku tahu saat aku membutuhkannya, aku bisa mengandalkanmu seperti empat, tiga, dua" },
  { english: "And you'll be there", translation: "Dan kau akan datang" },
  { english: "'Cause that's what friends are supposed to do, oh, yeah", translation: "Karena begitulah seharusnya teman, oh, yeah" },
  { english: "Ooh-ooh-ooh-ooh-ooh, ooh-ooh-ooh-ooh, ooh, yeah, yeah", translation: "Ooh-ooh-ooh-ooh-ooh, ooh-ooh-ooh-ooh, ooh, yeah, yeah" },

  { english: "You'll always have my shoulder when you cry", translation: "Kau boleh selalu menangis di pundakku" },
  { english: "I'll never let go, never say goodbye", translation: "Aku takkan pernah pergi, takkan pernah bilang selamat tinggal" },

  { english: "You know you can count on me like one, two, three", translation: "Kau tahu kau bisa mengandalkanku seperti satu, dua, tiga" },
  { english: "I'll be there", translation: "Aku 'kan datang" },
  { english: "And I know when I need it, I can count on you like four, three, two", translation: "Dan aku tahu saat aku membutuhkannya, aku bisa mengandalkanmu seperti empat, tiga, dua" },
  { english: "And you'll be there", translation: "Dan kau 'kan datang" },
  { english: "'Cause that's what friends are supposed to do, oh, yeah", translation: "Karena begitulah seharusnya teman, oh, yeah" },
  { english: "Ooh-ooh-ooh-ooh-ooh, ooh-ooh-ooh-ooh, ooh, yeah, yeah", translation: "Ooh-ooh-ooh-ooh-ooh, ooh-ooh-ooh-ooh, ooh, yeah, yeah" },

  { english: "You can count on me 'cause I can count on you", translation: "Kau bisa mengandalkanku karena aku bisa mengandalkanmu" },
];

const mediumGames: Game[] = [
  {
    title: "A True Friend vs Not a True Friend",
    instruction: "Drag and drop each statement into the correct box! Decide which actions show a true friend and which do not. (Tarik dan lepaskan setiap pernyataan ke dalam kotak yang benar! Tentukan tindakan mana yang menunjukkan teman sejati dan mana yang tidak.)",
    embedUrl: "https://wordwall.net/embed/play/110259/763/869"
  },
  {
    title: "Hungry Dino: Leaf Muncher",
    instruction: "Move the dinosaur's head to eat the leaf with the correct answer! Don't eat the wrong leaves. (Gerakkan kepala dinosaurus untuk memakan daun dengan jawaban yang benar! Jangan makan daun yang salah.)",
    embedUrl: "https://wordwall.net/embed/play/110319/217/462"
  },
  {
    title: "Maze Chase",
    instruction: "Run to the correct answer and avoid the enemies! (Berlarilah ke jawaban yang benar dan hindari para musuh!)",
    embedUrl: "https://wordwall.net/embed/play/110262/222/880"
  }
];

export default function MediumMission() {
  return (
    <MissionLayout
      level="Medium"
      songTitle="Count On Me"
      youtubeId="V-ivEAzBiXI"
      vocabulary={mediumVocab}
      quizEmbedUrl="https://wayground.com/join?gc=48609153"
      lyrics={mediumLyrics}
      games={mediumGames}
      nextLevel="Hard"
      nextLevelHref="/music-map/hard"
      nextSongTitle="A Million Dreams"
    />
  );
}
