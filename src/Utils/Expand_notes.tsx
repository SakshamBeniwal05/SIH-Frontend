import { IconCaretDownFilled, IconCaretUpFilled } from "@tabler/icons-react";

interface ExpandProps {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
}

const Expand_notes = ({ label, isOpen, onToggle }: ExpandProps) => {
  return (
    <div className="w-full max-w-md mx-auto" onClick={onToggle}>
      <div className="cursor-pointer select-none p-3">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{label}</h1>
          {isOpen ? (
            <IconCaretUpFilled className="transition-transform duration-300" />
          ) : (
            <IconCaretDownFilled className="transition-transform duration-300" />
          )}
        </div>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="list-inside flex flex-col gap-2">
            <div className="flex justify-around items-center">
              <li className="font-medium text-[20px]">Topic 1</li>
            </div>
            <div className="flex justify-around items-center">
              <li className="font-medium text-[20px]">Topic 2</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Expand_notes;
