import { Box } from "@chakra-ui/react";
import Router from './pages/Router'


function App() {
  return (
    <div className="App">
     <Box maxW='900px' m='2.5rem auto'>
        <Router/>
     </Box>
    </div>
  );
}

export default App;
