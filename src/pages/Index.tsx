
import { useState } from 'react';
import { useLocation } from 'wouter';
import { AppBar, Toolbar, Typography, Button, Box, Paper, Grid } from '@mui/material';
import CandidateDashboard from './CandidateDashboard';

const Index = () => {
  const [, navigate] = useLocation();

  const handleSwitchToRecruiterDashboard = () => {
    navigate('/recruiter');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AppBar position="static" className="mb-4">
        <Toolbar className="flex justify-between">
          <Typography variant="h6" component="div">
            InterviewPlatform
          </Typography>
          <Button 
            color="inherit" 
            onClick={handleSwitchToRecruiterDashboard}
          >
            Switch to Recruiter View
          </Button>
        </Toolbar>
      </AppBar>
      <CandidateDashboard />
    </div>
  );
};

export default Index;
