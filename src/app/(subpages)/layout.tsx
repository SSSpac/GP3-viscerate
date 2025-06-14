import SubHeader from "@/components/SubHeader";

export default function SubPageLayout({
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
