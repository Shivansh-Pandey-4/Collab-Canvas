export default function ProfileLoading() {


    return (
        <div className="min-h-screen bg-blue-400 flex justify-center items-center px-5">
            <div className="border max-w-xl w-full mx-auto rounded-md overflow-hidden bg-white">

                <div className="relative">
                    <div className="w-full h-48 bg-gray-300 animate-pulse" />


                    <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2">
                        <div className="w-20 h-20 rounded-full bg-gray-300 animate-pulse border-4 border-white" />
                    </div>
                </div>


                <div className="mt-10 p-6 space-y-4">
                    <div className="h-6 w-48 rounded-md bg-gray-300 animate-pulse" />
                    <div className="h-4 w-64 rounded-md bg-gray-300 animate-pulse" />
                    <div className="h-4 w-56 rounded-md bg-gray-300 animate-pulse" />
                </div>

            </div>
        </div>
    );
}
