import { useState } from "react";

function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    groupCode: "",
    email: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ color: "white", textAlign: "center", marginTop: "30px" }}>
      <h2>Форма користувача</h2>

      <input
        type="text"
        name="name"
        placeholder="Ім'я"
        value={formData.name}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="text"
        name="surname"
        placeholder="Прізвище"
        value={formData.surname}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="text"
        name="groupCode"
        placeholder="Код групи"
        value={formData.groupCode}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <h3 style={{ marginTop: "20px" }}>Введені дані:</h3>

      <ul style={{ listStyle: "none" }}>
        <li>Ім'я: {formData.name}</li>
        <li>Прізвище: {formData.surname}</li>
        <li>Група: {formData.groupCode}</li>
        <li>Email: {formData.email}</li>
      </ul>
    </div>
  );
}

export default UserForm;