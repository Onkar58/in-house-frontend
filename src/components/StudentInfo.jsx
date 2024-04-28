import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import MainInfo from "./StudentInfo/MainInfo";
import RankRating from "./StudentInfo/RankRating";
import SkillsLang from "./StudentInfo/SkillsLang";
import RecentSubmissions from "./StudentInfo/RecentSubmissions";
import { useUserAuth } from "../providers/UserContext";
import { _axios } from "../interceptor";

const StudentInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState({});
  const [skillsData, setSkillsData] = useState({});
  const [isStudentPresent, setIsStudentPresent] = useState(false);
  const { user } = useUserAuth();
  const fetchStudentData = async () => {
    const data = await _axios.get(`${location.pathname}`);
    if (data.success) {
      setStudentData(data.message);
    } else toast.error(data.message);
  };
  const fetchSkills = async () => {
    const data = await _axios.post(`/student/getskills`, {
      username: location.pathname.split("/")[2],
    });
    if (data.success) {
      setSkillsData(data.message);
    }
  };

  const addStudent = async () => {
    if (!user) {
      toast("Login to Add Student", {
        icon: "😀",
      });
      navigate("/login");
    }
    const isStudentAdded = await _axios(`/user/addstudent/`, {
      email: user.email,
      input: location.pathname.split("/")[2],
    });
    if (isStudentAdded.success) {
      toast.success("Student Added");
      setIsStudentPresent(true);
    }
  };
  const checkUser = async () => {
    if (!user) {
      return;
    }
    const isStudentPresent = await _axios(`/user/checkstudent/`, {
      email: user.email,
      username: location.pathname.split("/")[2].toLowerCase(),
    });
    if (isStudentPresent.success) {
      setIsStudentPresent(true);
    }
  };

  const deleteUser = async () => {
    const deletedUser = await _axios(`/user/deletestudent/`, {
      email: user.email,
      username: location.pathname.split("/")[2].toLowerCase(),
    });
    if (deletedUser.success) {
      toast.success("Student Deleted");
      setIsStudentPresent(false);
    } else toast.error(deletedUser.message);
  };

  useEffect(() => {
    fetchStudentData();
    fetchSkills();
    checkUser();
  }, []);
  return studentData.profileData ? (
    <>
      <MainInfo
        info={studentData.profileData}
        addStudent={addStudent}
        deleteStudent={deleteUser}
        isStudentPresent={isStudentPresent}
      />
      <RankRating
        rankRatings={studentData.rankRatings}
        questions={studentData.questions}
      />
      <SkillsLang skills={skillsData.skillsData} />
      <RecentSubmissions
        data={skillsData.recentSubmissions.recentSubmissionList}
      />
    </>
  ) : (
    <div className="mt-40 w-full flex items-center flex-col gap-10">
      <h1 className="text-4xl font-[600] text-white opacity-50 text-center my-auto">
        No Student Found
      </h1>
      <button
        className="bg-primary bg-opacity-80 p-3 px-5 rounded-md text-white font-[600] cursor-pointer"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
};

export default StudentInfo;
