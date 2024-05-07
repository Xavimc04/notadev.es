import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { cn } from "@/lib/twMerge";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import NetworkCheckOutlinedIcon from '@mui/icons-material/NetworkCheckOutlined';

export default function Differences() {
    const differences = [
        {
            title: "Enfoque personalizado",
            description: "Nos enfocamos en cada cliente de manera personalizada, ofreciendo soluciones a medida para cada proyecto.",
            color: "bg-emerald-400",
            icon: <DiamondOutlinedIcon />
        },
        {
            title: "Innovación", 
            description: "Nuestro equipo de expertos está comprometido en brindar soluciones innovadoras y de alta calidad para nuestros clientes.",
            color: "bg-red-400",
            icon: <StarBorderOutlinedIcon />
        },
        {
            title: "Experiencia",
            description: "Más de 4 años de experiencia y más de 100 proyectos completados con éxito.",
            color: "bg-primary",
            icon: <CalendarTodayOutlinedIcon />
        },
        {
            title: "Eficiencia", 
            description: "Soluciones eficientes y de alta calidad para nuestros clientes.",
            color: "bg-sky-400",
            icon: <NetworkCheckOutlinedIcon />
        }
    ]

    return <div className="flex-wrap lg:flex-nowrap lg:flex-1 flex justify-center p-5 lg:justify-between gap-5">
        {
            differences.map((difference, index) => {
                return <Difference 
                    key={ index }
                    title={ difference.title }
                    bg={ difference.color }
                    description={ difference.description }
                    icon={ difference.icon }
                />
            })
        }
    </div>
}

function Difference({
    icon,
    title,
    description,
    bg
} : {
    icon: JSX.Element,
    title: string,
    description: string,
    bg?: string
}) {
    return <Card
        className="w-[80%] md:w-[40%] lg:w-1/3 xl:w-1/4" 
    >
        <CardHeader className="flex gap-3">
            <div className={ cn("h-10 w-10 rounded flex items-center justify-center text-white", bg || 'bg-primary') }>
                { icon }
            </div>

            <div className="flex flex-col">
                <p className="text-md">{ title }</p>
            </div>
        </CardHeader>

        <Divider/>
        
        <CardBody>
            <p>{ description }</p>
        </CardBody>
    </Card>
}