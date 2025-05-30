import InfoSlider from "@/components/InfoSlider";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface LinkButtonProps {
  href: string;
  text: string;
  className?: string;
}

const LinkButton = ({ href, text, className }: LinkButtonProps) => {
  return (
    <Link href="/createCV" className={`${className} text-[#149ac5] font-medium text-[17px] border-[1px] border-[#149ac5] px-10 py-3 rounded-[10px] hover:bg-accent-[#149ac5]`}>
      {text}
    </Link>
  )
}

interface HomeProps{}

const Home = ({ }: HomeProps) => {
  const t = useTranslations("HomePage");
  return (
    <>
      <main className="">
        <div>
          <div>
            {/* <InfoSlider /> */}
          </div>
        </div>
      </main>
    </>
  );
}

export default Home
