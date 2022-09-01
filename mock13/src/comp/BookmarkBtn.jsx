import { Button } from '@chakra-ui/react'
import { BsArrowRight } from 'react-icons/bs'
import { useNavigate} from 'react-router-dom'



const BookMarkBtn = () => {

  const nav = useNavigate()

  return (
    <Button onClick={(()=>nav('/bookmarks'))} colorScheme='twitter' rightIcon={<BsArrowRight size={'1.25rem'} />}>
    Bookmarks
  </Button>
  )
}

export default BookMarkBtn