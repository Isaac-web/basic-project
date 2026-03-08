type Props = {
  label?: string;
  error?: boolean;
  helperText?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const TextField = ({ label, helperText, error, ...props }: Props) => {
  return (
    <div className="flex flex-col gap-y-2">
      {label && (
        <label htmlFor={props.id} className="text-xs font-medium text-black/50">
          {label}
        </label>
      )}
      <input
        {...props}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      {helperText && (
        <p className={`text-xs ${error ? 'text-red-500' : ''}`}>{helperText}</p>
      )}
    </div>
  );
};
