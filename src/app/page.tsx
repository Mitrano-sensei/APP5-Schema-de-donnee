import TextChat from "@/components/TextChat";
import Userbar from "../components/Userbar";
import FormBox from "@/components/FormBox";
import { SampleProvider } from "@/providers/SampleProvider";

export default function Home() {
  const formProvider = new SampleProvider();

  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <main className="grid grid-cols-9 divide-gray-800">
        <div className='col-span-full border-x overflow-hidden overflow-y-auto max-h-screen min-h-screen'>
          <Userbar />
          <div className='border-t border-gray-500'></div>
          <TextChat />
          <div className='border-t border-gray-500'></div>
          <FormBox formOptions={formProvider.getFormNames()} forms={formProvider.getForms()}/>

        </div>
      </main>
    </div>
  );
}
