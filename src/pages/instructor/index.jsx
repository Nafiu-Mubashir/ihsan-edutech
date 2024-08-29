import { ChatCircleText } from "@phosphor-icons/react";

const Instructors = () => {
  const instructor = [
    {
      icon: <ChatCircleText size={20} />,
      name: 'Abdulfatah Ibrahim',
      courses: ['Tawheed', 'Aqeedah'],
    },
     {
      icon: <ChatCircleText size={20} />,
      name: 'Abdulfatah Ibrahim',
      courses: ['Tawheed', 'Aqeedah'],
    },
     {
      icon: <ChatCircleText size={20} />,
      name: 'Abdulfatah Ibrahim',
      courses: ['Tawheed', 'Aqeedah'],
    },
  ]
  return (
    <div className="grid grid-cols-3 mx-auto container p-3 gap-4 w-[90%">
    {
      instructor.flatMap(({icon, name, courses}, id) => (
        <div className="bg-ihsan flex justify-between items-center w-[20rem] h-[6rem] p-3 text-white rounded-lg" key={id}>
          <div>
            <div className="flex gap-2 font-[400]">Name: <p className="font-[600]">{name}</p></div>
            <div className="flex gap-2 font-[400]">Corses: {
              courses.map((item, id) => (
                <p className="font-[600]" key={id}>{item}</p>
              ))
            }</div>
          </div>
          {icon}
        </div>
      ))
    }
    </div>
  )
}

export default Instructors