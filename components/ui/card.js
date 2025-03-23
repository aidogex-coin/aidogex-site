export function Card({ children }) {
  return (
    <div className="bg-[#1f1f3d] rounded-2xl shadow-lg border 
border-gray-700">
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
}

