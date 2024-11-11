import { useNavigate } from 'react-router-dom';

const useNavigateToProduct = (bookId) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/productpage', { state: { id: bookId } });
    window.scroll(0, 0);
  };

  return handleNavigate;
};

export default useNavigateToProduct;
