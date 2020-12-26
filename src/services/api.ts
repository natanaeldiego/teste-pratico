import axios from 'axios';
import { useDispatch } from 'react-redux';
import { actions } from '../redux/actions';

const apiServer = axios.create({
  baseURL: 'http://IP-SERVER:3000/',
});

const resultHome = async () => {
  const dispatch = useDispatch();
  let isSubscribed = true;
      await apiServer.get(`pages`)
        .then(
          response => {
            if (isSubscribed) {
              dispatch(actions.addPages(response.data));
              dispatch(actions.isPages(true));
            }
          }
        ).catch(error => {
          console.log({ errorMessage: error.message });
          console.error('There was an error!', error);
        });
    return () => (isSubscribed = false);
    }

export { apiServer, resultHome };
