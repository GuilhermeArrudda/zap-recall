import Sad from "../assets/sad.png";
import Party from "../assets/party.png";

export default function FinalPage({ hasFalse }) {

  const finalPage = [
    {
      title: 'PARABÉNS!',
      icon: Party,
      texto: 'Você não esqueceu de nenhum flashcard!',
    },
    {
      title: 'Putz..',
      icon: Sad,
      texto: `Você esqueceu alguns flashcards..
      Não desanime! Na próxima você consegue!`,
    }
  ]
  return (
    <>
      {hasFalse ? (
        <div className="pagina-final">
          <div className="texto">
            <p>{finalPage[1].title}</p>
            <img src={finalPage[1].icon} alt="party-emoji" />
          </div>
          <p>{finalPage[1].texto}</p>
        </div>
      ) : (
        <div className="pagina-final">
          <div className="texto">
            <p>{finalPage[0].title}</p>
            <img src={finalPage[0].icon} alt="party-emoji" />
          </div>
          <p>{finalPage[0].texto}</p>
        </div>
      )}
    </>
  );
}