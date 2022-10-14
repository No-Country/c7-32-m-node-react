import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const alertError = (error) => {
  return MySwal.fire({
    position: 'center',
    icon: 'error',
    title: 'Oops',
    text: error.response.data.message,
  })
}
  