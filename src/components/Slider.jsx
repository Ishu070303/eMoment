import FirstSlider from "../assets/first-slider.svg";
import SecondSlider from "../assets/second-slider.svg";
import ThirdSlider from "../assets/third-slider.svg";

const Slider = () => {
  return (
    <main className="h-[350px] lg:h-[622px]">
      <div className="w-[500px] sm:w-[650px] md:w-[900px] lg:w-[1200px]  absolute top-[38%] sm:top-[40%] md:top-[50%] lg:top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
        <div className="wrapper">
          <img src={FirstSlider} alt="img" className="w-full" />
          <img src={SecondSlider} alt="img" className="w-full" />
          <img src={ThirdSlider} alt="img" className="w-full" />
        </div>
      </div>
    </main>
  );
};

export default Slider;
