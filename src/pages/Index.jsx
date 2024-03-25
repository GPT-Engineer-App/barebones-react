import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <div>
      <Link as={RouterLink} to="/monsters">
        View Monsters
      </Link>
    </div>
  );
};

export default Index;
