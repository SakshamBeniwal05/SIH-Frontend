import { IconMenu2 } from "@tabler/icons-react";
import { IconCalendarWeekFilled } from '@tabler/icons-react';
import { IconUserCheck } from '@tabler/icons-react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="pt-1 bg-[#a2d2ff] h-full">
      <nav className="flex justify-between">
        <div className="m-4">
          <IconMenu2 size={"40px"} stroke={2} />
        </div>
        <div className="font-bold text-4xl flex justify-center items-center"> Logo </div>
        <div className="m-4">
          <IconCalendarWeekFilled size={"42px"} />
        </div>
      </nav>
      <div className="flex gap-4 font-medium justify-center">
        <span>
          <div>Mon</div>
          <div>29/9</div>
        </span>
        <span>
          <div>Tue</div>
          <div>30/9</div>
        </span>
        <span>
          <div>Wed</div>
          <div>1/10</div>
        </span>
        <span>
          <div>Thu</div>
          <div>2/10</div>
        </span>
        <span>
          <div>Fri</div>
          <div>3/10</div>
        </span>
        <span>
          <div>Sat</div>
          <div>4/10</div>
        </span>
        <span>
          <div>Sun</div>
          <div>5/10</div>
        </span>
      </div>

      <div>
        <Link to={'/subject1'}>
          <div className="bg-[#99D98C] rounded-2xl m-4 p-2">
            <div>
              <span className="font-normal mr-2">BET-C306</span>
              <span className="font-medium mr-2">Digital System Design</span>
            </div>
            <div className="flex justify-between">
              <div className="mt-1 bg-[#ECE4DB] p-2 rounded-2xl">
                <div>Time: 11:00 AM - 12:00 PM</div>
                <div>Room: Room-215</div>
              </div>
              <div className="flex items-center">
                <IconUserCheck stroke={2} size={40} className="bg-[#1A759F] p-2 rounded-2xl" />
              </div>
            </div>
          </div>
        </Link>
        <Link to={'/subject1'}>
          <div className="bg-[#99D98C] rounded-2xl m-4 p-2">
            <div>
              <span className="font-normal mr-2">BCE-C306</span>
              <span className="font-medium mr-2">Computer Architecture</span>
            </div>
            <div className="flex justify-between">
              <div className="mt-1 bg-[#ECE4DB] p-2 rounded-2xl">
                <div>Time: 12:00 PM - 1:00 PM</div>
                <div>Room: Room-215</div>
              </div>
              <div className="flex items-center">
                <IconUserCheck stroke={2} size={40} className="bg-[#1A759F] p-2 rounded-2xl" />
              </div>
            </div>
          </div>
        </Link>
        <Link to={'/subject1'}>
          <div className="bg-[#99D98C] rounded-2xl m-4 p-2">
            <div>
              <span className="font-normal mr-2">BCE-C305</span>
              <span className="font-medium mr-2">Data Structure</span>
            </div>
            <div className="flex justify-between">
              <div className="mt-1 bg-[#ECE4DB] p-2 rounded-2xl">
                <div>Time: 2:00 PM - 3:00 PM</div>
                <div>Room: Room-215</div>
              </div>
              <div className="flex items-center">
                <IconUserCheck stroke={2} size={40} className="bg-[#1A759F] p-2 rounded-2xl" />
              </div>
            </div>
          </div>
        </Link>

      </div>

    </div>
  );
};

export default Home;
