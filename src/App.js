import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import LoadingScreen from "./UI/LoadingScreen";

// Pages (Routes)
const HomePage = React.lazy(() => import("./pages/Home/Home"));
const GroupsPage = React.lazy(() => import("./pages/Groups/Groups"));
const MatchesPage = React.lazy(() => import("./pages/Matches/Matches"));
const StadiumsPage = React.lazy(() => import("./pages/Stadiums/Stadiums"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/groups" element={<GroupsPage />} />
          <Route path="/fixtures" element={<MatchesPage />} />
          <Route path="/stadiums" element={<StadiumsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
