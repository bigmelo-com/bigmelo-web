import Example from "./Example";

export default function Phone(example) {

  return (
    <>
        <div className="bg-phoneBody rounded-3xl min-h-[620px] min-w-[328px] max-w-[328px] overflow-hidden flex flex-col self-center">

            <div className="bg-button max-h-[72px] py-5 pl-6 flex items-center">
              <img className="w-[32px]" src="/public/profile-picture.svg" alt="profile-picture" />
              <h1 className="text-white pl-2">Bigmelo</h1>
            </div>

              <Example {...example} id={example.id} className='m-3 flex flex-col space-y-4 text-white content-end grow justify-end overflow-hidden max-h-[452px]' />

            <div className="bg-white min-h-[72px] flex justify-end pr-6">
              <img className="w-[24px]" src="/public/send.svg" alt="send-button" />
            </div>
            
        </div>
    </>
  )
}

