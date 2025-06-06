import InfoSlider from "@/components/InfoSlider";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import CoverLetter from "./coverLetter/page";
import sliderMe from '../../../public/slider.png'
import Collaborative from "@/components/Collaborative";
import SearchBar from "@/components/jobs/Searchbar";
import { setDefaultAutoSelectFamily } from "net";
import PageJob from "@/components/jobs/page";

interface LinkButtonProps {
  href: string;
  text: string;
  className?: string;
}

const LinkButton = ({ href, text, className }: LinkButtonProps) => {
  return (
    <Link href="/coverLetter" className={`${className} font-default text-[#149ac5] w-full font-medium text-[17px] border-[1px] border-[#149ac5] min-w-[92px] h-[52px] items-center grid rounded-[10px] hover:bg-[#EDF7FB] xl:px-10 sm:px-10 sm:text[13px]`}>
      {text}
    </Link>
  )
}

interface HomeProps{}

const Home = ({ }: HomeProps) => {
  const t = useTranslations("HomePage");
  return (
    <>
      <main className="mt-[10rem] h-[100rem]">
        {/* <div className="pt-[10rem] w-full flex flex-col items-center justify-center"> */}
        <div>
          {/* <div className="flex flex-col items-center gap-y-1"> */}
          <div className='justify-items-center justify-center grid grid-cols-1 gap-y-1 md:grid-cols-1'>
            {/* <InfoSlider /> */}
            <div className="grid justify-items-center">
              <Image src={sliderMe} alt=""  className="w-[75rem]"/> 
            </div>
            {/* <div className="w-[65%]"> */}
              <Collaborative />
            {/* </div> */}
            <div className="grid justify-items-center justify-center mt-2">
              <LinkButton href="/" text="Create your Professional CV now!" />
            </div>
          </div>

          <div>
            <div>
              {/* <JobsPage /> */}
              <PageJob />
            </div>
          </div>
        </div>

        {/* <div className='bg-gradient-to-b w-full from-[#cde6ff] to-[#fff] h-[50rem] absolute top-0'></div> */}
      </main>
    </>
  );
}

export default Home
