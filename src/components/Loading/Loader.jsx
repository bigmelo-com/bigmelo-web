import LoaderIcon from "./LoaderIcon";

export default function Loader({ positionAbsolute = true }) {
  return (
    <div className={(positionAbsolute && "absolute ") + "bg-opacity-60 w-full h-full bg-secondary z-[5] flex justify-center items-center" }>
        <LoaderIcon />
    </div>
  )
}
