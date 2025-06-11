export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="lg:p-10">
      {children}
    </div>
  );
}
