import { Card, Typography, Tooltip, IconButton } from "@material-tailwind/react";
import { PencilIcon, UserPlusIcon, TrashIcon } from "@heroicons/react/24/solid";
const TABLE_HEAD = ["Name", "Job", "Employed", ""];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",

  },
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",

  },

];

export default function Example() {
  return (
    <Card className="mx-auto  w-4/5 border rounded-2xl shadow-md  h-full">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className=" bg-gray-200 text-gray-800 p-4">
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
          {TABLE_ROWS.map(({ name, job, date }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {date}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Tooltip content="Edit User">
                    <IconButton variant="text" color="blue-gray">
                      <PencilIcon className="h-4 w-4" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip content="Delete User">
                    <IconButton>
                      <TrashIcon className="h-4 w-4" />
                    </IconButton>
                  </Tooltip>

                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}