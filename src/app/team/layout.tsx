import SubHeader from "@/components/SubHeader";

export default function TeamLayout({
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
