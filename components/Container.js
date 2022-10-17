export default function Container({ children }) {
  return (
    <div className="flex items-center justify-center flex-col w-screen h-screen pb-24 bg-gray-200">
      {children}
    </div>
  );
}
