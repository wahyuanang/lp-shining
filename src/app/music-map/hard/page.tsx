import MissionLayout, { Vocabulary, LyricLine } from "@/components/MissionLayout";

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
  { english: "I was listenin' to the ocean", translation: "Aku sedang mendengarkan samudra" },
  { english: "I saw a face in the sand", translation: "Aku melihat wajah di pasir" },
  { english: "But when I picked it up", translation: "Tapi ketika aku mengambilnya" },
  { english: "Then it vanished away from my hands, down", translation: "Kemudian itu menghilang dari tanganku, turun" },
  { english: "I had a dream I was seven", translation: "Aku bermimpi aku berumur 7 tahun" },
  { english: "Climbing my way in a tree", translation: "Memanjat jalanku di pohon" },
  { english: "I saw a piece of heaven", translation: "Aku melihat bagian dari surga" },
  { english: "Waiting impatient for me, down", translation: "Menunggu dengan tidak sabar untukku, jatuh" },
  { english: "And I was runnin' far away", translation: "Aku berlari jauh" },
  { english: "Would I run off the world someday?", translation: "Apakah aku akan hilang dari dunia suatu hari nanti?" },
  { english: "Nobody knows", translation: "Tidak ada yang tahu" },
  { english: "Nobody knows, and", translation: "Tidak ada yang tahu, dan" },
  { english: "I was dancing in the rain", translation: "Aku menari dibawah hujan" },
  { english: "I felt alive and I can't complain", translation: "Aku merasa hidup dan aku tidak bisa mengeluh" },
  { english: "But now take me home", translation: "Tapi sekarang bawa aku pulang" },
  { english: "Take me home where I belong", translation: "Bawa aku pulang dimana aku berasal" },
  { english: "I can't take it anymore", translation: "Aku tidak tahan lagi" },
  { english: "I was painting a picture", translation: "Aku melukis sebuah gambar" },
  { english: "The picture was a painting of you and", translation: "Gambar yang melukis tentang mu dan" },
  { english: "For a moment I thought you were here", translation: "Untuk beberapa saat aku berpikir kamu di sini" },
  { english: "But then again, it wasn't true, down", translation: "Tapi sekali lagi, itu tidak benar, jatuh" },
  { english: "And all this time I have been lyin'", translation: "Dan selama ini aku berbaring" },
  { english: "Oh, lyin' in secret to myself", translation: "Oh, berbaring pada rahasia diriku sendiri" },
  { english: "I've been putting sorrow on the", translation: "Aku telah menempatkan kesedihan pada" },
  { english: "Farthest place on my shelf", translation: "Tempat terjauh dari rak ku" },
  { english: "La-di-da", translation: "La di da" },
  { english: "And I was runnin' far away", translation: "Aku berlari jauh" },
  { english: "Would I run off the world someday?", translation: "Apakah aku akan hilang dari dunia suatu hari nanti?" },
  { english: "Nobody knows", translation: "Tidak ada yang tahu" },
  { english: "Nobody knows, and", translation: "Tidak ada yang tahu, dan" },
  { english: "I was dancing in the rain", translation: "Aku menari dibawah hujan" },
  { english: "I felt alive and I can't complain", translation: "Aku merasa hidup dan aku tidak bisa mengeluh" },
  { english: "But now take me home", translation: "Tapi sekarang bawa aku pulang" },
  { english: "Take me home where I belong", translation: "Bawa aku pulang dimana aku berasal" },
  { english: "I can't take it anymore", translation: "Aku tidak tahan lagi" },
  { english: "I got no other place to go", translation: "Aku tidak punya tempat untuk pergi" },
  { english: "Now take me home", translation: "Sekarang bawa aku pulang" },
  { english: "Take me home where I belong", translation: "Bawa aku pulang dimana aku berasal" },
  { english: "I can't take it anymore", translation: "Aku tidak tahan lagi" },
  { english: "But I kept runnin'", translation: "Tapi aku tetap berlari" },
  { english: "For a soft place to fall", translation: "Untuk sebuah tempat yang nyaman untuk terjatuh" },
  { english: "But I kept runnin'", translation: "Tapi aku tetap berlari" },
  { english: "For a soft place to fall", translation: "Untuk sebuah tempat yang nyaman untuk terjatuh" },
  { english: "But I kept runnin'", translation: "Tapi aku tetap berlari" },
  { english: "For a soft place to fall", translation: "Untuk sebuah tempat yang nyaman untuk terjatuh" },
  { english: "And I was runnin' far away", translation: "Dan aku berlari semakin jauh" },
  { english: "Would I run off the world someday?", translation: "Apakah aku akan hilang dari dunia ini suatu hari nanti?" },
  { english: "But now take me home", translation: "Tapi sekarang bawa aku pulang" },
  { english: "Take me home where I belong", translation: "Bawa aku pulang dimana aku berasal" },
  { english: "I got no other place to go", translation: "Aku tidak mendapat tempat lain untuk pergi" },
  { english: "Now take me home", translation: "Sekarang, bawa aku pulang" },
  { english: "Take me home where I belong", translation: "Bawa aku pulang dimana aku berasal" },
  { english: "I got no other place to go", translation: "Aku tidak punya tempat untuk pergi" },
  { english: "Now take me home", translation: "Sekarang bawa aku pulang" },
  { english: "Home where I belong", translation: "Pulang dimana aku berasal" },
  { english: "Oh, no, no", translation: "Oh, tidak, tidak" },
  { english: "Now take me home", translation: "Sekarang bawa aku pulang" },
  { english: "Home where I belong", translation: "Pulang dimana aku berasal" },
  { english: "Oh, no, no", translation: "Oh, tidak, tidak" },
  { english: "Now take me home", translation: "Sekarang bawa aku pulang" },
  { english: "Home where I belong", translation: "Pulang dimana aku berasal" },
  { english: "Oh, no, no", translation: "Oh, tidak, tidak" },
  { english: "Now take me home", translation: "Bawa aku pulang" },
  { english: "Home where I belong", translation: "Pulang dimana aku berasal" },
  { english: "I can't take it anymore", translation: "Aku tidak tahan lagi" },
];

export default function HardMission() {
  return (
    <MissionLayout
      level="Hard"
      songTitle="Runaway"
      youtubeId="avddu-6ARy8"
      vocabulary={hardVocab}
      quizEmbedUrl=""
      lyrics={runawayLyrics}
    />
  );
}
