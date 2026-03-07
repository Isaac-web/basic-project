import { useDeleteUser } from '../hooks/api/use-users';
import type { User } from '../types';

export const DeleteUserButton = ({ user }: { user: User }) => {
  const { deleteUser, isPending } = useDeleteUser();

  return (
    <button
      onClick={() => {
        deleteUser(user.id);
      }}
    >
      {isPending ? 'Deleting...' : 'Delete'}
    </button>
  );
};
