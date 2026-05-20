import type { Lesson } from "@/types/learning";

export const lessons: Lesson[] = [
  // ─────────────────────────────────────────────
  // SPANISH — Unit 1: Basics
  // ─────────────────────────────────────────────
  {
    id: "es-unit-1-lesson-1",
    unitId: "es-unit-1",
    title: "Greetings",
    type: "vocabulary",
    order: 1,
    xpReward: 10,
    goals: [
      "Say hello and goodbye in Spanish",
      "Introduce yourself",
      "Ask how someone is doing",
    ],
    vocabulary: [
      {
        word: "Hola",
        translation: "Hello",
        phonetic: "OH-lah",
        example: "Hola, ¿cómo estás?",
      },
      {
        word: "Adiós",
        translation: "Goodbye",
        phonetic: "ah-DYOS",
        example: "Adiós, hasta luego.",
      },
      {
        word: "Buenos días",
        translation: "Good morning",
        phonetic: "BWEH-nos DEE-as",
        example: "Buenos días, señor García.",
      },
      {
        word: "Buenas noches",
        translation: "Good night",
        phonetic: "BWEH-nas NOH-ches",
        example: "Buenas noches, que descanses.",
      },
      {
        word: "Por favor",
        translation: "Please",
        phonetic: "por fah-BOR",
        example: "Un café, por favor.",
      },
    ],
    activities: [
      {
        id: "es-1-1-a1",
        type: "multiple-choice",
        prompt: "What does 'Hola' mean?",
        options: ["Hello", "Goodbye", "Thank you", "Please"],
        answer: "Hello",
      },
      {
        id: "es-1-1-a2",
        type: "multiple-choice",
        prompt: "How do you say 'Good morning' in Spanish?",
        options: ["Buenas noches", "Adiós", "Buenos días", "Por favor"],
        answer: "Buenos días",
      },
      {
        id: "es-1-1-a3",
        type: "translation",
        prompt: "Translate: 'Goodbye'",
        answer: "Adiós",
        hint: "Think of a word that sounds like 'adios'",
      },
      {
        id: "es-1-1-a4",
        type: "fill-blank",
        prompt: "Buenos ___, me llamo Carlos.",
        options: ["días", "noches", "hola", "favor"],
        answer: "días",
      },
      {
        id: "es-1-1-a5",
        type: "multiple-choice",
        prompt: "What does 'Por favor' mean?",
        options: ["Please", "You're welcome", "Excuse me", "Sorry"],
        answer: "Please",
      },
    ],
    aiTeacherPrompt:
      "You are a friendly Spanish teacher. Teach the student basic Spanish greetings: Hola, Adiós, Buenos días, Buenas noches, and Por favor. Pronounce each word clearly and slowly. Give a real-life example sentence for each. Keep the tone warm, encouraging, and fun. End with a short quiz asking the student to recall at least two greetings.",
  },
  {
    id: "es-unit-1-lesson-2",
    unitId: "es-unit-1",
    title: "Common Phrases",
    type: "phrases",
    order: 2,
    xpReward: 10,
    goals: [
      "Ask for help in Spanish",
      "Say 'I don't understand'",
      "Thank someone politely",
    ],
    phrases: [
      {
        phrase: "¿Cómo te llamas?",
        translation: "What is your name?",
        phonetic: "KOH-moh teh YAH-mas",
        context: "Asking someone's name for the first time",
      },
      {
        phrase: "Me llamo...",
        translation: "My name is...",
        phonetic: "meh YAH-moh",
        context: "Introducing yourself",
      },
      {
        phrase: "No entiendo",
        translation: "I don't understand",
        phonetic: "noh en-TYEN-doh",
        context: "When you don't understand something said to you",
      },
      {
        phrase: "¿Puede repetir?",
        translation: "Can you repeat?",
        phonetic: "PWEH-deh reh-peh-TEER",
        context: "Asking someone to say something again",
      },
      {
        phrase: "Muchas gracias",
        translation: "Thank you very much",
        phonetic: "MOO-chas GRA-syas",
        context: "Expressing gratitude",
      },
    ],
    activities: [
      {
        id: "es-1-2-a1",
        type: "multiple-choice",
        prompt: "What does '¿Cómo te llamas?' mean?",
        options: [
          "What is your name?",
          "How are you?",
          "Where are you from?",
          "How old are you?",
        ],
        answer: "What is your name?",
      },
      {
        id: "es-1-2-a2",
        type: "translation",
        prompt: "Translate: 'I don't understand'",
        answer: "No entiendo",
        hint: "The word 'entiendo' comes from 'entender' (to understand)",
      },
      {
        id: "es-1-2-a3",
        type: "multiple-choice",
        prompt: "How do you say 'Thank you very much' in Spanish?",
        options: [
          "Muchas gracias",
          "Por favor",
          "De nada",
          "Lo siento",
        ],
        answer: "Muchas gracias",
      },
      {
        id: "es-1-2-a4",
        type: "fill-blank",
        prompt: "Me ___ María.",
        options: ["llamo", "soy", "estoy", "tengo"],
        answer: "llamo",
      },
    ],
    aiTeacherPrompt:
      "You are a friendly Spanish teacher. Teach the student essential survival phrases: ¿Cómo te llamas?, Me llamo..., No entiendo, ¿Puede repetir?, and Muchas gracias. For each phrase, explain the context where it would be used. Role-play a simple conversation where you introduce yourself and the student responds. Speak slowly and clearly. Encourage repetition.",
  },
  {
    id: "es-unit-1-lesson-3",
    unitId: "es-unit-1",
    title: "Numbers 1–10",
    type: "vocabulary",
    order: 3,
    xpReward: 15,
    goals: [
      "Count from 1 to 10 in Spanish",
      "Use numbers in simple sentences",
    ],
    vocabulary: [
      { word: "uno", translation: "one", phonetic: "OO-noh", example: "Tengo un gato." },
      { word: "dos", translation: "two", phonetic: "dohs", example: "Dos cafés, por favor." },
      { word: "tres", translation: "three", phonetic: "trehs", example: "Tres libros en la mesa." },
      { word: "cuatro", translation: "four", phonetic: "KWAH-troh", example: "Cuatro estaciones del año." },
      { word: "cinco", translation: "five", phonetic: "SEEN-koh", example: "Cinco minutos más." },
      { word: "seis", translation: "six", phonetic: "says", example: "Seis manzanas." },
      { word: "siete", translation: "seven", phonetic: "SYEH-teh", example: "Siete días en la semana." },
      { word: "ocho", translation: "eight", phonetic: "OH-choh", example: "Ocho horas de sueño." },
      { word: "nueve", translation: "nine", phonetic: "NWEH-beh", example: "Nueve planetas." },
      { word: "diez", translation: "ten", phonetic: "dyehs", example: "Diez dedos en las manos." },
    ],
    activities: [
      {
        id: "es-1-3-a1",
        type: "multiple-choice",
        prompt: "What is 'cinco' in English?",
        options: ["three", "five", "seven", "four"],
        answer: "five",
      },
      {
        id: "es-1-3-a2",
        type: "multiple-choice",
        prompt: "How do you say 'eight' in Spanish?",
        options: ["seis", "nueve", "ocho", "siete"],
        answer: "ocho",
      },
      {
        id: "es-1-3-a3",
        type: "translation",
        prompt: "Translate: 'ten'",
        answer: "diez",
      },
      {
        id: "es-1-3-a4",
        type: "fill-blank",
        prompt: "___ días en la semana.",
        options: ["Cinco", "Seis", "Siete", "Ocho"],
        answer: "Siete",
      },
    ],
    aiTeacherPrompt:
      "You are a friendly Spanish teacher. Teach numbers 1 through 10 in Spanish: uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez. Pronounce each number clearly, then use it in a short example sentence. Use counting exercises and a quick memory quiz at the end. Keep it fun and energetic.",
  },

  // ─────────────────────────────────────────────
  // FRENCH — Unit 1: Basics
  // ─────────────────────────────────────────────
  {
    id: "fr-unit-1-lesson-1",
    unitId: "fr-unit-1",
    title: "Greetings",
    type: "vocabulary",
    order: 1,
    xpReward: 10,
    goals: [
      "Say hello and goodbye in French",
      "Use formal and informal greetings",
      "Ask how someone is doing",
    ],
    vocabulary: [
      {
        word: "Bonjour",
        translation: "Hello / Good day",
        phonetic: "bohn-ZHOOR",
        example: "Bonjour, comment ça va?",
      },
      {
        word: "Bonsoir",
        translation: "Good evening",
        phonetic: "bohn-SWAHR",
        example: "Bonsoir, madame.",
      },
      {
        word: "Au revoir",
        translation: "Goodbye",
        phonetic: "oh ruh-VWAHR",
        example: "Au revoir, à demain!",
      },
      {
        word: "Salut",
        translation: "Hi (informal)",
        phonetic: "sah-LUE",
        example: "Salut, ça va?",
      },
      {
        word: "Merci",
        translation: "Thank you",
        phonetic: "mehr-SEE",
        example: "Merci beaucoup!",
      },
    ],
    activities: [
      {
        id: "fr-1-1-a1",
        type: "multiple-choice",
        prompt: "What does 'Bonjour' mean?",
        options: ["Good evening", "Goodbye", "Hello", "Thank you"],
        answer: "Hello",
      },
      {
        id: "fr-1-1-a2",
        type: "multiple-choice",
        prompt: "Which greeting is informal in French?",
        options: ["Bonjour", "Bonsoir", "Salut", "Au revoir"],
        answer: "Salut",
      },
      {
        id: "fr-1-1-a3",
        type: "translation",
        prompt: "Translate: 'Goodbye'",
        answer: "Au revoir",
        hint: "Literally means 'until we see each other again'",
      },
      {
        id: "fr-1-1-a4",
        type: "fill-blank",
        prompt: "___, comment ça va?",
        options: ["Merci", "Bonjour", "Au revoir", "Bonsoir"],
        answer: "Bonjour",
      },
    ],
    aiTeacherPrompt:
      "You are a friendly French teacher. Teach the student basic French greetings: Bonjour, Bonsoir, Au revoir, Salut, and Merci. Explain when to use formal versus informal greetings. Pronounce each word clearly and demonstrate with a short dialogue. Finish with a role-play exercise where the student greets you and you respond.",
  },
  {
    id: "fr-unit-1-lesson-2",
    unitId: "fr-unit-1",
    title: "Colors",
    type: "vocabulary",
    order: 2,
    xpReward: 10,
    goals: [
      "Name 6 common colors in French",
      "Describe objects using colors",
    ],
    vocabulary: [
      { word: "rouge", translation: "red", phonetic: "roozh", example: "Une rose rouge." },
      { word: "bleu", translation: "blue", phonetic: "bluh", example: "Le ciel est bleu." },
      { word: "vert", translation: "green", phonetic: "vehr", example: "Une pomme verte." },
      { word: "jaune", translation: "yellow", phonetic: "zhohn", example: "Un citron jaune." },
      { word: "noir", translation: "black", phonetic: "nwahr", example: "Un chat noir." },
      { word: "blanc", translation: "white", phonetic: "blahn", example: "Une page blanche." },
    ],
    activities: [
      {
        id: "fr-1-2-a1",
        type: "multiple-choice",
        prompt: "What color is 'bleu'?",
        options: ["red", "blue", "green", "yellow"],
        answer: "blue",
      },
      {
        id: "fr-1-2-a2",
        type: "translation",
        prompt: "Translate: 'black'",
        answer: "noir",
        hint: "Think of 'film noir'",
      },
      {
        id: "fr-1-2-a3",
        type: "multiple-choice",
        prompt: "How do you say 'green' in French?",
        options: ["jaune", "rouge", "vert", "blanc"],
        answer: "vert",
      },
      {
        id: "fr-1-2-a4",
        type: "fill-blank",
        prompt: "Le ciel est ___.",
        options: ["rouge", "bleu", "noir", "vert"],
        answer: "bleu",
      },
    ],
    aiTeacherPrompt:
      "You are a friendly French teacher. Teach the student six common colors in French: rouge, bleu, vert, jaune, noir, blanc. For each color, describe an everyday object that has that color to create a vivid memory hook. Pronounce each word carefully. Finish with a quick game where you describe an object and the student names the color in French.",
  },

  // ─────────────────────────────────────────────
  // JAPANESE — Unit 1: Hiragana & Greetings
  // ─────────────────────────────────────────────
  {
    id: "ja-unit-1-lesson-1",
    unitId: "ja-unit-1",
    title: "Basic Greetings",
    type: "vocabulary",
    order: 1,
    xpReward: 10,
    goals: [
      "Say hello and goodbye in Japanese",
      "Greet someone in the morning and evening",
      "Say 'thank you' in Japanese",
    ],
    vocabulary: [
      {
        word: "こんにちは",
        translation: "Hello",
        phonetic: "kon-ni-chi-wa",
        example: "こんにちは、田中さん。",
      },
      {
        word: "おはようございます",
        translation: "Good morning",
        phonetic: "o-ha-yo-go-za-i-mas",
        example: "おはようございます、先生。",
      },
      {
        word: "こんばんは",
        translation: "Good evening",
        phonetic: "kon-ban-wa",
        example: "こんばんは、お元気ですか？",
      },
      {
        word: "さようなら",
        translation: "Goodbye",
        phonetic: "sa-yo-na-ra",
        example: "さようなら、またね。",
      },
      {
        word: "ありがとう",
        translation: "Thank you",
        phonetic: "a-ri-ga-to",
        example: "ありがとう、助かりました。",
      },
    ],
    activities: [
      {
        id: "ja-1-1-a1",
        type: "multiple-choice",
        prompt: "What does 'こんにちは' mean?",
        options: ["Good morning", "Hello", "Goodbye", "Good evening"],
        answer: "Hello",
      },
      {
        id: "ja-1-1-a2",
        type: "multiple-choice",
        prompt: "How do you say 'Thank you' in Japanese?",
        options: ["さようなら", "こんばんは", "ありがとう", "おはよう"],
        answer: "ありがとう",
      },
      {
        id: "ja-1-1-a3",
        type: "translation",
        prompt: "Translate: 'Good evening'",
        answer: "こんばんは",
        hint: "Phonetically: kon-ban-wa",
      },
      {
        id: "ja-1-1-a4",
        type: "multiple-choice",
        prompt: "Which phrase is used in the morning?",
        options: ["こんにちは", "こんばんは", "おはようございます", "さようなら"],
        answer: "おはようございます",
      },
    ],
    aiTeacherPrompt:
      "You are a warm and patient Japanese teacher. Teach the student five essential Japanese greetings: こんにちは, おはようございます, こんばんは, さようなら, and ありがとう. Romanize each word so the student can follow along. Explain the cultural context around bowing when greeting. Practice each word two to three times and finish with a simple role-play where you greet the student at different times of day.",
  },
  {
    id: "ja-unit-1-lesson-2",
    unitId: "ja-unit-1",
    title: "Introducing Yourself",
    type: "phrases",
    order: 2,
    xpReward: 15,
    goals: [
      "Say your name in Japanese",
      "Ask someone's name",
      "Say where you're from",
    ],
    phrases: [
      {
        phrase: "はじめまして",
        translation: "Nice to meet you",
        phonetic: "ha-ji-me-ma-shi-te",
        context: "Said when meeting someone for the first time",
      },
      {
        phrase: "わたしの なまえは ___ です",
        translation: "My name is ___",
        phonetic: "wa-ta-shi no na-ma-e wa ___ des",
        context: "Introducing your name formally",
      },
      {
        phrase: "おなまえは なんですか？",
        translation: "What is your name?",
        phonetic: "o-na-ma-e wa nan des-ka",
        context: "Politely asking someone's name",
      },
      {
        phrase: "___ から きました",
        translation: "I am from ___",
        phonetic: "___ ka-ra ki-ma-shi-ta",
        context: "Saying where you come from",
      },
      {
        phrase: "よろしく おねがいします",
        translation: "Please treat me well / Best regards",
        phonetic: "yo-ro-shi-ku o-ne-ga-i-shi-mas",
        context: "Said at the end of an introduction, expressing goodwill",
      },
    ],
    activities: [
      {
        id: "ja-1-2-a1",
        type: "multiple-choice",
        prompt: "What does 'はじめまして' mean?",
        options: [
          "Goodbye",
          "Nice to meet you",
          "Thank you",
          "Good morning",
        ],
        answer: "Nice to meet you",
      },
      {
        id: "ja-1-2-a2",
        type: "multiple-choice",
        prompt: "How do you ask 'What is your name?' in Japanese?",
        options: [
          "おなまえは なんですか？",
          "どこから きましたか？",
          "はじめまして",
          "よろしくおねがいします",
        ],
        answer: "おなまえは なんですか？",
      },
      {
        id: "ja-1-2-a3",
        type: "translation",
        prompt: "Translate: 'My name is ___'",
        answer: "わたしの なまえは ___ です",
        hint: "Phonetically: wa-ta-shi no na-ma-e wa ___ des",
      },
      {
        id: "ja-1-2-a4",
        type: "fill-blank",
        prompt: "アメリカ ___ きました",
        options: ["から", "まで", "へ", "に"],
        answer: "から",
      },
    ],
    aiTeacherPrompt:
      "You are a friendly Japanese teacher. Teach the student how to introduce themselves in Japanese using these phrases: はじめまして, わたしの なまえは ___ です, おなまえは なんですか？, ___ から きました, and よろしく おねがいします. Walk through each phrase with romanization and its meaning. Demonstrate a complete self-introduction and then guide the student to create their own introduction. Keep the lesson encouraging and celebrate small wins.",
  },

  // ─────────────────────────────────────────────
  // GERMAN — Unit 1: Basics
  // ─────────────────────────────────────────────
  {
    id: "de-unit-1-lesson-1",
    unitId: "de-unit-1",
    title: "Greetings",
    type: "vocabulary",
    order: 1,
    xpReward: 10,
    goals: [
      "Say hello and goodbye in German",
      "Use formal and informal greetings",
      "Wish someone a good day",
    ],
    vocabulary: [
      {
        word: "Hallo",
        translation: "Hello",
        phonetic: "HAH-loh",
        example: "Hallo, wie geht es dir?",
      },
      {
        word: "Guten Morgen",
        translation: "Good morning",
        phonetic: "GOO-ten MOR-gen",
        example: "Guten Morgen, Herr Schmidt.",
      },
      {
        word: "Guten Tag",
        translation: "Good day",
        phonetic: "GOO-ten tahk",
        example: "Guten Tag, wie kann ich helfen?",
      },
      {
        word: "Auf Wiedersehen",
        translation: "Goodbye (formal)",
        phonetic: "owf VEE-der-zayn",
        example: "Auf Wiedersehen, bis morgen.",
      },
      {
        word: "Danke",
        translation: "Thank you",
        phonetic: "DAHN-keh",
        example: "Danke schön!",
      },
    ],
    activities: [
      {
        id: "de-1-1-a1",
        type: "multiple-choice",
        prompt: "What does 'Guten Morgen' mean?",
        options: ["Good night", "Good morning", "Good day", "Hello"],
        answer: "Good morning",
      },
      {
        id: "de-1-1-a2",
        type: "multiple-choice",
        prompt: "How do you say 'Thank you' in German?",
        options: ["Bitte", "Danke", "Hallo", "Ja"],
        answer: "Danke",
      },
      {
        id: "de-1-1-a3",
        type: "translation",
        prompt: "Translate: 'Goodbye (formal)'",
        answer: "Auf Wiedersehen",
        hint: "Literally 'until we see each other again'",
      },
      {
        id: "de-1-1-a4",
        type: "fill-blank",
        prompt: "___ Tag, wie kann ich helfen?",
        options: ["Guten", "Gute", "Gut", "Gutem"],
        answer: "Guten",
      },
    ],
    aiTeacherPrompt:
      "You are a friendly German teacher. Teach the student basic German greetings: Hallo, Guten Morgen, Guten Tag, Auf Wiedersehen, and Danke. Explain the difference between formal and informal usage. Pronounce each word slowly and clearly. End with a short dialogue exercise where the student greets you and thanks you for something.",
  },
];
