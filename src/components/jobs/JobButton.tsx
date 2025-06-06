'use client'

import { useMemo, useState } from "react";
import { Job, JobPositions } from "@/data/types/job";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type JobFilterButtonProps = {
  jobs: Job[];
  onFilterChange: (filteredJobs: Job[]) => void;
}

export default function JobButton({ jobs, onFilterChange }: JobFilterButtonProps) {
  const [activeTypeFilter, setActiveTypeFilter] = useState<Job['type'] | null>(null)
  const [activeLevelFilter, setActiveLevelFilter] = useState<Job['level'] | null>(null);
  
  const levelCounts = useMemo(() => {
    const counts: Record<string, number> = {};

    JobPositions.forEach(level => {
      counts[level.name] = jobs.filter(job => job.level === level.name).length;
    });

    return counts
  }, [jobs]);

  const filterJobs = (type: Job['type'] | null, level: Job["level"] | null) => {
    let filtered = jobs.filter(job =>
      (type === null || job.type === type) &&
      (level === null || job.level === level)
    );

    onFilterChange(filtered);
    setActiveTypeFilter(type);
    setActiveLevelFilter(level)
  }


  const resetFilter = () => {
    onFilterChange(jobs);
    setActiveTypeFilter(null)
    setActiveLevelFilter(null)
  }

  const handleLevelFilter = (level: Job['level']) => {
    filterJobs(activeTypeFilter, level === activeLevelFilter ? null : level);
  }

  return (
    <div className="space-y-4 mx-auto">
      <div className="w-auto mx-3">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          scrollbar={{ draggable: true }}
          loop={false}
          modules={[Pagination, Navigation]}
        >
          {JobPositions.map((level) => (
            <SwiperSlide key={level.id}>
              <button onClick={() => handleLevelFilter(level.name as Job['level'])}
                className={`px-10 w-full h-[120px] rounded-xl border-4 border-[#8CA8BA] bg-white text-sm hover:text-[#fff] hover:cursor-pointer ${
                  activeLevelFilter === level.name
                    ? 'bg-[#8CA8BB] text-white'
                    : 'hover:bg-[#8CA8BB] text-[#fff]'
                    }`}
              >
                <div>
                  <p className="font-khmer text-[16.5px] text-[#1a5276]">{level.khmerName}</p>
                  <p className="font-accent text-[#1a5276] text-[17px] font-semibold">{level.displayName}</p>
                  <p className="text-[23px] font-semibold text-[#1a5276]">
                    {levelCounts[level.name] ?? 0}
                  </p>
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
  {/* <button
    onClick={resetFilter}
    className="px-4 py-2 rounded-xl text-sm bg-gray-200 hover:bg-gray-300"
  >
    Reset All Filters
  </button> */}