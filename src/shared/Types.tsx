export type VerbType = {
  verb: string;
  type: string;
  tenses: {
    infinitive: string;
    present: Array<string>;
    past: Array<string>;
    pastParticiple: Array<string>;
    presentParticiple: Array<string>;
    meaning: Array<string>;
  };
};

export type CheckedVerbType = {
  isPresentCorrect: boolean;
  isPastCorrect: boolean;
  isPastParticipleCorrect: boolean;
  isPresentParticipleCorrect: boolean;
  isMeaningCorrect: boolean;
};

export type FormType = {
  present: string;
  past: string;
  pastParticiple: string;
  presentParticiple: string;
  meaning: string;
};
