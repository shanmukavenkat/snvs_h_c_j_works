import { Users, Link as LinkIcon, FileText, Trash2 } from 'lucide-react';
import type { Team, TeamMember } from '../../types';
import { TeamMemberList } from './TeamMemberList';

interface TeamCardProps {
  team: Team;
  role: 'student' | 'professor';
  onDelete?: () => void;
  onUpdateMembers?: (members: TeamMember[]) => void;
}

export function TeamCard({ team, role, onDelete, onUpdateMembers }: TeamCardProps) {
  // Handle team deletion
  const handleDelete = () => {
    if (onDelete && confirm('Are you sure you want to delete this team?')) {
      onDelete();
    }
  };

  // Handle member removal
  const handleRemoveMember = (memberId: string) => {
    if (onUpdateMembers && confirm('Are you sure you want to remove this member?')) {
      const updatedMembers = team.members.filter((m) => m.id !== memberId);
      onUpdateMembers(updatedMembers);
    }
  };

  // Handle adding a new member
  const handleAddMember = () => {
    if (onUpdateMembers) {
      const newName = prompt('Enter new member name:');
      const newRollNumber = prompt('Enter roll number:');
      if (newName && newRollNumber) {
        const newMember: TeamMember = {
          id: `${Date.now()}`, // Generate unique ID based on timestamp
          name: newName,
          rollNumber: newRollNumber,
        };
        onUpdateMembers([...team.members, newMember]);
      }
    }
  };

  // Handle renaming/updating a member
  const handleUpdateMember = (updatedMember: TeamMember) => {
    if (onUpdateMembers) {
      const updatedMembers = team.members.map((member) =>
        member.id === updatedMember.id ? updatedMember : member
      );
      onUpdateMembers(updatedMembers);
    }
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-800">{team.name}</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span className="flex items-center space-x-1">
              <Users size={16} />
              <span>{team.members.length} Members</span>
            </span>
          </div>
          {/* Delete Button */}
          {(role === 'professor' || role === 'student') && onDelete && (
            <button
              onClick={handleDelete}
              className="p-1 text-red-600 hover:bg-red-50 rounded-full transition-colors"
              title="Delete team"
            >
              <Trash2 size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2 text-gray-600">
          <FileText size={16} />
          <span className="font-medium">Project:</span>
          <span>{team.projectName}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <LinkIcon size={16} />
          <a
            href={team.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-500"
          >
            Project Link
          </a>
        </div>
      </div>

      {/* Team Members List */}
      <TeamMemberList
        members={team.members}
        role={role}
        onRemoveMember={
          (role === 'professor' || role === 'student') ? handleRemoveMember : undefined
        }
        onUpdateMember={
          (role === 'professor' || role === 'student') ? handleUpdateMember : undefined
        }
      />

      {/* Add Member Button */}
      {(role === 'student' || role === 'professor') && (
        <button
          onClick={handleAddMember}
          className="mt-4 p-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition-colors"
        >
          Add Member
        </button>
      )}
    </div>
  );
}
