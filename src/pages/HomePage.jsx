import Populars from "../components/Populars";

export default function HomePage(props) {
  const { activeProfile } = props;
  return (
    <div className="homePage-container">
      <div className="videoSection">
        <video autoPlay>
          <source src="/src/assets/home-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div>
        <Populars activeProfile={activeProfile} />
      </div>
    </div>
  );
}
