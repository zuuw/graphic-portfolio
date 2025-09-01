// import Image from 'next/image'

// function HeaderAnimated() {
//   return (
//     <div className="relative w-[800px] h-[600px]">
//   <img
//     src="/HEADER_Rectangle-1.png"
//     className="absolute top-0 left-0"
//     alt=""
//   />
//   <img
//     src="/HEADER_Layer-1.png"
//     className="absolute top-[100px] left-[100px]"
//     alt=""
//   />
//   <img
//     src="/HEADER_Layer-2.png"
//     className="absolute top-[120px] left-[200px]"
//     alt=""
//   />
// </div>


//   )
// }

// export default HeaderAnimated

import Image from 'next/image'

function HeaderAnimated() {
  return (
    <div className="relative top-96">
  <img
    src="/HEADER_Rectangle-1.png"
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    alt=""
  />
  <img
    src="/HEADER_Layer-1.png"
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    alt=""
  />
  <img
    src="/HEADER_Layer-2.png"
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    alt=""
  />
</div>

  )
}

export default HeaderAnimated

// top-1/2 left-1/2
// top-1/2 left-1/2
// top-1/2 left-1/2
