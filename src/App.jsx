import { useState } from 'react'


function App() {


 
  const[lista,setlista] = useState([])
  const[novatarefa,setnovatarefa] = useState("")
  const[count,setcount] = useState(0)
  const[uncheck,setuncheck] = useState(0)
  
  function check(){
    let checkbox = document.querySelectorAll('.checker')
    checkbox.forEach((el) => {
      if(event.target.checked){
        setuncheck(uncheck - 1)
      }else{
        setuncheck(uncheck + 1)
      }
    })
  }
  function adicionar(){
    setlista([...lista, novatarefa])
    setcount(count+1)
    setnovatarefa("")
  }
  function excluir(index){
      const novaLista = lista.filter((_, i) => i !== index);
      setlista(novaLista);
      setcount(count - 1);
    
  }

  console.log(lista)  
  return (
    <>
          <span>{uncheck}</span>
          <br/>
          <span>{count}</span>
          <input type='text' value={novatarefa} onChange={e => setnovatarefa(e.target.value)} />
          <button color="secondary" onClick={adicionar} >Adicionar</button>
          
          
          <div>

            {lista.map((lista, index) => (
              <div key={index}>
                <input type='checkbox' className='checker' onChange={check} />  <span>{lista}</span> <button variant="outlined" color="error" onClick={() => excluir(index)}>remover</button> <br/>
              </div>
            ))}
          </div>
       
    </>
  )
}

export default App



/*import { useState } from 'react'
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
*/
