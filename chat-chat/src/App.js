import { Box } from "@chakra-ui/react";
import Router from './pages/Router'


function App() {
  return (
    <Box h={'100vh'} py='4rem' bg='whatsapp.900' className="App">
     <Box maxW='900px' m='auto'>
        <Router/>
     </Box>
    </Box>
  );
}

export default App;
