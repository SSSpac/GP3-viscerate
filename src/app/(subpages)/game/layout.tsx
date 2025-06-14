export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-10">
      {children}
    </div>
  );
}
