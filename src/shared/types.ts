import { ControlStateAction, CurrentVerbAction } from "./enums";

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
export type ControlStateType = {
  counter: number;
  totalVerbsCount: number;
};
export type CurrentVerbPayload = {
  [CurrentVerbAction.SetCurrentVerb]: {
    newCurrentVerb: CurrentVerbType;
  };
  [CurrentVerbAction.MarkVerbCorrect]: null;
  [CurrentVerbAction.MarkVerbIncorrect]: null;
  [CurrentVerbAction.MarkPresentCorrect]: null;
  [CurrentVerbAction.MarkPresentIncorrect]: null;
  [CurrentVerbAction.MarkPastCorrect]: null;
  [CurrentVerbAction.MarkPastIncorrect]: null;
  [CurrentVerbAction.MarkPresentParticipleCorrect]: null;
  [CurrentVerbAction.MarkPresentParticipleIncorrect]: null;
  [CurrentVerbAction.MarkPastParticipleCorrect]: null;
  [CurrentVerbAction.MarkPastParticipleIncorrect]: null;
  [CurrentVerbAction.MarkMeaningCorrect]: null;
  [CurrentVerbAction.MarkMeaningIncorrect]: null;
  [CurrentVerbAction.ShowAnswer]: null;
  [CurrentVerbAction.HideAnswer]: null;
};
export type ControlStatebPayload = {
  [ControlStateAction.SetTotalVerbsCount]: number;
  [ControlStateAction.IncrementCounter]: null;
  [ControlStateAction.DecrementCounter]: null;
};

export type CurrentVerbActionType =
  ActionMap<CurrentVerbPayload>[keyof ActionMap<CurrentVerbPayload>];

export type ControlStateActionType =
  ActionMap<ControlStatebPayload>[keyof ActionMap<ControlStatebPayload>];
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
export type InitialStateType = {
  currentVerb: CurrentVerbType;
  controlState: ControlStateType;
};
export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};
