import { Card, Typography, Tooltip, IconButton } from "@material-tailwind/react";
import { PencilIcon, UserPlusIcon, TrashIcon } from "@heroicons/react/24/solid";




const TABLE_HEAD = ["Name", "Job", "Employed", ""];

export default function MyTable({ tableRows, handleDeleteRow }) {
  return (
    <>

      <Card className="overflow-scroll h-full w-full">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {
              tableRows.map((tableRows, idx) => {

                return (
                  <tr key={idx}>
                    <td >
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {tableRows.name}
                      </Typography>
                    </td>
                    <td >
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {tableRows.job}
                      </Typography>
                    </td>
                    <td >
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {tableRows.date}
                      </Typography>
                    </td>
                    <td >

                      <Tooltip content="Edit User">
                        <IconButton variant="text" color="blue-gray">
                          <PencilIcon className="h-5 w-5" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Delete User">
                        <IconButton variant="text" color="blue-gray" onClick={()=>handleDeleteRow(idx)}>
                          <TrashIcon className="h-5 w-5" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                  )

              })
            }
          </tbody>
        </table>
      </Card>
    </>
  );
}