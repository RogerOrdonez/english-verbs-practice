/** @jsxImportSource @emotion/react */
import tw, { theme as twTheme } from "twin.macro";
import { useMediaQuery } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { VerbsContext } from "../../shared/context";
import { SelectedVerbsAction } from "../../shared/enums";
import { Link } from "react-router-dom";
import { VerbType } from "../../shared/types";
import { setVerbsOnStorage } from "../../services/storageService";

export const Config = () => {
  const isDesktop = useMediaQuery(`(min-width: ${twTheme`screens.lg`})`);
  const { state: verbs, dispatch: verbsDispatch } = useContext(VerbsContext);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    verb: VerbType | undefined
  ) => {
    if (event.target.checked) {
      verbsDispatch({
        type: SelectedVerbsAction.SelectVerb,
        payload: { verb },
      });
    } else {
      verbsDispatch({
        type: SelectedVerbsAction.UnselectVerb,
        payload: { verb },
      });
    }
  };
  useEffect(() => {
    setVerbsOnStorage(verbs);
  }, [verbs]);
  return (
    <div css={[tw`flex justify-center items-center h-screen bg-gray-600`]}>
      <div
        className="animate__animated animate__fadeIn"
        css={[
          tw`flex flex-wrap overflow-y-scroll rounded-lg h-screen md:h-auto bg-white shadow-md w-full md:mx-8 lg:w-4/5 xl:w-3/5`,
          isDesktop && { minHeight: "40rem", maxHeight: "40rem" },
          !isDesktop && tw`min-h-screen`,
        ]}
      >
        <div css={tw`w-full p-8 mb-5`}>
          <div css={tw`mb-4 text-2xl lg:text-3xl`}>
            Selected verbs to practice:
          </div>
          <div css={tw`flex flex-col justify-between min-h-full`}>
            <div css={tw`flex flex-wrap justify-start`}>
              {verbs?.toIndexedSeq().map((verb) => {
                return (
                  <div
                    key={verb?.name}
                    css={tw`text-gray-900 text-base lg:text-lg w-36 mt-2.5`}
                  >
                    <label>
                      <input
                        css={tw`transform scale-125 cursor-pointer`}
                        type="checkbox"
                        checked={verb?.isSelected}
                        name={verb?.name}
                        onChange={(e) => handleChange(e, verb)}
                      />
                      <span css={tw`ml-2 text-lg cursor-pointer`}>
                        {verb?.name}
                      </span>
                    </label>
                  </div>
                );
              })}
            </div>
            <Link to="/play">
              <div css={tw`flex justify-center lg:justify-start`}>
                <button
                  css={[
                    tw`px-12 py-3 mb-5 lg:py-2 bg-gray-900 rounded-full text-gray-100 text-lg shadow-md hover:bg-gray-800 focus:outline-none`,
                  ]}
                  type="button"
                >
                  Play pratice
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
