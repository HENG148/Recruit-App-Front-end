// 'use client'

// import { useState, useCallback } from 'react';
// import JobFilterButton from './JobFilterButton';
// import SearchBar from './Searchbar';
// import { Job } from '@/data/types/job';

// export default function JobsPage() {
//   const allJobs: Job[] = [
//     { id: 1, title: 'Software Engineer Intern', type: 'internship', level: "Internship", company: 'Tech Corp', skills: ['JavaScript', 'React'] },
//     { id: 2, title: 'Frontend Developer', type: 'full-time', level: "Internship", company: 'Web Solutions', skills: ['TypeScript', 'Next.js'] },
//     { id: 3, title: 'Senior Backend Engineer', type: 'full-time', level: "Internship", company: 'Data Systems', skills: ['Node.js', 'Python', 'AWS'] },
//     { id: 4, title: 'Marketing Intern', type: 'internship', level: "Junior Level", company: 'Ad Agency', skills: ['Social Media', 'Content Creation'] },
//     { id: 5, title: 'UX Designer', type: 'contract', level: "Senior Level", company: 'Creative Studio', skills: ['Figma', 'UI/UX'] },
//     { id: 6, title: 'Product Manager', type: 'full-time', level: "Manager Level", company: 'Product Labs', skills: ['Agile', 'Scrum'] },
//     { id: 7, title: 'Junior Data Analyst', type: 'part-time', level: "Junior Level", company: 'Analytics Co', skills: ['SQL', 'Python'] },
//     { id: 8, title: 'Engineering Manager', type: 'full-time', level: "Manager Level", company: 'Tech Giant', skills: ['Leadership', 'Architecture'] },
//   ];

//   const [displayedJobs, setDisplayedJobs] = useState<Job[]>(allJobs);
//   const [filteredByTypeAndLevel, setFilteredByTypeAndLevel] = useState<Job[]>(allJobs);

//   // Combine search with other filters
//   const applyAllFilters = useCallback((searchedJobs: Job[]) => {
//     const typeAndLevelFiltered = filteredByTypeAndLevel;
//     if (typeAndLevelFiltered === allJobs) {
//       setDisplayedJobs(searchedJobs);
//     } else {
//       // Intersection of search results and type/level filters
//       const searchJobIds = new Set(searchedJobs.map(job => job.id));
//       const combinedResults = typeAndLevelFiltered.filter(job => searchJobIds.has(job.id));
//       setDisplayedJobs(combinedResults);
//     }
//   }, [filteredByTypeAndLevel, allJobs]);

//   return (
//     <div className="container mx-auto p-4">      
//       <div className="mb-6">
//         <SearchBar 
//           jobs={allJobs} 
//           onSearch={applyAllFilters}
//           className="max-w-9xl mx-auto"
//         />
//       </div>
      
//       <JobFilterButton 
//         jobs={allJobs} 
//         onFilterChange={(filteredJobs) => {
//           setFilteredByTypeAndLevel(filteredJobs);
//           setDisplayedJobs(filteredJobs);
//         }} 
//       />
      
//       <div className="space-y-4">
//         {displayedJobs.length > 0 ? (
//           displayedJobs.map(job => (
//             <div key={job.id} className="p-4 border rounded shadow-sm hover:shadow-md transition-shadow">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h2 className="text-xl font-semibold">{job.title}</h2>
//                   <p className="text-gray-600">{job.company}</p>
//                   {job.skills && (
//                     <div className="mt-2 flex flex-wrap gap-1">
//                       {job.skills.map(skill => (
//                         <span key={skill} className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">
//                           {skill}
//                         </span>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//                 <div className="flex gap-2">
//                   <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${
//                     job.type === 'internship' ? 'bg-blue-100 text-blue-800' :
//                     job.type === 'full-time' ? 'bg-purple-100 text-purple-800' :
//                     job.type === 'part-time' ? 'bg-yellow-100 text-yellow-800' :
//                     'bg-gray-100 text-gray-800'
//                   }`}>
//                     {job.type}
//                   </span>
//                   <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${
//                     job.level === 'Junior Level' ? 'bg-green-100 text-green-800' :
//                     job.level === 'Senior Level' ? 'bg-orange-100 text-orange-800' :
//                     'bg-red-100 text-red-800'
//                   }`}>
//                     {job.level}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center py-8 text-gray-500">No jobs found matching your criteria.</p>
//         )}
//       </div>
//     </div>
//   );
// }




// // 'use client'

// // import { useCallback, useState } from 'react';
// // import JobFilterButton from './JobFilterButton';
// // import { Job } from '@/data/types/job';
// // import SearchBar from './Searchbar';

// // export default function JobsPage() {
// //   const allJobs: Job[] = [
// //     { id: 1, title: 'Software Engineer Intern', type: 'internship', level: 'junior', company: 'Tech Corp', skills: ['JavaScript', 'React'] },
// //     { id: 2, title: 'Frontend Developer', type: 'full-time', level: 'junior', company: 'Web Solutions', skills: ['JavaScript', 'React'] },
// //     { id: 3, title: 'Senior Backend Engineer', type: 'full-time', level: 'senior', company: 'Data Systems', skills: ['JavaScript', 'React'] },
// //     { id: 4, title: 'Marketing Intern', type: 'internship', level: 'junior', company: 'Ad Agency', skills: ['JavaScript', 'React'] },
// //     { id: 5, title: 'UX Designer', type: 'contract', level: 'senior', company: 'Creative Studio', skills: ['JavaScript', 'React'] },
// //     { id: 6, title: 'Product Manager', type: 'full-time', level: 'manager', company: 'Product Labs', skills: ['JavaScript', 'React'] },
// //     { id: 7, title: 'Junior Data Analyst', type: 'part-time', level: 'junior', company: 'Analytics Co', skills: ['JavaScript', 'React'] },
// //     { id: 8, title: 'Engineering Manager', type: 'full-time', level: 'manager', company: 'Tech Giant', skills: ['JavaScript', 'React'] },
// //   ];

