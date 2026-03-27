import MissionLayout, { Vocabulary } from "@/components/MissionLayout";

// Menyusul
const mediumVocab: Vocabulary[] = [];

export default function MediumMission() {
  return (
    <MissionLayout
      level="Medium"
      songTitle="You'll Be In My Heart"
      youtubeId="UWKy0bpRH9Y"
      vocabulary={mediumVocab}
      quizEmbedUrl="https://wayground.com/embed/quiz/69c580ed26cd2a6645a4667c"
    />
  );
}
