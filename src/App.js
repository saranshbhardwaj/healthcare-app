import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { Employees } from './components/Employees'
import { ChangeElections } from './components/ChangeElections';

function App() {

  // I was trying to set up router to take benefit of access loader
  // But was getting error and was getting stuck in setting up the boilerplate code
  // Therefore went for simple implementation of the router

  // const router = createBrowserRouter(
  //   [
  //     {
  //       path: "/",
  //       loader: async () => {
  //         return employeeLoader();
  //       }
  //     }
  //   ]
  // )
  return (
    // <div>
    //   <QueryCLientProvider client={queryClient}>
    //     <RouterProvider router={router} />
    //   </QueryCLientProvider>
    // </div>
    <div>
      <Router>
        <ul>
          <li>
            <Link to="/">Employees</Link>
          </li>
          <li>
            <Link to="/change-election">ChangeElections</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" Component={Employees} />
          <Route exact path="/change-election" Component={ChangeElections} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
