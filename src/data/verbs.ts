import { VerbType } from "../shared/types";

export const verbs: Array<VerbType> = [
  {
    verb: "Be",
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
    verb: "Answer",
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
    verb: "Ask",
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
];
