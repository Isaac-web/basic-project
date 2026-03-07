import { useForm } from '@tanstack/react-form';

export const LoginPage = () => {
  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      avatar: 'https://reqres.in/img/faces/2-image.jpg',
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  return (
    <section>
      <div className="w-full max-w-2xl mx-auto py-10">
        <div className="flex justify-between items-center py-10">
          <h3 className="text-3xl font-semibold">Add new user</h3>

          <button className="bg-purple-700 text-white px-4 py-2 rounded-sm">
            Add User
          </button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <div className="grid grid-cols-2 gap-4">
            <form.Field
              name="firstName"
              children={(field) => (
                <input
                  value={field.state.value}
                  onChange={({ target }) => field.handleChange(target.value)}
                  onBlur={field.handleBlur}
                  placeholder="First Name"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-1"
                />
              )}
            />

            <form.Field
              name="lastName"
              children={(field) => (
                <input
                  value={field.state.value}
                  onChange={({ target }) => field.handleChange(target.value)}
                  onBlur={field.handleBlur}
                  placeholder="Last Name"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-1"
                />
              )}
            />

            <form.Field
              name="email"
              children={(field) => (
                <input
                  value={field.state.value}
                  onChange={({ target }) => field.handleChange(target.value)}
                  onBlur={field.handleBlur}
                  placeholder="Email"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-2"
                />
              )}
            />

            <form.Field
              name="avatar"
              children={(field) => (
                <input
                  value={field.state.value}
                  onChange={({ target }) => field.handleChange(target.value)}
                  onBlur={field.handleBlur}
                  placeholder="Avatar"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-2"
                />
              )}
            />

            <button
              type="submit"
              className="py-2 w-full bg-purple-700 text-white font-semibold col-span-2 rounded-sm"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
