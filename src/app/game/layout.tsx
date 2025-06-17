import SubHeader from "@/components/SubHeader";

export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SubHeader />
      {children}
    </div>
  );
}
