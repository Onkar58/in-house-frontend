import React, { useEffect, useState } from "react";
import { _axios } from "../interceptor";
import { useUserAuth } from "../providers/UserContext";
import Herosection from "./Homepage/Herosection";
import StudentCards from "./Homepage/StudentCards";

const Homepage = () => {
  const [studentsData, setStudentsData] = useState([""]);

  const { user } = useUserAuth();

  const fetchStudentsData = async () => {
    const studentData = await _axios.post(`/user/gethomepagedata/`, {
      email: user.email,
    });

    if (studentData.success) {
      console.log("studentData", studentData);
      setStudentsData(studentData["data"]?.reverse());
    }
  };

  useEffect(() => {
    fetchStudentsData();
    console.log(studentsData);
  }, []);
  return (
    <div>
      <Herosection />
      {studentsData?.length === 0 ? (
        <h1 className="text-center text-white text-3xl mt-20 font-[600]">
          No Student is Added
        </h1>
      ) : (
        <StudentCards studentsData={studentsData} />
      )}
    </div>
  );
};

export default Homepage;
