import MissionLayout, { Vocabulary, LyricLine, Game } from "@/components/MissionLayout";

const mediumVocab: Vocabulary[] = [
  { word: "Protect", meaning: "Melindungi", pronunciation: "pro-tekt (/prəˈtekt/)" },
  { word: "Tight", meaning: "Erat / Kuat", pronunciation: "tait (/taɪt/)" },
  { word: "Safe and warm", meaning: "Aman dan hangat", pronunciation: "seif en worm (/seɪf ænd wɔːrm/)" },
  { word: "Bond", meaning: "Ikatan (batin / persaudaraan)", pronunciation: "bond (/bɒnd/)" },
  { word: "Broken", meaning: "Hancur / Terputus", pronunciation: "brou-ken (/ˈbroʊkən/)" },
  { word: "No matter what", meaning: "Apa pun yang terjadi", pronunciation: "nou me-ter wot (/noʊ ˈmætər hwɒt/)" },
  { word: "Deep inside", meaning: "Jauh di lubuk hati", pronunciation: "diip in-said (/diːp ɪnˈsaɪd/)" },
  { word: "Explain", meaning: "Menjelaskan", pronunciation: "ek-splein (/ɪkˈspleɪn/)" },
  { word: "Destiny", meaning: "Takdir", pronunciation: "des-ti-ni (/ˈdestɪni/)" },
  { word: "Hold on", meaning: "Bertahan", pronunciation: "hold on (/hoʊld ɒn/)" },
];

const mediumLyrics: LyricLine[] = [
  { english: "Come stop your crying", translation: "Ayo, berhenti menangis" },
  { english: "It will be alright", translation: "Semua akan baik-baik saja" },
  { english: "Just take my hand", translation: "Cukup pegang tanganku" },
  { english: "Hold it tight", translation: "Pegang erat-erat" },
  { english: "I will protect you", translation: "Aku akan melindungimu" },
  { english: "From all around you", translation: "Dari segala yang ada di sekitarmu" },
  { english: "I will be here", translation: "Aku akan ada di sini" },
  { english: "Don't you cry", translation: "Jangan kau menangis" },
  { english: "For one so small", translation: "Untuk yang sekecil ini" },
  { english: "You seem so strong", translation: "Kau terlihat begitu kuat" },
  { english: "My arms will hold you", translation: "Pelukanku akan memelukmu" },
  { english: "Keep you safe and warm", translation: "Menjagamu tetap aman dan hangat" },
  { english: "This bond between us", translation: "Ikatan ini di antara kita" },
  { english: "Can't be broken", translation: "Takkan bisa terputus" },
  { english: "I will be here", translation: "Aku akan ada di sini" },
  { english: "Don't you cry", translation: "Jangan kau menangis" },
  { english: "'Cause you'll be in my heart", translation: "Karena kau akan selalu ada di hatiku" },
  { english: "Yes, you'll be in my heart", translation: "Ya, kau akan ada di hatiku" },
  { english: "From this day on", translation: "Mulai hari ini" },
  { english: "Now and forever more", translation: "Sekarang dan selamanya" },
  { english: "Yes, you'll be in my heart", translation: "Ya, kau akan ada di hatiku" },
  { english: "No matter what they say", translation: "Tak peduli apa yang mereka katakan" },
  { english: "You'll be here in my heart", translation: "Kau akan selalu ada di hatiku" },
  { english: "Always", translation: "Selalu" },
  { english: "Why can't they understand the way we feel", translation: "Mengapa mereka tak bisa mengerti perasaan kita" },
  { english: "They just don't trust what they can't explain", translation: "Mereka hanya tidak percaya pada yang tak bisa mereka jelaskan" },
  { english: "I know we're different, but deep inside us", translation: "Aku tahu kita berbeda, tapi di dalam hati kita" },
  { english: "We're not that different at all", translation: "Kita tidak begitu berbeda sama sekali" },
  { english: "And you'll be in my heart", translation: "Dan kau akan selalu ada di hatiku" },
  { english: "Yes, you'll be in my heart", translation: "Ya, kau akan ada di hatiku" },
  { english: "From this day on", translation: "Mulai hari ini" },
  { english: "Now and forever more", translation: "Sekarang dan selamanya" },
  { english: "Don't listen to them", translation: "Jangan dengarkan mereka" },
  { english: "'Cause what do they know", translation: "Karena mereka tidak tahu apa-apa" },
  { english: "We need each other, to have, to hold", translation: "Kita saling membutuhkan, untuk memiliki, untuk memeluk" },
  { english: "They'll see in time, I know", translation: "Mereka akan melihat seiring waktu, aku tahu" },
  { english: "When destiny calls you, you must be strong", translation: "Ketika takdir memanggilmu, kau harus kuat" },
  { english: "I may not be with you", translation: "Aku mungkin tidak bersamamu" },
  { english: "But you've got to hold on", translation: "Tapi kau harus bertahan" },
  { english: "They'll see in time, I know", translation: "Mereka akan melihat seiring waktu, aku tahu" },
  { english: "We'll show them together", translation: "Kita akan menunjukkan pada mereka bersama-sama" },
  { english: "'Cause you'll be in my heart", translation: "Karena kau akan selalu ada di hatiku" },
  { english: "Yes, you'll be in my heart", translation: "Ya, kau akan ada di hatiku" },
  { english: "From this day on", translation: "Mulai hari ini" },
  { english: "Now and forever more", translation: "Sekarang dan selamanya" },
  { english: "You'll be in my heart", translation: "Kau akan selalu ada di hatiku" },
  { english: "No matter what they say", translation: "Tak peduli apa yang mereka katakan" },
  { english: "You'll be here in my heart", translation: "Kau akan selalu ada di hatiku" },
  { english: "Always", translation: "Selalu" },
  { english: "Always", translation: "Selalu" },
  { english: "Just look over your shoulder", translation: "Cukup lihat ke belakangmu" },
  { english: "Just look over your shoulder", translation: "Cukup lihat ke belakangmu" },
  { english: "Just look over your shoulder", translation: "Cukup lihat ke belakangmu" },
  { english: "Just look over your shoulder", translation: "Cukup lihat ke belakangmu" },
  { english: "I'll be there", translation: "Aku akan ada di sana" },
  { english: "Always", translation: "Selalu" },
];

