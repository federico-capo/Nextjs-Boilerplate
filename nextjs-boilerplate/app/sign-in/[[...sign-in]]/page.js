import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <h1 className="text-4xl font-bold mb-8 mt-8">Sign Up</h1>
      <div >
        <h2>SignUp</h2>
        <SignIn />
      </div>
    </main>
  );
}