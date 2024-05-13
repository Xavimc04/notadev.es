"use client"

import Icon from "../icon";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import SegmentOutlinedIcon from '@mui/icons-material/SegmentOutlined';
import { ROUTING_PATHS } from "@/lib/constants"; 

export default function Navigator() { 
    return <nav className="w-screen border-b flex items-center py-5 text-md bg-white justify-center px-5 2xl:px-0">
        <section className="flex items-center gap-10 flex-1 xl:flex-none xl:w-1/2 2xl:w-1/3">
            <Icon />
        
            <ul className="items-center gap-5 hidden lg:flex">
                {
                    Object.entries(ROUTING_PATHS).map(([path, value]) => (
                        <li key={ value.path }>
                            <a 
                                href={ value.path } 
                                className="text-gray-400 hover:text-primary transition-all"
                            >
                                { value.name }
                            </a>
                        </li>
                    ))
                }
            </ul>
        </section>

        <section className="text-end flex justify-end xl:w-1/2 2xl:w-1/3">
            {/* Mobile icon */} 
            <Dropdown>
                <DropdownTrigger>
                    <Button 
                        isIconOnly 
                        variant="bordered"
                        className="rounded-md lg:hidden"
                    >
                        <SegmentOutlinedIcon />
                    </Button> 
                </DropdownTrigger>

                <DropdownMenu aria-label="Navlinks">
                    {
                        Object.entries(ROUTING_PATHS).map(([path, value]) => (
                            <DropdownItem 
                                key={ value.path } 
                                color="primary"
                            >
                                <a href={ value.path }>
                                    { value.name }
                                </a>
                            </DropdownItem>
                        ))
                    }
                </DropdownMenu>
            </Dropdown>
        </section>
    </nav>
}