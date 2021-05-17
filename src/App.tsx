/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { verbs } from "./verbs";
import tw, { theme as twTheme } from "twin.macro";
import { useMediaQuery } from "@material-ui/core";

function App() {
  const [formValue, setFormValue] = useState({
    present: "",
    past: "",
    pastParticiple: "",
    presentParticiple: "",
    meaning: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("formValue", formValue);
  };
  const verb = verbs[0];
  const isDesktop = useMediaQuery(`(min-width: ${twTheme`screens.lg`})`);
  return (
    <div>
      <div css={tw`flex justify-center items-center h-screen bg-gray-600`}>
        <div
          css={tw`flex flex-wrap rounded-lg h-screen md:h-auto bg-white shadow-md overflow-hidden w-full md:mx-8 lg:w-4/5 xl:w-3/5`}
        >
          <div
            css={[
              tw`flex flex-col justify-between p-4 bg-gray-900 w-full lg:w-1/3`,
              isDesktop && { minHeight: "10rem" },
              !isDesktop && { minHeight: "5rem" },
            ]}
          >
            <div css={tw`flex flex-col `}>
              <div
                css={tw`text-gray-400 uppercase tracking-wider text-sm lg:text-lg`}
              >
                verb
              </div>
              <div css={tw`text-white text-2xl lg:text-4xl mt-2 lg:mt-4`}>
                {verb.tenses.infinitive}
              </div>
            </div>
            <div>
              <div css={tw`text-gray-400 text-base lg:text-lg mt-2 lg:mt-0`}>
                View all verbs{" "}
                <svg
                  css={tw`inline w-2 h-2 fill-current`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                </svg>
              </div>
            </div>
          </div>
          <div css={tw`px-4 pt-1 lg:pt-4 w-full lg:w-2/3`}>
            <div css={tw`flex justify-between`}>
              <div css={tw`text-gray-400 uppercase tracking-wider text-base`}>
                Complete the following fields
              </div>
              <div css={tw`hidden pt-1 pl-32`}>
                <div
                  css={tw`bg-gray-200 rounded-full h-2 w-4/5 overflow-hidden`}
                >
                  <div css={tw`h-2 bg-gray-900 w-1/5`}></div>
                </div>
                <div css={tw`text-xs text-gray-400 text-right uppercase`}>
                  6/9 Verbs
                </div>
              </div>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div
                css={tw`flex flex-wrap lg:flex-nowrap text-lg text-gray-900 items-center mt-1 lg:mt-5 w-full`}
              >
                <div
                  css={tw`block w-full lg:w-1/2 text-gray-700 mr-2 font-bold py-1`}
                >
                  <label htmlFor="present">Present: </label>
                </div>
                <div css={tw`block w-full`}>
                  <input
                    id="present"
                    type="text"
                    name="present"
                    value={formValue.present}
                    css={tw`w-full p-1 shadow border rounded text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-600`}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </div>
              <div
                css={tw`flex flex-wrap lg:flex-nowrap text-lg text-gray-900 items-center mt-1 lg:mt-5`}
              >
                <div
                  css={tw`block w-full lg:w-1/2 text-gray-700 mr-2 font-bold py-1`}
                >
                  <label htmlFor="past">Past: </label>
                </div>
                <div css={tw`block w-full`}>
                  <input
                    id="past"
                    type="text"
                    name="past"
                    value={formValue.past}
                    css={tw`w-full p-1 shadow border rounded text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-600`}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </div>
              <div
                css={tw`flex flex-wrap lg:flex-nowrap text-lg text-gray-900 items-center mt-1 lg:mt-5`}
              >
                <div
                  css={tw`block w-full lg:w-1/2 text-gray-700 mr-2 font-bold py-1`}
                >
                  <label htmlFor="presentParticiple">Present Participle:</label>
                </div>
                <div css={tw`block w-full`}>
                  <input
                    id="presentParticiple"
                    type="text"
                    name="presentParticiple"
                    value={formValue.presentParticiple}
                    css={tw`w-full p-1 shadow border rounded text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-600`}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </div>
              <div
                css={tw`flex flex-wrap lg:flex-nowrap text-lg text-gray-900 items-center mt-1 lg:mt-5`}
              >
                <div
                  css={tw`block w-full lg:w-1/2 text-gray-700 mr-2 font-bold py-1`}
                >
                  <label htmlFor="pastParticiple">Past Participle:</label>
                </div>
                <div css={tw`block w-full`}>
                  <input
                    id="pastParticiple"
                    type="text"
                    name="pastParticiple"
                    value={formValue.pastParticiple}
                    css={tw`w-full p-1 shadow border rounded text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-600`}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </div>
              <div
                css={tw`flex flex-wrap lg:flex-nowrap text-lg text-gray-900 items-center mt-1 lg:mt-5`}
              >
                <div
                  css={tw`block w-full lg:w-1/2 text-gray-700 mr-2 font-bold py-1`}
                >
                  <label htmlFor="meaning">Meaning</label>
                </div>
                <div css={tw`block w-full`}>
                  <input
                    id="meaning"
                    type="text"
                    name="meaning"
                    value={formValue.meaning}
                    css={tw`w-full p-1 shadow border rounded text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-600`}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </div>
              <div css={tw`flex justify-end py-2 lg:pt-12`}>
                <button
                  css={tw`px-12 py-2 bg-gray-900 rounded-full text-gray-100 text-lg shadow-md hover:bg-gray-800 focus:outline-none`}
                  type="submit"
                >
                  Check
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
