import { VerbType } from "../shared/types";

export const verbs: Array<VerbType> = [
  {
    name: "Answer",
    type: "regular",
    tenses: {
      infinitive: "To Answer",
      present: ["Answer", "Answers"],
      past: ["Answered"],
      pastParticiple: ["Answered"],
      presentParticiple: ["Answering"],
      meaning: ["Responder", "Contestar"],
    },
  },
  {
    name: "Ask",
    type: "regular",
    tenses: {
      infinitive: "To Ask",
      present: ["Ask", "Asks"],
      past: ["Asked"],
      pastParticiple: ["Asked"],
      presentParticiple: ["Asking"],
      meaning: ["Preguntar", "Pedir"],
    },
  },
  {
    name: "Be",
    type: "irregular",
    tenses: {
      infinitive: "To Be",
      present: ["Am", "Is", "Are"],
      past: ["Was", "Were"],
      pastParticiple: ["Been"],
      presentParticiple: ["Being"],
      meaning: ["Ser", "Estar"],
    },
  },
  {
    name: "Call",
    type: "regular",
    tenses: {
      infinitive: "To Call",
      present: ["Call", "Calls"],
      past: ["Called"],
      pastParticiple: ["Called"],
      presentParticiple: ["Calling"],
      meaning: ["Llamar"],
    },
  },
  {
    name: "Clean",
    type: "regular",
    tenses: {
      infinitive: "To Clean",
      present: ["Clean", "Cleans"],
      past: ["Cleaned"],
      pastParticiple: ["Cleaned"],
      presentParticiple: ["Cleaning"],
      meaning: ["Limpiar"],
    },
  },
  {
    name: "Close",
    type: "regular",
    tenses: {
      infinitive: "To Close",
      present: ["Close", "Closes"],
      past: ["Closed"],
      pastParticiple: ["Closed"],
      presentParticiple: ["Closing"],
      meaning: ["Cerrar"],
    },
  },
  {
    name: "Come",
    type: "irregular",
    tenses: {
      infinitive: "To Come",
      present: ["Come", "Comes"],
      past: ["Came"],
      pastParticiple: ["Come"],
      presentParticiple: ["Coming"],
      meaning: ["Venir"],
    },
  },
  {
    name: "Copy",
    type: "regular",
    tenses: {
      infinitive: "To Copy",
      present: ["Copy", "Copies"],
      past: ["Copied"],
      pastParticiple: ["Copied"],
      presentParticiple: ["Copying"],
      meaning: ["Copiar"],
    },
  },
  {
    name: "Do",
    type: "irregular",
    tenses: {
      infinitive: "To Do",
      present: ["Do", "Does"],
      past: ["Did"],
      pastParticiple: ["Done"],
      presentParticiple: ["Doing"],
      meaning: ["Hacer"],
    },
  },
  {
    name: "Draw",
    type: "irregular",
    tenses: {
      infinitive: "To Draw",
      present: ["Draw", "Draws"],
      past: ["Drew"],
      pastParticiple: ["Drawn"],
      presentParticiple: ["Drawing"],
      meaning: ["Dibujar"],
    },
  },
];
