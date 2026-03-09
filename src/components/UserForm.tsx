import { useForm } from '@tanstack/react-form';
import { Link } from 'react-router';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { z } from 'zod';
import { TextField } from './TextField';
import { RotatingLines } from 'react-loader-spinner';

const schemaFormSchema = z.object({
  firstName: z.string().min(1, { message: 'Please enter your first name' }),
  lastName: z.string().min(1, { message: 'Please enter your last name' }),
  email: z
    .string()
    .min(1, { message: 'Please enter your email' })
    .email({ message: 'Please enter a valid email address' }),
  avatar: z
    .string()
    .min(1, { message: 'Please enter your avatar url' })
    .url({ message: 'Please enter a valid URL' }),
});

type UserFormData = z.infer<typeof schemaFormSchema>;

export const UserForm = ({
  initialFormData,
  isPending,
  type = 'create',
  onSubmit,
}: {
  type?: 'create' | 'edit';
  initialFormData: UserFormData;
  isPending?: boolean;
  onSubmit(data: UserFormData): void;
}) => {
  const form = useForm({
    defaultValues: initialFormData,
    validators: {
      onSubmit: schemaFormSchema,
    },
    onSubmit: async ({ value }) => {
      onSubmit(value);
    },
  });

  return (
    <div className="w-full">
      <div className="flex gap-5 items-center py-10">
        <div>
          <Link
            to="/users"
            className="flex spacing-px items-center text-sm underline text-black/30 hover:text-black/60 font-medium cursor-pointer mb-5"
          >
            <span className="scale-[0.65] mt-1">
              <ChevronLeftIcon />
            </span>
            Back to users
          </Link>

          <h3 className="text-3xl font-semibold">
            {type === 'edit' ? 'Edit' : 'Add'} User
          </h3>
          <p className="text-sm text-black/60">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
            at!
          </p>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <form.Field
              name="firstName"
              children={(field) => (
                <>
                  <TextField
                    label="First Name"
                    value={field.state.value}
                    onChange={({ target }) => field.handleChange(target.value)}
                    onBlur={field.handleBlur}
                    placeholder="First Name"
                    error={
                      field.state.meta.isTouched &&
                      !!field.state.meta.errors.length
                    }
                    helperText={
                      field.state.meta.isTouched
                        ? field.state.meta.errors?.[0]?.message
                        : undefined
                    }
                  />
                </>
              )}
            />
          </div>

          <div className="col-span-1">
            <form.Field
              name="lastName"
              children={(field) => (
                <TextField
                  label="Last Name"
                  value={field.state.value}
                  onChange={({ target }) => field.handleChange(target.value)}
                  onBlur={field.handleBlur}
                  placeholder="Last Name"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-1"
                  error={
                    field.state.meta.isTouched &&
                    !!field.state.meta.errors.length
                  }
                  helperText={
                    field.state.meta.isTouched
                      ? field.state.meta.errors?.[0]?.message
                      : undefined
                  }
                />
              )}
            />
          </div>

          <div className="col-span-2">
            <form.Field
              name="email"
              children={(field) => (
                <TextField
                  label="Email"
                  value={field.state.value}
                  onChange={({ target }) => field.handleChange(target.value)}
                  onBlur={field.handleBlur}
                  placeholder="Email"
                  error={
                    field.state.meta.isTouched &&
                    !!field.state.meta.errors.length
                  }
                  helperText={
                    field.state.meta.isTouched
                      ? field.state.meta.errors?.[0]?.message
                      : undefined
                  }
                />
              )}
            />
          </div>

          <div className="col-span-2">
            <form.Field
              name="avatar"
              children={(field) => (
                <TextField
                  label="Avatar Url"
                  value={field.state.value}
                  onChange={({ target }) => field.handleChange(target.value)}
                  onBlur={field.handleBlur}
                  placeholder="Avatar"
                  error={
                    field.state.meta.isTouched &&
                    !!field.state.meta.errors.length
                  }
                  helperText={
                    field.state.meta.isTouched
                      ? field.state.meta.errors?.[0]?.message
                      : undefined
                  }
                />
              )}
            />
          </div>
          <button
            type="submit"
            disabled={isPending}
            className={`py-2 mt-5 w-full bg-purple-700 text-white font-semibold col-span-2 rounded-sm flex gap-2 justify-center items-center disabled:bg-gray-500 ${isPending ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          >
            {type === 'create' ? 'Add' : 'Update'} User{' '}
            {isPending && (
              <RotatingLines
                height="20"
                width="20"
                color="#FFFFFF"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
