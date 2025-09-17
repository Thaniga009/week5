import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
}

const UseFrom: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`ข้อมูลที่ส่ง:\nชื่อ: ${formData.name}\nอีเมล: ${formData.email}`);
  };
  const handleClear = () => {
    setFormData({ name: "", email: "" });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>User Form Exercise</h2>
      <h4>ชื่อ:</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="กรอกชื่อของคุณ"
          value={formData.name}
          onChange={handleChange}
          style={{
            display: "block",
            marginBottom: "10px",
            width: "100%",
            height: "30px",
          }}
        />
        <h4>อีเมล:</h4>
        <input
          type="email"
          name="email"
          placeholder="กรอกอีเมลของคุณ"
          value={formData.email}
          onChange={handleChange}
          style={{
            display: "block",
            marginBottom: "10px",
            height: "30px",
            width: "100%",
          }}
        />
        <button
          type="submit"
          style={{
            marginRight: "15px",
            backgroundColor: "#28bb2fff",
            color: "white",
          }}
        >
          submit
        </button>
        <button
          type="button"
          style={{ backgroundColor: "#f11010ff", color: "white" }}
          onClick={handleClear}
        >
          Clear
        </button>
      </form>
      <div
        style={{
          marginTop: "30px",
          backgroundColor: "#eaeaeaff",
          borderRadius: "15px",
          height: "150px",
          width: "100%",
        }}
      >
        <h3>ข้อมูลปัจจุบัน:</h3>
        <p>ชื่อ: {formData.name || "ยังไม่ได้กรอก"}</p>
        <p>อีเมล: {formData.email || "ยังไม่ได้กรอก"}</p>
      </div>
    </div>
  );
};

export default UseFrom;
