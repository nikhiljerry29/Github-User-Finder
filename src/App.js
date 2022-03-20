import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Alert from "./components/layouts/Alert";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import User from "./pages/User";
import { AlertProvider } from "./context/alert/AlertContext";
import { GithubProvider } from "./context/github/GithubContext";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
   return (
      <GithubProvider>
         <AlertProvider>
            <Router>
               <div className='flex flex-col justify-between h-screen'>
                  <Navbar />

                  <main className='container mx-auto p-3'>
                     <Alert />
                     <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/user/:username' element={<User />} />
                        <Route path='/notfound' element={<NotFound />} />
                        <Route path='/*' element={<NotFound />} />
                     </Routes>
                  </main>

                  <Footer />
               </div>
            </Router>
         </AlertProvider>
      </GithubProvider>
   );
}

export default App;
