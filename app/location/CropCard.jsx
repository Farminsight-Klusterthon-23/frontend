
function CropCard ({ CerealData }) {
  const { title } = CerealData;
  return (
    <div>
      <div className="w-[5rem] h-10 text-grey-300 text-xs flex items-center justify-center m-2 p-1 bg-white rounded-lg border border-solid border-grey-500">
        <div>
        <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 8.5H4C3.72667 8.5 3.5 8.27333 3.5 8C3.5 7.72667 3.72667 7.5 4 7.5H12C12.2733 7.5 12.5 7.72667 12.5 8C12.5 8.27333 12.2733 8.5 12 8.5Z"
          fill="#292D32"
        />
        <path
          d="M8 12.5C7.72667 12.5 7.5 12.2733 7.5 12V4C7.5 3.72667 7.72667 3.5 8 3.5C8.27333 3.5 8.5 3.72667 8.5 4V12C8.5 12.2733 8.27333 12.5 8 12.5Z"
          fill="#292D32"
        />
      </svg>
        </div>
        <p className="text-grey-300">{title}</p>
      </div>
    </div>
  );
};

export default CropCard
