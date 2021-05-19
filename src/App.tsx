/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { verbs } from "./data/verbs";
import tw, { theme as twTheme } from "twin.macro";
import { useMediaQuery } from "@material-ui/core";
import { InfoSection } from "./components/InfoSection";
import { CheckedVerbType, FormType, VerbType } from "./shared/Types";
import { PracticeForm } from "./components/PracticeForm";

function App() {
  const [counter, setCounter] = useState(0);
  const [totalVerbsCount, setTotalVerbsCount] = useState(0);
  const [isVerbCorrect, setIsVerbCorrect] = useState(false);
  const [isShowingAnswer, setIsShowingAnswer] = useState(false);
  const [isVerbChecked, setIsVerbChecked] = useState(false);
  const [formValue, setFormValue] = useState<FormType>({
    present: "",
    past: "",
    pastParticiple: "",
    presentParticiple: "",
    meaning: "",
  });
  const [checkedVerb, setCheckedVerb] = useState<CheckedVerbType>({
    isPresentCorrect: false,
    isPastCorrect: false,
    isPastParticipleCorrect: false,
    isPresentParticipleCorrect: false,
    isMeaningCorrect: false,
  });
  const [currentVerb, setCurrentVerb] = useState<VerbType>({
    verb: "",
    type: "",
    tenses: {
      infinitive: "",
      present: [""],
      past: [""],
      pastParticiple: [""],
      presentParticiple: [""],
      meaning: [""],
    },
  });
  const [inputVerb, setInputVerb] = useState<FormType>({
    present: "",
    past: "",
    pastParticiple: "",
    presentParticiple: "",
    meaning: "",
  });
  const isDesktop = useMediaQuery(`(min-width: ${twTheme`screens.lg`})`);
  useEffect(() => {
    setCurrentVerb(verbs[counter]);
  }, [counter]);
  useEffect(() => {
    setTotalVerbsCount(verbs.length);
  }, []);
  const showAnswer = () => {
    setIsShowingAnswer(() => {
      if (!isShowingAnswer) {
        setInputVerb(formValue);
        setFormValue({
          present: !checkedVerb.isPresentCorrect
            ? currentVerb.tenses.present.join(", ")
            : formValue.present,
          past: !checkedVerb.isPastCorrect
            ? currentVerb.tenses.past.join(", ")
            : formValue.past,
          pastParticiple: !checkedVerb.isPastParticipleCorrect
            ? currentVerb.tenses.pastParticiple.join(", ")
            : formValue.pastParticiple,
          presentParticiple: !checkedVerb.isPresentParticipleCorrect
            ? currentVerb.tenses.presentParticiple.join(", ")
            : formValue.presentParticiple,
          meaning: !checkedVerb.isMeaningCorrect
            ? currentVerb.tenses.meaning.join(", ")
            : formValue.meaning,
        });
      } else {
        setFormValue(inputVerb);
      }
      return !isShowingAnswer;
    });
  };
  return (
    <div>
      <div css={tw`flex justify-center items-center h-screen bg-gray-600`}>
        <div
          css={tw`flex flex-wrap rounded-lg h-screen md:h-auto bg-white shadow-md overflow-hidden w-full md:mx-8 lg:w-4/5 xl:w-3/5`}
        >
          <InfoSection
            currentVerb={currentVerb}
            counter={counter}
            isVerbChecked={isVerbChecked}
            isVerbCorrect={isVerbCorrect}
            isShowingAnswer={isShowingAnswer}
            showAnswer={showAnswer}
          />
          <PracticeForm
            verbsLength={verbs.length}
            counter={counter}
            isVerbChecked={isVerbChecked}
            isVerbCorrect={isVerbCorrect}
            totalVerbsCount={totalVerbsCount}
            checkedVerb={checkedVerb}
            formValue={formValue}
            currentVerb={currentVerb}
            setFormValue={setFormValue}
            setCheckedVerb={setCheckedVerb}
            setIsVerbCorrect={setIsVerbCorrect}
            setIsVerbChecked={setIsVerbChecked}
            setCounter={setCounter}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
