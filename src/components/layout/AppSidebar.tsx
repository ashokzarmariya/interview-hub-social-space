
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MessageSquare, Users, User, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarItemProps {
  icon: React.ElementType;
  title: string;
  href: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem = ({ icon: Icon, title, href, active, onClick }: SidebarItemProps) => {
  return (
    <Link to={href} className="w-full" onClick={onClick}>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-3 rounded-md py-2 px-3 text-sm font-medium transition-colors",
          active 
            ? "bg-sidebar-accent text-sidebar-accent-foreground" 
            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        )}
      >
        <Icon className="h-4 w-4" />
        <span>{title}</span>
      </Button>
    </Link>
  );
};

interface AppSidebarProps {
  className?: string;
}

export function AppSidebar({ className }: AppSidebarProps) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');

  const handleNavigation = (page: string) => {
    setActivePage(page);
    setIsMobileSidebarOpen(false);
  };

  return (
    <>
      {/* Mobile sidebar toggle */}
      <Button
        variant="outline"
        size="icon"
        className="fixed left-4 top-4 z-40 md:hidden"
        onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
      >
        <span className="sr-only">Toggle sidebar</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </Button>

      {/* Sidebar backdrop for mobile */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform bg-sidebar flex-col border-r border-sidebar-border transition-transform duration-200 ease-in-out md:translate-x-0",
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full",
          className
        )}
      >
        {/* Logo */}
        <div className="flex h-14 items-center border-b border-sidebar-border px-4">
          <Link to="/" className="flex items-center gap-2 font-semibold text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>InterviewHub</span>
          </Link>
        </div>

        {/* Navigation links */}
        <div className="flex-1 overflow-auto py-4 px-3">
          <div className="space-y-1">
            <SidebarItem 
              icon={Users} 
              title="Dashboard" 
              href="/" 
              active={activePage === 'dashboard'} 
              onClick={() => handleNavigation('dashboard')} 
            />
            <SidebarItem 
              icon={Calendar} 
              title="Interview History" 
              href="/interviews" 
              active={activePage === 'interviews'} 
              onClick={() => handleNavigation('interviews')} 
            />
            <SidebarItem 
              icon={MessageSquare} 
              title="Community" 
              href="/community" 
              active={activePage === 'community'} 
              onClick={() => handleNavigation('community')} 
            />
          </div>
          
          <div className="mt-6 space-y-1">
            <div className="px-3 text-xs font-semibold text-sidebar-foreground/60">Personal</div>
            <SidebarItem 
              icon={User} 
              title="Profile" 
              href="/profile" 
              active={activePage === 'profile'} 
              onClick={() => handleNavigation('profile')} 
            />
            <SidebarItem 
              icon={Settings} 
              title="Settings" 
              href="/settings" 
              active={activePage === 'settings'} 
              onClick={() => handleNavigation('settings')} 
            />
          </div>
        </div>

        {/* User profile section */}
        <div className="mt-auto border-t border-sidebar-border p-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              JD
            </div>
            <div>
              <div className="text-sm font-medium text-sidebar-foreground">John Doe</div>
              <div className="text-xs text-sidebar-foreground/60">john.doe@example.com</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppSidebar;
