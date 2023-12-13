import { Outlet } from "react-router-dom";
import Card from "../components/atoms/Card";
import Container from "../components/atoms/Container";

const Dashboard = () => {
  return (
    <Container className="grid grid-cols-12 gap-5">
      <Card className="col-span-2 border"></Card>
      <Card className="col-span-10 border">
        <Outlet />
      </Card>
    </Container>
  );
};

export default Dashboard;
