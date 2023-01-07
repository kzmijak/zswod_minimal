import { useContext } from 'react';
import { JwtContext } from './JwtContext';

const useJwt = () => useContext(JwtContext);

export { useJwt };
