import { IoMdClose } from "react-icons/io";

const TodoMainSection = () => {
  return (
    <ul className="list-disc pl-10 mt-5 text-2xl font-bold">
      <li className="w-full pr-5">
        <div className="flex justify-between items-center">
          <span>go to gym</span>
          <button className="bg-red-600 p-2 rounded-2xl">
            <IoMdClose className="text-white text-2xl cursor-pointer" />
          </button>
        </div>
      </li>
    </ul>
  );
};

export default TodoMainSection;
