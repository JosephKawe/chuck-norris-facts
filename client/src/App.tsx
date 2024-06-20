import React from 'react';
import Categories from './pages/Categories';
import JokeByCategory from './pages/JokeByCategory';

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-blue-800">
      <h1>Chuck Norris Facts</h1>
      <Categories />
      <JokeByCategory />
    </div>
  );
};

export default App;