const mediumGames: Game[] = [
  {
    title: "Find a Match",
    instruction: " Listen to the song and find the hidden word! (Dengarkan lagunya dan temukan kata dari suara yang tersembunyi!)",
    embedUrl: "https://wordwall.net/embed/play/110294/826/386"
  },
  {
    title: "Balloon Pop",
    instruction: "Pop the balloon with the correct word to complete the song lyrics! (Pecahkan balon dengan kata yang tepat untuk melengkapi lirik lagunya!)",
    embedUrl: "https://wordwall.net/embed/play/110296/494/532"
  },
  {
    title: "SHINING Flight",
    instruction: "Welcome to the SHINING Flight! ✈️ Listen to 'You'll Be In My Heart' and steer your airplane into the correct cloud to complete the lyrics. Watch out for the wrong clouds and fly safely! (Selamat datang di Penerbangan SHINING! ✈️ Dengarkan lagu 'You'll Be In My Heart' dan arahkan pesawatmu ke awan yang tepat untuk melengkapi lirik. Hati-hati dengan awan yang salah dan terbanglah dengan aman!)",
    embedUrl: "https://wordwall.net/embed/play/110319/217/528"
  }
];

export default function MediumMission() {
  return (
    <MissionLayout
      level="Medium"
      songTitle="You'll Be In My Heart"
      youtubeId="UWKy0bpRH9Y"
      vocabulary={mediumVocab}
      quizEmbedUrl="https://wayground.com/join?gc=60977470&source=liveDashboard"
      lyrics={mediumLyrics}
      games={mediumGames}
      nextLevel="Hard"
      nextLevelHref="/music-map/hard"
      nextSongTitle="Runaway"
    />
  );
}
