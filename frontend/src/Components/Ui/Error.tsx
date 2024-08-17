const ErrorComponent = ({ message }: { message: string }) => {
  console.log(message);
  return (
    <div className="flex items-center justify-center p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
      <svg
        className="w-6 h-6 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18.364 5.636a9 9 0 11-12.728 12.728 9 9 0 0112.728-12.728zM12 8v4m0 4h.01"></path>
      </svg>
      <span>{message}</span>
    </div>
  );
};

export default ErrorComponent;
