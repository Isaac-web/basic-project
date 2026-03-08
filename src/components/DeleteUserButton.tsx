import { toast } from 'sonner';
import { useDeleteUser } from '../hooks/api/use-users';
import type { User } from '../types';
import { DeleteIcon } from './icons/DeleteIcon';
import { RotatingLines } from 'react-loader-spinner';

export const DeleteUserButton = ({ user }: { user: User }) => {
  const { deleteUser, isPending } = useDeleteUser({
    onSuccess() {
      toast.success('User deleted successfully.', {
        className: 'bg-green-100',
      });
    },
    onError() {
      toast.success('Could not delete action.', {
        className: 'bg-red-100',
      });
    },
  });

  return (
    <button
      onClick={() => {
        deleteUser(user.id);
      }}
    >
      {isPending ? (
        <RotatingLines
          height="20"
          width="20"
          color="oklch(49.6% 0.265 301.924)"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <DeleteIcon />
      )}
    </button>
  );
};
