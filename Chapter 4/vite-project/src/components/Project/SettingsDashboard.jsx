import React, { useState, useEffect } from "react";

const SettingsDashboard = () => {
  const [settings, setSettings] = useState({
    username: "Jay Mojidra",
    theme: "light",
    language: "en",
  });

  const updateSetting = (key, value) => {
    setSettings({ ...settings, [key]: value });
  };

  useEffect(() => {
    // Apply theme to the body
    document.body.className = settings.theme;
  }, [settings.theme]);

  return (
    <div className="settings-dashboard">
      <h1>User Settings Dashboard</h1>

      <div>
        <h3>Update Username</h3>
        <input
          type="text"
          value={settings.username}
          onChange={(e) => updateSetting("username", e.target.value)}
        />
      </div>

      <div>
        <h3>Switch Theme</h3>
        <button onClick={() => updateSetting("theme", settings.theme === "light" ? "dark" : "light")}>
          Toggle Theme (Current: {settings.theme})
        </button>
      </div>

      <div>
        <h3>Change Language</h3>
        <select
          value={settings.language}
          onChange={(e) => updateSetting("language", e.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
        </select>
      </div>

      <div>
        <h3>Preview</h3>
        <p>
          {settings.language === "en" ? "Hello" : "Hola"}, {settings.username}!
        </p>
      </div>
    </div>
  );
};

export default SettingsDashboard;
