import "./App.css";
import Navbar from "./components/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";

export default function App() {
  const toast = useToast();
  const jsonServerError = () => {
    toast({
      title: `Info`,
      description:
        "I used Json local server to fetch all the product details and update, So first you need to download `db.json` file from GitHub",
      status: "info",
      position: "top",
      duration: 12000,
      isClosable: true,
    });
    toast({
      title: `Json-server is not started`,
      description:
        "Please make sure that you have started json-server on port 8080",
      status: "info",
      position: "top",
      duration: 10000,
      isClosable: true,
    });
  };

  useEffect(() => {
    jsonServerError();
  }, []);

  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}
