
import { useState } from 'react';
import { 
  Container, Grid, Paper, Typography, Box, 
  Card, CardContent, List, ListItem, ListItemText,
  ListItemIcon, Avatar, Divider, Chip, Button
} from '@mui/material';
import TimelineIcon from '@mui/icons-material/Timeline';
import PeopleIcon from '@mui/icons-material/People';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const CandidateDashboard = () => {
  const upcomingInterviews = [
    { id: 1, company: 'Tech Corp', position: 'Frontend Developer', date: '2023-05-20', time: '10:00 AM' },
    { id: 2, company: 'DevHire', position: 'React Developer', date: '2023-05-24', time: '2:00 PM' },
  ];

  const interviewHistory = [
    { id: 1, company: 'CodeSolutions', position: 'JavaScript Developer', date: '2023-04-15', result: 'Passed' },
    { id: 2, company: 'WebDev Co', position: 'UI Developer', date: '2023-04-02', result: 'Rejected' },
    { id: 3, company: 'AppStrong', position: 'Frontend Engineer', date: '2023-03-25', result: 'Pending' },
  ];

  const communities = [
    { id: 1, name: 'Frontend Developers', members: 2367, messages: 153 },
    { id: 2, name: 'Interview Prep', members: 1823, messages: 89 },
    { id: 3, name: 'Job Hunting', members: 5231, messages: 217 },
  ];

  return (
    <Container maxWidth="xl" className="mb-8">
      <Typography variant="h4" component="h1" className="mb-6 text-gray-800 font-bold">
        Candidate Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Stats Overview */}
        <Grid item xs={12} className="mb-4">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="p-4 flex flex-col items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <Typography variant="h5">12</Typography>
                <Typography variant="body1">Applications</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="p-4 flex flex-col items-center bg-gradient-to-r from-green-500 to-green-600 text-white">
                <Typography variant="h5">5</Typography>
                <Typography variant="body1">Interviews</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="p-4 flex flex-col items-center bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                <Typography variant="h5">3</Typography>
                <Typography variant="body1">Offers</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="p-4 flex flex-col items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <Typography variant="h5">85%</Typography>
                <Typography variant="body1">Success Rate</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        {/* Upcoming Interviews */}
        <Grid item xs={12} md={6}>
          <Paper className="p-4">
            <Box className="flex items-center mb-4">
              <CalendarMonthIcon className="text-blue-500 mr-2" />
              <Typography variant="h6">Upcoming Interviews</Typography>
            </Box>
            <List>
              {upcomingInterviews.map(interview => (
                <ListItem key={interview.id} className="bg-gray-50 mb-2 rounded">
                  <ListItemText
                    primary={`${interview.position} at ${interview.company}`}
                    secondary={`${interview.date} at ${interview.time}`}
                  />
                  <Button variant="contained" size="small" className="ml-2">
                    Prepare
                  </Button>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Communities */}
        <Grid item xs={12} md={6}>
          <Paper className="p-4 h-full">
            <Box className="flex items-center mb-4">
              <PeopleIcon className="text-blue-500 mr-2" />
              <Typography variant="h6">Communities</Typography>
            </Box>
            <List>
              {communities.map(community => (
                <ListItem key={community.id} className="bg-gray-50 mb-2 rounded">
                  <ListItemIcon>
                    <Avatar className="bg-blue-600">{community.name[0]}</Avatar>
                  </ListItemIcon>
                  <ListItemText
                    primary={community.name}
                    secondary={`${community.members} members • ${community.messages} new messages`}
                  />
                  <Button variant="outlined" size="small">
                    Join
                  </Button>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Interview History */}
        <Grid item xs={12}>
          <Paper className="p-4">
            <Box className="flex items-center mb-4">
              <TimelineIcon className="text-blue-500 mr-2" />
              <Typography variant="h6">Interview History</Typography>
            </Box>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Company</th>
                    <th className="py-2 px-4 border-b text-left">Position</th>
                    <th className="py-2 px-4 border-b text-left">Date</th>
                    <th className="py-2 px-4 border-b text-left">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {interviewHistory.map(interview => (
                    <tr key={interview.id}>
                      <td className="py-2 px-4 border-b">{interview.company}</td>
                      <td className="py-2 px-4 border-b">{interview.position}</td>
                      <td className="py-2 px-4 border-b">{interview.date}</td>
                      <td className="py-2 px-4 border-b">
                        <Chip 
                          label={interview.result} 
                          color={
                            interview.result === 'Passed' ? 'success' : 
                            interview.result === 'Rejected' ? 'error' : 'default'
                          }
                          size="small"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CandidateDashboard;
