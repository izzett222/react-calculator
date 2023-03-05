export default function Button({children, bg, color, large, onClick}) {
    return <button onClick={onClick} className={`flex items-center justify-center w-full border border-gray-600 ${color} ${bg} ${large ? 'col-span-2 aspect-[initial]' : 'aspect-square'}`}>{children}</button>
}