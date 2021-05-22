/** @jsxImportSource @emotion/react */
import { FC, useContext, useState } from "react";
import tw, { theme as twTheme } from "twin.macro";
import { useMediaQuery } from "@material-ui/core";
import { checkVerb } from "../../services/checkService";
import { FormType } from "../../shared/types";
import { PracticeFormField } from "./PracticeFormField";
import { PracticeFormFooter } from "./PracticeFormFooter";
import { PracticeFormHeader } from "./PracticeFormHeader";
import { AppContext } from "../../shared/context";

type Props = {};

export const PracticeForm: FC<Props> = ({}) => {
  const {
    state: { controlState, currentVerb },
    dispatch,
  } = useContext(AppContext);
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
      dispatch
    );
  };
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
          label="Meaning:"
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
