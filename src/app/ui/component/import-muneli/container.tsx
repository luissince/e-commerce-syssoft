export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full lg:container lg:mx-auto px-4 lg:px-2">
            {children}
        </div>
    );
}