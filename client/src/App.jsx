import { Route, Routes } from "react-router-dom";
import TasksPage from "./pages/TasksPage.jsx";
import TaskForm from "./pages/TaskForm.jsx";
import NotFound from "./pages/NotFound.jsx";
import { TaskContextProvider } from "./context/TaskProvider.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="bg-color1 h-screen">
      <Navbar></Navbar>
      <div className="container mx-auto py-4 px-20">
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<TasksPage></TasksPage>}></Route>
            <Route path="/new" element={<TaskForm></TaskForm>}></Route>
            <Route path="/edit/:id" element={<TaskForm></TaskForm>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  );
}

export default App;
