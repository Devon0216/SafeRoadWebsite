import "./hero-home.css";
const VideoThumb = "images/hero-image-01.jpg";
import ModalVideo from "./modal-video";

export default function HeroHome() {
  return (
    <section className="hero-section hero-content">
      <div className="hero-container">
        <div className="hero-header">
          <h1 className="hero-title">iWitnessRoads</h1>
          <div className="hero-subtitle-container">
            <p className="hero-subtitle">
              Your Eyes Make Roads Safe - Report Violations, Save Lives.
            </p>
          </div>
        </div>
        <ModalVideo
          thumb={VideoThumb}
          thumbWidth={1104}
          thumbHeight={576}
          thumbAlt="Modal video thumbnail"
          video="videos/Demo.mp4"
          videoWidth={1920}
          videoHeight={1080}
        />
      </div>
    </section>
  );
}
