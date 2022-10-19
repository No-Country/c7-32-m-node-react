import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const swalAlert = (icon, title, text) => {
  return MySwal.fire({
    icon: icon,
    title: title,
    text: text,
  })
}


  