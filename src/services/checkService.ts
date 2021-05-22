import { Dispatch } from "react";
import { ControlStateAction, CurrentVerbAction } from "../shared/enums";
import {
  ControlStateActionType,
  ControlStateType,
  CurrentVerbActionType,
  CurrentVerbType,
  FormType,
  VerbType,
} from "../shared/types";

export const checkVerbTense = (
  formTenseValue: string,
  currentTenseValue: Array<string>
) => {
  const inputValue = formTenseValue
    .toLowerCase()
    .split(",")
    .map((verbTense) => verbTense.trim());
  const correctValue = currentTenseValue.map((verbTense) =>
    verbTense.trim().toLowerCase()
  );
  let validInput = 0;
  correctValue.forEach((verbTense) => {
    if (inputValue.includes(verbTense)) validInput++;
  });
  return validInput === correctValue.length;
};

export const checkVerb = (
  practiceForm: FormType,
  setPracticeForm: Function,
  currentVerb: CurrentVerbType,
  controlState: ControlStateType,
  controlStateDispatch: Dispatch<ControlStateActionType>,
  currentVerbDispatch: Dispatch<CurrentVerbActionType>
) => {
  const { verbTense, isVerbCorrect, isVerbChecked } = currentVerb;
  const { counter, verbsLength } = controlState;
  currentVerbDispatch({
    type: CurrentVerbAction.SetUserInput,
    payload: { userInputVerb: practiceForm },
  });
  const isPresentCorrect = checkVerbTense(
    practiceForm.present,
    verbTense.tenses.present
  );
  isPresentCorrect
    ? currentVerbDispatch({ type: CurrentVerbAction.MarkPresentCorrect })
    : currentVerbDispatch({ type: CurrentVerbAction.MarkPresentIncorrect });
  const isPastCorrect = checkVerbTense(
    practiceForm.past,
    verbTense.tenses.past
  );
  isPastCorrect
    ? currentVerbDispatch({ type: CurrentVerbAction.MarkPastCorrect })
    : currentVerbDispatch({ type: CurrentVerbAction.MarkPastIncorrect });
  const isPastParticipleCorrect = checkVerbTense(
    practiceForm.pastParticiple,
    verbTense.tenses.pastParticiple
  );
  isPastParticipleCorrect
    ? currentVerbDispatch({ type: CurrentVerbAction.MarkPastParticipleCorrect })
    : currentVerbDispatch({
        type: CurrentVerbAction.MarkPastParticipleIncorrect,
      });
  const isPresentParticipleCorrect = checkVerbTense(
    practiceForm.presentParticiple,
    verbTense.tenses.presentParticiple
  );
  isPresentParticipleCorrect
    ? currentVerbDispatch({
        type: CurrentVerbAction.MarkPresentParticipleCorrect,
      })
    : currentVerbDispatch({
        type: CurrentVerbAction.MarkPresentParticipleIncorrect,
      });
  const isMeaningCorrect = checkVerbTense(
    practiceForm.meaning,
    verbTense.tenses.meaning
  );
  isMeaningCorrect
    ? currentVerbDispatch({ type: CurrentVerbAction.MarkMeaningCorrect })
    : currentVerbDispatch({ type: CurrentVerbAction.MarkMeaningIncorrect });
  const isCurrentVerbCorrect =
    isPresentCorrect &&
    isPastCorrect &&
    isPastParticipleCorrect &&
    isPresentParticipleCorrect &&
    isMeaningCorrect;
  isCurrentVerbCorrect
    ? currentVerbDispatch({ type: CurrentVerbAction.MarkVerbCorrect })
    : currentVerbDispatch({ type: CurrentVerbAction.MarkVerbIncorrect });
  currentVerbDispatch({ type: CurrentVerbAction.MarkVerbChecked });
  if (isVerbCorrect && isVerbChecked) {
    if (counter < verbsLength - 1) {
      controlStateDispatch({ type: ControlStateAction.IncrementCounter });
      currentVerbDispatch({ type: CurrentVerbAction.HideAnswer });
      setPracticeForm({
        present: "",
        past: "",
        pastParticiple: "",
        presentParticiple: "",
        meaning: "",
      });
      currentVerbDispatch({ type: CurrentVerbAction.MarkVerbUnchecked });
    } else {
      controlStateDispatch({ type: ControlStateAction.ResetCounter });
      currentVerbDispatch({ type: CurrentVerbAction.MarkVerbUnchecked });
      currentVerbDispatch({ type: CurrentVerbAction.HideAnswer });
      setPracticeForm({
        present: "",
        past: "",
        pastParticiple: "",
        presentParticiple: "",
        meaning: "",
      });
    }
  }
};
