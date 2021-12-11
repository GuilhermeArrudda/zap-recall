import {useState} from "react";

export default function Flashcards(){
    const [card, setCard] = useState("flashcard");
    const [botao, setBotao] = useState("resposta");
    const [mostrar, setMostrar] = useState(false);
    const [virar, setVirar] = useState("virar-pagina hidden");

    function mostrarResposta() {
        setMostrar(true);
    }

    function selecionarResposta(responde){
        setBotao("hidden");
        setCard(`flashcard ${responde}`);
        setVirar("virar-pagina");
    }

    return (
        <>
        {mostrar ? (
            <section className={card}>
                <section className="card-titulo">O que é JSX</section>
                <section className="card-numero">
                    <span>1/8</span>
                </section>
                <section className="card-texto">
                    <span>Uma extensão de linguagem JavaScript.</span>
                </section>
                <section className={botao}>
                    <button type="button" className="botaos black" onClick={() => selecionarResposta("black")}>
                        Agora aprendi
                    </button>
                    <button type="button" className="botaos red" onClick={() => selecionarResposta("red")}>
                        Não lembrei
                    </button>
                    <button type="button" className="botaos green" onClick={() => selecionarResposta("green")}>
                        Lembrei com esforço
                    </button>
                    <button type="button" className="botaos yellow" onClick={() => selecionarResposta("yellow")}>
                        Zap!
                    </button>
                </section>
                <img src="assets/turn.png" alt="virar-pagina" className={virar}/>
            </section>
            ) : (
                <section className={card}>
                    <section className="card-numero">
                        <span>1/8</span>
                    </section>
                    <section className="card-texto">O que é JSX?</section>
                    <img src="assets/turn.png" alt="virar-pagina" className="virar-pagina" onClick={mostrarResposta}/>
                </section>
            )}
        </>
    );
}