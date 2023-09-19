import React, { useState } from "react";
import { Layout } from "antd";
import NavBar from "./components/NavBar";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout
        style={
          collapsed
            ? { marginLeft: "80px", transitionDuration: "0.2s" }
            : { marginLeft: "250px", transitionDuration: "0.2s" }
        }
      >
        <NavBar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          colorBgContainer={"#f6f8fb"}
        />
      </Layout>
    </Layout>
  );
};
export default App;
