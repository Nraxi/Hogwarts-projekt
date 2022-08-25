import '../App.css';
import { EasybaseProvider } from 'easybase-react';
// import { EasybaseProvider, useEasybase } from 'easybase-react';
// import { useEffect } from 'react';

function Database() {
  return (
    <div className="Database" style={{ display: "flex", justifyContent: "center" }}>
      <EasybaseProvider>
        <Notes />
      </EasybaseProvider>
    </div>
  );
}

function Notes() {
  const backendData = [
    { title: "Tom Haverford", description: "Teacher", createdat: "01-18-2021" },
    { title: "Mavrick Milkroad", description: "Substitute Teacher", createdat: "12-01-2020" },
    { title: "James Burton", description: "Janitor", createdat: "12-30-2020" }
  ]

  const noteRootStyle = {
    border: "2px #0af solid",
    borderRadius: 9,
    margin: 20,
    backgroundColor: "#efefef",
    padding: 6
  };

  return (
    <div style={{ width: 400 }}>
      {backendData.map(ele => 
        <div style={noteRootStyle}>
          <h3>{ele.title}</h3>
          <p>{ele.description}</p>
          <small>{ele.createdat}</small>
        </div>
      )}
    </div>
  )
}

export default Database;