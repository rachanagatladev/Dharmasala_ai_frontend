import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layout/mainlayout';
import Dashboard from '../pages/Dashboard';
import LiveMonitoring from '../pages/LiveMonitoring';
import DetectionModels from '../pages/DetectionModels';
import Alerts from '../pages/Alerts';
import Settings from '../pages/Settings';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/live-monitoring" element={<LiveMonitoring />} />
        <Route path="/detection-models" element={<DetectionModels />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;