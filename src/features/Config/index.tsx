/* eslint-disable no-console */
/** @jsxImportSource @emotion/react */
import tw, { theme as twTheme } from "twin.macro";
import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  useMediaQuery,
  withStyles,
} from "@material-ui/core";
import { verbs } from "../../data/verbs";
import React, { useState } from "react";
import { grey } from "@material-ui/core/colors";

export const Config = () => {
  const isDesktop = useMediaQuery(`(min-width: ${twTheme`screens.lg`})`);
  const GreyCheckbox = withStyles({
    root: {
      color: grey[400],
      "&$checked": {
        color: grey[600],
      },
    },
    checked: {},
  })((props: CheckboxProps) => <Checkbox color="default" {...props} />);
  const [selectedVerbs, setSelectedVerbs] = useState(verbs);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    setSelectedVerbs([
      ...selectedVerbs.slice(0, idx),
      {
        ...selectedVerbs[idx],
        isSelected: event.target.checked,
      },
      ...selectedVerbs.slice(idx + 1),
    ]);
  };
  return (
    <div css={[tw`flex justify-center items-center h-screen bg-gray-600`]}>
      <div
        css={[
          tw`flex flex-wrap rounded-lg h-screen md:h-auto bg-white shadow-md overflow-hidden w-full md:mx-8 lg:w-4/5 xl:w-3/5`,
          isDesktop && { minHeight: "40rem" },
          !isDesktop && { minHeight: "8rem" },
        ]}
      >
        <div css={tw`w-full p-8`}>
          <div css={tw`mb-4 text-2xl lg:text-3xl`}>
            Selected verbs to practice:
          </div>
          <div css={tw`flex flex-col flex-wrap`}>
            {selectedVerbs.map((verb, idx) => {
              return (
                <div
                  key={verb.name}
                  css={tw`text-gray-900 text-base lg:text-lg w-28`}
                >
                  <FormControlLabel
                    control={
                      <GreyCheckbox
                        onChange={(e) => handleChange(e, idx)}
                        checked={verb.isSelected}
                        name={verb.name}
                      />
                    }
                    label={verb.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
