import { useCreateUser } from '../hooks/api/use-users';
import { toast } from 'sonner';
import { UserForm } from '../components/UserForm';
import { useNavigate } from 'react-router';

export const AddUserPage = () => {
  const navigate = useNavigate();

  const { createUser } = useCreateUser({
    onSuccess: () => {
      toast.success('User created successfully.');
      navigate('/users');
    },
    onError: () => {
      toast.error('An error occurred while creating the user.');
    },
  });

  return (
    <section>
      <div className="w-full max-w-xl mx-auto py-10">
        <UserForm
          initialFormData={{
            firstName: '',
            lastName: '',
            email: '',
            avatar: 'https://reqres.in/img/faces/2-image.jpg',
          }}
          onSubmit={(value) =>
            createUser({
              first_name: value.firstName,
              last_name: value.lastName,
              email: value.email,
              avatar: value.avatar,
            })
          }
        />
      </div>
    </section>
  );
};
