import { useRouter } from 'next/router';
import { useSession, signIn } from 'next-auth/react';
import { useEffect } from 'react';

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      // Redirect to the stored route or home page
      const preAuthRoute = localStorage.getItem('preAuthRoute') || '/';
      localStorage.removeItem('preAuthRoute');
      router.push(preAuthRoute);
    }
  }, [session, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <button
        onClick={() => signIn('google')} // or your preferred auth provider
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Sign in with Google
      </button>
      <p className="mt-4">
        Don't have an account?{' '}
        <a href="/auth/register" className="text-blue-500 hover:underline">
          Register
        </a>
      </p>
    </div>
  );
}