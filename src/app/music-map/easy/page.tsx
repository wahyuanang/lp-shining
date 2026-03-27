import MissionLayout, { Vocabulary } from "@/components/MissionLayout";

const countOnMeVocab: Vocabulary[] = [
  { word: "Count On", meaning: "Mengandalkan / Mempercayai" },
  { word: "Stuck", meaning: "Terjebak" },
  { word: "Dark", meaning: "Gelap" },
  { word: "Light", meaning: "Menerangi / Cahaya" },
  { word: "Guide", meaning: "Memandu / Menuntun" },
  { word: "Sail", meaning: "Berlayar" },
  { word: "Find out", meaning: "Mengetahui / Menemukan" },
  { word: "Toss and Turn", meaning: "Gelisah / Susah tidur" },
  { word: "Supposed to", meaning: "Seharusnya" },
  { word: "Shoulder", meaning: "Bahu/Pundak" },
];

export default function EasyMission() {
  return (
    <MissionLayout
      level="Easy"
      songTitle="Count On Me"
      youtubeId="V-ivEAzBiXI"
      vocabulary={countOnMeVocab}
      quizEmbedUrl="https://wayground.com/embed/quiz/69c56b218b60f9d9e9f4600d"
    />
  );
}
