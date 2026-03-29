import MissionLayout, { Vocabulary, LyricLine, Game } from "@/components/MissionLayout";

const hardVocab: Vocabulary[] = [
  { word: "Runaway", meaning: "Melarikan diri / Kabur", pronunciation: "ra-ne-wei (/ˈrʌnəweɪ/)" },
  { word: "Climbing", meaning: "Memanjat / Mendaki", pronunciation: "klai-ming (/ˈklaɪmɪŋ/)" },
  { word: "Breeze", meaning: "Angin sepoi-sepoi", pronunciation: "briiz (/briːz/)" },
  { word: "Belong", meaning: "Berada di tempat yang tepat / Tergolong", pronunciation: "bi-long (/bɪˈlɒŋ/)" },
  { word: "Fallen", meaning: "Terjatuh / Gugur", pronunciation: "fo-len (/ˈfɔːlən/)" },
  { word: "Soul", meaning: "Jiwa", pronunciation: "soul (/soʊl/)" },
  { word: "Tied up", meaning: "Terikat / Terkurung", pronunciation: "taid ap (/taɪd ʌp/)" },
  { word: "Take me home", meaning: "Bawa aku pulang", pronunciation: "teik mi houm (/teɪk mi hoʊm/)" },
];

const runawayLyrics: LyricLine[] = [
  { english: "I was list'nin' to the ocean", translation: "Aku sedang mendengarkan samudra" },
  { english: "I saw a face in the sand", translation: "Aku melihat wajah di pasir" },
  { english: "But when I picked it up", translation: "Tapi ketika aku mengambilnya" },
  { english: "Then it vanished away from my hands, down", translation: "Kemudian itu menghilang dari tanganku, turun" },
  { english: "I had a dream I was seven", translation: "Aku bermimpi waktu aku berumur 7 tahun" },
  { english: "Climbing my way in a tree", translation: "Memanjat jalanku di atas pohon" },
  { english: "I saw a piece of heaven", translation: "Aku melihat sepotong surga" },
  { english: "Waiting in patience for me, down", translation: "Menunggu dengan sabar untukku, turun" },
  
  { english: "And I was runnin' far away", translation: "Dan aku berlari jauh" },
  { english: "Would I run off the world someday?", translation: "Apakah aku akan lari dari dunia suatu hari nanti?" },
  { english: "Nobody knows", translation: "Tidak ada yang tahu" },
  { english: "Nobody knows", translation: "Tidak ada yang tahu" },
  { english: "And I was dancing in the rain", translation: "Dan aku menari di bawah hujan" },
  { english: "I felt alive and I can't complain", translation: "Aku merasa hidup dan tak bisa mengeluh" },
  { english: "But now take me home", translation: "Tapi sekarang bawa aku pulang" },
  { english: "Take me home where I belong", translation: "Bawa aku pulang ke tempat aku berasal" },
  { english: "I can't take it anymore", translation: "Aku tak tahan lagi" },
  
  { english: "I was painting a picture", translation: "Aku melukis sebuah gambar" },
  { english: "The picture was a painting of you", translation: "Gambar itu adalah lukisan dirimu" },
  { english: "And for a moment I thought you were here", translation: "Dan sejenak aku pikir kau di sini" },
  { english: "But then again, it wasn't true, down", translation: "Tapi nyatanya, itu tidak benar, turun" },
  { english: "And all this time I have been lyin'", translation: "Dan selama ini aku berbohong" },
  { english: "Oh, lyin' in secret to myself", translation: "Oh, berbohong merahasiakannya pada diri sendiri" },
  { english: "I've been putting sorrow on the farthest place on my shelf", translation: "Aku telah menaruh kesedihan di tempat terjauh di rakku" },
  { english: "La-di-da", translation: "La di da" },
  
  { english: "And I was runnin' far away", translation: "Dan aku berlari jauh" },
  { english: "Would I run off the world someday?", translation: "Apakah aku akan lari dari dunia suatu hari nanti?" },
  { english: "Nobody knows", translation: "Tidak ada yang tahu" },
  { english: "Nobody knows", translation: "Tidak ada yang tahu" },
  { english: "And I was dancing in the rain", translation: "Dan aku menari di bawah hujan" },
  { english: "I felt alive and I can't complain", translation: "Aku merasa hidup dan tak bisa mengeluh" },
  { english: "But now take me home", translation: "Tapi sekarang bawa aku pulang" },
  { english: "Take me home where I belong", translation: "Bawa aku pulang ke tempat aku berasal" },
  { english: "I got no other place to go", translation: "Aku tak punya tempat lain untuk pergi" },
  { english: "Now take me home", translation: "Sekarang bawa aku pulang" },
  { english: "Take me home where I belong", translation: "Bawa aku pulang ke tempat aku berasal" },
  { english: "I got no other place to go", translation: "Aku tak punya tempat lain untuk pergi" },
  { english: "Now take me home", translation: "Sekarang bawa aku pulang" },
  { english: "Take me home where I belong", translation: "Bawa aku pulang ke tempat aku berasal" },
  { english: "I can't take it anymore", translation: "Aku tak tahan lagi" },
  
  { english: "But I kept runnin'", translation: "Tapi aku terus berlari" },
  { english: "For a soft place to fall", translation: "Mencari tempat yang nyaman untuk jatuh" },
  { english: "And I kept runnin'", translation: "Dan aku terus berlari" },
  { english: "For a soft place to fall", translation: "Mencari tempat yang nyaman untuk jatuh" },
  { english: "And I kept runnin'", translation: "Dan aku terus berlari" },
  { english: "For a soft place to fall", translation: "Mencari tempat yang nyaman untuk jatuh" },
  { english: "And I kept runnin'", translation: "Dan aku terus berlari" },
  { english: "For a soft place to fall", translation: "Mencari tempat yang nyaman untuk jatuh" },
  
  { english: "And I was runnin' far away", translation: "Dan aku berlari jauh" },
  { english: "Would I run off the world someday?", translation: "Apakah aku akan lari dari dunia suatu hari nanti?" },
  { english: "But now take me home", translation: "Tapi sekarang bawa aku pulang" },
  { english: "Take me home where I belong", translation: "Bawa aku pulang ke tempat aku berasal" },
  { english: "I got no other place to go", translation: "Aku tak punya tempat lain untuk pergi" },
  { english: "Now take me home", translation: "Sekarang bawa aku pulang" },
  { english: "Take me home where I belong", translation: "Bawa aku pulang ke tempat aku berasal" },
  { english: "I got no other place to go", translation: "Aku tak punya tempat lain untuk pergi" },
  
  { english: "Now take me home, home where I belong", translation: "Sekarang bawa aku pulang, ke tempatku berasal" },
  { english: "Now take me home, home where I belong", translation: "Sekarang bawa aku pulang, ke tempatku berasal" },
  { english: "Now take me home, home where I belong", translation: "Sekarang bawa aku pulang, ke tempatku berasal" },
  { english: "Now take me home, home where I belong", translation: "Sekarang bawa aku pulang, ke tempatku berasal" },
  { english: "I can't take it anymore", translation: "Aku tak tahan lagi" },
];

