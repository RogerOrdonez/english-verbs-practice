import { FormType, VerbType } from "../shared/Types";

export const reset = (setCounter: Function, setIsVerbChecked: Function) => {
  setCounter(0);
  setIsVerbChecked(false);
};

export const checkPastParticipleVerb = (
  formPastParticiple: string,
  currentVerbPastParticiple: Array<string>
) => {
  const inputPastParticiple = formPastParticiple
    .toLowerCase()
    .split(",")
    .map((verbTense) => verbTense.trim());
  const correctPastParticipleVerb = currentVerbPastParticiple.map((verbTense) =>
    verbTense.trim().toLowerCase()
  );
  let validInput = 0;
  correctPastParticipleVerb.forEach((verbTense) => {
    if (inputPastParticiple.includes(verbTense)) validInput++;
  });
  return validInput === correctPastParticipleVerb.length;
};

export const checkPastVerb = (
  formPast: string,
  currentVerbPast: Array<string>
) => {
  const inputPast = formPast
    .toLowerCase()
    .split(",")
    .map((verbTense) => verbTense.trim());
  const correctPastVerb = currentVerbPast.map((verbTense) =>
    verbTense.trim().toLowerCase()
  );
  let validInput = 0;
  correctPastVerb.forEach((verbTense) => {
    if (inputPast.includes(verbTense)) validInput++;
  });
  return validInput === correctPastVerb.length;
};

export const checkPresentParticipleVerb = (
  formPresentParticiple: string,
  currentVerbPresentParticiple: Array<string>
) => {
  const inputPresentParticiple = formPresentParticiple
    .toLowerCase()
    .split(",")
    .map((verbTense) => verbTense.trim());
  const correctPresentParticipleVerb = currentVerbPresentParticiple.map(
    (verbTense) => verbTense.trim().toLowerCase()
  );
  let validInput = 0;
  correctPresentParticipleVerb.forEach((verbTense) => {
    if (inputPresentParticiple.includes(verbTense)) validInput++;
  });
  return validInput === correctPresentParticipleVerb.length;
};

export const checkPresentVerb = (
  formPresent: string,
  currentVerbPresent: Array<string>
) => {
  const inputPresent = formPresent
    .toLowerCase()
    .split(",")
    .map((presentVerb) => presentVerb.trim());
  const correctPresentVerb = currentVerbPresent.map((presentVerb) =>
    presentVerb.trim().toLowerCase()
  );
  let validInput = 0;
  correctPresentVerb.forEach((presentVerb) => {
    if (inputPresent.includes(presentVerb)) validInput++;
  });
  return validInput === correctPresentVerb.length;
};

export const checkVerbMeaning = (
  formMeaning: string,
  currentVerbMeaning: Array<string>
) => {
  const inputMeaningParticiple = formMeaning
    .toLowerCase()
    .split(",")
    .map((verbTense) => verbTense.trim());
  const correctMeaningParticipleVerb = currentVerbMeaning.map((verbTense) =>
    verbTense.trim().toLowerCase()
  );
  let validInput = 0;
  correctMeaningParticipleVerb.forEach((verbTense) => {
    if (inputMeaningParticiple.includes(verbTense)) validInput++;
  });
  return validInput === correctMeaningParticipleVerb.length;
};

export const checkVerb = (
  setCheckedVerb: Function,
  setIsVerbCorrect: Function,
  setIsVerbChecked: Function,
  setCounter: Function,
  setFormValue: Function,
  formValue: FormType,
  currentVerb: VerbType,
  isVerbChecked: boolean,
  counter: number,
  verbsLength: number
) => {
  if (!isVerbChecked) {
    setCheckedVerb(() => {
      const verb = {
        isPresentCorrect: checkPresentVerb(
          formValue.present,
          currentVerb.tenses.present
        ),
        isPastCorrect: checkPastVerb(formValue.past, currentVerb.tenses.past),
        isPastParticipleCorrect: checkPastParticipleVerb(
          formValue.pastParticiple,
          currentVerb.tenses.pastParticiple
        ),
        isPresentParticipleCorrect: checkPresentParticipleVerb(
          formValue.presentParticiple,
          currentVerb.tenses.presentParticiple
        ),
        isMeaningCorrect: checkVerbMeaning(
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
  }
  if (isVerbChecked) {
    if (counter < verbsLength - 1) {
      setCounter(counter + 1);
      setFormValue({
        present: "",
        past: "",
        pastParticiple: "",
        presentParticiple: "",
        meaning: "",
      });
      setIsVerbChecked(false);
    } else {
      reset(setCounter, setIsVerbChecked);
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
