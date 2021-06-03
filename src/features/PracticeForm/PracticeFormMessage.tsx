/** @jsxImportSource @emotion/react */
import { FC } from "react";
import tw from "twin.macro";

type Props = {
  isVerbChecked: boolean;
  isVerbCorrect: boolean;
};

export const PracticeFormMessage: FC<Props> = ({
  isVerbChecked,
  isVerbCorrect,
}) => {
  return (
    <div
      css={[
        isVerbChecked && isVerbCorrect && tw`text-green-700`,
        isVerbChecked && !isVerbCorrect && tw`text-red-700`,
        tw`text-sm pr-4 lg:pr-12 tracking-normal leading-tight text-left`,
      ]}
    >
      {isVerbChecked &&
        isVerbCorrect &&
        `Great! Your answers are correct, go ahead to the next verb.`}
      {isVerbChecked &&
        !isVerbCorrect &&
        `Some of your answers are wrong, please correct them and check again.`}
    </div>
  );
};
