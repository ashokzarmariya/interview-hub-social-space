
import { Calendar, MessageSquare, Users } from 'lucide-react';
import AppSidebar from '@/components/layout/AppSidebar';
import StatsCard from '@/components/dashboard/StatsCard';
import RecentInterviews from '@/components/dashboard/RecentInterviews';
import UpcomingInterviews from '@/components/dashboard/UpcomingInterviews';
import CommunityChannels from '@/components/dashboard/CommunityChannels';

// Mock data
const recentInterviews = [
  {
    id: "1",
    company: "Tech Innovations Inc.",
    position: "Senior Frontend Developer",
    date: "May 12, 2025",
    time: "2:00 PM",
    status: "completed" as const
  },
  {
    id: "2",
    company: "Global Solutions",
    position: "Full Stack Engineer",
    date: "May 10, 2025",
    time: "10:30 AM",
    status: "upcoming" as const
  },
  {
    id: "3",
    company: "Digital Creations",
    position: "UX Developer",
    date: "May 8, 2025",
    time: "3:15 PM",
    status: "pending" as const
  },
  {
    id: "4",
    company: "Future Systems",
    position: "React Developer",
    date: "May 5, 2025",
    time: "11:00 AM",
    status: "canceled" as const
  }
];

const upcomingInterviews = [
  {
    id: "1",
    company: "Global Solutions",
    position: "Full Stack Engineer",
    date: "May 10, 2025",
    time: "10:30 AM"
  },
  {
    id: "2",
    company: "Skyward Tech",
    position: "React Native Developer",
    date: "May 14, 2025",
    time: "1:00 PM"
  }
];

const communityChannels = [
  {
    id: "1",
    name: "frontend-devs",
    description: "Frontend development discussions",
    unreadCount: 5,
    lastActivity: "10m ago"
  },
  {
    id: "2",
    name: "interview-prep",
    description: "Interview preparation resources",
    unreadCount: 2,
    lastActivity: "1h ago"
  },
  {
    id: "3",
    name: "job-opportunities",
    description: "Job postings and referrals",
    unreadCount: 0,
    lastActivity: "3h ago"
  },
  {
    id: "4",
    name: "coding-challenges",
    description: "Coding problems and solutions",
    unreadCount: 7,
    lastActivity: "2h ago"
  }
];

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />
      
      <div className="flex flex-col flex-1 md:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex items-center gap-4">
              <button className="rounded-full bg-primary/10 p-2 text-primary">
                <span className="sr-only">Notifications</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 p-4 md:p-6 animate-fade-in">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Welcome back, John!</h2>
            <p className="text-muted-foreground">
              Here's what's happening with your interviews and community.
            </p>
          </div>

          {/* Stats */}
          <div className="grid gap-4 md:grid-cols-3 mb-8">
            <StatsCard 
              title="Total Interviews" 
              value="24" 
              description="4 this month" 
              icon={<Calendar className="h-6 w-6" />}
            />
            <StatsCard 
              title="Success Rate" 
              value="68%" 
              description="5% higher than average"
              icon={<Users className="h-6 w-6" />} 
            />
            <StatsCard 
              title="Community Activity" 
              value="14" 
              description="New messages today" 
              icon={<MessageSquare className="h-6 w-6" />}
            />
          </div>

          {/* Dashboard content */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <UpcomingInterviews 
              interviews={upcomingInterviews} 
              className="lg:col-span-2"
            />
            <CommunityChannels 
              channels={communityChannels} 
              className="lg:col-span-1"
            />
            <RecentInterviews 
              interviews={recentInterviews} 
              className="lg:col-span-3"
            />
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t p-4 text-center text-sm text-muted-foreground">
          © 2025 InterviewHub. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
