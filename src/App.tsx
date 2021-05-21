/** @jsxImportSource @emotion/react */
import { createContext, useEffect, useReducer, useState } from "react";
import { verbs } from "./data/verbs";
import tw, { theme as twTheme } from "twin.macro";
import { InfoSection } from "./components/InfoSection";
import {
  CheckedVerbType,
  ControlStateType,
  CurrentVerbType,
  FormType,
  VerbType,
} from "./shared/types";
import { PracticeForm } from "./components/PracticeForm";
import { AppProvider } from "./shared/context";

function App() {
  /* const [counter, setCounter] = useState(0); */
  /* const [totalVerbsCount, setTotalVerbsCount] = useState(0); */
  /* const [isShowingAnswer, setIsShowingAnswer] = useState(false); */
  const [formValue, setFormValue] = useState<FormType>({
    present: "",
    past: "",
    pastParticiple: "",
    presentParticiple: "",
    meaning: "",
  });
  const [inputVerb, setInputVerb] = useState<FormType>({
    present: "",
    past: "",
    pastParticiple: "",
    presentParticiple: "",
    meaning: "",
  });
  /* useEffect(() => {
    setCurrentVerb(verbs[counter]);
  }, [counter]);
  useEffect(() => {
    setTotalVerbsCount(verbs.length);
  }, []); */
  /* const showAnswer = () => {
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
  }; */
  return (
    <AppProvider>
      <div>
        <div css={tw`flex justify-center items-center h-screen bg-gray-600`}>
          <div
            css={tw`flex flex-wrap rounded-lg h-screen md:h-auto bg-white shadow-md overflow-hidden w-full md:mx-8 lg:w-4/5 xl:w-3/5`}
          >
            <InfoSection />
            {/* <PracticeForm
              verbsLength={verbs.length}
              counter={counter}
              isVerbChecked={isVerbChecked}
              isVerbCorrect={isVerbCorrect}
              isShowingAnswer={isShowingAnswer}
              totalVerbsCount={totalVerbsCount}
              checkedVerb={checkedVerb}
              formValue={formValue}
              currentVerb={currentVerb}
              setFormValue={setFormValue}
              setCheckedVerb={setCheckedVerb}
              setIsVerbCorrect={setIsVerbCorrect}
              setIsVerbChecked={setIsVerbChecked}
              setIsShowingAnswer={setIsShowingAnswer}
              setCounter={setCounter}
            /> */}
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
