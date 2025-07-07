import { useState } from 'react';
import type { UserRole } from '../types';

export function useRole() {
  const [role, setRole] = useState<UserRole>('student');

  const toggleRole = () => {
    setRole((current) => (current === 'student' ? 'professor' : 'student'));
  };

  return { role, toggleRole };
}