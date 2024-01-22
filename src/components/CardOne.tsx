const CardOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white m-3 p-5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-sm font-bold text-black dark:text-white">
            Monthly Plan
          </h4>
          <span className="text-sm font-medium">30 Days </span>
        </div>

        <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
          Rs. 30
        </span>
      </div>
      <div>
        <h5 className="text-title-xs font-bold text-black dark:text-white pt-5">
          Features
        </h5>
        <ul className="list-disc">
          <li className="text-xs text-black dark:text-white mx-5 p-1">
            Unlimited Audios
          </li>
          <li className="text-xs text-black dark:text-white mx-5 p-1">
            Unlimited Audios
          </li>
          <li className="text-xs text-black dark:text-white mx-5 p-1">
            Unlimited Audios
          </li>
          <li className="text-xs text-black dark:text-white mx-5 p-1">
            Unlimited Audios
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardOne;
