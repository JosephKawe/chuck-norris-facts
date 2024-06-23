import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { SEARCH_FACTS } from '../queries';

const FactByFreeText: React.FC = () => {
  const [freeText, setFreeText] = useState('');
  const [searchFacts, { loading, data, error }] = useLazyQuery(SEARCH_FACTS, {
    variables: { query: freeText },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    searchFacts({ variables: { query: freeText } });
  };

  return (
    <section
      className='xs:max-w-[85%] xs:min-w-[85%] sm:max-w-[80%] sm:min-w-[80%] md:max-w-[70%] md:min-w-[70%] sm:landscape:min-w-[70%] sm:landscape:max-w-[70%] md:landscape:min-w-[60%] md:landscape:max-w-[60%] xl:landscape:min-w-[40%] xl:landscape:max-w-[40%] mt-4 font-Poppins'
      aria-live="polite"
      aria-busy={loading}
    >
      <h2 className='uppercase font-semibold text-zinc-900/80 dark:text-zinc-200 text-center md:text-xl'>Get Facts by Free Text</h2>
      <form onSubmit={handleSubmit} className='flex md:mt-1'>
        <label htmlFor="freeTextInput" className="sr-only">Enter your Search</label>
        <input
          id="freeTextInput"
          type="text"
          value={freeText}
          onChange={(e) => setFreeText(e.target.value)}
          placeholder="Enter your Search"
          name="freeText"
          className='placeholder:text-zinc-400 w-full py-1 bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-200 pl-3 md:py-2 sm:pl-4 rounded-s-lg -outline-offset-0 focus:outline-zinc-900/80 dark:outline-2 text-lg md:text-xl dark:outline dark:outline-zinc-200 dark:focus:outline-zinc-300'
        />
        <button
          className='bg-zinc-900/80 text-zinc-200 py-1 px-3 rounded-e-lg text-nowrap hover:text-sky-500 duration-150 text-lg md:text-xl dark:outline-2 dark:outline dark:outline-zinc-200'
          type="submit"
          aria-label="Get Fact"
        >
          Get Fact
        </button>
      </form>

      <div className='w-full text-center mt-4 md:mt-6'>
        {loading && (
          <div className='bg-zinc-900/80 dark:border-2 dark:border-zinc-300 rounded-lg py-4 text-zinc-200'>
            <p className='flex justify-center items-center text-lg text-zinc-200 gap-x-1 md:text-xl' aria-label="Loading">
              Loading Fact...
              <span className="h-5 md:h-6 w-5 md:w-6 rounded-full animate-spin border-2 border-l-zinc-100 border-r-zinc-100 border-b-zinc-100 border-t-sky-500" role="status" aria-label="Loading Spinner"></span>
            </p>
          </div>
        )}
        {error && (
          <div className='bg-zinc-900/80 dark:border-2 dark:border-zinc-300 rounded-lg py-4'>
            <p role="alert" className='text-red-600 font-semibold text-sm sm:text-base md:text-lg'>
              Error: {error.message}
            </p>
          </div>
        )}
        {data && (
          <div className='bg-zinc-900/80 dark:border-2 dark:border-zinc-300 rounded-lg mt-4 md:mt-6'>
            <h1 className='mt-5 lg:mt-8 text-2xl md:text-4xl text-sky-500 font-semibold'>Fact:</h1>
            <p className="text-center p-4 sm:p-6 pt-1 text-zinc-200 text-lg md:text-xl">
              {data.searchFacts}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FactByFreeText;
