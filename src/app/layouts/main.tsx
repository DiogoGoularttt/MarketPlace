export default function Main({ children }: { children: React.ReactNode }) {
    return (
        <>
            <section className="h-screen w-screen">
                <div className="w-full">
                    {children}
                </div>
            </section>
        </>
    );
}
