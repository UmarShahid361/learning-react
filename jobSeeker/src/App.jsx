import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AddJobsPage from './pages/AddJobsPage';
import EditJobPage from './pages/EditJobPage';
import HomePage from './pages/HomePage';
import JobPage, { jobLoader } from './pages/JobPage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';


const App = () => {

  // Add new job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newJob),
    });
    return;
  }

  // Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  };

  // Update Job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`,{
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />}/>
        <Route path='/jobs' element={<JobsPage/>}/>
        <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader} />
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader} />
        <Route path='/add-job' element={<AddJobsPage addJobSubmit={addJob}/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Route>
    )
  );

  
  return <RouterProvider router={router} />
};

export default App;