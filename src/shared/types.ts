import {
  ControlStateAction,
  CurrentVerbAction,
  SelectedVerbsAction,
} from "./enums";

export type VerbType = {
  name: string;
  type: string;
  tenses: {
    infinitive: string;
    present: Array<string>;
    past: Array<string>;
    pastParticiple: Array<string>;
    presentParticiple: Array<string>;
    meaning: Array<string>;
  };
  isSelected?: boolean;
};

export type CurrentVerbType = {
  verbTense?: VerbType;
  userInputVerb: FormType;
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
  verbsLength: number;
  successCounter: number;
  errorCounter: number;
  skippedCounter: number;
};

export type CurrentVerbPayload = {
  [CurrentVerbAction.SetCurrentVerb]: {
    newCurrentVerb: VerbType | undefined;
  };
  [CurrentVerbAction.MarkVerbCorrect]: undefined;
  [CurrentVerbAction.MarkVerbIncorrect]: undefined;
  [CurrentVerbAction.MarkPresentCorrect]: undefined;
  [CurrentVerbAction.MarkPresentIncorrect]: undefined;
  [CurrentVerbAction.MarkPastCorrect]: undefined;
  [CurrentVerbAction.MarkPastIncorrect]: undefined;
  [CurrentVerbAction.MarkPresentParticipleCorrect]: undefined;
  [CurrentVerbAction.MarkPresentParticipleIncorrect]: undefined;
  [CurrentVerbAction.MarkPastParticipleCorrect]: undefined;
  [CurrentVerbAction.MarkPastParticipleIncorrect]: undefined;
  [CurrentVerbAction.MarkMeaningCorrect]: undefined;
  [CurrentVerbAction.MarkMeaningIncorrect]: undefined;
  [CurrentVerbAction.ShowAnswer]: undefined;
  [CurrentVerbAction.HideAnswer]: undefined;
  [CurrentVerbAction.MarkVerbChecked]: undefined;
  [CurrentVerbAction.MarkVerbUnchecked]: undefined;
  [CurrentVerbAction.SetUserInput]: {
    userInputVerb: FormType;
  };
};

export type ControlStatePayload = {
  [ControlStateAction.SetVerbsLenght]: number;
  [ControlStateAction.IncrementCounter]: undefined;
  [ControlStateAction.DecrementCounter]: undefined;
  [ControlStateAction.ResetCounter]: undefined;
  [ControlStateAction.IncrementSuccess]: undefined;
  [ControlStateAction.ResetSuccess]: undefined;
  [ControlStateAction.IncrementError]: undefined;
  [ControlStateAction.ResetError]: undefined;
  [ControlStateAction.IncrementSkipped]: undefined;
  [ControlStateAction.ResetSkipped]: undefined;
};

export type SelectedVerbsPayload = {
  [SelectedVerbsAction.SelectVerb]: {
    verb: VerbType | undefined;
  };
  [SelectedVerbsAction.UnselectVerb]: {
    verb: VerbType | undefined;
  };
};

export type CurrentVerbActionType =
  ActionMap<CurrentVerbPayload>[keyof ActionMap<CurrentVerbPayload>];

export type ControlStateActionType =
  ActionMap<ControlStatePayload>[keyof ActionMap<ControlStatePayload>];

export type SelectedVerbsActionType =
  ActionMap<SelectedVerbsPayload>[keyof ActionMap<SelectedVerbsPayload>];

export type FormType = {
  present: string;
  past: string;
  pastParticiple: string;
  presentParticiple: string;
  meaning: string;
};

export type ActionMap<M extends { [index: string]: unknown }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};
