import { AiOutlineMail } from "react-icons/ai"
import { FaGithub, FaTelegramPlane, FaVk } from "react-icons/fa"

const ContactIcons = () => {
    return (
        <>
            <a
                href="https://t.me/DelinMoran"
                target="_blank"
                rel="noreferrer"
                className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer ease-in duration-300 hover:scale-105"
            >
                <FaTelegramPlane size={27} />
            </a>
            <a
                href="https://vk.com/delin_moran"
                target="_blank"
                rel="noreferrer"
                className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer ease-in duration-300 hover:scale-105"
            >
                <FaVk size={27} />
            </a>
            <a
                href="mailto:mail@htmlacademy.ru"
                target="_blank"
                rel="noreferrer"
                className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer ease-in duration-300 hover:scale-105"
            >
                <AiOutlineMail size={27} />
            </a>
            <a
                href="https://github.com/DelinFix"
                target="_blank"
                rel="noreferrer"
                className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer ease-in duration-300 hover:scale-105"
            >
                <FaGithub size={27} />
            </a>
        </>
    )
}

export default ContactIcons
