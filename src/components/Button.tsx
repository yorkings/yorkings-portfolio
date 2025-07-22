function Button({ variant = 'default', size = 'md', disabled = false, onClick, children }) {
  let baseClasses = 'font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-75';
  switch (variant) {
    case 'primary':
      baseClasses += ' bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500';
      break;
    case 'secondary':
      baseClasses += ' bg-gray-300 text-gray-800 hover:bg-gray-400 focus:ring-gray-500';
      break;
    case 'default':
    default:
      baseClasses += ' bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400';
      break;
  }

  switch (size) {
    case 'sm':
      baseClasses = baseClasses.replace('py-2 px-4', 'py-1.5 px-3 text-sm');
      baseClasses = baseClasses.replace('rounded-lg', 'rounded-md');
      break;
    case 'md':
    default:
      break;
  }

  if (disabled) {
    baseClasses += ' opacity-50 cursor-not-allowed';
  } else {
    baseClasses += ' shadow-md active:scale-95';
  }

  return (
    <button
      className={baseClasses}
      onClick={!disabled ? onClick : undefined} // Prevent click if disabled
      disabled={disabled}
    >
      {children}
    </button>
  );
}
export default Button;