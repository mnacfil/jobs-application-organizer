import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './app/ProtectedRoute';
import { 
  AddJob, 
  AllJob, 
  Stats, 
  Landing, 
  Error, 
  Layout,
  Profile,
  Register,
  MyCalendar 
} from './app/pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path='/' 
          element=
            {<ProtectedRoute>
              <Layout />
            </ProtectedRoute>
            }
          >
          <Route index element={<Stats />}/>
          <Route path='all-job' element={<AllJob />}/>
          <Route path='add-job' element={<AddJob />}/>
          <Route path='profile' element={<Profile />}/>
          <Route path='calendar' element={<MyCalendar />}/>
        </Route>
        <Route path='landing' element={<Landing />}/>
        <Route path='register' element={<Register />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
      <ToastContainer position='top-center'/>
    </BrowserRouter>
  );
}

export default App;
