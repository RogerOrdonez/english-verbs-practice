import { FormType, VerbType } from "../shared/Types";

export const reset = (
  setCounter: Function,
  setIsVerbChecked: Function,
  setIsShowingAnswer: Function
) => {
  setCounter(0);
  setIsVerbChecked(false);
  setIsShowingAnswer(false);
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
  setCheckedVerb: Function,
  setIsVerbCorrect: Function,
  setIsVerbChecked: Function,
  setCounter: Function,
  setFormValue: Function,
  setIsShowingAnswer: Function,
  formValue: FormType,
  currentVerb: VerbType,
  isVerbChecked: boolean,
  isVerbCorrect: boolean,
  counter: number,
  verbsLength: number
) => {
  setCheckedVerb(() => {
    const verb = {
      isPresentCorrect: checkVerbTense(
        formValue.present,
        currentVerb.tenses.present
      ),
      isPastCorrect: checkVerbTense(formValue.past, currentVerb.tenses.past),
      isPastParticipleCorrect: checkVerbTense(
        formValue.pastParticiple,
        currentVerb.tenses.pastParticiple
      ),
      isPresentParticipleCorrect: checkVerbTense(
        formValue.presentParticiple,
        currentVerb.tenses.presentParticiple
      ),
      isMeaningCorrect: checkVerbTense(
        formValue.meaning,
        currentVerb.tenses.meaning
      ),
    };
    setIsVerbCorrect(
      verb.isPresentCorrect &&
        verb.isPastCorrect &&
        verb.isPastParticipleCorrect &&
        verb.isPresentParticipleCorrect &&
        verb.isMeaningCorrect
    );
    return verb;
  });
  setIsVerbChecked(true);
  if (isVerbCorrect && isVerbChecked) {
    if (counter < verbsLength - 1) {
      setCounter(counter + 1);
      setIsShowingAnswer(false);
      setFormValue({
        present: "",
        past: "",
        pastParticiple: "",
        presentParticiple: "",
        meaning: "",
      });
      setIsVerbChecked(false);
    } else {
      reset(setCounter, setIsVerbChecked, setIsShowingAnswer);
      setFormValue({
        present: "",
        past: "",
        pastParticiple: "",
        presentParticiple: "",
        meaning: "",
      });
    }
  }
};
