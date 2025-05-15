
import { Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type CandidateStatus = 'pending' | 'interviewed' | 'rejected' | 'offer';

interface Candidate {
  id: string;
  name: string;
  position: string;
  score: number;
  status: CandidateStatus;
}

interface TopCandidatesProps {
  candidates: Candidate[];
  className?: string;
}

export function TopCandidates({ candidates, className }: TopCandidatesProps) {
  const getStatusClass = (status: CandidateStatus) => {
    switch (status) {
      case 'pending':
        return 'bg-blue-100 text-blue-800';
      case 'interviewed':
        return 'bg-purple-100 text-purple-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'offer':
        return 'bg-green-100 text-green-800';
    }
  };

  const getScoreColorClass = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-amber-600';
    return 'text-red-600';
  };

  return (
    <Card className={cn(className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Top Candidates</CardTitle>
            <CardDescription>Your highest scoring applicants</CardDescription>
          </div>
          <Users className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {candidates.length > 0 ? (
            candidates.map((candidate) => (
              <div key={candidate.id} className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{candidate.name}</p>
                    <span 
                      className={cn(
                        'px-2 py-0.5 text-xs rounded-full font-medium', 
                        getStatusClass(candidate.status)
                      )}
                    >
                      {candidate.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{candidate.position}</p>
                </div>
                <div className="flex flex-col items-end">
                  <div 
                    className={cn(
                      "text-lg font-bold", 
                      getScoreColorClass(candidate.score)
                    )}
                  >
                    {candidate.score}%
                  </div>
                  <Button variant="ghost" size="sm" className="mt-1">
                    Profile
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-muted-foreground text-center py-4">
              No candidates yet
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default TopCandidates;
