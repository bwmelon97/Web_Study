function usePreventLeave () {

    const preventLeave = (event: BeforeUnloadEvent) => {
        event.preventDefault();
        event.returnValue = '';
    }

    const lockLeaving = () => window.addEventListener('beforeunload', preventLeave);
    const unLockLeaving = () => window.removeEventListener('beforeunload', preventLeave);

    return {
        lockLeaving,
        unLockLeaving
    }
}

export default usePreventLeave;