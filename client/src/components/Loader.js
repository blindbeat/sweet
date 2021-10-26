import { CircularProgress } from '@mui/material';

const Loader = () => {
    return (
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            <CircularProgress />
        </div>
    )
}

export default Loader
