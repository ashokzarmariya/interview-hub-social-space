
import { MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Channel {
  id: string;
  name: string;
  description: string;
  unreadCount: number;
  lastActivity?: string;
}

interface CommunityChannelsProps {
  channels: Channel[];
  className?: string;
}

export function CommunityChannels({ channels, className }: CommunityChannelsProps) {
  return (
    <Card className={cn(className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Community Channels</CardTitle>
            <CardDescription>Active discussions</CardDescription>
          </div>
          <MessageSquare className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {channels.map((channel) => (
            <div key={channel.id} className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium leading-none">{channel.name}</p>
                  {channel.unreadCount > 0 && (
                    <Badge variant="secondary">{channel.unreadCount}</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{channel.description}</p>
              </div>
              {channel.lastActivity && (
                <div className="text-xs text-muted-foreground">
                  {channel.lastActivity}
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default CommunityChannels;