const hardGames: Game[] = [
  {
    title: "Whack-a-Mole",
    instruction: "Hit the mole holding the EXACT word from Runaway song! Watch out, some words look and sound similar, but they are traps. Be fast and accurate! (Pukul tikus mondok yang membawa kata yang TEPAT dari lagu Runaway! Hati-hati, beberapa kata terlihat dan terdengar mirip, tapi itu adalah jebakan. Cepat dan akuratlah!)",
    embedUrl: "https://wordwall.net/embed/play/110320/968/587"
  },
  {
    title: "Mystery Cards",
    instruction: "Dare to flip the cards? 🃏 Tap each card to reveal a hidden question about AURORA's 'Runaway'. Think deeply before you choose the answer, because the traps are everywhere. Good luck! (Berani membalik kartunya? 🃏 Ketuk setiap kartu untuk mengungkapkan pertanyaan tersembunyi tentang lagu 'Runaway' dari AURORA. Berpikirlah mendalam sebelum memilih jawaban, karena jebakan ada di mana-mana. Semoga berhasil!)",
    embedUrl: "https://wordwall.net/embed/play/110322/779/548"
  },
  {
    title: "Spelling Mission",
    instruction: "Time to test your spelling! 🔠 Read the lyrics and unscramble the letters to find the missing word. Drag the letters into the correct order before the time runs out. Be careful with your spelling! (Waktunya menguji ejaanmu! 🔠 Baca liriknya dan susun ulang huruf-huruf untuk menemukan kata yang hilang. Tarik huruf-huruf ke urutan yang benar sebelum kehabisan waktu. Hati-hati dengan ejaanmu!)",
    embedUrl: "https://wordwall.net/embed/play/110323/391/887"
  }
];

export default function HardMission() {
  return (
    <MissionLayout
      level="Hard"
      songTitle="Runaway"
      youtubeId="avddu-6ARy8"
      vocabulary={hardVocab}
      quizEmbedUrl="https://wayground.com/join?gc=18724414&source=liveDashboard"
      lyrics={runawayLyrics}
      games={hardGames}
    />
  );
}
