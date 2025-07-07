import React from 'react';
import { Header } from './components/Header';
import { ClassList } from './components/ClassList';
import { TeamList } from './components/TeamList';
import { useClasses } from './hooks/useClasses';
import { useRole } from './hooks/useRole';
import type { Class, Team } from './types';

export function App() {
  const { role, toggleRole } = useRole();
  const {
    classes,
    selectedClassId,
    selectedClass,
    handleAddClass,
    handleDeleteClass,
    handleAddTeam,
    handleDeleteTeam,
    handleUpdateTeam,
    setSelectedClassId,
  } = useClasses(role);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header role={role} onRoleToggle={toggleRole} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ClassList
            classes={classes}
            role={role}
            onAddClass={role === 'professor' ? handleAddClass : undefined}
            onDeleteClass={role === 'professor' ? handleDeleteClass : undefined}
            onSelectClass={setSelectedClassId}
            selectedClassId={selectedClassId}
          />
          <TeamList
            selectedClass={selectedClass}
            role={role}
            onAddTeam={role === 'student' ? handleAddTeam : undefined}
            onDeleteTeam={role === 'professor' ? handleDeleteTeam : undefined}
            onUpdateTeam={handleUpdateTeam}
          />
        </div>
      </main>
    </div>
  );
}