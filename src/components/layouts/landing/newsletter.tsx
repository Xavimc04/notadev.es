import { Button } from "@nextui-org/react";
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';

export default function Newsletter() {
    return <form 
        className="flex items-center gap-3 w-[80%] md:w-auto"
    >
        <input 
            type="email"
            placeholder="Correo electrónico"
            className="py-3 px-4 border rounded-lg flex-1 md:flex-none md:w-80 focus:outline-none focus:border-transparent"
        />

        <Button
            size="lg"
            isIconOnly
            className="rounded-md bg-red-500 text-white flex items-center"
        >
            <MarkEmailUnreadOutlinedIcon />
        </Button>
    </form>
}