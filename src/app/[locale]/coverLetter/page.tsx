// import { useSession} from 'next-auth/react'
// import { useRouter } from 'next/router';

// export function CoverLetter() {
//   const { data: session, status } = useSession();
//   const router = useRouter();

//   const handleClick = () => {
//     if (status === 'loading') return;
//     if (!session) {
//       router.push(`/login?callbackUrl=${encodeURIComponent('/coverLetter')}`);
//     } else {
//       router.push("coverLetter");
//     }
//   }

//   return (
//     <button
//       onClick={handleClick}
//       disabled={status === 'loading'}
//       className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
//     >
//       {status === 'loading' ? 'Loading...' : 'Create CV'}
//     </button>
//   )
// }


import React from 'react'

const CoverLetter = () => {
  return (
    <div>
      dfadfs
    </div>
  )
}

export default CoverLetter
