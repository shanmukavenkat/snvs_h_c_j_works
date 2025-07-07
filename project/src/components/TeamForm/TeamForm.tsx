import React from 'react';
import type { Team, TeamMember } from '../../types';
import { TeamMemberInput } from './TeamMemberInput';

interface TeamFormProps {
  onSubmit: (team: Omit<Team, 'id'>) => void;
  onCancel: () => void;
}

export function TeamForm({ onSubmit, onCancel }: TeamFormProps) {
  const [teamName, setTeamName] = React.useState('');
  const [projectName, setProjectName] = React.useState('');
  const [projectLink, setProjectLink] = React.useState('');
  const [members, setMembers] = React.useState<Omit<TeamMember, 'id'>[]>([
    { name: '', rollNumber: '' },
  ]);

  const handleAddMember = () => {
    setMembers([...members, { name: '', rollNumber: '' }]);
  };

  const handleMemberChange = (index: number, field: keyof TeamMember, value: string) => {
    const newMembers = [...members];
    newMembers[index] = { ...newMembers[index], [field]: value };
    setMembers(newMembers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTeam: Omit<Team, 'id'> = {
      name: teamName,
      projectName,
      projectLink,
      members: members.map(member => ({ ...member, id: crypto.randomUUID() })),
      documents: [],
    };
    onSubmit(newTeam);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 space-y-6 bg-gray-50 p-6 rounded-lg">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Team Name</label>
          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Project Name</label>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Project Link</label>
          <input
            type="url"
            value={projectLink}
            onChange={(e) => setProjectLink(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-700">Team Members</label>
            <button
              type="button"
              onClick={handleAddMember}
              className="text-sm text-indigo-600 hover:text-indigo-500"
            >
              Add Member
            </button>
          </div>
          {members.map((member, index) => (
            <TeamMemberInput
              key={index}
              member={member}
              index={index}
              onChange={handleMemberChange}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Save Team
        </button>
      </div>
    </form>
  );
}