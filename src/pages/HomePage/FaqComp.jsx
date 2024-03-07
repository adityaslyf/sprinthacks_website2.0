import { useState } from "react";
import { questions } from "../../components/api";

const FaqComp = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAnswer = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <section id="faq" className="z-10 w-full mt-[-50px] ml-[-20px]">
      <div className="pt-8 pb-[450px]">
        <div className="px-6 sm:px-8 lg:px-14 mx-auto sm:pt-20">
          <div className="sm:pt-6 pt-2 w-[250px] md:w-[650px] xl:w-[750px] h-[350px] text-left font-Roboto border-t border-gray-200 md:gap-16 md:grid-cols-2">
            {questions.map((faq) => (
              <div key={faq.id} onClick={() => toggleAnswer(faq.id)} className="sm:mb-6 mb-2 sm:pb-3 pb-2 border-b">
                <div className="flex flex-row justify-between items-center">
                  <h3 className="flex justify-start sm:mb-6 text-[12px] md:text-[25px] font-medium text-white ">
                    {/* <svg
                      className="flex-shrink-0 mr-2 w-6 h-6 text-gray-500 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg> */}
                    {faq.question}
                  </h3>
                  <button onClick={() => toggleAnswer(faq.id)}>
                    <svg
                      className={` w-4 h-4 md:w-8 -mt-2 md:-mt-6 md:h-8 text-white ${
                        activeQuestion === faq.id ? "transform rotate-180" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M10 15l5-5H5z" />
                    </svg>
                  </button>
                </div>
                {activeQuestion === faq.id && (
                  <p className="text-[#aaa] pr-5 text-[12px] md:text-[20px]">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqComp;
