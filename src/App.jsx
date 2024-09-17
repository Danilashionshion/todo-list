import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function App() {

  const[lista,setlista] = useState([])
  const[novatarefa,setnovatarefa] = useState("")

  function adicionar(){
    setlista([...lista, novatarefa])
  }
  function excluir(){

  }

  console.log(lista)  
  return (
    <>
    
      <CssBaseline />
      <Container maxWidth="sm" sx={{paddingTop: '70px'}}>
        <Box sx={{ bgcolor: 'whitesmoke', height: '70vh', textAlign: 'center', padding: '70px'}} >
          <input type='text' value={novatarefa} onChange={e => setnovatarefa(e.target.value)} />
          <Button color="secondary" onClick={adicionar}>Adicionar</Button>
          
          
          <div>

            {lista.map(lista => (
              <div>
                <input type='checkbox'/>  <span key={lista}>{lista}</span> <Button variant="outlined" color="error" onClick={excluir}>remover</Button> <br/>
              </div>
            ))}
          </div>
        </Box>

      </Container>
 
    </>
  )
}

export default App
