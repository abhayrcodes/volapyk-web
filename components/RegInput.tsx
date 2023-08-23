export default function RegularInput(props: any) {
    const placeholder = props.placeholder || "";
    const theme = props.background === "l" ? "border-slate-300 bg-transparent hover:bg-indigo-600/10" : "bg-slate-900 border-gray-600 placeholder-gray-400 text-white";
    const otheredits = props.otheredits || "";

    return (
        <input className={`transition ease-in-out hover:shadow-lg hover:shadow-indigo-600 block w-full p-4 pl-5 text-sm border-2 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${theme} ${otheredits}`} placeholder={placeholder}></input>
    )
}