export const openProfileTab = (gh, li, lc, cc, hr, onObject) => {
  if (onObject.object.uuid === gh.current.uuid)
    window.open("https://github.com/Rashad-Malik-T-K", "new");
  if (onObject.object.uuid === li.current.uuid)
    window.open("linkedin.com/in/rashad-malik-tk-8b677b251 2", "new");
  if (onObject.object.uuid === lc.current.uuid)
    window.open("https://travelandtourism61.wordpress.com/", "new");
  
};

export const openProjectTab = (sf, iic, chat, museum, ttt, onObject) => {
  if (onObject.object.uuid === sf.current.uuid)
    window.open("https://github.com/Rashad-Malik-T-K", "new");
  if (onObject.object.uuid === iic.current.uuid)
    window.open("linkedin.com/in/rashad-malik-tk-8b677b251 2", "new");
  if (onObject.object.uuid === chat.current.uuid)
    window.open("https://travelandtourism61.wordpress.com/", "new");
  if (onObject.object.uuid === museum.current.uuid)
    window.open("https://coursera.org/share/a9ff56f4b64b3893ee3371db501f20c5", "new");

};

export const openProjectGithub = (sf, iic, chat, museum, ttt, onObject) => {
  if (onObject.object.uuid === sf.current.uuid)
    window.open("https://github.com/Rashad-Malik-T-K", "new");
  if (onObject.object.uuid === iic.current.uuid)
    window.open("https://github.com/Rashad-Malik-T-K", "new");
  if (onObject.object.uuid === chat.current.uuid)
    window.open("https://github.com/Rashad-Malik-T-K", "new");
  if (onObject.object.uuid === museum.current.uuid)
    window.open("https://github.com/Rashad-Malik-T-K", "new");
  if (onObject.object.uuid === ttt.current.uuid)
    window.open(
      "https://github.com/Rashad-Malik-T-K/To-do-App.git",
      "new"
    );
};
