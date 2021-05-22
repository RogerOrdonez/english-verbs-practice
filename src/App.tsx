/** @jsxImportSource @emotion/react */
import { useContext, useEffect } from "react";
import { verbs } from "./data/verbs";
import tw from "twin.macro";
import { InfoSection } from "./features/InfoSection";
import { PracticeForm } from "./features/PracticeForm";
import { ControlStateContext, CurrentVerbContext } from "./shared/context";
import { ControlStateAction, CurrentVerbAction } from "./shared/enums";

function App() {
  const { dispatch: controlStateDispatch } = useContext(ControlStateContext);
  const { dispatch: currentVerbDispatch } = useContext(CurrentVerbContext);
  useEffect(() => {
    controlStateDispatch({
      type: ControlStateAction.SetVerbsLenght,
      payload: verbs.length,
    });
    currentVerbDispatch({
      type: CurrentVerbAction.SetCurrentVerb,
      payload: {
        newCurrentVerb: verbs[0],
      },
    });
  }, []);
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
