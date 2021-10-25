import {useRef} from 'react';
const usePrevious = (state: any, compare: (newV: any, oldV: any) => boolean) => {
    const prevRef = useRef();
    const curRef  = useRef();
    const needUpdate = typeof compare === 'function' ? compare(curRef.current, state) : true;
    if (needUpdate) {
        prevRef.current = curRef.current;
        curRef.current = state;
    }
    return prevRef.current;
}

export default usePrevious