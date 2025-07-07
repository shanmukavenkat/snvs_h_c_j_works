import React from 'react';
import type { Class, Team, TeamMember } from '../types';
import { TeamForm } from './TeamForm/TeamForm';
import { TeamCard } from './Team/TeamCard';

interface TeamListProps {
  selectedClass: Class | null;
  role: 'student' | 'professor';
  onAddTeam?: (classId: string, team: Omit<Team, 'id'>) => void;
  onDeleteTeam?: (classId: string, teamId: string) => void;
  onUpdateTeam?: (classId: string, teamId: string, updates: Partial<Team>) => void;
}

export function TeamList({
  selectedClass,
  role,
  onAddTeam,
  onDeleteTeam,
  onUpdateTeam,
}: TeamListProps) {
  const [isAddingTeam, setIsAddingTeam] = React.useState(false);

  const handleSubmit = (team: Omit<Team, 'id'>) => {
    if (!selectedClass || !onAddTeam) return;
    onAddTeam(selectedClass.id, team);
    setIsAddingTeam(false);
  };

  const handleDeleteTeam = (teamId: string) => {
    if (!selectedClass || !onDeleteTeam) return;
    onDeleteTeam(selectedClass.id, teamId);
  };

  const handleUpdateMembers = (teamId: string, members: TeamMember[]) => {
    if (!selectedClass || !onUpdateTeam) return;
    onUpdateTeam(selectedClass.id, teamId, { members });
  };

  if (!selectedClass) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-500 text-center">Select a class to view teams</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Teams in {selectedClass.name}
        </h2>
        {role === 'student'  && !isAddingTeam && (
          <button
            onClick={() => setIsAddingTeam(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Add Team
          </button>
        )}
      </div>

      {isAddingTeam && (
        <TeamForm
          onSubmit={handleSubmit}
          onCancel={() => setIsAddingTeam(false)}
        />
      )}

      <div className="space-y-4">
        {selectedClass.teams.map((team) => (
          <TeamCard
            key={team.id}
            team={team}
            role={role}
            onDelete={role === 'professor' ||role === 'student' ? () => handleDeleteTeam(team.id) : undefined}
            onUpdateMembers={
              role === 'professor' ||role === 'student'
                ? (members) => handleUpdateMembers(team.id, members)
                : undefined
            }
          />
        ))}
      </div>
    </div>
  );
}