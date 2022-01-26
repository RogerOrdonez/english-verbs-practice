/** @jsxImportSource @emotion/react */
import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import tw from "twin.macro";
import {
  ControlStateContext,
  CurrentVerbContext,
  VerbsContext,
} from "../../shared/context";
import { ControlStateAction, CurrentVerbAction } from "../../shared/enums";
import { InfoSection } from "../InfoSection";
import { PracticeForm } from "../PracticeForm";

export const Play = () => {
  const history = useHistory();
  const { state: controlState, dispatch: controlStateDispatch } =
    useContext(ControlStateContext);
  const { dispatch: currentVerbDispatch } = useContext(CurrentVerbContext);
  const { state: verbs } = useContext(VerbsContext);
  if (controlState.verbsLength === 0) {
    history.push("/");
  }
  useEffect(() => {
    controlStateDispatch({ type: ControlStateAction.ResetSuccess });
    controlStateDispatch({ type: ControlStateAction.ResetError });
    controlStateDispatch({ type: ControlStateAction.ResetSkipped });
    controlStateDispatch({ type: ControlStateAction.ResetCounter });
    controlStateDispatch({
      type: ControlStateAction.SetVerbsLenght,
      payload: verbs?.filter((verb) => verb?.isSelected).size || 0,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    currentVerbDispatch({
      type: CurrentVerbAction.SetCurrentVerb,
      payload: {
        newCurrentVerb: verbs
          ?.filter((verb) => verb?.isSelected)
          .toIndexedSeq()
          .get(controlState.counter),
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controlState.counter]);
  return (
    <div>
      <div css={tw`flex justify-center items-center h-screen bg-gray-600`}>
        <div
          className="animate__animated animate__fadeIn"
          css={tw`flex flex-wrap md:flex-col rounded-lg h-screen md:h-auto bg-white shadow-md overflow-hidden w-full md:mx-8 lg:w-2/5`}
        >
          <InfoSection />
          <PracticeForm />
        </div>
      </div>
    </div>
  );
};
