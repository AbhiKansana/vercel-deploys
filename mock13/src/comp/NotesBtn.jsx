import { Button } from '@chakra-ui/react'
import { BsArrowLeft } from 'react-icons/bs'

const NotesBtn = () => {
  return (
    <Button colorScheme='twitter' leftIcon={<BsArrowLeft size={'1.25rem'} />}>
    Bookmarks
  </Button>
  )
}

export default NotesBtn