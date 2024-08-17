import { useEffect, useState } from "react";
import CardsContainer from "../../Components/Home/CardsContainer";
import SearchBar from "../../Components/Home/SearchBar";
import Footer from "../../Components/Ui/Footer";
import Header from "../../Components/Ui/Header";
import axios from "axios";
import Loading from "../../Components/Ui/Loading";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cardsData, setCardsData] = useState([]);
  const [isError, setIsError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setIsError(null);
        setIsLoading(true);
        const url = import.meta.env.VITE_BACKEND_URL + `/cards/${searchQuery}`;
        const response = await axios.get(url);
        setCardsData(response.data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error("Error fetching cards:", error);
        setIsError(error.response.data.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCards();
  }, [searchQuery]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {isLoading ? (
        <Loading />
      ) : (
        <CardsContainer cards={cardsData} isError={isError} />
      )}
      <Footer />
    </div>
  );
};

export default HomePage;
