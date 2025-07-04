import Link from "next/link";

export default function TeamMemberNotFound() {
     return (
          <div className="max-w-4xl mx-auto py-12 px-4 text-center">
               <h1 className="text-3xl font-bold mb-4">
                    Team Member Not Found
               </h1>
               <p className="text-lg mb-6">
                    Sorry, we couldn&apos;t find the team member you&apos;re
                    looking for.
               </p>
               <Link href="/team" className="text-blue-500 hover:underline">
                    Back to Team
               </Link>
          </div>
     );
}
