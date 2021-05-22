/** @jsxImportSource @emotion/react */
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { verbs } from "./data/verbs";
import tw, { theme as twTheme } from "twin.macro";
import { InfoSection } from "./features/InfoSection";
import {
  ControlStateType,
  CurrentVerbType,
  FormType,
  VerbType,
} from "./shared/types";
import { PracticeForm } from "./features/PracticeForm";
import { AppContext } from "./shared/context";
import { ControlStateAction, CurrentVerbAction } from "./shared/enums";

function App() {
  /* const [counter, setCounter] = useState(0); */
  /* const [totalVerbsCount, setTotalVerbsCount] = useState(0); */
  /* const [isShowingAnswer, setIsShowingAnswer] = useState(false); */
  /* const [formValue, setFormValue] = useState<FormType>({
    present: "",
    past: "",
    pastParticiple: "",
    presentParticiple: "",
    meaning: "",
  }); */
  const { state, dispatch } = useContext(AppContext);
  const [inputVerb, setInputVerb] = useState<FormType>({
    present: "",
    past: "",
    pastParticiple: "",
    presentParticiple: "",
    meaning: "",
  });
  /* useEffect(() => {
    setCurrentVerb(verbs[counter]);
  }, [counter]);*/
  useEffect(() => {
    console.log(state.controlState.verbsLength);
    console.log(state.currentVerb);
    dispatch({
      type: ControlStateAction.SetVerbsLenght,
      payload: verbs.length,
    });
    dispatch({
      type: CurrentVerbAction.SetCurrentVerb,
      payload: {
        newCurrentVerb: verbs[0],
      },
    });
    console.log(state.controlState.verbsLength);
    console.log(state.currentVerb);
  }, []);
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
    <div>
      <div css={tw`flex justify-center items-center h-screen bg-gray-600`}>
        <div
          css={tw`flex flex-wrap rounded-lg h-screen md:h-auto bg-white shadow-md overflow-hidden w-full md:mx-8 lg:w-4/5 xl:w-3/5`}
        >
          <InfoSection />
          <PracticeForm />
        </div>
      </div>
    </div>
  );
}

export default App;
