import MissionLayout, { Vocabulary } from "@/components/MissionLayout";

// Menyusul
const hardVocab: Vocabulary[] = [];

export default function HardMission() {
  return (
    <MissionLayout
      level="Hard"
      songTitle="Runaway"
      youtubeId="avddu-6ARy8"
      vocabulary={hardVocab}
      quizEmbedUrl=""
    />
  );
}
