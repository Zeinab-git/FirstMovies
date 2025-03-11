import Baner from "@/Components/Baner";
import Footer from "@/Components/Footer";
import Hierosection from "@/Components/Hierosection";
import MainSection from "@/Components/MainSection";


function Home() {
  return (
    <div className='bg-[#2F2F2F]'>
      <Hierosection />
      <div className="flex flex-col items-center justify-around">
        <MainSection Title="Suggested Movies"  url="http://localhost:8000/Movies" id="SuggestedMovies"/>
        <MainSection Title="Suggested Series"  url="http://localhost:8000/Series" id="SuggestedSeries"/>
        <Baner id="1"/>
        <MainSection Title="Suggested Animations"  url="http://localhost:8000/Animations" id="SuggestedAnimations"/>
        <Baner id="2"/>
        <MainSection Title="Action Movie & Series"  url="http://localhost:8000/ActionMovie&Serie" id="ActionMovieSerie"/>
        <Baner id="3"/>
        <MainSection Title="Drama Movie & Series"  url="http://localhost:8000/DramaMovie&Serie" id="DramaMovieSerie"/>
        <MainSection Title="Comedy Movie & Series"  url="http://localhost:8000/ComedyMovie&Serie" id="ComedyMovieSerie"/>
        <Baner id="4"/>
        <MainSection Title="Horror Movie & Series"  url="http://localhost:8000/HorrorMovie&Serie" id="HorrorMovieSerie"/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;


