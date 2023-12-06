export interface Option {
  text: string;
  correct?: boolean;
  difficulty?: "Easy" | "Medium" | "Hard";
}

export interface Question {
  question: string;
  option: Option[];
}

export const questions: Question[] = [
  {
    question: "What does Naruto want to become?",
    option: [
      { text: "Pirate King" },
      { text: "Wizard King" },
      { text: "Shaman King" },
      { text: "Hokage", correct: true },
    ],
  },
  {
    question: "Where does anime originate from?",
    option: [
      { text: "Japan", correct: true },
      { text: "China" },
      { text: "Pakistan" },
      { text: "The Moon" },
    ],
  },
  {
    question: "Which of these pokemon is a fire type?",
    option: [
      { text: "Lickitung" },
      { text: "Muk" },
      { text: "Rapidash", correct: true },
      { text: "Paras" },
    ],
  },
  {
    question: `Who is the creator of the "Jojo's Bizzare Adventure" manga?`,
    option: [
      { text: "Masashi Kishimoto" },
      { text: "Hirohiko Araki", correct: true },
      { text: "Hajime Isayama" },
      { text: "Yoshihiro Togashi" },
    ],
  },
  {
    question: "Which of these anime came out first?",
    option: [
      { text: "Hajime no Ippo" },
      { text: "Yu Yu Hakusho" },
      { text: "Digimon Adventure" },
      { text: "Dragon ball", correct: true },
    ],
  },
  {
    question:
      'Who is the main villain in the made in the movie "Made in Abyss: Dawn of the Deep Soul"?',
    option: [
      {
        text: "Bondrewd",
        correct: true,
      },
      { text: "Meruem" },
      { text: "Kisame" },
      { text: "Diavolo" },
    ],
  },
  {
    question: 'What do shinigami from "Deathnote" love to eat?',
    option: [
      {
        text: "Apples",
        correct: true,
      },
      { text: "Chocolate" },
      { text: "Humans" },
      { text: "Bacon" },
    ],
  },
  {
    question: "What does Hyakkimaru from the anime Dororo recover first?",
    option: [
      {
        text: "His skin",
        correct: true,
      },
      { text: "Sense of pain" },
      { text: "His hearing" },
      { text: "His voice" },
    ],
  },
  {
    question: `What's the english name of the anime "Mirai Nikki"?`,
    option: [
      {
        text: "Future Diary",
        correct: true,
      },
      { text: "Battle Diary" },
      { text: "Bloody Diary" },
      { text: "Survival Diary" },
    ],
  },
  {
    question: `Who is rank 8 on the hero leaderboard in the anime "One Punch Man"?`,
    option: [
      {
        text: "Zombieman",
        correct: true,
      },
      { text: "Watchdog man" },
      { text: "King" },
      { text: "Metal Knight" },
    ],
  },
  {
    question: `What's the name of the place where the plot of the anime "Dorohedoro" takes place?`,
    option: [
      {
        text: "Hole",
        correct: true,
      },
      { text: "Pit" },
      { text: "Underground" },
      { text: "Abyss" },
    ],
  },
];
