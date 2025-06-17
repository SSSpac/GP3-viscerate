export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[url('/team-members/bg-team.png')] bg-contain bg-repeat">
      {children}
    </div>
  );
}
