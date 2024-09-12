import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const theme = toggle ? 'dark' : 'light';

  const handleToggleTheme = () => {
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="App">
      <h1>Dark Light Theme</h1>
      <button onClick={handleToggleTheme}>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</button>
    </div>
  );
}

export default App;
