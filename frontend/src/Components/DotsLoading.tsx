const DotsLoading = () => {
  return (
    <div className="flex justify-center items-center space-x-2  w-10">
      <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></span>
      <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200"></span>
      <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-400"></span>
    </div>
  );
};

export default DotsLoading;