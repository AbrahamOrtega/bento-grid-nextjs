import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-12 h-screen w-full gap-[24px] px-32 py-12">
        <div className="flex flex-col px-[32px] py-[40px] items-center justify-center gap-[24px] col-span-1 row-span-6 bg-[#F9EEE1] rounded-[16px]">
          <h3 className="text-[24px] font-[600] ">
            Create and schedule content
            <span className="text-[#7650DC] italic">quicker.</span>
          </h3>
          <div>
            <Image
              src="/images/illustration-create-post.webp"
              alt=""
              width={400}
              height={400}
            />
          </div>
        </div>

        <div className="flex flex-col px-[32px] py-[40px] items-center justify-center gap-[24px] col-span-2 row-span-4 bg-[#7650DC] rounded-[16px]">
          <h2 className="text-[32px] font-[600] text-white text-center">
            Social Media <span className="text-[#FFCB6B]">10x</span>{" "}
            <span className="italic">Faster</span> with IA
          </h2>
          <div className="flex flex-col w-full items-center gap-y-[16px]">
            <Image
              src="/images/illustration-five-stars.webp"
              alt=""
              width={200}
              height={200}
            />
            <p className="text-[18px] text-gray-300">
              Over 4,000 5-star reviews
            </p>
          </div>
        </div>

        <div className="flex flex-col py-[40px] items-center justify-center gap-[24px] col-span-1 row-span-8 bg-[#DACFFC] rounded-[16px] overflow-hidden">
          <h3 className="text-[24px] px-[32px] font-[600] text-left">
            Schedule to social media.
          </h3>
          <div className="w-full h-full pl-[32px] relative">
            <Image
              className="absolute w-full h-full object-cover object-left-top rounded-[16px]"
              src="/images/illustration-schedule-posts.webp"
              alt=""
              width={400}
              height={400}
            />
          </div>
          <p className="text-gray-800 px-[32px] font-medium">
            Optimize post timings to publish content at the perfect time for
            your audience.
          </p>
        </div>

        <div className="flex flex-col px-[32px] py-[40px] items-center justify-center gap-[24px] col-span-1 row-span-4 bg-white rounded-[16px]">
          <div className="flex w-full">
            <Image
              src={"/images/illustration-multiple-platforms.webp"}
              alt="social media platforms"
              width={1000}
              height={1000}
            />
          </div>

          <h3 className="text-[24px] font-[600]">
            Manage multiple accounts and platforms.
          </h3>
        </div>

        <div className="flex flex-col px-[32px] pt-[40px] items-center justify-center gap-[24px] col-span-1 row-span-4 bg-[#FFCB6B] rounded-[16px]">
          <h3 className="text-[24px] font-[600]">
            Maintain a consistent posting schedule.
          </h3>
          <div className="flex w-full h-full relative">
            <Image
              className="absolute w-full h-full object-cover object-top"
              src="/images/illustration-consistent-schedule.webp"
              alt=""
              width={400}
              height={400}
            />
          </div>
        </div>

        <div className="flex flex-col px-[32px] py-[40px] items-center justify-center gap-[24px] col-span-1 row-span-6 bg-[#FFCB6B] rounded-[16px]">
          <h3 className="text-[24px] font-[600]">
            Write your content using AI.
          </h3>
          <div className="flex">
            <Image
              className=""
              src="/images/illustration-ai-content.webp"
              alt=""
              width={200}
              height={200}
            />
          </div>
        </div>

        <div className="flex flex-col px-[32px] py-[40px] items-center justify-center gap-[24px] col-span-1 row-span-4 bg-white rounded-[16px]">
          <h2 className="text-[40px] font-[600]">
            {">56%"}{" "}
            <p className="text-[16px] font-medium">Faster audience growth</p>
          </h2>
          <div className="flex h-full">
            <Image
              className=""
              src="/images/illustration-audience-growth.webp"
              alt=""
              width={150}
              height={150}
            />
          </div>
        </div>

        <div className="flex px-[32px] py-[40px] items-center justify-center gap-[24px] col-span-2 row-span-4 bg-[#7650DC] rounded-[16px]">
          <div className="flex">
            <Image
              src="/images/illustration-grow-followers.webp"
              alt=""
              width={250}
              height={250}
            />
          </div>
          <h3 className="text-[24px] font-[600] text-white">
            Grow followers with non-stop content.
          </h3>
        </div>
      </div>
    </>
  );
}
