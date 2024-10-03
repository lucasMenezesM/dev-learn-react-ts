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
import { Categories } from "../Pages/Categories/Pages/Categories";
import NavBar from "../shared/components/NavBar";
import Footer from "../shared/components/Footer";
import { CategoryDetail } from "../Pages/Categories/Pages/CategoryDetail";
import { NewCategory } from "../Pages/Categories/Pages/NewCategory";

export const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />

        <Route path="/users" element={<UsersList />} />
        <Route path="/users/:id" element={<UserDetail />} />

        <Route path="/courses" element={<CoursesList />} />
        <Route path="/courses/:id" element={<CourseDetail />} />

        <Route path="/classes" element={<ClassesList />} />
        <Route path="/classes/:id" element={<ClassDetail />} />

        <Route path="/categories" element={<Categories />}/>
        <Route path="/categories/new" element={<NewCategory />}/>
        <Route path="/categories/:id" element={<CategoryDetail />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
