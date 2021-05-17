/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { verbs } from "./verbs";
import tw, { theme as twTheme } from "twin.macro";
import { useMediaQuery } from "@material-ui/core";

function App() {
  const [formValue, setFormValue] = useState({
    present: { label: "Present:", value: "" },
    past: { label: "Past:", value: "" },
    pastParticiple: { label: "Past Participle:", value: "" },
    presentParticiple: { label: "Present Participle:", value: "" },
    meaning: { label: "Meaning:", value: "" },
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({
      ...formValue,
      present: { ...formValue.present, value: e.target.value },
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const verb = verbs[0];
  const isDesktop = useMediaQuery(`(min-width: ${twTheme`screens.lg`})`);
  return (
    <div>
      {/* <h1>English Verbs Practice</h1>
      <h5>{verb.tenses.infinitive}</h5>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="present">{formValue.present.label}</label>
        <input
          id="present"
          type="text"
          value={formValue.present.value}
          onChange={(e) => handleInputChange(e)}
        />
      </form> */}
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
            <div
              css={tw`flex flex-wrap lg:flex-nowrap text-lg text-gray-900 items-center mt-1 lg:mt-5 w-full`}
            >
              <div
                css={tw`block w-full lg:w-1/2 text-gray-700 mr-2 font-bold py-1`}
              >
                <label htmlFor="present">{formValue.present.label}</label>
              </div>
              <div css={tw`block w-full`}>
                <input
                  id="present"
                  type="text"
                  value={formValue.present.value}
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
                <label htmlFor="past">{formValue.past.label}</label>
              </div>
              <div css={tw`block w-full`}>
                <input
                  id="past"
                  type="text"
                  value={formValue.past.value}
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
                <label htmlFor="presentParticiple">
                  {formValue.presentParticiple.label}
                </label>
              </div>
              <div css={tw`block w-full`}>
                <input
                  id="presentParticiple"
                  type="text"
                  value={formValue.presentParticiple.value}
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
                <label htmlFor="pastParticiple">
                  {formValue.pastParticiple.label}
                </label>
              </div>
              <div css={tw`block w-full`}>
                <input
                  id="pastParticiple"
                  type="text"
                  value={formValue.pastParticiple.value}
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
                <label htmlFor="meaning">{formValue.meaning.label}</label>
              </div>
              <div css={tw`block w-full`}>
                <input
                  id="meaning"
                  type="text"
                  value={formValue.meaning.value}
                  css={tw`w-full p-1 shadow border rounded text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-600`}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>
            <div css={tw`flex justify-end py-2 lg:pt-12`}>
              <button
                css={tw`px-12 py-2 bg-gray-900 rounded-full text-gray-100 text-lg shadow-md hover:bg-gray-800 focus:outline-none`}
              >
                Check
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
