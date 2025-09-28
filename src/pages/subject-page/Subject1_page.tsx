import { useState } from "react";
import { IconMenu2 } from "@tabler/icons-react";
import { DemoMiniCalendar } from "@/Utils/Calendar";
import Expand_assignment from "@/Utils/Expand_assignment";
import Expand_notes from "@/Utils/Expand_notes";
import { Link } from "react-router-dom";

const Subject1_page = () => {
  // track which section is open
  const [openSection, setOpenSection] = useState<string | null>(null);

  const handleToggle = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="pt-1 bg-[#a2d2ff] h-full">
      <Link to={"/home"}>
        <div className="m-4">
          <IconMenu2 size={"40px"} stroke={2} />
        </div>
      </Link>

      <div className="mx-2 bg-blue-300 p-5 flex justify-center items-center flex-col gap-5 rounded-2xl mb-5">
        <h1 className="text-3xl font-bold">Attendance</h1>
        <DemoMiniCalendar />
        <button className="w-[100px] my-3 rounded-full bg-blue-600 text-white font-bold py-2 text-lg shadow hover:bg-blue-700 transition">
          Attend
        </button>
      </div>

      <div className="mx-2 bg-blue-300 p-5 flex justify-center items-center flex-col gap-5 rounded-2xl mb-5">
        <Expand_assignment
          label={"Assignment"}
          isOpen={openSection === "assignment"}
          onToggle={() => handleToggle("assignment")}
        />
      </div>

      <div className="mx-2 bg-blue-300 p-5 flex justify-center items-center flex-col gap-5 rounded-2xl mb-5">
        <Expand_notes
          label={"Lecture Notes"}
          isOpen={openSection === "notes"}
          onToggle={() => handleToggle("notes")}
        />
      </div>
    </div>
  );
};

export default Subject1_page;
