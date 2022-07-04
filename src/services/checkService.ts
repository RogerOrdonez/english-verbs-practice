import { Dispatch, RefObject, SetStateAction } from "react";
import { ControlStateAction, CurrentVerbAction } from "../shared/enums";
import {
  ControlStateActionType,
  ControlStateType,
  CurrentVerbActionType,
  CurrentVerbType,
  FormType,
} from "../shared/types";

export const checkVerbTense = (
  formTenseValue: string,
  currentTenseValue: Array<string>,
  hasStrictCheck = true
) => {
  const inputValue = formTenseValue
    .toLowerCase()
    .split(",")
    .join("")
    .split(" ")
    .map((verbTense) => verbTense.trim());
  let correctValue = currentTenseValue.map((verbTense) =>
    verbTense.trim().toLowerCase()
  );
  let validInput = 0;
  correctValue.forEach((verbTense) => {
    if (inputValue.includes(verbTense)) validInput++;
  });
  if (inputValue.length > 1 && correctValue.length === 1) {
    correctValue = correctValue[0].split(" ");
    correctValue.forEach((verbTense) => {
      if (inputValue.includes(verbTense)) validInput++;
    });
  }
  return hasStrictCheck ? validInput === correctValue.length : validInput > 0;
};

export const checkVerb = (
  practiceForm: FormType,
  setPracticeForm: Dispatch<SetStateAction<FormType>>,
  currentVerb: CurrentVerbType,
  controlState: ControlStateType,
  controlStateDispatch: Dispatch<ControlStateActionType>,
  currentVerbDispatch: Dispatch<CurrentVerbActionType>,
  firstInputRef: RefObject<HTMLInputElement>
) => {
  const { verbTense, isVerbCorrect, isVerbChecked } = currentVerb;
  const { counter, verbsLength } = controlState;
  currentVerbDispatch({
    type: CurrentVerbAction.SetUserInput,
    payload: { userInputVerb: practiceForm },
  });
  if (verbTense) {
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
      ? currentVerbDispatch({
          type: CurrentVerbAction.MarkPastParticipleCorrect,
        })
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
      verbTense.tenses.meaning,
      false
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
        firstInputRef.current?.focus();
      } else {
        if (counter === 0) {
          setTimeout(() => {
            controlStateDispatch({ type: ControlStateAction.IncrementCounter });
            setTimeout(() => {
              controlStateDispatch({
                type: ControlStateAction.DecrementCounter,
              });
            }, 10);
          }, 10);
        }
        controlStateDispatch({ type: ControlStateAction.ResetCounter });
        controlStateDispatch({ type: ControlStateAction.IncrementCycles });
        currentVerbDispatch({ type: CurrentVerbAction.MarkVerbUnchecked });
        currentVerbDispatch({ type: CurrentVerbAction.HideAnswer });
        setPracticeForm({
          present: "",
          past: "",
          pastParticiple: "",
          presentParticiple: "",
          meaning: "",
        });
        firstInputRef.current?.focus();
      }
    }
    if (isCurrentVerbCorrect && !isVerbChecked) {
      controlStateDispatch({ type: ControlStateAction.IncrementSuccess });
    } else if (!isCurrentVerbCorrect && !isVerbChecked) {
      controlStateDispatch({ type: ControlStateAction.IncrementError });
    }
    currentVerbDispatch({ type: CurrentVerbAction.MarkVerbChecked });
  }
};
