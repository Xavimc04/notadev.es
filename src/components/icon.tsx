import { APP_NAME } from "@/lib/constants";
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';

export default function Icon({
    color
} : {
    color?: string
}) {
    return <h1 className="text-4xl font-bold flex items-center gap-2 overflow-y-hidden">
        <BoltOutlinedIcon 
            className={ color || 'text-primary' }
            fontSize="large"
        />

        <a 
            href="/"
            className="overflow-y-hidden"
        >
            { APP_NAME }
        </a>
    </h1>
}