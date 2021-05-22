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

export const reset = (
  dispatch: Dispatch<ControlStateActionType | CurrentVerbActionType>
) => {
  dispatch({ type: ControlStateAction.ResetCounter });
  dispatch({ type: CurrentVerbAction.MarkVerbUnchecked });
  dispatch({ type: CurrentVerbAction.HideAnswer });
};

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
  dispatch: Dispatch<ControlStateActionType | CurrentVerbActionType>
) => {
  const { verbTense, isVerbCorrect, isVerbChecked } = currentVerb;
  const { counter, verbsLength } = controlState;
  const isPresentCorrect = checkVerbTense(
    practiceForm.present,
    verbTense.tenses.present
  );
  isPresentCorrect
    ? dispatch({ type: CurrentVerbAction.MarkPresentCorrect })
    : dispatch({ type: CurrentVerbAction.MarkPresentIncorrect });
  const isPastCorrect = checkVerbTense(
    practiceForm.past,
    verbTense.tenses.past
  );
  isPastCorrect
    ? dispatch({ type: CurrentVerbAction.MarkPastCorrect })
    : dispatch({ type: CurrentVerbAction.MarkPastIncorrect });
  const isPastParticipleCorrect = checkVerbTense(
    practiceForm.pastParticiple,
    verbTense.tenses.pastParticiple
  );
  isPastParticipleCorrect
    ? dispatch({ type: CurrentVerbAction.MarkPastParticipleCorrect })
    : dispatch({ type: CurrentVerbAction.MarkPastParticipleIncorrect });
  const isPresentParticipleCorrect = checkVerbTense(
    practiceForm.presentParticiple,
    verbTense.tenses.presentParticiple
  );
  isPresentParticipleCorrect
    ? dispatch({ type: CurrentVerbAction.MarkPresentParticipleCorrect })
    : dispatch({ type: CurrentVerbAction.MarkPresentParticipleIncorrect });
  const isMeaningCorrect = checkVerbTense(
    practiceForm.meaning,
    verbTense.tenses.meaning
  );
  isMeaningCorrect
    ? dispatch({ type: CurrentVerbAction.MarkMeaningCorrect })
    : dispatch({ type: CurrentVerbAction.MarkMeaningIncorrect });
  const isCurrentVerbCorrect =
    isPresentCorrect &&
    isPastCorrect &&
    isPastParticipleCorrect &&
    isPresentParticipleCorrect &&
    isMeaningCorrect;
  isCurrentVerbCorrect
    ? dispatch({ type: CurrentVerbAction.MarkVerbCorrect })
    : dispatch({ type: CurrentVerbAction.MarkVerbIncorrect });
  dispatch({ type: CurrentVerbAction.MarkVerbChecked });
  if (isVerbCorrect && isVerbChecked) {
    if (counter < verbsLength - 1) {
      dispatch({ type: ControlStateAction.IncrementCounter });
      dispatch({ type: CurrentVerbAction.HideAnswer });
      setPracticeForm({
        present: "",
        past: "",
        pastParticiple: "",
        presentParticiple: "",
        meaning: "",
      });
      dispatch({ type: CurrentVerbAction.MarkVerbUnchecked });
    } else {
      reset(dispatch);
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
