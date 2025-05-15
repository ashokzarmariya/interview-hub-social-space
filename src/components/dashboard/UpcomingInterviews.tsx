
import { Calendar } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Interview {
  id: string;
  company: string;
  position: string;
  date: string;
  time: string;
}

interface UpcomingInterviewsProps {
  interviews: Interview[];
  className?: string;
}

export function UpcomingInterviews({ interviews, className }: UpcomingInterviewsProps) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Upcoming Interviews</CardTitle>
            <CardDescription>Prepare for your next opportunities</CardDescription>
          </div>
          <Calendar className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        {interviews.length > 0 ? (
          <div className="space-y-6">
            {interviews.map((interview) => (
              <div key={interview.id} className="flex flex-col space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{interview.company}</h4>
                    <p className="text-sm text-muted-foreground">{interview.position}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{interview.date}</p>
                    <p className="text-sm text-muted-foreground">{interview.time}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                  <Button size="sm" className="w-full">
                    Prepare
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <Calendar className="h-12 w-12 text-muted-foreground mb-2" />
            <h3 className="text-lg font-medium">No upcoming interviews</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Schedule your next interview to prepare better.
            </p>
            <Button>Schedule Interview</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default UpcomingInterviews;
