import MissionLayout, { Vocabulary, LyricLine, Game } from "@/components/MissionLayout";

const hardVocab: Vocabulary[] = [
  { word: "Own", meaning: "Milik sendiri", pronunciation: "oun (/oʊn/)" },
  { word: "Through", meaning: "Melalui", pronunciation: "thru (/θruː/)" },
  { word: "Crazy", meaning: "Gila / Aneh", pronunciation: "krei-zi (/ˈkreɪzi/)" },
  { word: "Design", meaning: "Merancang / Mendesain", pronunciation: "di-zain (/dɪˈzaɪn/)" },
  { word: "Awake", meaning: "Terjaga / Tidak tidur", pronunciation: "e-weik (/əˈweɪk/)" },
  { word: "Vision", meaning: "Pandangan / Impian", pronunciation: "vi-zyen (/ˈvɪʒən/)" },
  { word: "Build", meaning: "Membangun", pronunciation: "bild (/bɪld/)" },
  { word: "Compile", meaning: "Menyusun / Mengumpulkan", pronunciation: "kom-pail (/kəmˈpaɪl/)" },
  { word: "However", meaning: "Bagaimanapun", pronunciation: "hau-e-ver (/haʊˈevər/)" },
  { word: "Along", meaning: "Bersama / Ikut serta", pronunciation: "e-long (/əˈlɔːŋ/)" },
];

const millionDreamsLyrics: LyricLine[] = [
  { english: "I close my eyes and I can see", translation: "Kupejamkan mata dan aku bisa melihat" },
  { english: "The world that's waiting up for me", translation: "Dunia yang menungguku" },
  { english: "That I call my own", translation: "Dunia yang kusebut milikku" },
  { english: "Through the dark, through the door", translation: "Melewati kegelapan, lewati kesempatan" },
  { english: "Through where no one's been before", translation: "Melewati tempat yang belum pernah orang datangi sebelumnya" },
  { english: "But it feels like home", translation: "Tapi rasanya seperti rumah" },

  { english: "They can say, they can say it all sounds crazy", translation: "Mereka bisa katakan semuanya terdengar gila" },
  { english: "They can say, they can say I've lost my mind", translation: "Mereka bisa katakan aku kehilangan akal" },
  { english: "I don't care, I don't care, so call me crazy", translation: "Aku tak peduli, jadi mereka menyebutku gila" },
  { english: "We can live in a world that we design", translation: "Kita bisa hidup di dunia yang kita rancang" },

  { english: "Cause every night I lie in bed", translation: "Karena setiap malam aku berbaring di tempat tidur" },
  { english: "The brightest colors fill my head", translation: "Warna-warna cerah memenuhi kepalaku" },
  { english: "A million dreams are keeping me awake", translation: "Sejuta mimpi membuatku terjaga" },
  { english: "I think of what the world could be", translation: "Kupikirkan apakah dunia bisa" },
  { english: "A vision of the one I see", translation: "Sebuah visi yang kulihat" },
  { english: "A million dreams is all it's gonna take", translation: "Sejuta mimpi adalah yang akan terjadi" },
  { english: "A million dreams for the world we're gonna make", translation: "Sejuta mimpi untuk dunia yang akan kita ciptakan" },

  { english: "There's a house we can build", translation: "Ada sebuah rumah yang bisa kita bangun" },
  { english: "Every room inside is filled", translation: "Setiap ruangan di dalamnya terisi" },
  { english: "With things from far away", translation: "Dengan hal-hal dari jauh" },
  { english: "The special things I compile", translation: "Hal-hal spesial yang kukumpulkan" },
  { english: "Each one there to make you smile", translation: "Masing-masingnya membuatku tersenyum" },
  { english: "On a rainy day", translation: "Di hari yang hujan" },

  { english: "They can say, they can say it all sounds crazy", translation: "Mereka bisa katakan semuanya terdengar gila" },
  { english: "They can say, they can say I've lost my mind", translation: "Mereka bisa katakan aku kehilangan akal" },
  { english: "I don't care, I don't care, so call me crazy", translation: "Aku tak peduli, jadi mereka menyebutku gila" },
  { english: "We can live in a world that we design", translation: "Kita bisa hidup di dunia yang kita rancang" },

  { english: "Every night I lie in bed", translation: "Setiap malam aku berbaring di tempat tidur" },
  { english: "The brightest colors fill my head", translation: "Warna-warna cerah memenuhi kepalaku" },
  { english: "A million dreams are keeping me awake", translation: "Sejuta mimpi membuatku terjaga" },
  { english: "I think of what the world could be", translation: "Kupikirkan apakah dunia bisa" },
  { english: "A vision of the one I see", translation: "Sebuah visi yang kulihat" },
  { english: "A million dreams is all it's gonna take", translation: "Sejuta mimpi adalah yang akan terjadi" },
  { english: "A million dreams for the world we're gonna make", translation: "Sejuta mimpi untuk dunia yang akan kita ciptakan" },

  { english: "However big, however small", translation: "Segimanapun besar dan kecilnya" },
  { english: "Let me be part of it all", translation: "Biarkan aku menjadi bagian dari semua ini" },
  { english: "Share your dreams with me", translation: "Bagikan mimpimu denganku" },
  { english: "You may be right, you may be wrong", translation: "Kamu mungkin benar, kamu mungkin salah" },
  { english: "But say that you'll bring me along", translation: "Tapi aku ingin membawamu bersama" },
  { english: "To the world you see", translation: "Ke dunia yang kulihat" },
  { english: "To the world I close my eyes to see", translation: "Ke dunia kita dengan memejamkan mata untuk melihatnya" },
  { english: "I close my eyes to see", translation: "Kita pejamkan mata untuk melihatnya" },

  { english: "Every night I lie in bed", translation: "Karena setiap malam aku berbaring di tempat tidur" },
  { english: "The brightest colors fill my head", translation: "Warna-warna cerah memenuhi kepalaku" },
  { english: "A million dreams are keeping me awake", translation: "Sejuta mimpi membuatku terjaga" },
  { english: "A million dreams, a million dreams", translation: "Sejuta mimpi, sejuta mimpi" },
  { english: "I think of what the world could be", translation: "Kupikir apakah dunia bisa" },
  { english: "A vision of the one I see", translation: "Sebuah visi yang kulihat" },
  { english: "A million dreams is all it's gonna take", translation: "Sejuta mimpi adalah yang akan terjadi" },
  { english: "A million dreams for the world we're gonna make", translation: "Sejuta mimpi untuk dunia yang akan kita ciptakan" },
  { english: "For the world we're gonna make", translation: "Untuk dunia yang akan kita ciptakan" },
];

