export type Language = {
  id: string;
  name: string;
  nativeName: string;
  flag: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  totalUnits: number;
  learnerCount?: string;
};

export type LessonType = "vocabulary" | "phrases" | "grammar" | "audio" | "video" | "chat";

export type ActivityType = "multiple-choice" | "translation" | "listen" | "speak" | "fill-blank";

export type VocabularyItem = {
  word: string;
  translation: string;
  phonetic: string;
  example: string;
};

export type Phrase = {
  phrase: string;
  translation: string;
  phonetic: string;
  context: string;
};

export type Activity = {
  id: string;
  type: ActivityType;
  prompt: string;
  options?: string[];
  answer: string;
  hint?: string;
};

export type Lesson = {
  id: string;
  unitId: string;
  title: string;
  type: LessonType;
  order: number;
  xpReward: number;
  goals: string[];
  vocabulary?: VocabularyItem[];
  phrases?: Phrase[];
  activities: Activity[];
  aiTeacherPrompt?: string;
};

export type Unit = {
  id: string;
  languageId: string;
  title: string;
  description: string;
  order: number;
  icon: string;
};
