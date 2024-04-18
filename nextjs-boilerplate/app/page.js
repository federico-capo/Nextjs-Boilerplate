import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <h1 className="text-4xl font-bold mb-8 mt-8">Welcome to Next.js Boilerplate</h1>
      <div >
        <h2>UserButton</h2>
        <UserButton />
      </div>
      {/* sign-in */}
      <div className="bg-blue-500 p-8 mt-8 rounded-md">
        <a href="/sign-in">Sign In</a>
      </div>
    </main>
  );
}
