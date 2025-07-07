import React from 'react';
import { FolderOpen, Users, Link as LinkIcon, Trash2 } from 'lucide-react';
import type { Class } from '../types';

interface ClassListProps {
  classes: Class[];
  role: 'student' | 'professor';
  onAddClass?: (name: string) => void;
  onDeleteClass?: (classId: string) => void;
  onSelectClass: (classId: string) => void;
  selectedClassId: string | null;
}

export function ClassList({
  classes,
  role,
  onAddClass,
  onDeleteClass,
  onSelectClass,
  selectedClassId,
}: ClassListProps) {
  const [newClassName, setNewClassName] = React.useState('');
  const [email, setEmail] = React.useState<string | null>(() =>
    localStorage.getItem('professorEmail')
  );
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(() =>
    localStorage.getItem('professorEmail') !== null
  );

  const handleEmailPrompt = () => {
    const enteredEmail = prompt('Please enter your email to access professor features:');
    if (enteredEmail) {
      localStorage.setItem('professorEmail', enteredEmail.trim());
      setEmail(enteredEmail.trim());
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('professorEmail');
    setEmail(null);
    setIsLoggedIn(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onAddClass && newClassName.trim()) {
      onAddClass(newClassName.trim());
      setNewClassName('');
    }
  };

  const handleDelete = (e: React.MouseEvent, classId: string) => {
    e.stopPropagation();
    if (onDeleteClass && confirm('Are you sure you want to delete this class?')) {
      onDeleteClass(classId);
    }
  };

  if (role === 'professor' && !isLoggedIn) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Professor Login</h2>
          <button
            onClick={handleEmailPrompt}
            className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-orange-600 transition-colors"
          >
            Enter Email to Continue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Classes</h2>
        {role === 'professor' && (
          <div className="flex gap-4">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={newClassName}
                onChange={(e) => setNewClassName(e.target.value)}
                placeholder="New class name"
                className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-orange-600 transition-colors"
              >
                Add Class
              </button>
            </form>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition-colors"
            >
              Logout
            </button>
          </div>
        )}
      </div>

      <div className="space-y-4">
        {classes.map((cls) => (
          <div
            key={cls.id}
            onClick={() => onSelectClass(cls.id)}
            className={`p-4 rounded-lg cursor-pointer transition-colors ${
              selectedClassId === cls.id
                ? 'bg-indigo-50 border-2 border-indigo-500'
                : 'bg-gray-50 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FolderOpen className="text-purple-400" />
                <h3 className="font-medium text-gray-800">{cls.name}</h3>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center space-x-1">
                    <Users size={16} />
                    <span>{cls.teams.length} Teams</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <LinkIcon size={16} />
                    <span>{cls.teams.reduce((acc, team) => acc + team.members.length, 0)} Members</span>
                  </span>
                </div>
                {role === 'professor' && (
                  <button
                    onClick={(e) => handleDelete(e, cls.id)}
                    className="p-1 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                    title="Delete class"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
