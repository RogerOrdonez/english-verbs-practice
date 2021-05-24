/** @jsxImportSource @emotion/react */
import { FC, useContext, useEffect, useState } from "react";
import tw, { theme as twTheme } from "twin.macro";
import { useMediaQuery } from "@material-ui/core";
import { checkVerb } from "../../services/checkService";
import { FormType } from "../../shared/types";
import { PracticeFormField } from "./PracticeFormField";
import { PracticeFormFooter } from "./PracticeFormFooter";
import { PracticeFormHeader } from "./PracticeFormHeader";
import { CurrentVerbContext, ControlStateContext } from "../../shared/context";
import { CurrentVerbAction } from "../../shared/enums";
import { verbs } from "../../data/verbs";

type Props = {};

export const PracticeForm: FC<Props> = ({}) => {
  const { state: controlState, dispatch: controlStateDispatch } =
    useContext(ControlStateContext);
  const { state: currentVerb, dispatch: currentVerbDispatch } =
    useContext(CurrentVerbContext);
  const isDesktop = useMediaQuery(`(min-width: ${twTheme`screens.lg`})`);
  const progressBarWidth = isDesktop ? 13 : 20;
  const [practiceForm, setPracticeForm] = useState<FormType>({
    present: "",
    past: "",
    pastParticiple: "",
    presentParticiple: "",
    meaning: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPracticeForm({
      ...practiceForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkVerb(
      practiceForm,
      setPracticeForm,
      currentVerb,
      controlState,
      controlStateDispatch,
      currentVerbDispatch
    );
  };
  useEffect(() => {
    if (currentVerb.isVerbChecked) {
      if (currentVerb.isShowingAnswer) {
        currentVerbDispatch({
          type: CurrentVerbAction.SetUserInput,
          payload: { userInputVerb: practiceForm },
        });
        setPracticeForm({
          present: !currentVerb.isPresentCorrect
            ? currentVerb.verbTense.tenses.present.join(", ")
            : practiceForm.present,
          past: !currentVerb.isPastCorrect
            ? currentVerb.verbTense.tenses.past.join(", ")
            : practiceForm.past,
          pastParticiple: !currentVerb.isPastParticipleCorrect
            ? currentVerb.verbTense.tenses.pastParticiple.join(", ")
            : practiceForm.pastParticiple,
          presentParticiple: !currentVerb.isPresentParticipleCorrect
            ? currentVerb.verbTense.tenses.presentParticiple.join(", ")
            : practiceForm.presentParticiple,
          meaning: !currentVerb.isMeaningCorrect
            ? currentVerb.verbTense.tenses.meaning.join(", ")
            : practiceForm.meaning,
        });
      } else {
        setPracticeForm(currentVerb.userInputVerb);
      }
    }
  }, [currentVerb.isShowingAnswer]);
  useEffect(() => {
    currentVerbDispatch({
      type: CurrentVerbAction.SetCurrentVerb,
      payload: { newCurrentVerb: verbs[controlState.counter] },
    });
  }, [controlState.counter]);
  return (
    <div css={tw`px-4 pt-1 lg:pt-4 w-full lg:w-2/3`}>
      <PracticeFormHeader
        progressBarWidth={progressBarWidth}
        counter={controlState.counter}
        totalVerbsCount={controlState.verbsLength}
        isVerbChecked={currentVerb.isVerbChecked}
      />
      <form onSubmit={(e) => handleSubmit(e)}>
        <PracticeFormField
          id="present"
          label="Present Tense:"
          formValue={practiceForm.present}
          isVerbChecked={currentVerb.isVerbChecked}
          isTenseCorrect={currentVerb.isPresentCorrect}
          handleInputChange={handleInputChange}
          isShowingAnswer={currentVerb.isShowingAnswer}
        />
        <PracticeFormField
          id="past"
          label="Past Tense:"
          formValue={practiceForm.past}
          isVerbChecked={currentVerb.isVerbChecked}
          isTenseCorrect={currentVerb.isPastCorrect}
          handleInputChange={handleInputChange}
          isShowingAnswer={currentVerb.isShowingAnswer}
        />
        <PracticeFormField
          id="pastParticiple"
          label="Past Participle:"
          formValue={practiceForm.pastParticiple}
          isVerbChecked={currentVerb.isVerbChecked}
          isTenseCorrect={currentVerb.isPastParticipleCorrect}
          handleInputChange={handleInputChange}
          isShowingAnswer={currentVerb.isShowingAnswer}
        />
        <PracticeFormField
          id="presentParticiple"
          label="Present Participle:"
          formValue={practiceForm.presentParticiple}
          isVerbChecked={currentVerb.isVerbChecked}
          isTenseCorrect={currentVerb.isPresentParticipleCorrect}
          handleInputChange={handleInputChange}
          isShowingAnswer={currentVerb.isShowingAnswer}
        />
        <PracticeFormField
          id="meaning"
          label="Spanish Meanings:"
          formValue={practiceForm.meaning}
          isVerbChecked={currentVerb.isVerbChecked}
          isTenseCorrect={currentVerb.isMeaningCorrect}
          handleInputChange={handleInputChange}
          isShowingAnswer={currentVerb.isShowingAnswer}
        />
        <PracticeFormFooter
          isVerbChecked={currentVerb.isVerbChecked}
          isVerbCorrect={currentVerb.isVerbCorrect}
          counter={controlState.counter}
          verbsLength={controlState.verbsLength}
          isShowingAnswer={currentVerb.isShowingAnswer}
        />
      </form>
    </div>
  );
};