// //   const [displayedJobs, setDisplayedJobs] = useState<Job[]>(allJobs);
// //   const [filteredByTypeAndLevel, setFilteredByTypeAndLevel] = useState<Job[]>(allJobs);

// //   const applyAllFilters = useCallback((searchedJobs: Job[]) => {
// //     const typeAndLevelFiltered = filteredByTypeAndLevel;
// //     if (typeAndLevelFiltered === allJobs) {
// //       setDisplayedJobs(searchedJobs);
// //     } else {
// //       // Intersection of search results and type/level filters
// //       const searchJobIds = new Set(searchedJobs.map(job => job.id));
// //       const combinedResults = typeAndLevelFiltered.filter(job => searchJobIds.has(job.id));
// //       setDisplayedJobs(combinedResults);
// //     }
// //   }, [filteredByTypeAndLevel, allJobs]);

//   // return (
//   //   <div className="container mx-auto p-4">
//   //     <h1 className="text-2xl font-bold mb-6">Job Listings</h1>

//   //     <div className="mb-6">
//   //       <SearchBar 
//   //         jobs={allJobs} 
//   //         onSearch={applyAllFilters}
//   //         className="max-w-2xl mx-auto"
//   //       />
//   //     </div>
      
//   //     <JobFilterButton 
//   //       jobs={allJobs} 
//   //       onFilterChange={setDisplayedJobs} 
//   //     />
      
//   //     <div className="space-y-4">
//   //       {displayedJobs.length > 0 ? (
//   //         displayedJobs.map(job => (
//   //           <div key={job.id} className="p-4 border rounded shadow-sm hover:shadow-md transition-shadow">
//   //             <div className="flex justify-between items-start">
//   //               <div>
//   //                 <h2 className="text-xl font-semibold">{job.title}</h2>
//   //                 <p className="text-gray-600">{job.company}</p>
//   //               </div>
//   //               <div className="flex gap-2">
//   //                 <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${
//   //                   job.type === 'internship' ? 'bg-blue-100 text-blue-800' :
//   //                   job.type === 'full-time' ? 'bg-purple-100 text-purple-800' :
//   //                   job.type === 'part-time' ? 'bg-yellow-100 text-yellow-800' :
//   //                   'bg-gray-100 text-gray-800'
//   //                 }`}>
//   //                   {job.type}
//   //                 </span>
//   //                 <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${
//   //                   job.level === 'junior' ? 'bg-green-100 text-green-800' :
//   //                   job.level === 'senior' ? 'bg-orange-100 text-orange-800' :
//   //                   'bg-red-100 text-red-800'
//   //                 }`}>
//   //                   {job.level}
//   //                 </span>
//   //               </div>
//   //             </div>
//   //           </div>
//   //         ))
//   //       ) : (
//   //         <p className="text-center py-8 text-gray-500">No jobs found matching your criteria.</p>
//   //       )}
//   //     </div>
//   //   </div>
//   // );
  
// //   return (
// //     <div className="container mx-auto p-4">
// //       <h1 className="text-2xl font-bold mb-6">Job Listings</h1>
      
// //       <div className="mb-6">
// //         <SearchBar 
// //           jobs={allJobs} 
// //           onSearch={applyAllFilters}
// //           className="max-w-2xl mx-auto"
// //         />
// //       </div>
      
// //       <JobFilterButton 
// //         jobs={allJobs} 
// //         onFilterChange={(filteredJobs) => {
// //           setFilteredByTypeAndLevel(filteredJobs);
// //           setDisplayedJobs(filteredJobs);
// //         }} 
// //       />
      
// //       <div className="space-y-4">
// //         {displayedJobs.length > 0 ? (
// //           displayedJobs.map(job => (
// //             <div key={job.id} className="p-4 border rounded shadow-sm hover:shadow-md transition-shadow">
// //               <div className="flex justify-between items-start">
// //                 <div>
// //                   <h2 className="text-xl font-semibold">{job.title}</h2>
// //                   <p className="text-gray-600">{job.company}</p>
// //                   {job.skills && (
// //                     <div className="mt-2 flex flex-wrap gap-1">
// //                       {job.skills.map(skill => (
// //                         <span key={skill} className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">
// //                           {skill}
// //                         </span>
// //                       ))}
// //                     </div>
// //                   )}
// //                 </div>
// //                 <div className="flex gap-2">
// //                   <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${
// //                     job.type === 'internship' ? 'bg-blue-100 text-blue-800' :
// //                     job.type === 'full-time' ? 'bg-purple-100 text-purple-800' :
// //                     job.type === 'part-time' ? 'bg-yellow-100 text-yellow-800' :
// //                     'bg-gray-100 text-gray-800'
// //                   }`}>
// //                     {job.type}
// //                   </span>
// //                   <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${
// //                     job.level === 'junior' ? 'bg-green-100 text-green-800' :
// //                     job.level === 'senior' ? 'bg-orange-100 text-orange-800' :
// //                     'bg-red-100 text-red-800'
// //                   }`}>
// //                     {job.level}
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>
// //           ))
// //         ) : (
// //           <p className="text-center py-8 text-gray-500">No jobs found matching your criteria.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }