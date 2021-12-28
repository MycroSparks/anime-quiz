export interface Answer {
  text: string;
  correct?: boolean;
}

export interface Question {
  text: string;
  answers: Answer[];
}

export const questions: Question[] = [
  {
    text: "What does Naruto want to become?",
    answers: [
      { text: "Pirate King" },
      { text: "Wizard King" },
      { text: "Shaman King" },
      { text: "Hokage", correct: true },
    ],
  },
  {
    text: "Where does anime originate from?",
    answers: [
      { text: "Japan", correct: true },
      { text: "China" },
      { text: "Pakistan" },
      { text: "The Moon" },
    ],
  },
  {
    text: "Which of these pokemon is a fire type?",
    answers: [
      { text: "Lickitung" },
      { text: "Muk" },
      { text: "Rapidash", correct: true },
      { text: "Paras" },
    ],
  },
  {
    text: `Who is the creator of the "Jojo's Bizzare Adventure" manga?`,
    answers: [
      { text: "Masashi Kishimoto" },
      { text: "Hirohiko Araki", correct: true },
      { text: "Hajime Isayama" },
      { text: "Yoshihiro Togashi" },
    ],
  },
  {
    text: "Which of these anime came out first?",
    answers: [
      { text: "Hajime no Ippo" },
      { text: "Yu Yu Hakusho" },
      { text: "Digimon Adventure" },
      { text: "Dragon ball", correct: true },
    ],
  },
  {
    text: 'Who is the main villain in the made in the movie "Made in Abyss: Dawn of the Deep Soul"?',
    answers: [
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
    text: 'What do shinigami from "Deathnote" love to eat?',
    answers: [
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
    text: "What does Hyakkimaru from the anime Dororo recover first?",
    answers: [
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
    text: `What's the english name of the anime "Mirai Nikki"?`,
    answers: [
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
    text: `Who is rank 8 on the hero leaderboard in the anime "One Punch Man"?`,
    answers: [
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
    text: `What's the name of the place where the plot of the anime "Dorohedoro" takes place?`,
    answers: [
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
