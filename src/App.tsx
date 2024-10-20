import React from 'react'
import { Route, BrowserRouter as Router, Routes,} from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import ChartsPage from './components/pages/ChartsPage';
import MapsPage from './components/pages/MapsPage';
import ComponentsPage from './components/pages/ComponentsPage';
import ECommercePage from './components/pages/ECommercePage';
import CalendarPage from './components/pages/CalendarPage';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/charts" element={<ChartsPage />} />
            <Route path="/maps" element={<MapsPage />} />
            <Route path="/components" element={<ComponentsPage />} />
            <Route path="/e-commerce" element={<ECommercePage />} />
            <Route path="/calendar" element={<CalendarPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;