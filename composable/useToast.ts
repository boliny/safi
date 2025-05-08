import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

export const useToast = () => {
  const showToast = (message: string, color: string = '#333') => {
    Toastify({
      text: message,
      duration: 3000,
      close: true,
      gravity: 'top',
      position: 'right',
      backgroundColor: color,
    }).showToast()
  }

  return { showToast }
}
