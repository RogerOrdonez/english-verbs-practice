/** @jsxImportSource @emotion/react */
import { FC } from "react";
import tw from "twin.macro";
import { PracticeFormHeaderMessage } from "./PracticeFormHeaderMessage";
import { PracticeFormHeaderProgressBar } from "./PracticeFormHeaderProgressBar";

type Props = {
  progressBarWidth: number;
  counter: number;
  totalVerbsCount: number;
  isVerbChecked: boolean;
};

export const PracticeFormHeader: FC<Props> = ({
  progressBarWidth,
  counter,
  totalVerbsCount,
  isVerbChecked,
}) => {
  return (
    <div
      css={tw`flex flex-wrap flex-col lg:flex-row justify-start items-center lg:items-start lg:justify-between`}
    >
      <PracticeFormHeaderMessage />
      <PracticeFormHeaderProgressBar
        progressBarWidth={progressBarWidth}
        counter={counter}
        totalVerbsCount={totalVerbsCount}
        isVerbChecked={isVerbChecked}
      />
    </div>
  );
};
