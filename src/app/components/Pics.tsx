import React from 'react'

const Pics = () => {
  return (
    <div className="lg:flex lg:flex-row lg:gap-5 md:grid md:grid-cols-2  flex flex-col items-center gap-5">
      <div className="border-black border-4 w-3/12 text-center p-4 md:w-60">
        {/* pics one */}
        <img
          src="/R.png"
          alt="hello"
          width={300}
          height={300}
          className="justify-center "
        />
        <h1 className="m-2">Perfume</h1>
        <p className="m-2">RS:-500</p>
        <button
          className="border-green-400
        bg-green-300 
        border-2 w-6/12"
        >
          Buy
        </button>
      </div>
      <div className="border-black border-4 w-3/12 text-center p-4 md:w-60">
        {/* pics two */}
        <img
          src="/R.png"
          alt="hello"
          width={300}
          height={300}
          className="justify-center "
        />
        <h1 className="m-2">Perfume</h1>
        <p className="m-2">RS:-500</p>
        <button
          className="border-green-400
        bg-green-300 
        border-2 w-6/12"
        >
          Buy
        </button>
      </div>
      <div className="border-black border-4 w-3/12 text-center p-4 md:w-60">
        {/* pics three */}
        <img
          src="/R.png"
          alt="hello"
          width={300}
          height={300}
          className="justify-center"
        />
        <h1 className="m-2">Perfume</h1>
        <p className="m-2">RS:-500</p>
        <button
          className="border-green-400
        bg-green-300 
        border-2 w-6/12"
        >
          Buy
        </button>
      </div>
      <div className="border-black border-4 w-3/12 text-center p-4 md:w-60">
        {/* pics four */}
        <img
          src="/R.png"
          alt="hello"
          width={300}
          height={300}
          className="justify-center "
        />
        <h1 className="m-2">Perfume</h1>
        <p className="m-2">RS:-500</p>
        <button
          className="border-green-400
        bg-green-300 
        border-2 w-6/12"
        >
          Buy
        </button>
      </div>
    </div>
  );
}

export default Pics;
 