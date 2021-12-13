import Flashcards from "./Flashcards";
import Barra from "./Barra";

export default function Estudar({ questionId, setQuestionId }) {
  return (
    <>
      <Barra />
      <Flashcards questionId={questionId} setQuestionId={setQuestionId} />
    </>
  );
}