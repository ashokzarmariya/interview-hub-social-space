
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import { Button } from '@/components/ui/button';

const Index = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<'candidate' | 'recruiter'>('candidate');

  const handleSwitchToCandidateDashboard = () => {
    setUserType('candidate');
    navigate('/');
  };

  const handleSwitchToRecruiterDashboard = () => {
    setUserType('recruiter');
    navigate('/recruiter');
  };

  return (
    <div>
      <div className="fixed top-4 right-4 z-50 flex space-x-2">
        <Button 
          variant={userType === 'candidate' ? 'default' : 'outline'} 
          onClick={handleSwitchToCandidateDashboard}
        >
          Candidate View
        </Button>
        <Button 
          variant={userType === 'recruiter' ? 'default' : 'outline'} 
          onClick={handleSwitchToRecruiterDashboard}
        >
          Recruiter View
        </Button>
      </div>
      <Dashboard />
    </div>
  );
};

export default Index;