const hardGames: Game[] = [
  {
    title: "Game Balloon Pop",
    instruction: "Pop the correct balloon to answer the question on the moving train! Be fast and watch out for the trap balloons! (Pecahkan balon yang tepat untuk menjawab pertanyaan di kereta! Bergeraklah cepat dan awas balon jebakan!)",
    embedUrl: "https://wordwall.net/embed/play/111115/618/408"
  },
  {
    title: "Game Spin Wheel",
    instruction: "Spin the wheel! Read the question carefully, and answer based on the lyrics or meaning you heard. (Putar rodanya! Baca pertanyaan dengan teliti, dan jawab berdasarkan lirik atau makna yang kamu dengar.)",
    embedUrl: "https://wordwall.net/embed/play/111071/092/984"
  },
  {
    title: "Game Spelling Mission",
    instruction: "Drag the scrambled letters into the correct order to reveal the hidden word. Spell it perfectly before the time runs out! (Tarik huruf-huruf acak ke urutan yang benar untuk menebak kata tersembunyi. Eja dengan tepat sebelum waktunya habis!)",
    embedUrl: "https://wordwall.net/embed/play/110323/391/774"
  }
];

export default function HardMission() {
  return (
    <MissionLayout
      level="Hard"
      songTitle="A Million Dreams"
      youtubeId="a8WCktJkLlY"
      vocabulary={hardVocab}
      quizEmbedUrl="https://wayground.com/join?gc=39700225"
      lyrics={millionDreamsLyrics}
      games={hardGames}
    />
  );
}
