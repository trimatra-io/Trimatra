import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-200 font-mono">
      {/* <!-- Top bar --> */}
      <div className="flex items-center h-10 px-4 bg-gray-800">
        <div className="h-3 w-3 mr-2 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 mr-2 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>

      {/* <!-- CMD body --> */}
      <div className="flex-1 p-4">
        <div className="flex">
          <div className="mr-2">
            &gt; <span className="text-red-500">Error</span> <br />
            &gt; <span className="text-red-500">404_NotFound</span>
          </div>
        </div>

        <div className="mt-2">
          <span className="text-green-500">&gt; Output:</span>
          <div className="bg-gray-800 p-2 mt-1">
            <p>This Page Does Not Exist, Go Back</p>
            <Link href="/" className="underline decoration-blue-300">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
