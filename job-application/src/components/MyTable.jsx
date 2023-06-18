'use client';

import { Table } from 'flowbite-react';

function MyTable() {
  return (
    <Table hoverable >
      <Table.Head >
        <Table.HeadCell>
          Name
        </Table.HeadCell>
        <Table.HeadCell>
          Color
        </Table.HeadCell>
        <Table.HeadCell>
          Category
        </Table.HeadCell>
        <Table.HeadCell>
          Actions
        </Table.HeadCell>
       
      </Table.Head>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 ">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Apple MacBook Pro 17"
          </Table.Cell>
          <Table.Cell>
            Sliver
          </Table.Cell>
          <Table.Cell>
            Laptop
          </Table.Cell>
          <Table.Cell>
            <a
              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              href="/tables"
            > Edit </a>
            <a
              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              href="/tables"
            > Delete </a>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}
export default MyTable