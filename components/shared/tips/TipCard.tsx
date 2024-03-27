import React from 'react'
type TipCardParams = {
    image: string;
    label: string;
    text: string;
    index: number
}
function TipCard({image, label, text, index} : TipCardParams) {
  return (
    <div className="bg-dark-500 dark:bg-gray-900">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img className="w-full dark:hidden" src={image} alt="dashboard image" />
        <div className="mt-4 md:mt-0">
        <span className="mb-4 text-4xl tracking-tight font-extrabold text-white">#{index}</span>
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
          {label}
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
{
    text
}          </p>

        </div>
      </div>
    </div>
  );
}

export default TipCard