import MissionLayout, { Vocabulary, LyricLine } from "@/components/MissionLayout";

const countOnMeVocab: Vocabulary[] = [
  { word: "Lost", meaning: "Tersesat / Hilang", pronunciation: "lost (/lɔːst/)" },
  { word: "Middle", meaning: "Tengah", pronunciation: "mi-dl (/ˈmɪd.əl/)" },
  { word: "Sea", meaning: "Laut", pronunciation: "sii (/siː/)" },
  { word: "Made of", meaning: "Terdiri dari / Terbuat dari (Dalam lagu ini bermakna: Karakter asli / Ketangguhan kita)", pronunciation: "meid of (/meɪd ʌv/)" },
  { word: "In need", meaning: "Dalam kesulitan / Membutuhkan bantuan", pronunciation: "in niid (/ɪn niːd/)" },
  { word: "Cry on", meaning: "Menangis (bersandar)", pronunciation: "krai on (/kraɪ ɒn/)" },
  { word: "Let go", meaning: "Melepaskan", pronunciation: "let gou (/let ɡoʊ/)" },
  { word: "Fall asleep", meaning: "Tertidur", pronunciation: "fol e-slip (/fɔːl əˈsliːp/)" },
];

const countOnMeLyrics: LyricLine[] = [
  { english: "If you ever find yourself stuck in the middle of the sea", translation: "Jika kau terombang-ambing di tengah lautan" },
  { english: "I'll sail the world to find you", translation: "Kan kulayari seluruh lautan 'tuk temukanmu" },
  { english: "If you ever find yourself lost in the dark and you can't see", translation: "Jika kau tersesat dalam gelap dan kau tak bisa melihat" },
  { english: "I'll be the light to guide you", translation: "Aku akan menjadi cahaya yang membimbingmu" },
  { english: "Find out what we're made of", translation: "Temukan diri kita yang sebenarnya" },
  { english: "When we are called to help our friends in need", translation: "Saat kita terpanggil untuk membantu teman yang membutuhkan" },
  { english: "I'll be there", translation: "Aku akan datang" },
  { english: "And I know when I need it", translation: "Dan aku tahu saat aku membutuhkannya" },
  { english: "And you'll be there", translation: "Dan kau akan datang" },
  { english: "'cause that's what friends are supposed to do oh yeah", translation: "Karna begitulah seharusnya teman" },
  { english: "ooooooh, oooohhh yeah yeah", translation: "Ooooooh, oooohhh yeah yeah" },
  { english: "If you're tossin' and you're turnin", translation: "Jika kau sedang resah dan gelisah" },
  { english: "and you just can't fall asleep", translation: "Dan kau tak bisa tidur" },
  { english: "I'll sing a song beside you", translation: "'Kan kunyanyikan lagu di sisimu" },
  { english: "And if you ever forget how much you really mean to me", translation: "Dan jika kau lupa betapa berartinya dirimu bagiku" },
  { english: "Every day I will remind you", translation: "Tiap hari aku 'kan mengingatkanmu" },
  { english: "Find out what we're made of", translation: "Temukan diri kita yang sebenarnya" },
  { english: "When we are called to help our friends in need", translation: "Saat kita terpanggil untuk membantu teman yang membutuhkan" },
  { english: "I'll be there", translation: "Aku akan datang" },
  { english: "And I know when I need it", translation: "Dan aku tahu saat aku membutuhkannya" },
  { english: "And you'll be there", translation: "Dan kau akan datang" },
  { english: "'cause that's what friends are supposed to do oh yeah", translation: "Karna begitulah seharusnya teman" },
  { english: "ooooooh, oooohhh yeah yeah", translation: "Ooooooh, oooohhh yeah yeah" },
  { english: "You'll always have my shoulder when you cry", translation: "Kau boleh selalu menangis di pundakku" },
  { english: "I'll never let go", translation: "Aku takkan pernah pergi" },
  { english: "Never say goodbye", translation: "Takkan pernah bilang selamat tinggal" },
  { english: "I'll be there", translation: "Aku akan datang" },
  { english: "And I know when I need it", translation: "Dan aku tahu saat aku membutuhkannya" },
  { english: "And you'll be there", translation: "Dan kau akan datang" },
  { english: "'cause that's what friends are supposed to do oh yeah", translation: "Karna begitulah seharusnya teman" },
  { english: "ooooooh, oooohhh", translation: "Ooooooh, oooohhh" },
  { english: "You can count on me 'cause I can count on you", translation: "Kau bisa mengandalkanku karna aku bisa mengandalkanmu" },
];

export default function EasyMission() {
  return (
    <MissionLayout
      level="Easy"
      songTitle="Count On Me"
      youtubeId="V-ivEAzBiXI"
      vocabulary={countOnMeVocab}
      quizEmbedUrl="https://wayground.com/embed/quiz/69c56b218b60f9d9e9f4600d"
      lyrics={countOnMeLyrics}
    />
  );
}
