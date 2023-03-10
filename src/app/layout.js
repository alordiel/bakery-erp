import './globals.css'
import Link from "next/link";

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}
const links = [
    {path: '/', title: 'Home'},
    {path: '/dashboard', title: 'Начало'},
    {path: '/sells', title: 'Продажби'},
    {path: '/products', title: 'Продукти'},
    {path: '/stocks', title: 'Доставки'},
    {path: '/production', title: 'Производство'},
];
export default function RootLayout({children}) {

    return (
        <html lang="bg">
        <body>
        <header>
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M40 2.047c-2.766 0-5.676 1.172-7.816 2.289a14.214 14.214 0 0 0-5.133.191c-1.149.262-2.301.711-3.219 1.528-.914.816-1.539 2.05-1.539 3.554v.97c-.152-.013-.363-.095-.508-.095-1.515 0-3.668.098-5.566 1.094-1.899.992-3.438 3.04-3.438 6.293v.66c-.32.004-.66-.043-.965.032-1.355.332-3.015.878-4.363 2.156C6.11 22 5.164 24.008 5.164 26.89v1.015c-.031.035-.059.024-.086.067-1.121 1.789-3.031 6.328-3.031 11.054 0 3.016.672 5.243 1.89 6.743 1.22 1.503 2.977 2.183 4.77 2.183 3.66 0 7.36-1.773 11.29-4.637 3.925-2.863 8.108-6.851 12.718-11.488C41.735 22.762 47.953 15.36 47.953 8c0-2.219-1.219-3.852-2.785-4.75-1.57-.902-3.461-1.203-5.168-1.203zm0 1.906c1.469 0 3.078.3 4.219.953 1.136.649 1.828 1.516 1.828 3.094 0 6.242-5.73 13.484-14.688 22.484-4.586 4.614-8.722 8.543-12.488 11.29-3.766 2.746-7.133 4.273-10.164 4.273-1.34 0-2.437-.434-3.285-1.48-.852-1.044-1.469-2.81-1.469-5.54 0-3.953 1.672-8.035 2.563-9.609.234.027.511.07.898.145.941.175 2.223.453 3.555.687 1.336.234 2.719.434 3.937.453 1.219.02 2.364-.015 3.153-.93.402-.468.39-1.257.148-1.71-.242-.454-.594-.762-1.012-1.067-.836-.61-1.996-1.14-3.328-1.543-2.023-.61-4.453-.937-6.515-.262.265-1.363.722-2.425 1.418-3.086.968-.921 2.277-1.39 3.5-1.687.421-.102 1.539.012 2.847.36 1.309.343 2.844.859 4.363 1.331 1.516.47 3.016.895 4.356 1.043.668.075 1.305.086 1.91-.047.602-.132 1.203-.433 1.61-.964.417-.543.449-1.328.218-1.899-.23-.57-.625-1.023-1.117-1.46-.977-.868-2.375-1.645-3.953-2.239-1.574-.594-3.324-.988-4.996-.98a7.815 7.815 0 0 0-2.383.37c.402-1.253 1.031-2.167 1.98-2.667 1.395-.73 3.266-.875 4.68-.875.508 0 1.633.238 2.895.582 1.261.347 2.699.793 4.07 1.16 1.367.367 2.645.668 3.734.695.543.012 1.055-.023 1.563-.293.508-.27.91-.926.91-1.535 0-1.125-.672-2.059-1.535-2.738-.867-.684-1.969-1.184-3.176-1.54-1.894-.558-3.957-.609-5.824-.253.152-.387.375-.715.683-.992.567-.504 1.422-.872 2.372-1.09 1.898-.438 4.195-.25 4.695-.153l.328.063.3-.156c1.99-1.059 4.915-2.188 7.2-2.188zM26.434 10.07c1.082.016 2.242.18 3.273.48 1.031.305 1.941.747 2.531 1.212.528.414.684.777.727 1.11-.098.023-.176.054-.434.046-.746-.02-1.968-.273-3.289-.629-1.32-.355-2.75-.797-4.055-1.156-.824-.227-1.457-.293-2.144-.41l.566-.23c.73-.298 1.739-.438 2.825-.423zm-8.914 7.403c1.351-.008 2.914.332 4.316.855 1.402.527 2.644 1.25 3.352 1.879.355.316.558.613.613.746.02.043.023.031.027.035-.078.102-.2.188-.488.25-.3.067-.75.078-1.293.016-1.086-.117-2.516-.512-4.004-.973-1.488-.457-3.035-.98-4.441-1.351-.457-.121-.868-.192-1.29-.274l.114-.125c.668-.703 1.746-1.05 3.094-1.058zM9.672 26.77c1.183-.036 2.476.16 3.64.511 1.168.352 2.192.848 2.762 1.262.04.027.028.031.063.059-.25.082-.465.203-1.2.195-1.027-.016-2.347-.2-3.636-.426-1.285-.23-2.551-.5-3.535-.683-.336-.067-.594-.102-.868-.141.707-.485 1.676-.742 2.774-.777z"/>
                    </svg>
                    <span className="font-semibold text-xl tracking-tight">Bakery ERP</span>
                </div>
                <div className="block lg:hidden">
                    <button
                        className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        {
                            links.map((item, index) => (
                                <a href={item.path} key={index}
                                   className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                    {item.title}
                                </a>
                            ))
                        }
                    </div>
                    <div>
                        <a href="#"
                           className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
                    </div>
                </div>
            </nav>
        </header>
        <div className={"container mx-auto p-4 min-h-full"}>
            {children}
        </div>
        <footer className={"bg-teal-500 p-6"} style={{textAlign: "center"}}>
            All rights reserved 2023
        </footer>
        </body>
        </html>
    )
}
