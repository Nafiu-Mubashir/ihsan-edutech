import { User, BookBookmark, BookOpenText } from "@phosphor-icons/react";
import Navbar from "../../components/navbar";
import TimeChart from "./components/timeChart";
import PerformanceChart from "./components/performanceChart";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'



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

  const data = [
    {
      name: 'AbdulWahab Tolani',
      percentage: '90%',
    },
    {
      name: 'AbdulWahab Tolani',
      percentage: '90%',
    },
    {
      name: 'AbdulWahab Tolani',
      percentage: '90%',
    },
    {
      name: 'AbdulWahab Tolani',
      percentage: '90%',
    },
  ]
  return (
    <>
      <Navbar />

      <div className="p-3 w-[100%] space-y-3">
        <div className="flex justify-between gap-1">
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

        <div className="grid grid-cols-2 gap-4 h-[67vh] overflow-hidden">
          <div className="grid grid-rows-2">
            <div className="w-full border h-[297px] p-2 rounded-md bg-ihsan">
              <TimeChart />
            </div>
            <div className="w-full border h-[267px] overflow-auto p-2 rounded-md bg-ihsan mt-[-25px] space-y-3">
              <div className="text-white">
                <h1 className="font-bold">Lead board</h1>
                <p className="text-sm">This is ranked based on the performance of student in the middle class</p>
              </div>
              <TableContainer className='!rounded-md !w-[full] h-1/2 !text-white !overflow-auto'>
                <Table variant='simple' size={'md'}>
                  <Thead className='bg-glass text-white'>
                    <Tr>
                      <Th>Name</Th>
                      <Th>%</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data.map(({ name, percentage }, id) => (
                      <Tr key={id} className='text-center'>
                        <Td>{name}</Td>
                        <Td>{percentage}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-2">
            <div className="w-full border h-[333px] p-2 rounded-md bg-ihsan">
              <PerformanceChart />
            </div>
            <div className="w-full border h-[267px] overflow-auto p-2 rounded-md bg-ihsan mb-5">
              <div className="text-white">
                <h1 className="font-bold">Badge</h1>
                <p className="text-sm">View all badge earned</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard