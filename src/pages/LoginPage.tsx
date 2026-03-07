import { useForm } from '@tanstack/react-form';
// import { login } from '../lib/api/users';

export const LoginPage = () => {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({ value }) => {
      //   await login(value);
    },
  });

  return (
    <section>
      <div className="w-full max-w-sm mx-auto py-10">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <div className="flex flex-col gap-y-4">
            <form.Field
              name="email"
              children={(field) => (
                <input
                  value={field.state.value}
                  onChange={({ target }) => field.handleChange(target.value)}
                  onBlur={field.handleBlur}
                  placeholder="email"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            />

            <form.Field
              name="password"
              children={(field) => (
                <input
                  value={field.state.value}
                  onChange={({ target }) => field.handleChange(target.value)}
                  onBlur={field.handleBlur}
                  placeholder="password"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            />

            <button type="submit" className="py-2 w-full bg-blue-700">
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
