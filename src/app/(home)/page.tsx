import { Metadata } from "next";
// import Link from "next/link";
// import ReactComponentButton from "../components/ReactComponentButton";
import PreviewComponent from "../components/PreviewComponent";
import InfoBar from "../components/InfoBar";
import GradientHeading from "../components/GradientHeading";

export const metadata: Metadata = {
  title: "JSON Share",
};

export default function Home() {
  return (
    <div className="w-full h-screen overflow-hidden flex flex-col space-y-4 items-center justify-center max-w-[700px] mx-auto relative px-4 md:px-0">
      <InfoBar
        type="warning"
        text="Share JSON will be launched soon. Stay tuned!"
      />
      <GradientHeading>
        Share JSON <span className="block">in a BEAUTIFUL WAY</span>
      </GradientHeading>
      <h2 className="text-white text-center text-sm sm:text-base xl:text-lg font-normal">
        Get started now for free or integrate the React Component in your
        project.
      </h2>

      {/* <div className="flex space-x-4 pointer-events-none opacity-40">
        <Link
          href="/share"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold"
        >
          Share JSON
        </Link>
        <ReactComponentButton />
      </div> */}

      <div className="w-full h-full max-h-80  xl:max-h-96 overflow-hidden relative p-4 rounded-lg bg-white/10">
        <div className="w-full h-full overflow-y-auto scrollbar">
          <PreviewComponent />
        </div>
      </div>
    </div>
  );
}
