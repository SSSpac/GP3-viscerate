import SubHeader from "../../components/SubHeader";

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[url('/team-members/bg-team.jpeg')] bg-cover bg-fixed bg-no-repeat bg-top min-h-screen">
      <SubHeader />
      {children}
    </div>
  );
}
