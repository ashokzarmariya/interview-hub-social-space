
import { Calendar, Briefcase, Users, BarChart } from 'lucide-react';
import AppSidebar from '@/components/layout/AppSidebar';
import StatsCard from '@/components/dashboard/StatsCard';
import RecruiterOpenings from '@/components/dashboard/RecruiterOpenings';
import TopCandidates from '@/components/dashboard/TopCandidates';
import CandidateActivity from '@/components/dashboard/CandidateActivity';

// Mock data
const openPositions = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    department: "Engineering",
    applicants: 24,
    posted: "May 5, 2025",
    status: "active" as const
  },
  {
    id: "2",
    title: "UX/UI Designer",
    department: "Design",
    applicants: 18,
    posted: "May 8, 2025",
    status: "active" as const
  },
  {
    id: "3",
    title: "DevOps Engineer",
    department: "Infrastructure",
    applicants: 12,
    posted: "May 10, 2025",
    status: "active" as const
  },
  {
    id: "4",
    title: "Product Manager",
    department: "Product",
    applicants: 9,
    posted: "May 12, 2025",
    status: "draft" as const
  }
];

const topCandidates = [
  {
    id: "1",
    name: "Sarah Johnson",
    position: "Senior Frontend Developer",
    score: 92,
    status: "pending" as const
  },
  {
    id: "2",
    name: "Alex Chen",
    position: "UX/UI Designer",
    score: 88,
    status: "interviewed" as const
  },
  {
    id: "3",
    name: "Michael Rodriguez",
    position: "DevOps Engineer",
    score: 85,
    status: "pending" as const
  },
  {
    id: "4",
    name: "Jessica Williams",
    position: "Product Manager",
    score: 90,
    status: "offer" as const
  }
];

const candidateActivity = [
  {
    id: "1",
    date: "May 14, 2025",
    newApplications: 12,
    interviewsScheduled: 8,
    feedbackReceived: 5
  },
  {
    id: "2",
    date: "May 13, 2025",
    newApplications: 9,
    interviewsScheduled: 6,
    feedbackReceived: 7
  },
  {
    id: "3",
    date: "May 12, 2025",
    newApplications: 14,
    interviewsScheduled: 9,
    feedbackReceived: 4
  },
  {
    id: "4",
    date: "May 11, 2025",
    newApplications: 7,
    interviewsScheduled: 5,
    feedbackReceived: 6
  },
  {
    id: "5",
    date: "May 10, 2025",
    newApplications: 11,
    interviewsScheduled: 7,
    feedbackReceived: 3
  },
  {
    id: "6",
    date: "May 9, 2025",
    newApplications: 8,
    interviewsScheduled: 4,
    feedbackReceived: 5
  },
  {
    id: "7",
    date: "May 8, 2025",
    newApplications: 10,
    interviewsScheduled: 6,
    feedbackReceived: 4
  }
];

const RecruiterDashboard = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />
      
      <div className="flex flex-col flex-1 md:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Recruiter Dashboard</h1>
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
            <h2 className="text-3xl font-bold mb-2">Welcome back, Recruiter!</h2>
            <p className="text-muted-foreground">
              Here's what's happening with your candidates and open positions.
            </p>
          </div>

          {/* Stats */}
          <div className="grid gap-4 md:grid-cols-4 mb-8">
            <StatsCard 
              title="Open Positions" 
              value="12" 
              description="3 new this week" 
              icon={<Briefcase className="h-6 w-6" />}
            />
            <StatsCard 
              title="Total Candidates" 
              value="87" 
              description="24 new applications"
              icon={<Users className="h-6 w-6" />} 
            />
            <StatsCard 
              title="Interviews This Week" 
              value="32" 
              description="8 scheduled today" 
              icon={<Calendar className="h-6 w-6" />}
            />
            <StatsCard 
              title="Conversion Rate" 
              value="24%" 
              description="2% higher than last month" 
              icon={<BarChart className="h-6 w-6" />}
            />
          </div>

          {/* Dashboard content */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <RecruiterOpenings 
              positions={openPositions} 
              className="lg:col-span-2"
            />
            <TopCandidates 
              candidates={topCandidates} 
              className="lg:col-span-1"
            />
            <CandidateActivity 
              activityData={candidateActivity} 
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

export default RecruiterDashboard;
