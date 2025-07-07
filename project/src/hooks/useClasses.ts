import { useState } from 'react';
import type { Class, Team, UserRole } from '../types';

export function useClasses(role: UserRole) {
  const [classes, setClasses] = useState<Class[]>([]);
  const [selectedClassId, setSelectedClassId] = useState<string | null>(null);

  const selectedClass = classes.find((cls) => cls.id === selectedClassId);

  const handleAddClass = (name: string) => {
    if (role !== 'professor') return;
    
    const newClass: Class = {
      id: crypto.randomUUID(),
      name,
      teams: [],
    };
    
    setClasses((current) => [...current, newClass]);
  };

  const handleDeleteClass = (classId: string) => {
    if (role !== 'professor') return;
    setClasses((current) => current.filter((cls) => cls.id !== classId));
    if (selectedClassId === classId) {
      setSelectedClassId(null);
    }
  };

  const handleAddTeam = (classId: string, team: Omit<Team, 'id'>) => {
    if (role !== 'student') return;

    setClasses((current) =>
      current.map((cls) => {
        if (cls.id !== classId) return cls;
        return {
          ...cls,
          teams: [...cls.teams, { ...team, id: crypto.randomUUID() }],
        };
      })
    );
  };

  const handleDeleteTeam = (classId: string, teamId: string) => {
    if (role !== 'professor') return;

    setClasses((current) =>
      current.map((cls) => {
        if (cls.id !== classId) return cls;
        return {
          ...cls,
          teams: cls.teams.filter((team) => team.id !== teamId),
        };
      })
    );
  };

  const handleUpdateTeam = (classId: string, teamId: string, updates: Partial<Team>) => {
    setClasses((current) =>
      current.map((cls) => {
        if (cls.id !== classId) return cls;
        return {
          ...cls,
          teams: cls.teams.map((team) => {
            if (team.id !== teamId) return team;
            return { ...team, ...updates };
          }),
        };
      })
    );
  };

  return {
    classes,
    selectedClassId,
    selectedClass,
    handleAddClass,
    handleDeleteClass,
    handleAddTeam,
    handleDeleteTeam,
    handleUpdateTeam,
    setSelectedClassId,
  };
}