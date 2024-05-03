import { APP_NAME } from "@/lib/constants";
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';

export default function Icon() {
    return <h1 className="text-4xl font-bold flex items-center gap-2">
        <BoltOutlinedIcon 
            className="text-primary"
            fontSize="large"
        />

        <a href="/">
            { APP_NAME }
        </a>
    </h1>
}