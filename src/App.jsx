// App.js
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentList from "./components/StudentList"


function App() {


  return (


    <div className="App pt-20">
      <Navbar />

      {/* Pass addNewStudent function as prop to StudentForm */}

      {/* TABLE/LIST HEADER */}


      <StudentList />

      {/* STUDENT LIST */}

    </div>



  );
}

export default App;
