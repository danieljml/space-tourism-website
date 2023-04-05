import { useEffect } from 'react';

function useBackgroundImage(imageUrl) {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${imageUrl})`;

    return () => {
      document.body.style.backgroundImage = '';
    };
  }, [imageUrl]);
}

export default useBackgroundImage;
