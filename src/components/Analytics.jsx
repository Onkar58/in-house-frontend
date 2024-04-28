import React, { useEffect, useState } from "react";
import { useUserAuth } from "../providers/UserContext";
import ActiveUsers from "./Analytics/Charts/ActiveUsers";
import AllQuestions from "./Analytics/Charts/AllQuestions";
import LetsAnalyse from "./Analytics/LetsAnalyse";
import StudentStrip from "./Analytics/StudentStrip";
import { _axios } from "../interceptor";

const Analytics = () => {
  const { user } = useUserAuth();
  const [analyticsData, setAnalyticsData] = useState([]);
  const [recentSubmissions, setRecentSubmissions] = useState([]);
  const fetchData = async () => {
    const data = await _axios.post(`/user/getallstudentsskillstats`, {
      email: user.email,
    });
    setAnalyticsData(data?.data?.map((user) => user?.skillsData));
    setRecentSubmissions(data?.data?.map((user) => user?.recentSubmissions));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return analyticsData.length > 0 ? (
    <>
      <LetsAnalyse />

      <div className="w-full flex flex-col items-center gap-5 justify-between">
        <div className="w-full flex items-center justify-between mb-20">
          <AllQuestions inputData={analyticsData} />
          <ActiveUsers recentSubmissions={recentSubmissions} />
        </div>
        <div className="text-white bg-opacity-10 flex items-center justify-between w-full px-10 py-3 rounded-lg">
          <p className="underline text-lg min-w-[200px] cursor-pointer">
            Username
          </p>
          <p className="text-opacity-60">Status</p>
          <div className="max-w-[450px] flex-1 flex items-center justify-between text-center">
            <p>Advanced</p>
            <p>Intermediate</p>
            <p>Fundamental</p>
          </div>
        </div>
        {analyticsData.map((user, idx) => (
          <StudentStrip
            submissionData={recentSubmissions[idx]}
            data={user}
            key={idx}
          />
        ))}
      </div>
    </>
  ) : (
    <h1 className="text-center text-white text-3xl mt-20 font-[600]">
      No Student is Added
    </h1>
  );
};

export default Analytics;
