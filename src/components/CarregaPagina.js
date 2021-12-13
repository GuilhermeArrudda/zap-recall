import { useState } from "react";
import Estudar from "./Estudar";
import Login from "./Login";

export default function RenderLogin() {
  const [clicked, setClicked] = useState(false);
  const [questionId, setQuestionId] = useState(1);

  return (
    <>
      {clicked ? (
        <Estudar questionId={questionId} setQuestionId={setQuestionId} />
      ) : (
        <Login setQuestionId={setQuestionId} setClicked={setClicked} />
      )}
    </>
  );
}