import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {
  RevealPage,
  MemePosterPage,
  DetectivePage,
  HackerPage,
  NotScamPage,
  FakeBiryaniApp,
  SpinnerQuizPage,
  VideoTeaserPage,
  RewardPage,
  WhatsAppForwardPage,
  FoodCourtPage,
  HostelPage,
  GymPage,
  SecretBiryaniPage,
  FreeAttendancePage,
  FreeMojitosPage,
  HealthNutPage
} from './components';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/you-got-anwesha" replace />} />
        <Route path="/you-got-anwesha" element={<RevealPage />} />
        <Route path="/free-pizza" element={<MemePosterPage />} />
        <Route path="/campus-mystery" element={<DetectivePage />} />
        <Route path="/hacker-mode" element={<HackerPage />} />
        <Route path="/not-a-scam" element={<NotScamPage />} />
        <Route path="/free-biryani" element={<FakeBiryaniApp />} />
        <Route path="/anwesha-vibe" element={<SpinnerQuizPage />} />
        <Route path="/fest-secret" element={<VideoTeaserPage />} />
        <Route path="/reward-trap" element={<RewardPage />} />
        <Route path="/forwarded-many-times" element={<WhatsAppForwardPage />} />
        
        {/* New pages */}
        <Route path="/food-court-hack" element={<FoodCourtPage />} />
        <Route path="/mess-escape" element={<HostelPage />} />
        <Route path="/free-gym" element={<GymPage />} />
        <Route path="/secret-biryani" element={<SecretBiryaniPage />} />
        <Route path="/free-attendance" element={<FreeAttendancePage />} />
        <Route path="/mojito-party" element={<FreeMojitosPage />} />
        <Route path="/health-nut" element={<HealthNutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
