'use client'

import { useState, useEffect } from 'react';
import { Job } from '@/data/types/job';

type SearchBarProps = {
  jobs: Job[];
  onSearch: (filteredJobs: Job[]) => void;
  className?: string;
};

export default function SearchBar({ jobs, onSearch, className = '' }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm.trim() === '') {
        onSearch(jobs);
      } else {
        const term = searchTerm.toLowerCase();
        const results = jobs.filter(job => 
          job.title.toLowerCase().includes(term) ||
          job.location.toLowerCase().includes(term) ||
          job.skills?.some(skill => skill.toLowerCase().includes(term))
        );
        onSearch(results);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, jobs, onSearch]);

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search jobs by title, company, or skills..."
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}