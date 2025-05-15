
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type PositionStatus = 'active' | 'draft' | 'closed';

interface Position {
  id: string;
  title: string;
  department: string;
  applicants: number;
  posted: string;
  status: PositionStatus;
}

interface RecruiterOpeningsProps {
  positions: Position[];
  className?: string;
}

export function RecruiterOpenings({ positions, className }: RecruiterOpeningsProps) {
  const getStatusClass = (status: PositionStatus) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-amber-100 text-amber-800';
      case 'closed':
        return 'bg-slate-100 text-slate-800';
    }
  };

  return (
    <Card className={cn(className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Open Positions</CardTitle>
            <CardDescription>Manage your job openings</CardDescription>
          </div>
          <Briefcase className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {positions.length > 0 ? (
            positions.map((position) => (
              <div key={position.id} className="flex flex-col space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{position.title}</h4>
                    <p className="text-sm text-muted-foreground">{position.department}</p>
                  </div>
                  <span 
                    className={cn(
                      'px-2 py-1 text-xs rounded-full font-medium', 
                      getStatusClass(position.status)
                    )}
                  >
                    {position.status}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <p className="text-muted-foreground">
                    {position.applicants} applicants • Posted {position.posted}
                  </p>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
                {position.id !== positions[positions.length - 1].id && (
                  <hr className="border-t border-border my-2" />
                )}
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <Briefcase className="h-12 w-12 text-muted-foreground mb-2" />
              <h3 className="text-lg font-medium">No open positions</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Create your first job posting to start receiving applications.
              </p>
              <Button>Create Position</Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default RecruiterOpenings;
