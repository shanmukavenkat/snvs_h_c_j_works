import { GraduationCap } from 'lucide-react';

interface HeaderProps {
  role: 'student' | 'professor';
  onRoleToggle: () => void;
}

export function Header({ role, onRoleToggle }: HeaderProps) {
  return (
    <header className="bg-orange-400 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <GraduationCap size={32} />
            <h1 className="text-2xl font-bold">Academic Project Hub</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">Current Role:</span>
            <button
              onClick={onRoleToggle}
              className="px-4 py-2 bg-white text-orange-600 rounded-md font-medium hover:bg-indigo-50 transition-colors"
            >
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}