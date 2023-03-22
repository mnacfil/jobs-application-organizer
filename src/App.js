import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddJob, AllJob, Stats, Landing, Dashboard, Error, Layout } from './app/pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />}/>
          <Route path='add-job' element={<AddJob />}/>
          <Route path='all-job' element={<AllJob />}/>
          <Route path='stats' element={<Stats />}/>
        </Route>
        <Route path='landing' element={<Landing />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
