/** @jsxImportSource @emotion/react */
import { FC, MouseEventHandler } from "react";
import { verbs } from "../data/verbs";
import tw, { theme as twTheme } from "twin.macro";
import { useMediaQuery } from "@material-ui/core";
import { checkVerb } from "../services/checkService";
import { CheckedVerbType, FormType, VerbType } from "../shared/Types";
import { ProgressBar } from "./ProgressBar";
import { PracticeFormField } from "./PracticeFormField";
import { PracticeFormButton } from "./PracticeFormButton";

type Props = {
  verbsLength: number;
  counter: number;
  isVerbChecked: boolean;
  isVerbCorrect: boolean;
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
      <div
        css={tw`flex flex-wrap flex-col lg:flex-row justify-start items-center lg:items-start lg:justify-between`}
      >
        <div css={tw`text-gray-400 uppercase tracking-wider text-base`}>
          Complete the following fields
        </div>
        <ProgressBar
          progressBarWidth={progressBarWidth}
          counter={counter}
          totalVerbsCount={totalVerbsCount}
          isVerbChecked={isVerbChecked}
        />
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <PracticeFormField
          id="present"
          label="Present Tense:"
          formValue={formValue.present}
          isVerbChecked={isVerbChecked}
          isTenseCorrect={checkedVerb.isPresentCorrect}
          handleInputChange={handleInputChange}
        />
        <PracticeFormField
          id="past"
          label="Past Tense:"
          formValue={formValue.past}
          isVerbChecked={isVerbChecked}
          isTenseCorrect={checkedVerb.isPastCorrect}
          handleInputChange={handleInputChange}
        />
        <PracticeFormField
          id="pastParticiple"
          label="Past Participle:"
          formValue={formValue.pastParticiple}
          isVerbChecked={isVerbChecked}
          isTenseCorrect={checkedVerb.isPastParticipleCorrect}
          handleInputChange={handleInputChange}
        />
        <PracticeFormField
          id="presentParticiple"
          label="Present Participle:"
          formValue={formValue.presentParticiple}
          isVerbChecked={isVerbChecked}
          isTenseCorrect={checkedVerb.isPresentParticipleCorrect}
          handleInputChange={handleInputChange}
        />
        <PracticeFormField
          id="meaning"
          label="Meaning:"
          formValue={formValue.meaning}
          isVerbChecked={isVerbChecked}
          isTenseCorrect={checkedVerb.isMeaningCorrect}
          handleInputChange={handleInputChange}
        />
        <PracticeFormButton
          isVerbChecked={isVerbChecked}
          isVerbCorrect={isVerbCorrect}
          counter={counter}
          verbsLength={verbsLength}
        />
      </form>
    </div>
  );
};
