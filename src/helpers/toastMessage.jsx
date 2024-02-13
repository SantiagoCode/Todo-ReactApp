import toast from 'react-hot-toast';

const toastMessage = {
  error: (message) => {
    toast.error(message);
  },
  success: (message) => {
    toast.success(message);
  }
}

export default toastMessage