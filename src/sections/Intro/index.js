import "./Intro.scss";
import laboratory from '../../assets/laboratory.svg';

function Intro() {
  return (
    <div className="intro">
      <div className="intro__scene">
        <img src={laboratory} alt="floor lines" />
      </div>
    </div>
  );
}

export default Intro;