/** @jsxImportSource @emotion/react */
import { FC } from "react";
import tw from "twin.macro";

type Props = {
  progressBarWidth: number;
  counter: number;
  totalVerbsCount: number;
  isVerbChecked: boolean;
};

export const PracticeFormHeaderProgressBar: FC<Props> = ({
  progressBarWidth,
  counter,
  totalVerbsCount,
  isVerbChecked,
}) => {
  return (
    <div css={tw`pt-1`}>
      <div
        css={[
          tw`bg-gray-200 rounded-full h-2 overflow-hidden`,
          { width: `${progressBarWidth}rem` },
        ]}
      >
        <div
          css={[
            counter > 0 && tw`transition-all duration-1000 ease-in-out`,
            tw`h-2 bg-gray-900`,
            {
              width: `${
                ((counter * 100) / totalVerbsCount / 100) * progressBarWidth
              }rem`,
            },
            counter + 1 === totalVerbsCount &&
              isVerbChecked && {
                width: `${progressBarWidth}rem`,
              },
          ]}
        ></div>
      </div>
      <div css={tw`text-xs text-gray-400 text-right uppercase`}>
        {counter + 1}/{totalVerbsCount} Verbs
      </div>
    </div>
  );
};
