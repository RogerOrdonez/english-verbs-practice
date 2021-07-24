import {
  ControlStateAction,
  CurrentVerbAction,
  SelectedVerbsAction,
} from "./enums";
import {
  ControlStateActionType,
  ControlStateType,
  CurrentVerbActionType,
  CurrentVerbType,
  SelectedVerbsActionType,
  VerbType,
} from "./types";
import { OrderedMap } from "immutable";

export const currentVerbReducer = (
  state: CurrentVerbType,
  action: CurrentVerbActionType
): CurrentVerbType => {
  const errorMessage = `Action type "${action.type}" is not defined for currentVerbReducer`;
  switch (action.type) {
    case CurrentVerbAction.SetCurrentVerb:
      return {
        ...state,
        verbTense: action.payload.newCurrentVerb,
        isVerbChecked: false,
        isPresentCorrect: false,
        isPastCorrect: false,
        isPastParticipleCorrect: false,
        isPresentParticipleCorrect: false,
        isMeaningCorrect: false,
      };
    case CurrentVerbAction.MarkVerbCorrect:
      return { ...state, isVerbCorrect: true };
    case CurrentVerbAction.MarkVerbIncorrect:
      return { ...state, isVerbCorrect: false };
    case CurrentVerbAction.MarkPresentCorrect:
      return { ...state, isPresentCorrect: true };
    case CurrentVerbAction.MarkPresentIncorrect:
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
    case ControlStateAction.IncrementSuccess:
      return { ...state, successCounter: state.successCounter + 1 };
    case ControlStateAction.ResetSuccess:
      return { ...state, successCounter: 0 };
    case ControlStateAction.IncrementError:
      return { ...state, errorCounter: state.errorCounter + 1 };
    case ControlStateAction.ResetError:
      return { ...state, errorCounter: 0 };
    case ControlStateAction.IncrementSkipped:
      return { ...state, skippedCounter: state.skippedCounter + 1 };
    case ControlStateAction.ResetSkipped:
      return { ...state, skippedCounter: 0 };
    default:
      throw new Error(errorMessage);
  }
};

export const verbsReducer = (
  state: OrderedMap<string, VerbType | undefined>,
  action: SelectedVerbsActionType
): OrderedMap<string, VerbType | undefined> => {
  const errorMessage = `Action type "${action.type}" is not defined for selectedVerbsReducer`;
  switch (action.type) {
    case SelectedVerbsAction.SelectVerb:
      return state.update(action.payload.verb?.name.trim() || "", (verb) => {
        if (verb) {
          return {
            ...verb,
            isSelected: true,
          };
        }
      });
    case SelectedVerbsAction.UnselectVerb:
      return state.update(action.payload.verb?.name.trim() || "", (verb) => {
        if (verb) {
          return {
            ...verb,
            isSelected: false,
          };
        }
      });
    default:
      throw new Error(errorMessage);
  }
};
