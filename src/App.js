import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import { GithubProvider } from "./context/github/GithubContext";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
   return (
      <GithubProvider>
         <Router>
            <div className='flex flex-col justify-between h-screen'>
               <Navbar />

               <main className='container mx-auto p-3'>
                  <Routes>
                     <Route exact path='/' element={<Home />} />
                     <Route path='/about' element={<About />} />
                     <Route path='/*' element={<NotFound />} />
                  </Routes>
               </main>

               <Footer />
            </div>
         </Router>
      </GithubProvider>
   );
}

export default App;
