import './App.css';
import { useState } from 'react';
import News from './Component/News';
import Navbar from './Component/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

  const [country, setCountry] = useState("in"); // default India
  return (
    <BrowserRouter>
      <div>
        <Navbar setCountry={setCountry} country={country} />
        <Routes>
          <Route path="/" element={<News category="top" key="top" heading="Top" country={country} />} />
          <Route path="/sports" element={<News category="sports" key="sports" heading="Sports" country={country} />} />
          <Route path="/politics" element={<News category="politics" key="politics" heading="Politics" country={country} />} />
          <Route path="/business" element={<News category="business" key="business" heading="Business" country={country} />} />
          <Route path="/entertainment" element={<News category="entertainment" key="entertainment" heading="Entertainment" country={country} />} />
          <Route path="/health" element={<News category="health" key="health" heading="Health" country={country} />} />
          <Route path="/science" element={<News category="science" key="science" heading="Science" country={country} />} />
          <Route path="/technology" element={<News category="technology" key="technology" heading="Technology" country={country} />} />
          <Route path="/crime" element={<News category="crime" key="crime" heading="Crime" country={country} />} />
          <Route path="/domestic" element={<News category="domestic" key="domestic" heading="Domestic" country={country} />} />
          <Route path="/education" element={<News category="education" key="education" heading="Education" country={country} />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
