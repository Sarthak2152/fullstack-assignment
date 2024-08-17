type cardProp = {
  title: string;
  description: string;
};
const Card = ({ title, description }: cardProp) => {
  return (
    <div className="border border-gray-200 max-w-md rounded-lg bg-white shadow-sm">
      <div className="px-4 py-2">
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <div className="border-t border-gray-200"></div>
      <div className="px-4 py-2">
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
