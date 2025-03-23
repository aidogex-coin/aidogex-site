export function Button({ className, children, ...props }) {
  return (
    <button className={`px-4 py-2 rounded-md font-semibold ${className}`} 
{...props}>
      {children}
    </button>
  );
}

