import '../App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function GameHeroCard({ GameData }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 0,
    pauseonHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const RenderGame = GameData.map((game) => {
    return (
      <div key={game.id} className="GameHeroCard" style={game.thebackground}>
        <div className="GameCardDetail">
          <h2 className="GameTitleCard">{game.title}</h2>
          <p className="GameTypeCard">{game.type}</p>
          <div className="GameTagContainer">
            <span className="GameTagCard">{game.tag}</span>
            <span className="GameTagCard">{game.tag2}</span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="GameHero">
      {/* <Slider {...settings}> */}
      {RenderGame}
      {/* </Slider> */}
    </div>
  );
}

export default GameHeroCard;
