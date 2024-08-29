import { User, BookBookmark, BookOpenText } from "@phosphor-icons/react";



const Dashboard = () => {
  const overviewCard = [
    {
      icon: <User size={32} weight="fill" />,
      title: 'Class Moderator',
      subTtile: 'Abdulfatah Ibrahim',
    },
    {
      icon: <BookBookmark size={32} weight="fill" />,
      title: 'Level',
      subTtile: 'Middle Class',
    },
    {
      icon: <BookOpenText size={32} weight="fill" />,
      title: 'Total Module',
      subTtile: '50 Modules',
    },
    {
      icon: <BookOpenText size={32} weight="fill" />,
      title: 'Module Taken',
      subTtile: '20 Modules',
    },
    {
      icon: <BookOpenText size={32} weight="fill" />,
      title: 'Module Left',
      subTtile: '30 Module',
    },
  ]
  return (
    <div className="p-3 w-full border overflow-x-auto">
      <div className="flex gap-2 ">
        {
          overviewCard.map(({ icon, title, subTtile }, id) => (
            <div className="flex gap-1 items-center bg-ihsan p-3 w-[13.125rem] h-[5rem] rounded-lg text-white" key={id}>
              <div className="bg-black h-[3rem] w-[3rem] rounded-full flex items-center justify-center">{icon}</div>
              <div>
                <p className="text=[0.75rem] font-[400]">{title}</p>
                <h2 className="text-[0.875rem] font-[600]">{subTtile}</h2>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Dashboard