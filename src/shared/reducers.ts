import { ControlStateAction, CurrentVerbAction } from "./enums";
import {
  ControlStateActionType,
  ControlStateType,
  CurrentVerbActionType,
  CurrentVerbType,
} from "./types";

export const currentVerbReducer = (
  state: CurrentVerbType,
  action: CurrentVerbActionType
): CurrentVerbType => {
  const errorMessage = `Action type "${action.type}" is not defined for currentVerbReducer`;
  switch (action.type) {
    case CurrentVerbAction.SetCurrentVerb:
      return { ...state, verbTense: action.payload.newCurrentVerb };
    case CurrentVerbAction.MarkVerbCorrect:
      return { ...state, isVerbCorrect: true };
    case CurrentVerbAction.MarkVerbIncorrect:
      return { ...state, isVerbCorrect: false };
    case CurrentVerbAction.MarkPresentCorrect:
      return { ...state, isPresentCorrect: true };
    case CurrentVerbAction.MarkPresentIncorrect:
      return { ...state, isPresentCorrect: false };
    case CurrentVerbAction.MarkVerbIncorrect:
      return { ...state, isPresentCorrect: false };
    case CurrentVerbAction.MarkPastCorrect:
      return { ...state, isPastCorrect: true };
    case CurrentVerbAction.MarkPastIncorrect:
      return { ...state, isPastCorrect: false };
    case CurrentVerbAction.MarkPastParticipleCorrect:
      return { ...state, isPastParticipleCorrect: true };
    case CurrentVerbAction.MarkPastParticipleIncorrect:
      return { ...state, isPastParticipleCorrect: false };
    case CurrentVerbAction.MarkPresentParticipleCorrect:
      return { ...state, isPresentParticipleCorrect: true };
    case CurrentVerbAction.MarkPresentParticipleIncorrect:
      return { ...state, isPresentParticipleCorrect: false };
    case CurrentVerbAction.MarkMeaningCorrect:
      return { ...state, isMeaningCorrect: true };
    case CurrentVerbAction.MarkMeaningIncorrect:
      return { ...state, isMeaningCorrect: false };
    case CurrentVerbAction.ShowAnswer:
      return { ...state, isShowingAnswer: true };
    case CurrentVerbAction.HideAnswer:
      return { ...state, isShowingAnswer: false };
    case CurrentVerbAction.MarkVerbChecked:
      return { ...state, isVerbChecked: true };
    case CurrentVerbAction.MarkVerbUnchecked:
      return { ...state, isVerbChecked: false };
    case CurrentVerbAction.SetUserInput:
      return { ...state, userInputVerb: action.payload.userInputVerb };
    default:
      throw new Error(errorMessage);
  }
};

export const controlStateReducer = (
  state: ControlStateType,
  action: ControlStateActionType
): ControlStateType => {
  const errorMessage = `Action type "${action.type}" is not defined for controlStateReducer`;
  switch (action.type) {
    case ControlStateAction.IncrementCounter:
      return { ...state, counter: state.counter + 1 };
    case ControlStateAction.DecrementCounter:
      return { ...state, counter: state.counter - 1 };
    case ControlStateAction.ResetCounter:
      return { ...state, counter: 0 };
    case ControlStateAction.SetVerbsLenght:
      return { ...state, verbsLength: action.payload };
    default:
      throw new Error(errorMessage);
  }
};
