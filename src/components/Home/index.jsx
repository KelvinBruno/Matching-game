import brainIconImgSrc from "../../images/brain-icon.png";
import * as S from "./Home.styles"; // feito dessa maneira para diferenciar um component normal de um styled component
const Home = () => {
  return (
    <>
      <S.HomeForm>
        <S.HomeHeader>
          <img src={brainIconImgSrc} alt="Brain" />
          <h1>Matching Game</h1>
        </S.HomeHeader>
        <S.HomeInput type="text" placeholder="Name" class="login__input" />
        <S.HomeButton type="submit" class="login__button" disabled>
          Play
        </S.HomeButton>
      </S.HomeForm>
    </>
  );
};

export default Home;
