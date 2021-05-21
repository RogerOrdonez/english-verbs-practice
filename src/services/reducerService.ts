import { ControlStateAction, CurrentVerbAction } from "../shared/Enums";
import {
  ControlStateActionType,
  ControlStateType,
  CurrentVerbActionType,
  CurrentVerbType,
} from "../shared/Types";

export const currentVerbReducer = (
  state: CurrentVerbType,
  action: CurrentVerbActionType
): CurrentVerbType => {
  switch (action.type) {
    case CurrentVerbAction.markVerbCorrect:
      return { ...state, isVerbCorrect: true };
    case CurrentVerbAction.markVerbIncorrect:
      return { ...state, isVerbCorrect: false };
    case CurrentVerbAction.markPresentCorrect:
      return { ...state, isPresentCorrect: true };
    case CurrentVerbAction.markVerbIncorrect:
      return { ...state, isPresentCorrect: false };
    case CurrentVerbAction.markPastCorrect:
      return { ...state, isPastCorrect: true };
    case CurrentVerbAction.markPastIncorrect:
      return { ...state, isPastCorrect: false };
    case CurrentVerbAction.markPastParticipleCorrect:
      return { ...state, isPastParticipleCorrect: true };
    case CurrentVerbAction.markPastParticipleIncorrect:
      return { ...state, isPastParticipleCorrect: false };
    case CurrentVerbAction.markPresentParticipleCorrect:
      return { ...state, isPresentParticipleCorrect: true };
    case CurrentVerbAction.markPresentParticipleIncorrect:
      return { ...state, isPresentParticipleCorrect: false };
    case CurrentVerbAction.markMeaningCorrect:
      return { ...state, isMeaningCorrect: true };
    case CurrentVerbAction.markMeaningIncorrect:
      return { ...state, isMeaningCorrect: false };
    case CurrentVerbAction.showAnswer:
      return { ...state, isShowingAnswer: true };
    case CurrentVerbAction.hideAnswer:
      return { ...state, isShowingAnswer: false };
    default:
      throw new Error();
  }
};

export const controlStateReducer = (
  state: ControlStateType,
  action: ControlStateActionType
): ControlStateType => {
  switch (action.type) {
    case ControlStateAction.incrementCounter:
      return { ...state, counter: state.counter + 1 };
    case ControlStateAction.decrementCounter:
      return { ...state, counter: state.counter - 1 };
    case ControlStateAction.setTotalVerbsCount:
      return { ...state, totalVerbsCount: action.value || 0 };
    default:
      throw new Error();
  }
};
