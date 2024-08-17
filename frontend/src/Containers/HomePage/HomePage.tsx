import CardsContainer from "../../Components/Home/CardsContainer";
import SearchBar from "../../Components/Home/SearchBar";
import Footer from "../../Components/Ui/Footer";
import Header from "../../Components/Ui/Header";
const HomePage = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <CardsContainer />
      <Footer />
    </div>
  );
};

export default HomePage;
