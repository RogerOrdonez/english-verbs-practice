/** @jsxImportSource @emotion/react */
import { FC } from "react";
import tw, { theme as twTheme } from "twin.macro";
import { useMediaQuery } from "@material-ui/core";
import { checkVerb } from "../services/checkService";
import { CheckedVerbType, FormType, VerbType } from "../shared/Types";
import { PracticeFormField } from "./PracticeFormField";
import { PracticeFormFooter } from "./PracticeFormFooter";
import { PracticeFormHeader } from "./PracticeFormHeader";

type Props = {
  verbsLength: number;
  counter: number;
  isVerbChecked: boolean;
  isVerbCorrect: boolean;
  isShowingAnswer: boolean;
  totalVerbsCount: number;
  checkedVerb: CheckedVerbType;
  formValue: FormType;
  currentVerb: VerbType;
  setFormValue: Function;
  setCheckedVerb: Function;
  setIsVerbCorrect: Function;
  setIsVerbChecked: Function;
  setIsShowingAnswer: Function;
  setCounter: Function;
};

export const PracticeForm: FC<Props> = ({
  verbsLength,
  counter,
  isVerbChecked,
  isVerbCorrect,
  isShowingAnswer,
  totalVerbsCount,
  checkedVerb,
  formValue,
  currentVerb,
  setFormValue,
  setCheckedVerb,
  setIsVerbCorrect,
  setIsVerbChecked,
  setIsShowingAnswer,
  setCounter,
}) => {
  const isDesktop = useMediaQuery(`(min-width: ${twTheme`screens.lg`})`);
  const progressBarWidth = isDesktop ? 13 : 20;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkVerb(
      setCheckedVerb,
      setIsVerbCorrect,
      setIsVerbChecked,
      setCounter,
      setFormValue,
      setIsShowingAnswer,
      formValue,
      currentVerb,
      isVerbChecked,
      isVerbCorrect,
      counter,
      verbsLength
    );
  };
  return (
    <div css={tw`px-4 pt-1 lg:pt-4 w-full lg:w-2/3`}>
      <PracticeFormHeader
        progressBarWidth={progressBarWidth}
        counter={counter}
        totalVerbsCount={totalVerbsCount}
        isVerbChecked={isVerbChecked}
      />
      <form onSubmit={(e) => handleSubmit(e)}>
        <PracticeFormField
          id="present"
          label="Present Tense:"
          formValue={formValue.present}
          isVerbChecked={isVerbChecked}
          isTenseCorrect={checkedVerb.isPresentCorrect}
          handleInputChange={handleInputChange}
          isShowingAnswer={isShowingAnswer}
        />
        <PracticeFormField
          id="past"
          label="Past Tense:"
          formValue={formValue.past}
          isVerbChecked={isVerbChecked}
          isTenseCorrect={checkedVerb.isPastCorrect}
          handleInputChange={handleInputChange}
          isShowingAnswer={isShowingAnswer}
        />
        <PracticeFormField
          id="pastParticiple"
          label="Past Participle:"
          formValue={formValue.pastParticiple}
          isVerbChecked={isVerbChecked}
          isTenseCorrect={checkedVerb.isPastParticipleCorrect}
          handleInputChange={handleInputChange}
          isShowingAnswer={isShowingAnswer}
        />
        <PracticeFormField
          id="presentParticiple"
          label="Present Participle:"
          formValue={formValue.presentParticiple}
          isVerbChecked={isVerbChecked}
          isTenseCorrect={checkedVerb.isPresentParticipleCorrect}
          handleInputChange={handleInputChange}
          isShowingAnswer={isShowingAnswer}
        />
        <PracticeFormField
          id="meaning"
          label="Meaning:"
          formValue={formValue.meaning}
          isVerbChecked={isVerbChecked}
          isTenseCorrect={checkedVerb.isMeaningCorrect}
          handleInputChange={handleInputChange}
          isShowingAnswer={isShowingAnswer}
        />
        <PracticeFormFooter
          isVerbChecked={isVerbChecked}
          isVerbCorrect={isVerbCorrect}
          counter={counter}
          verbsLength={verbsLength}
          isShowingAnswer={isShowingAnswer}
        />
      </form>
    </div>
  );
};
