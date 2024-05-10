import PhonelinkOutlinedIcon from '@mui/icons-material/PhonelinkOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import MobileFriendlyOutlinedIcon from '@mui/icons-material/MobileFriendlyOutlined';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import GiteOutlinedIcon from '@mui/icons-material/GiteOutlined';

import { cn } from '@/lib/twMerge';
import { Service } from '@/_types';

export const services: Service[] = [
    {
        icon: <PhonelinkOutlinedIcon />,
        title: "Desarrollo web",
        color: "bg-indigo-400",
    },
    {
        icon: <SupportAgentOutlinedIcon />,
        title: "Asesoramiento",
        color: "bg-red-400",
    },
    {
        icon: <MobileFriendlyOutlinedIcon />,
        title: "Aplicaciones móviles",
        color: "bg-green-400",
    },
    {
        icon: <DonutSmallOutlinedIcon />,
        title: "Bases de datos",
        color: "bg-yellow-400",
    },
    {
        icon: <GiteOutlinedIcon />,
        title: "Hosting y dominios",
        color: "bg-blue-400"
    }
]

export default function Services() {
    return <ul className="mt-5 flex flex-col gap-4">
        { services.map((service, index) => <ListItem key={ index } { ...service } />) }
    </ul>
}

function ListItem({
    icon,
    title,
    color
} : {
    icon: JSX.Element,
    title: string,
    color: string
}) {
    return <li className="flex items-center gap-4 text-lg uppercase font-extralight">
        <div className={ cn("h-10 w-10 rounded flex items-center justify-center text-white", color || 'bg-primary') }>
            { icon }
        </div>

        { title }
    </li>
}