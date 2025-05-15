
import { Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type InterviewStatus = 'upcoming' | 'completed' | 'pending' | 'canceled';

interface Interview {
  id: string;
  company: string;
  position: string;
  date: string;
  time: string;
  status: InterviewStatus;
}

interface RecentInterviewsProps {
  interviews: Interview[];
  className?: string;
}

export function RecentInterviews({ interviews, className }: RecentInterviewsProps) {
  const getStatusClass = (status: InterviewStatus) => {
    return {
      upcoming: 'interview-status-upcoming',
      completed: 'interview-status-completed',
      pending: 'interview-status-pending',
      canceled: 'interview-status-canceled',
    }[status];
  };

  return (
    <Card className={cn(className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Recent Interviews</CardTitle>
            <CardDescription>Your last 5 interviews</CardDescription>
          </div>
          <Calendar className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {interviews.length > 0 ? (
            interviews.map((interview) => (
              <div key={interview.id} className="flex items-start justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">{interview.company}</p>
                  <p className="text-sm text-muted-foreground">{interview.position}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">{interview.date}</p>
                  <p className="text-sm text-muted-foreground">{interview.time}</p>
                  <span className={cn('interview-status mt-1', getStatusClass(interview.status))}>
                    {interview.status}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-muted-foreground text-center py-4">
              No recent interviews
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default RecentInterviews;
