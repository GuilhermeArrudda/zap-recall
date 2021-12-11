import { useState } from "react";
import Deck from "./Decks.js";

export default function Login() {
    const [entrar, setEntrar] = useState(false);

    const verDeck = () => {
        setEntrar(true);
    }

    return (
        <>
        {entrar ? (
            <Decks />
        ) : (
        <section class="pagina-inicial">
            <img src="assets/logo.png" alt="logo da página"/>
            <button type = "button" data-identifier="start-zap-recall" onClick={verDeck}>
                <span>Praticar React</span>
                <img src="assets/next.png" alt="logo next"/>
            </button>
        </section>
        )}
        </>
    );
}