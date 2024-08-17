import Card from "../Ui/Card";
import ErrorComponent from "../Ui/Error";

type PropTypes = {
  cards: { title: string; description: string }[];
  isError: null | string;
};

const CardsContainer = ({ cards, isError }: PropTypes) => {
  return (
    <div className="flex flex-1 justify-center  p-16 ">
      {isError ? (
        <ErrorComponent message={isError} />
      ) : (
        <div className="grid sm:grid-cols-2 gap-12">
          {cards.map((topic, index) => (
            <Card
              title={topic.title}
              key={index}
              description={topic.description}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardsContainer;
