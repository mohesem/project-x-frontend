import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

// actions
import {mediaAction} from '../redux/actions';

export default () => {
  const dispatch = useDispatch();
  const mediaReucer = useSelector(state => state.media);

  useEffect(() => {
    function handleSize() {
      const width = window.innerWidth;
      if (width <= 576 && mediaReucer !== 'sm') {
        dispatch(mediaAction('sm'));
      } else if (width > 576 && mediaReucer !== 'lg') {
        dispatch(mediaAction('lg'));
      } else {
        return null;
      }
    }

    if (!mediaReucer) {
      handleSize();
    }

    window.addEventListener('resize', handleSize);

    return () => window.removeEventListener('resize', handleSize);
  }, [dispatch, mediaReucer]);

  return null;
};
