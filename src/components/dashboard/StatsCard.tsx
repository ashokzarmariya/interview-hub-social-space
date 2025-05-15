
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function StatsCard({
  title,
  value,
  description,
  icon,
  className,
}: StatsCardProps) {
  return (
    <div className={cn("rounded-lg border bg-card p-5 shadow", className)}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="mt-1 text-2xl font-semibold">{value}</h3>
          {description && (
            <p className="mt-1 text-xs text-muted-foreground">{description}</p>
          )}
        </div>
        {icon && <div className="text-primary">{icon}</div>}
      </div>
    </div>
  );
}

export default StatsCard;
