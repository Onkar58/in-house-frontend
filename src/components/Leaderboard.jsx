import React, { useEffect, useState } from "react";
import { useUserAuth } from "../providers/UserContext";
import RankCard from "./Leaderboard/RankCard";
import RankStrip from "./Leaderboard/RankStrip";
import { _axios } from "../interceptor";
const Leaderboard = () => {
  const { user } = useUserAuth();
  const [studentData, setStudentData] = useState([]);
  const getData = async () => {
    const leaderboardData = await _axios.post(`/user/gethomepagedata/`, {
      email: user.email,
    });
    if (leaderboardData.success) {
      setStudentData(
        leaderboardData["data"].sort((a, b) => a.ranking - b.ranking),
      );
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mt-20">
      <div
        className="overflow-x-scroll flex items-center p-5 gap-10 sm:justify-evenly"
        id="rankCards"
      >
        {studentData.length > 0 ? (
          studentData.slice(0, 3).map((item, index) => {
            return <RankCard data={item} key={index} position={index + 1} />;
          })
        ) : (
          <h1 className="text-center text-white text-3xl mt-20 font-[600]">
            No Student is Added
          </h1>
        )}
      </div>
      <div className="mt-10 flex flex-col gap-10">
        {studentData.slice(3).map((item, index) => {
          return <RankStrip data={item} position={index + 3} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Leaderboard;
