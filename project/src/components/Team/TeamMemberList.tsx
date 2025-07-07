import { UserMinus } from 'lucide-react';
import type { TeamMember } from '../../types';

interface TeamMemberListProps {
  members: TeamMember[];
  role: 'student' | 'professor';
  onRemoveMember?: (memberId: string) => void;
  onUpdateMember?: (updatedMember: TeamMember) => void;
}

export function TeamMemberList({
  members,
  onRemoveMember,
  onUpdateMember,
}: TeamMemberListProps) {
  return (
    <div className="border-t pt-4">
      <h4 className="font-medium text-gray-700 mb-2">Team Members:</h4>
      <div className="grid grid-cols-2 gap-2">
        {members.map((member) => (
          <div
            key={member.id}
            className="flex items-center justify-between text-sm text-gray-600 p-2 bg-white rounded-md"
          >
            <span>
              {member.name} ({member.rollNumber})
            </span>

            <div className="flex items-center gap-2">
              {/* Edit Button */}
              {onUpdateMember && (
                <button
                  onClick={() => {
                    const newName = prompt('Enter new name:', member.name);
                    if (newName && newName.trim() !== '') {
                      onUpdateMember({ ...member, name: newName });
                    }
                  }}
                  className="p-1 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                  title="Edit member"
                >
                  ✏️
                </button>
              )}

              {/* Delete Button */}
              {onRemoveMember && (
                <button
                  onClick={() => onRemoveMember(member.id)}
                  className="p-1 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                  title="Remove member"
                >
                  <UserMinus size={14} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
