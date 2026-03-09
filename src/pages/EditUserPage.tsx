import { useGetUserById, useUpdateUser } from '../hooks/api/use-users';
import { toast } from 'sonner';
import { UserForm } from '../components/UserForm';
import { useNavigate, useParams } from 'react-router';
import { RotatingLines } from 'react-loader-spinner';
import { FetchErrorState } from '../components/FetchErrorState';

export const EditUserPage = () => {
  const navigate = useNavigate();
  const { id: userId } = useParams();

  const { data, isLoading, isError, refetch } = useGetUserById({
    userId: +userId!,
  });

  const user = data?.data;

  const { updateUser, isPending } = useUpdateUser({
    userId: +userId!,
    onSuccess: () => {
      toast.success('User updated successfully.');
      navigate('/users');
    },
    onError: () => {
      toast.error('OOps... could not complete user update.');
    },
  });

  return (
    <section>
      <div className="w-full max-w-xl mx-auto py-10">
        {isLoading ? (
          <div className="flex gap-5 justify-center items-center py-24">
            <RotatingLines
              height="30"
              width="30"
              color="oklch(49.6% 0.265 301.924)"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
            <p className="text-sm text-center">Loading...</p>
          </div>
        ) : isError ? (
          <FetchErrorState onRetry={() => refetch()} />
        ) : (
          <UserForm
            initialFormData={{
              firstName: user?.first_name!,
              lastName: user?.last_name!,
              email: user?.email!,
              avatar: user?.avatar!,
            }}
            onSubmit={(value) =>
              updateUser({
                first_name: value.firstName,
                last_name: value.lastName,
                email: value.email,
                avatar: value.avatar,
              })
            }
            isPending={isPending}
          />
        )}
      </div>
    </section>
  );
};
