import Link from "next/link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGamepad, faUserAlt, faQuestionCircle } from "@fortawesome/free-solid-svg-icons"

export default function NavBar() {
    return (
        <nav className="flex items-center justify-between w-full h-[100px] bg-2 border-t-[1.5px] border-black bottom-0 left-0 fixed">
            <ul id="pages" className="grid grid-cols-3 w-full h-full">
                <li className="flex items-center justify-center">
                    <Link href="/" className="flex items-center justify-center p-[10px] bg-4 border-[1.5px] border-black rounded-2xl h-[80%] aspect-square">
                        <FontAwesomeIcon icon={faGamepad} className="text-5xl" />
                    </Link>
                </li>
                <li className="flex items-center justify-center">
                    <Link href="/profile" className="flex items-center justify-center p-[10px] bg-4 border-[1.5px] border-black rounded-2xl h-[80%] aspect-square">
                        <FontAwesomeIcon icon={faUserAlt} className="text-5xl" />
                    </Link>
                </li>
                <li className="flex items-center justify-center">
                    <a href="https://help-mewing.flappygrant.com/" className="flex items-center justify-center p-[10px] bg-4 border-[1.5px] border-black rounded-2xl h-[80%] aspect-square">
                        <FontAwesomeIcon icon={faQuestionCircle} className="text-5xl" />
                    </a>
                </li>
            </ul>
        </nav>
    )
}
