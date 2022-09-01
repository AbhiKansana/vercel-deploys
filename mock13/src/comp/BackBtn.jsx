import { Button } from '@chakra-ui/react'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate} from 'react-router-dom'



const BackToNotes = () => {

  const nav = useNavigate()

  return (
    <Button onClick={(()=>nav('/'))} colorScheme='twitter' leftIcon={<BsArrowLeft size={'1.25rem'} />}>
    Notes
  </Button>
  )
}

export default BackToNotes