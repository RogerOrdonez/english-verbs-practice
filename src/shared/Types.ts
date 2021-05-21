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
export type CurrentVerbType = {
  verbTense: VerbType;
  isVerbCorrect: boolean;
  isVerbChecked: boolean;
  isPresentCorrect: boolean;
  isPastCorrect: boolean;
  isPastParticipleCorrect: boolean;
  isPresentParticipleCorrect: boolean;
  isMeaningCorrect: boolean;
  isShowingAnswer: boolean;
};
export type CurrentVerbActionType = {
  type: string;
};
export type ControlStateType = {
  counter: number;
  totalVerbsCount: number;
};
export type ControlStateActionType = {
  type: string;
  value?: number;
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
