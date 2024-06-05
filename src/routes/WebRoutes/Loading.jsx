import Base from '/src/components/Base/Base';
import Loader from '/src/components/Loading/Loader';

export default function Loading() {
  return (
    <Base showModal={false} >
      <div className='h-[70vh]'>
        <Loader positionAbsolute={false} />
      </div>
    </Base>
  )
}
