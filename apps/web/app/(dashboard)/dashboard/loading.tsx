export default function DashboardLoading() {


    return (
        <div className="h-full p-6 space-y-3">
            <div className="space-y-2">
                <div className="h-8 w-48 rounded-md bg-gray-500 animate-pulse" />
                <div className="h-4 w-72 rounded-md bg-gray-500 animate-pulse" />
            </div>


            <div className="flex flex-col sm:flex-row gap-4 justify-between">
                <div className="h-10 w-full sm:w-80 rounded-md bg-gray-500 animate-pulse" />
                <div className="h-10 w-32 rounded-md bg-gray-500 animate-pulse" />
            </div>

            <div className="border rounded-lg overflow-hidden">
                <div className="grid grid-cols-4 gap-4 p-4 bg-gray-800">
                    <div className="h-4 w-24 rounded bg-gray-500 animate-pulse" />
                    <div className="h-4 w-28 rounded bg-gray-500 animate-pulse" />
                    <div className="h-4 w-20 rounded bg-gray-500 animate-pulse" />
                    <div className="h-4 w-16 rounded bg-gray-500 animate-pulse" />
                </div>


                <div className="divide-y">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-4 gap-4 p-4"
                        >
                            <div className="h-5 w-32 rounded bg-gray-500 animate-pulse" />

                            <div className="h-5 w-40 rounded bg-gray-500 animate-pulse" />

                            <div className="h-5 w-20 rounded bg-gray-500 animate-pulse" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
