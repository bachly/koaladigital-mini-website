function WorkPiece({ title, description }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 mb-16 px-4">
      <div className="relative pb-2/3 bg-gray-200 rounded"></div>
      <h3 className="text-2xl lg:text-3xl mt-4 mb-2 font-bold">{title}</h3>
      <p className="text-xl lg:text-2xl text-gray-900 leading-snug">
        {description}
      </p>
    </div>
  );
}

export default WorkPiece;
