import Logo from "../assets/logo.png";
import Next from "../assets/next.png";

export default function Login({ setQuestionId, setClicked }) {
    const Logar = () => {
      setQuestionId(1);
      setClicked(true);
    };
  
    return (
      <>
        <div className="pagina-inicial">
          <img src={Logo} alt="main-logo" />
          <button
            type="button"
            className="logando"
            data-identifier="start-zap-recall"
            onClick={Logar}
          >
            <p>Praticar React</p>
            <img src={Next} alt="next" />
          </button>
        </div>
      </>
    );
  }