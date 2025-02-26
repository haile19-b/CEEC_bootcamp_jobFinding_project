import './Jobs.css';
import { CiBookmark } from "react-icons/ci";
import { FiShare2 } from "react-icons/fi";
import { FaBookmark } from "react-icons/fa6";

function Jobs({handleDes_page,location,title,company,salary,logo,description,type,isBookMarked,handle_clicked,id}) {
  return (
    <div>
       <div onClick={handleDes_page} id="jop_1" className=' rounded-[10px]'>
          <div className='flex justify-between'>
          <div className='flex'>
          <div><img className='h-[53px] w-[53px]' src={logo} /></div>
          <div>
            <p className='font-[600] text-[32px]'>{title}</p>
            <p>{company}</p>
            <div className='flex'><p>{type}</p><p>{salary}</p></div>
            <div><p>{location}</p></div>
          </div>
          </div>
          <div className="icons flex gap-2">
            <span>
              {
                isBookMarked ?  <FaBookmark className='w-[18px] h-[14.25px] p-0 m-0' onClick={(e)=>{handle_clicked(id,e)}}/>:<CiBookmark className='w-[18px] h-[23.25px]' onClick={(e)=>{handle_clicked(id,e)}}/>
               
            }
              </span>
            <span><FiShare2 onClick={(e) => e.stopPropagation()} className='w-[26.03px] h-[28.03px]'/></span>
          </div>
          </div>
          <div>{description}</div>
        </div>
    </div>
  )
}

export default Jobs
