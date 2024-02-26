import React, { useState } from "react";
import { Tabs } from "antd";
import Layout from "../components/Layout";

const { TabPane } = Tabs;

const Home = () => {
  const [activeTab, setActiveTab] = useState("1");

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <Layout>
      <div style={{ maxWidth: "100%", margin: "0" }}>
        <div
          style={{
            width: "100%",
            height: "250px",
            backgroundColor: "#1B4D3E",
            color: "white",
            padding: "30px",
            boxSizing: "border-box",
          }}
        >
          <h1>WELCOME TO E-CDC</h1>
          <p style={{ fontSize: "20px" }}>
            Adikavi Nannaya university, Rajahmundry, 533296.
          </p>
        </div>
        <div
          style={{
            width: "90%",
            margin: "70px",
            boxSizing: "border-box",
          }}
        >
          <Tabs
            defaultActiveKey="1"
            tabBarActiveTextColor="#006A4E"
            centered
            activeKey={activeTab}
            onChange={handleTabChange}
            style={{ maxWidth: "100%", boxSizing: "border-box" }}
          >
            <TabPane tab="E-CDC" key="1">
              <div
                style={{
                  maxWidth: "100%",
                  padding: "30px",
                  fontSize:"18px",
                  boxSizing: "border-box",
                }}
              >
                <p>
                  <b>
                    CDC(College Development Council) is a department in Adikavi
                    Nannaya University, which deals with the activities related to
                    affiliated colleges and their maintenance. CDC's
                    activities are completely based on the regulations of
                    APSCHE(Andhra Pradesh State Council of Higher Education).
                  </b>
                </p>
                <p>
                  <b>
                    Moving to E-CDC, this is to provide CDC services online. Every
                    college will be provided with a unique userid and password,
                    any further modifications are done by respective office staff.
                    Colleges can access the provided services with their
                    credentials.
                  </b>
                </p>
              </div>
            </TabPane>
            <TabPane
              tab="About fee calculation and online affiliation orders"
              key="2"
            >
              <div
                style={{
                  maxWidth: "100%",
                  padding: "18px",
                  fontSize:"18px",
                  boxSizing: "border-box",
                }}
              >
                <p>
                  <b>
                    A college with its assigned loginid and password can
                    calculate their annual fee for that academic year. This
                    includes fees to be paid in all aspects such as ICGS fee, annual
                    affiliation fee, inspection fee, common fee, etc. to be paid to
                    get affiliation for that year. Further processing will be done
                    after the payment of the total fee. No dues certificates are
                    verified, and affiliation orders are got signed by the dean
                    CDC.
                  </b>
                </p>
                <p>
                  <b>
                    Online affiliation orders are replicas of original affiliation
                    orders; colleges can download order copy anytime from the
                    E-CDC website, and they can keep the printouts for further
                    usage.
                  </b>
                </p>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
