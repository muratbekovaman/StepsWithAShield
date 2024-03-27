"use client"


import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

import { Configuration } from "@/components/password/Configuration";
import { Headings } from "@/components/password/Headings";
import { PasswordArea } from "@/components/password/PasswordArea";
import { generatePassword, isFireFoxBrowser } from "@/lib/utils";

const Home = () => {
  const [password, setPassword] = useState("");
  const [uppercase, _] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [length, setLength] = useState(20);

  const MAX_LENGTH = 128;

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const length = e.target.valueAsNumber;
    if (length) setLength(length <= MAX_LENGTH ? length : MAX_LENGTH);
  };

  const handleUppercaseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // DON'T ALLOW TO UNCHECK IT.
    e.preventDefault();
  };

  const handleLowercaseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLowercase(e.target.checked);
  };

  const handleNumbersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumbers(e.target.checked);
  };

  const handleSymbolsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSymbols(e.target.checked);
  };



  const regeneratePassword = () => {
    const password = generatePassword(
      uppercase,
      lowercase,
      numbers,
      symbols,
      length
    );
    setPassword(password);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    return toast("Copied to Clipboard!", {
      duration: 1500,
      position: "top-right",
    });
  };

  useEffect(regeneratePassword, [
    uppercase,
    lowercase,
    numbers,
    symbols,
    length,
  ]);

  const isFireFox = isFireFoxBrowser();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-primary text-gray-700 dark:bg-darkPrimary dark:text-darkSecondary">

    <div className="flex flex-col justify-center items-center min-h-[100vh] w-[100vw] pb-20">
      <h1 className="gradient-text lg:md:text-[45px] text-[20px] py-20 text-center">
        Почему важно иметь надежный пароль
      </h1>
      <figure className="max-w-lg">
  <img className="h-auto max-w-full rounded-lg" src="/assets/grid/password.png" alt="image description"/>
  <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Чтобы не подвергать себя риску кражи идентификационных данных и не стать жертвой вымогательства, вам нужно создавать пароли, которые могут противостоять усилиям хакеров, вооруженных современными средствами взлома.<span className="gradient-text">Слабость вашего аккаунта – это настоящая мечта для киберпреступника.</span> </figcaption>
</figure>
    </div>
      <main className="w-full flex flex-1 flex-col items-center justify-center gap-3 px-20 text-center">

        <Headings />
        <section className="rounded-md shadow-xl shadow-darkPrimary flex flex-col justify-center items-center gap-6 p-10 dark:shadow-darkSecondary md:flex-row">
          <PasswordArea
            password={password}
            copyToClipboard={copyToClipboard}
            regeneratePassword={regeneratePassword}
          />
          <Configuration
            length={length}
            uppercase={uppercase}
            lowercase={lowercase}
            numbers={numbers}
            symbols={symbols}
            handleSliderChange={handleSliderChange}
            handleUppercaseChange={handleUppercaseChange}
            handleLowercaseChange={handleLowercaseChange}
            handleNumbersChange={handleNumbersChange}
            handleSymbolsChange={handleSymbolsChange}
            isFireFox={isFireFox}
          />
        </section>
      </main>


      <Toaster />
    </div>
  );
};

export default Home;