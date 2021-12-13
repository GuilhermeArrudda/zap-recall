import {useState} from "react";
import Decks from "./Decks";
import Fim from "./Fim";
import VirarPagina from "../assets/turn.png";

export default function Flashcards({ questionId, setQuestionId }){
    const [card, setCard] = useState("flashcard");
    const [botao, setBotao] = useState("resposta");
    const [mostrar, setMostrar] = useState(false);
    const [virar, setVirar] = useState("virar-pagina hidden");
    const [fim, setFim] = useState(false);
    const [hasFalse, setHasFalse] = useState(false);
    const [tipoPergunta, setTipoPergunta] = useState([]);

    function mostrarResposta() {
        setMostrar(true);
    }

    function selecionarResposta(responde, correto){
        setBotao("hidden");
        setCard(`flashcard ${responde}`);
        setVirar("virar-pagina");
        setTipoPergunta([...tipoPergunta, correto]);
    }

    function proxima() {
        if (Decks.length === tipoPergunta.length) {
            setFim(true);
    
          if (tipoPergunta.includes(false)) {
            setHasFalse(true);
          }
        } else {
            setMostrar(false);
            setCard("flashcard");
            setBotao("botaoPergunta");
            setQuestionId(questionId + 1);
            setVirar("turn-page hidden");
        }
      }

      return (
        <>
          {fim ? (
            hasFalse ? (
              <Fim hasFalse={true} />
            ) : (
              <Fim hasFalse={false} />
            )
          ) : mostrar ? (
            <div className={card} data-identifier="flashcard">
              <div className="card-title">{Decks[questionId - 1].question}</div>
              <div className="contador" data-identifier="counter">
                {questionId}/{Decks.length}
              </div>
              <div className="card-text">{Decks[questionId - 1].answer}</div>
              <div className={botao}>
                <button
                  type="button"
                  className="single-button preto"
                  onClick={() => selecionarResposta("preto", true)}
                >
                  Agora aprendi
                </button>
                <button
                  type="button"
                  className="single-button vermelho"
                  onClick={() => selecionarResposta("vermelho", false)}
                >
                  Não lembrei
                </button>
                <button
                  type="button"
                  className="single-button verde"
                  onClick={() => selecionarResposta("verde", true)}
                >
                  Lembrei com esforço
                </button>
                <button
                  type="button"
                  className="single-button amarelo"
                  onClick={() => selecionarResposta("amarelo", true)}
                >
                  Zap!
                </button>
              </div>
              <img
                src={VirarPagina}
                alt="turn-page"
                className={virar}
                onClick={proxima}
                data-identifier="arrow"
              />
            </div>
          ) : (
            <div className={card} data-identifier="flashcard">
              <div className="contador" data-identifier="counter">
                {questionId}/{Decks.length}
              </div>
              <div className="card-text">{Decks[questionId - 1].question}</div>
              <img
                src={VirarPagina}
                alt="turn-page"
                className="turn-page"
                onClick={mostrarResposta}
                data-identifier="arrow"
              />
            </div>
          )}
        </>
      );
    }