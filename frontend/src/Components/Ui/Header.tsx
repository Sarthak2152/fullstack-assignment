const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <nav>
        <ul className="flex gap-2">
          <a href="#" className="text-xl ">
            Abstract
          </a>
          <p>|</p>
          <a href="#" className="text-xl ">
            Help Center
          </a>
        </ul>
      </nav>
      <button className="bg-neutral-900 border text-white px-4 py-2 rounded-lg hover:bg-neutral-700 transition-all duration-300">
        Submit a request
      </button>
    </header>
  );
};

export default Header;
