import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const JobCatagory = () => {
  return (
    <Tabs className="container mx-auto px-6 py-12">
      <TabList>
        <Tab>On-Site Job</Tab>
        <Tab>Remote Job</Tab>
        <Tab>Hybrid Job</Tab>
        <Tab>Part-Time Job</Tab>
      </TabList>

      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 3</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 4</h2>
      </TabPanel>
    </Tabs>
  );
};

export default JobCatagory;
