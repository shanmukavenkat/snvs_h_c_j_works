import React from 'react';
import type { TeamMember } from '../../types';

interface TeamMemberInputProps {
  member: Omit<TeamMember, 'id'>;
  index: number;
  onChange: (index: number, field: keyof TeamMember, value: string) => void;
}

export function TeamMemberInput({ member, index, onChange }: TeamMemberInputProps) {
  return (
    <div className="flex gap-4">
      <input
        type="text"
        value={member.name}
        onChange={(e) => onChange(index, 'name', e.target.value)}
        placeholder="Name"
        className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        required
      />
      <input
        type="text"
        value={member.rollNumber}
        onChange={(e) => onChange(index, 'rollNumber', e.target.value)}
        placeholder="Roll Number"
        className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        required
      />
    </div>
  );
}