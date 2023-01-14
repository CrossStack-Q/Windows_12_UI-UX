import React from "react";

import { useAppContext } from "../../../../context/state";

import styles from "../../../../styles/calcli.module.css"

const Display = ({ input, setInput, answer }) => {


  const {showCalculator, setShowCalculator} = useAppContext();

  const onChangeTagInput = (e) => {
    const re = /^[!%(-+\x2D-9^glox\xF7\u221A]+$/;

    if (e.target.value === "" || re.test(e.target.value)) {
      setInput(e.target.value);
    }
  };

  return (
    <main>
      <div className={styles.display}>
        
        {answer === "" ? (
          
          <div>

          <div className=" gap-1 -ml-1 flex items-center">
            <div
              className="w-6 h-6" 
              onClick={() => {
                if (showCalculator == "hidden") {
                    setShowCalculator("show");
                } else {
                    setShowCalculator("hidden");
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-green-600"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="w-6 h-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-red-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          
            <input
              type="text"
              name="input"
              className={styles.input}
              style={{ padding: "29px" }}
              value={input}
              placeholder="0"
              maxLength={12}
              // disabled
              onChange={onChangeTagInput}
              autoComplete="off"
            />
            </div>
        ) : (
          <>
          <div className=" flex p-2">
          <div className=" gap-1 -ml-1 flex items-center">
            <div
              className="w-6 h-6" 
              onClick={() => {
                if (showCalculator == "hidden") {
                    setShowCalculator("show");
                } else {
                    setShowCalculator("hidden");
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-green-600"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="w-6 h-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-red-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
            <input
              type="text"
              name="input"
              className={styles.value}
              value={input}
              placeholder="0"
              maxLength={12}
              disabled
            />
            </div>
            <input
              type="text"
              name="value"
              className={styles.input}
              value={answer}
              disabled
            />
            
          </>
        )}
      </div>
    </main>
  );
};

export default Display;


export async function getStaticProps({ params }) {
  return {
      props: {
        input, setInput, answer
      }
  }
}
