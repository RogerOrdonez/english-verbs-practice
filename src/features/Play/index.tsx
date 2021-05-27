/** @jsxImportSource @emotion/react */
import { useContext, useEffect } from "react";
import tw from "twin.macro";
import {
  ControlStateContext,
  CurrentVerbContext,
  SelectedVerbsContext,
} from "../../shared/context";
import { ControlStateAction, CurrentVerbAction } from "../../shared/enums";
import { InfoSection } from "../InfoSection";
import { PracticeForm } from "../PracticeForm";

export const Play = () => {
  const { state: controlState, dispatch: controlStateDispatch } =
    useContext(ControlStateContext);
  const { dispatch: currentVerbDispatch } = useContext(CurrentVerbContext);
  const { state: selectedVerbs } = useContext(SelectedVerbsContext);
  const verbs = selectedVerbs.filter((verb) => {
    return verb.isSelected;
  });
  useEffect(() => {
    currentVerbDispatch({
      type: CurrentVerbAction.SetCurrentVerb,
      payload: { newCurrentVerb: verbs[controlState.counter] },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controlState.counter]);
  useEffect(() => {
    controlStateDispatch({ type: ControlStateAction.ResetCounter });
    controlStateDispatch({
      type: ControlStateAction.SetVerbsLenght,
      payload: verbs.length,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div css={tw`flex justify-center items-center h-screen bg-gray-600`}>
        <div
          className="animate__animated animate__fadeIn"
          css={tw`flex flex-wrap rounded-lg h-screen md:h-auto bg-white shadow-md overflow-hidden w-full md:mx-8 lg:w-4/5 xl:w-3/5`}
        >
          <InfoSection />
          <PracticeForm />
        </div>
      </div>
    </div>
  );
};
