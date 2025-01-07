import React, { useEffect, useState } from "react";
import "./App.css"; // Import Tailwind via index.css or a custom setup
import Grid from "./components/Grid";


const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <h1 className="absolute top-8 text-white text-xl">
        Falling Rain Simulation
      </h1>
      <Grid rows={15} cols={10} />
    </div>
  );
};

export default App;
