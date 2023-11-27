
export default function ChatHistoryList() {
  return (
    <ul className="font-pjs py-[16px] flex flex-col gap-y-[6px]">
    </ul>
  )
}


export function RecentHistoryItem(){

  return (
     <li className="bg-[#F2F7FF] rounded-[8px] py-[4px] flex flex-col items-start gap-y-[6px]">
        <h4 className="pl-[8px] text-[0.875rem] text-secondary-medium">
          Today
        </h4>
        <button className="p-[8px] rounded-[8px] text-secondary-light text-[0.68rem] text-center font-normal">
          Latest advancements in agricultural robotics
        </button>
      </li>
  )
}

export function oldHistoryItem(){

  return (
  <li className="bg-[#F2F7FF] rounded-[8px] py-[4px] flex flex-col items-start gap-y-[6px] opacity-50">
        <h4 className="pl-[8px] text-[0.875rem] text-secondary-medium">
          Yesterday
        </h4>
        <button className="p-[8px] rounded-[8px] text-secondary-light text-[0.68rem] text-center font-normal">
          Latest advancements in agricultural robotics
        </button>
        <button className="p-[8px] rounded-[8px] text-secondary-light text-[0.68rem] text-center font-normal">
          Latest advancements in agricultural robotics
        </button>
      </li>
  )
}
export function olderHistoryItem(){

  return (
  <li className="bg-[#F2F7FF] rounded-[8px] py-[4px] flex flex-col items-start gap-y-[6px]">
        <h4 className="pl-[8px] text-[0.875rem] text-secondary-medium">
          4 days ago
        </h4>
        <button className="p-[8px]  opacity-50 rounded-[8px] text-secondary-light text-[0.68rem] text-center font-normal">
          Latest advancements in agricultural robotics
        </button>
        <button className="p-[8px]  opacity-50 rounded-[8px] text-secondary-light text-[0.68rem] text-center font-normal">
          Latest advancements in agricultural robotics
        </button>
        <button className="p-[8px]  opacity-50 rounded-[8px] text-secondary-light text-[0.68rem] text-center font-normal">
          Latest advancements in agricultural robotics
        </button>
        <button className="p-[8px]  opacity-50 rounded-[8px] text-secondary-light text-[0.68rem] text-center font-normal">
          Latest advancements in agricultural robotics
        </button>
        <button className="p-[8px] opacity-50 hover:cursor-pointer w-fit text-accent-primary font-[500] text-[0.75rem] hover:opacity-100 transition-all">
          View all history
        </button>
      </li>
  )
}