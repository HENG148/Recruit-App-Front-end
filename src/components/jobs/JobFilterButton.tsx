'use client'

import { useState } from "react";
import { Job } from "@/data/types/job";

type JobFilterButtonProps = {
  jobs: Job[];
  onFilterChange: (filteredJobs: Job[]) => void;
}

export default function JobFilterButton({ jobs, onFilterChange }: JobFilterButtonProps) {

  const [activeTypeFilter, setActiveTypeFilter] = useState<Job['type'] | null>(null)
  const [activeLevelFilter, setActiveLevelFilter] = useState<Job['level'] | null>(null);

  const filterJobs = (type: Job['type'] | null, level: Job["level"] | null) => {
    let filtered = [...jobs];
    if (type !== null) {
      filtered = filtered.filter(job => job.type === type);
    }

    if (level !== null) {
      filtered = filtered.filter(job => job.level === level);
    }

    onFilterChange(filtered);
    setActiveTypeFilter(type);
    setActiveLevelFilter(level)
  }

  const resetFilter = () => {
    onFilterChange(jobs);
    setActiveTypeFilter(null)
    setActiveLevelFilter(null)
  }

  return (
    <div className="space-y-4 mb-6">
      {/* <div> */}
        {/* <h3 className="text-sm font-medium text-gray-700 mb-2">Job Type</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => filterJobs('internship', activeLevelFilter)}
            className={`px-4 py-2 rounded text-sm ${
              activeTypeFilter === 'internship'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Internship
          </button>
          <button
            onClick={() => filterJobs('full-time', activeLevelFilter)}
            className={`px-4 py-2 rounded text-sm ${
              activeTypeFilter === 'full-time'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Full-time
          </button>
          <button
            onClick={() => filterJobs('part-time', activeLevelFilter)}
            className={`px-4 py-2 rounded text-sm ${
              activeTypeFilter === 'part-time'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Part-time
          </button>
          <button
            onClick={() => filterJobs('contract', activeLevelFilter)}
            className={`px-4 py-2 rounded text-sm ${
              activeTypeFilter === 'contract'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Contract
          </button>
        </div> */}
      {/* </div> */}

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Experience Level</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => filterJobs(activeTypeFilter, 'Internship')}
            className={`px-4 py-2 rounded text-sm ${
              activeLevelFilter === 'Internship'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Junior
          </button>
          <button
            onClick={() => filterJobs(activeTypeFilter, 'Junior Level')}
            className={`px-4 py-2 rounded text-sm ${
              activeLevelFilter === 'Junior Level'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Senior
          </button>
          <button
            onClick={() => filterJobs(activeTypeFilter, 'Medium Level')}
            className={`px-4 py-2 rounded text-sm ${
              activeLevelFilter === 'Medium Level'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Manager
          </button>

          <button
            onClick={() => filterJobs(activeTypeFilter, 'Senior Level')}
            className={`px-4 py-2 rounded text-sm ${
              activeLevelFilter === 'Senior Level'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Manager
          </button>

          <button
            onClick={() => filterJobs(activeTypeFilter, 'Manager Level')}
            className={`px-4 py-2 rounded text-sm ${
              activeLevelFilter === 'Manager Level'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Manager
          </button>

          <button
            onClick={() => filterJobs(activeTypeFilter, 'Top Executive Level')}
            className={`px-4 py-2 rounded text-sm ${
              activeLevelFilter === 'Top Executive Level'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Manager
          </button>
        </div>
      </div>

      <button
        onClick={resetFilter}
        className="px-4 py-2 rounded text-sm bg-gray-200 hover:bg-gray-300"
      >
        Reset All Filters
      </button>
    </div>
  );
}