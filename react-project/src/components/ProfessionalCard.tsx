import React, { ReactElement } from 'react';

interface ProfessionalCardProps {
  children: ReactElement[];
}

const ProfessionalCard: React.FC<ProfessionalCardProps> = ({ children, bg = "bg-indigo-100" }) => {
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
}

export default ProfessionalCard;
