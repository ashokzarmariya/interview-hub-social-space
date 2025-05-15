
import { useState } from 'react';
import { useLocation } from 'wouter';
import { 
  Container, Grid, Paper, Typography, Box, 
  List, ListItem, ListItemText, ListItemIcon, 
  Avatar, Button, Chip, AppBar, Toolbar
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EventNoteIcon from '@mui/icons-material/EventNote';

const RecruiterDashboard = () => {
  const [, navigate] = useLocation();

  const handleSwitchToCandidateDashboard = () => {
    navigate('/');
  };

  const openPositions = [
    { id: 1, title: 'Senior React Developer', applications: 24, status: 'Active' },
    { id: 2, title: 'UI/UX Designer', applications: 18, status: 'Active' },
    { id: 3, title: 'Product Manager', applications: 12, status: 'Paused' },
  ];

  const topCandidates = [
    { id: 1, name: 'Jane Smith', position: 'Senior React Developer', score: 92, status: 'Interview Scheduled' },
    { id: 2, name: 'Mike Johnson', position: 'UI/UX Designer', score: 88, status: 'Technical Test' },
    { id: 3, name: 'Sarah Brown', position: 'Product Manager', score: 85, status: 'Review' },
  ];

  const upcomingInterviews = [
    { id: 1, candidate: 'Jane Smith', position: 'Senior React Developer', date: '2023-05-20', time: '10:00 AM' },
    { id: 2, candidate: 'Alex Taylor', position: 'React Developer', date: '2023-05-24', time: '2:00 PM' },
    { id: 3, candidate: 'Chris Anderson', position: 'UI/UX Designer', date: '2023-05-25', time: '11:30 AM' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AppBar position="static" className="mb-4">
        <Toolbar className="flex justify-between">
          <Typography variant="h6" component="div">
            InterviewPlatform
          </Typography>
          <Button 
            color="inherit" 
            onClick={handleSwitchToCandidateDashboard}
          >
            Switch to Candidate View
          </Button>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="xl" className="mb-8">
        <Typography variant="h4" component="h1" className="mb-6 text-gray-800 font-bold">
          Recruiter Dashboard
        </Typography>

        <Grid container spacing={3}>
          {/* Stats Overview */}
          <Grid item xs={12} className="mb-4">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <Paper className="p-4 flex flex-col items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  <Typography variant="h5">3</Typography>
                  <Typography variant="body1">Open Positions</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper className="p-4 flex flex-col items-center bg-gradient-to-r from-green-500 to-green-600 text-white">
                  <Typography variant="h5">54</Typography>
                  <Typography variant="body1">Applications</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper className="p-4 flex flex-col items-center bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                  <Typography variant="h5">12</Typography>
                  <Typography variant="body1">Interviews</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper className="p-4 flex flex-col items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                  <Typography variant="h5">5</Typography>
                  <Typography variant="body1">Offers Sent</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          {/* Open Positions */}
          <Grid item xs={12} md={6}>
            <Paper className="p-4">
              <Box className="flex items-center mb-4">
                <WorkIcon className="text-blue-500 mr-2" />
                <Typography variant="h6">Open Positions</Typography>
              </Box>
              <List>
                {openPositions.map(position => (
                  <ListItem key={position.id} className="bg-gray-50 mb-2 rounded">
                    <ListItemText
                      primary={position.title}
                      secondary={`${position.applications} applications`}
                    />
                    <Chip 
                      label={position.status} 
                      color={position.status === 'Active' ? 'success' : 'default'}
                      size="small"
                      className="mr-2"
                    />
                    <Button variant="contained" size="small">
                      View
                    </Button>
                  </ListItem>
                ))}
              </List>
              <Box className="mt-3 text-right">
                <Button variant="outlined" color="primary">
                  Add New Position
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Top Candidates */}
          <Grid item xs={12} md={6}>
            <Paper className="p-4">
              <Box className="flex items-center mb-4">
                <PeopleIcon className="text-blue-500 mr-2" />
                <Typography variant="h6">Top Candidates</Typography>
              </Box>
              <List>
                {topCandidates.map(candidate => (
                  <ListItem key={candidate.id} className="bg-gray-50 mb-2 rounded">
                    <ListItemIcon>
                      <Avatar className="bg-blue-600">{candidate.name[0]}</Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={candidate.name}
                      secondary={`${candidate.position} • Score: ${candidate.score}%`}
                    />
                    <Chip 
                      label={candidate.status} 
                      color="primary"
                      size="small"
                      className="mr-2"
                    />
                    <Button variant="contained" size="small">
                      View
                    </Button>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          {/* Upcoming Interviews */}
          <Grid item xs={12}>
            <Paper className="p-4">
              <Box className="flex items-center mb-4">
                <EventNoteIcon className="text-blue-500 mr-2" />
                <Typography variant="h6">Upcoming Interviews</Typography>
              </Box>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b text-left">Candidate</th>
                      <th className="py-2 px-4 border-b text-left">Position</th>
                      <th className="py-2 px-4 border-b text-left">Date</th>
                      <th className="py-2 px-4 border-b text-left">Time</th>
                      <th className="py-2 px-4 border-b text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {upcomingInterviews.map(interview => (
                      <tr key={interview.id}>
                        <td className="py-2 px-4 border-b">{interview.candidate}</td>
                        <td className="py-2 px-4 border-b">{interview.position}</td>
                        <td className="py-2 px-4 border-b">{interview.date}</td>
                        <td className="py-2 px-4 border-b">{interview.time}</td>
                        <td className="py-2 px-4 border-b">
                          <Button variant="contained" size="small" color="primary">
                            Join
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Paper>
          </Grid>

          {/* Activity Chart */}
          <Grid item xs={12}>
            <Paper className="p-4">
              <Box className="flex items-center mb-4">
                <AssignmentIcon className="text-blue-500 mr-2" />
                <Typography variant="h6">Recent Activity</Typography>
              </Box>
              <Box className="h-64 flex items-center justify-center bg-gray-100">
                <Typography variant="body1" className="text-gray-500">
                  Activity chart will be displayed here
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default RecruiterDashboard;
