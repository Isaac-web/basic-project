import type { User } from '../types';
import { useNavigate } from 'react-router';
import { EditIcon } from './icons/EditIcon';

export const UpdateUserButton = ({ user }: { user: User }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate(`/users/edit/${user.id}`);
      }}
    >
      <span className="scale-60">
        <EditIcon />
      </span>
    </button>
  );
};
