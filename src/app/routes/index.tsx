import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { UsersList } from "../Pages/Users/pages/UsersList";
import { UserDetail } from "../Pages/Users/pages/UserDetail";
import { CourseDetail } from "../Pages/Courses/pages/CourseDetail";
import { CoursesList } from "../Pages/Courses/pages/CoursesList";
import { ClassDetail } from "../Pages/Class/pages/ClassDetail";
import { ClassesList } from "../Pages/Class/pages/ClassesList";
import { Login } from "../Pages/Auth/Pages/Login";
import { Register } from "../Pages/Auth/Pages/Register";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root Path */}
        <Route path="/" element={<Home />} />

        {/* AUTH paths */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />

        {/* Users Paths */}
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/:id" element={<UserDetail />} />

        {/* Courses Paths */}
        <Route path="/courses" element={<CourseDetail />} />
        <Route path="/courses/:id" element={<CoursesList />} />

        {/* Classes Paths */}
        <Route path="/classes" element={<ClassesList />} />
        <Route path="/classes/:id" element={<ClassDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
