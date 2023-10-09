import React, { useContext, useState } from "react";
import { DataContext } from "../../context/Context";
import PersianNumber from "../../utils/persianNumber";
import { useRouter } from "next/router";

function QuestionsPage() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [id, setId] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [submitEnd, setSubmitEnd] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [countCorrect, setCountCorrect] = useState(0);
  const [countWrong, setCountWrong] = useState(0);

  const { questionsData } = useContext(DataContext);
  const countQuestions = questionsData.length;

  const nextHandler = () => {
    if (index < questionsData.length - 1) {
      setIndex(index + 1);
      setSubmit(false);
      setCorrect(false);
      setId(0);
    }
  };

  const cancelHandler = () => {
    router.replace("/");
  };

  const checkHandler = (e, item) => {
    console.log(item);
    if (item.correct) {
      setCountCorrect((prevState) => prevState + 1);
    } else {
      setCountWrong((prevState) => prevState + 1);
    }
    console.log(countCorrect);
    const { id } = item;
    const answers = questionsData[index].answers;
    const correct = answers.find((item) => item.id === id).correct;
    console.log(correct);
    setSubmit(true);

    if (correct) {
      setId(id);
      setCorrect(true);
      //   nextHandler();
    } else {
      setCorrect(false);
      setId(id);
    }
  };

  const endHandler = () => {
    setSubmitEnd(true);
  };

  return (
    <>
      {submitEnd ? (
        <div className="w-[95%] mx-auto border-2 p-[50px] rounded-xl border-violet-700 text-center mt-[10%]">
          <h1 className="bg-violet-500 text-[2rem] text-white rounded-xl">
            نتیجه آزمون
          </h1>
          <div className="text-start text-[1.5rem]">
            <div className="mt-[50px] h-[100px] flex justify-between">
              تعداد پاسخ های درست :{" "}
              <span className="bg-green-400 h-[40px] rounded-xl px-2">
                {PersianNumber(countCorrect)}
              </span>
            </div>
            <div className="mt-[50px] h-[100px]  flex justify-between">
              تعداد پاسخ های غلط :{" "}
              <span className="bg-red-400 h-[40px] rounded-xl px-2">
                {PersianNumber(countWrong)}
              </span>
            </div>
            <div className="mt-[50px] h-[100px]  flex justify-between">
              تعداد سوالات پاسخ داده نشده :{" "}
              <span className="bg-gray-400 h-[40px] rounded-xl px-2">
                {PersianNumber(countQuestions - (countCorrect + countWrong))}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          <div className="flex text-gray-600 w-[65%] mx-auto justify-between mt-[90px]">
            <div>آزمون عمومی</div>
            <div>
              {`${PersianNumber(index + 1)}/${PersianNumber(countQuestions)}`}
            </div>
          </div>
          <div className="flex mt-[10px] text-[2rem] rounded-xl w-[70%] p-[50px] text-start mx-auto border border-violet-500">
            {questionsData[index].question}
          </div>
          <div className="p-5">
            {questionsData[index].answers.map((item, i) => (
              <div
                style={{
                  backgroundColor:
                    submit && correct && item.id === id
                      ? "green"
                      : item.id === id && id === i + 1 && "red",
                }}
                onClick={id === 0 ? (e) => checkHandler(e, item) : null}
                className="border border-violet-500 rounded-xl p-3 w-[70%] mx-auto mt-4 cursor-pointer hover:bg-violet-500 hover:text-white transition ease-in-out duration-300"
                key={item.id}
              >
                {item.answer}
              </div>
            ))}
          </div>

          <div className="flex justify-between w-[70%] m-[30px] mx-auto">
            <button
              onClick={index + 1 !== countQuestions ? nextHandler : endHandler}
              className="py-3 px-[30px] bg-violet-500 text-white rounded-full"
            >
              {index + 1 === countQuestions ? "پایان آزمون" : "بعدی"}
            </button>
            <button
              onClick={cancelHandler}
              className="py-3 px-[30px] bg-violet-500 text-white rounded-full"
            >
              انصراف
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default QuestionsPage;
