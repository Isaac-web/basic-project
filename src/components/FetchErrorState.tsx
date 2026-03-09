import type { ButtonHTMLAttributes } from 'react';

type Props = {
  title?: string;
  description?: string;
  onRetry?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const FetchErrorState = ({
  title = 'Something went wrong',
  description = "We couldn't load the data. Please try again.",
  onRetry,
  ...buttonProps
}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-6">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-50 mb-6">
        <svg
          className="w-8 h-8 text-red-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 
               1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 
               0L3.34 16c-.77 1.33.19 3 1.73 3z"
          />
        </svg>
      </div>

      <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>

      <p className="text-gray-500 max-w-md mb-6">{description}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="px-5 py-2.5 text-purple-700 rounded-md font-medium hover:bg-purple-100 transition"
          {...buttonProps}
        >
          Try Again
        </button>
      )}
    </div>
  );
};
