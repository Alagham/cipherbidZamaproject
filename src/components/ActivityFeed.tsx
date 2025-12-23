import { Lock, UserPlus, Gavel } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ActivityFeedProps {
  auctionId: string;
}

const activities = [
  {
    id: '1',
    type: 'bid',
    message: 'New encrypted bid submitted',
    timestamp: '2 minutes ago',
    icon: Lock,
  },
  {
    id: '2',
    type: 'join',
    message: 'New participant joined',
    timestamp: '15 minutes ago',
    icon: UserPlus,
  },
  {
    id: '3',
    type: 'bid',
    message: 'New encrypted bid submitted',
    timestamp: '23 minutes ago',
    icon: Lock,
  },
  {
    id: '4',
    type: 'bid',
    message: 'New encrypted bid submitted',
    timestamp: '1 hour ago',
    icon: Lock,
  },
  {
    id: '5',
    type: 'join',
    message: 'New participant joined',
    timestamp: '2 hours ago',
    icon: UserPlus,
  },
  {
    id: '6',
    type: 'start',
    message: 'Auction started',
    timestamp: '1 day ago',
    icon: Gavel,
  },
];

export function ActivityFeed({ auctionId }: ActivityFeedProps) {
  return (
    <Card className="bg-card text-card-foreground border-border">
      <CardHeader>
        <CardTitle className="text-lg font-display text-foreground">
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-96">
          <div className="space-y-4">
            {activities.map((activity) => {
              const Icon = activity.icon;
              return (
                <div
                  key={activity.id}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-120 ease-in"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">
                      {activity.message}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {activity.timestamp}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
