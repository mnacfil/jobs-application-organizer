import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { 
  AddJob, 
  AllJob, 
  Stats, 
  Landing, 
  Dashboard, 
  Error, 
  Layout,
  Profile 
} from './app/pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Stats />}/>
          <Route path='all-job' element={<AllJob />}/>
          <Route path='add-job' element={<AddJob />}/>
          <Route path='profile' element={<Profile />}/>
        </Route>
        <Route path='landing' element={<Landing />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
