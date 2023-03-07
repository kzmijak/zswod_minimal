import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const useRootSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useRootSelector };
