const Alert = () => {
  return (
    <div className="px-10 py-5">
      <div className=''>
        <button className="border-2 border-blue-400 text-white font-bold rounded mt-3.5 mb-2.5 ml-12 px-4 py-2 bg-blue-400 hover:bg-blue-500">
          Button One
        </button>
      </div>
      <div>
        <p className="w-106 px-10 py-5 border border-2 border-red-500 bg-red-100 text-red-600 ml-12 font-bold mt-3.5 rounded-lg">
          <strong>Alert!</strong> This is awesome!
        </p>
      </div>
    </div>
  );
};

export default Alert;
