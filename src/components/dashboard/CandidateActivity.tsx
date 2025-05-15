
import { BarChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface ActivityData {
  id: string;
  date: string;
  newApplications: number;
  interviewsScheduled: number;
  feedbackReceived: number;
}

interface CandidateActivityProps {
  activityData: ActivityData[];
  className?: string;
}

export function CandidateActivity({ activityData, className }: CandidateActivityProps) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Weekly Activity</CardTitle>
            <CardDescription>Candidate and interview metrics for the past 7 days</CardDescription>
          </div>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsBarChart
              data={[...activityData].reverse()}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 25,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="date"
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip />
              <Legend />
              <Bar dataKey="newApplications" name="New Applications" fill="#9b87f5" />
              <Bar dataKey="interviewsScheduled" name="Interviews Scheduled" fill="#4CAF50" />
              <Bar dataKey="feedbackReceived" name="Feedback Received" fill="#2196F3" />
            </RechartsBarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export default CandidateActivity;
