import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const text = `Building intelligent web applications and AI-powered solutions using React.js, Node.js, Python, and PyTorch.`;

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <div className="w-full mt-4 flex flex-col items-center z-30">
        <AnimatedHeaderSection
          subTitle={"Where intelligence meets the web, impact begins."}
          title={"Peter Mina"}
          text={text}
          textColor={"text-black"}
        />
      </div>
    </section>
  );
};

export default Hero;
