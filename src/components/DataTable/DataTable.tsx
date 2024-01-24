import React, { HTMLAttributes, HTMLProps } from 'react';
import ReactDOM from 'react-dom/client';

import { makeData, Person } from './mainData';

import {
  Column,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  Table,
  useReactTable,
} from '@tanstack/react-table';

function DataTable() {
  const rerender = React.useReducer(() => ({}), {})[1];

  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState('');

  const columns = React.useMemo<ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'uid',
        header: 'ID',
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'date',
        header: 'Txn Date',
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'txnId',
        header: 'Txn ID',
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'username',
        header: 'Username',
        footer: (props) => props.column.id,
      },
      // {
      //   accessorKey: 'email',
      //   header: 'Email',
      //   footer: (props) => props.column.id,
      // },
      {
        accessorKey: 'planName',
        header: 'Plan Name',
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'planAmount',
        header: 'Plan Amount',
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'planMode',
        header: 'Payment Mode',
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        footer: (props) => props.column.id,
      },
    ],
    [],
  );

  const [data, setData] = React.useState(() => makeData(20));
  const refreshData = () => setData(() => makeData(20));

  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection,
    },
    enableRowSelection: true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });

  return (
    <div className="w-full rounded-sm border border-stroke bg-white m-3 p-5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className=" flex-row flex justify-between">
        <h4 className="text-title-sm dark:text-white">Transaction History</h4>
        <input
          value={globalFilter ?? ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="p-2 font-lg shadow border border-block border-gray-100 dark:border-black-100  px-10 dark:bg-black"
          placeholder="Search here..."
        />
      </div>
      <div className="h-2 " />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-7">
        <table className="w-full text-sm  divide-y divide-gray-200 dark:divide-gray-700 ">
          <thead
            className="
            text-xs
            text-gray-700
            uppercase
            bg-gray-50
            dark:bg-black
            dark:text-gray-400"
          >
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      scope="col"
                      className="px-6 py-7 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      {header.isPlaceholder ? null : (
                        <>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                          {/* {header.column.getCanFilter() ? (
                            <div>
                              <Filter column={header.column} table={table} />
                            </div>
                          ) : null} */}
                        </>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <tr
                  key={row.id}
                  className="odd:bg-black-light even:bg-gray-light dark:odd:bg-slate-900 dark:even:bg-slate-800"
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id} className="px-6 py-4">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="h-2" />
      <div className="flex items-center gap-2">
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 50, 100].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <br />
    </div>
  );
}

function Filter({
  column,
  table,
}: {
  column: Column<any, any>;
  table: Table<any>;
}) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  return typeof firstValue === 'number' ? (
    <div className="flex space-x-2">
      <input
        type="number"
        value={((column.getFilterValue() as any)?.[0] ?? '') as string}
        onChange={(e) =>
          column.setFilterValue((old: any) => [e.target.value, old?.[1]])
        }
        placeholder={`Min`}
        className="w-full border shadow rounded p-1 dark:bg-boxdark"
      />
      {/* <input
        type="number"
        value={((column.getFilterValue() as any)?.[1] ?? '') as string}
        onChange={(e) =>
          column.setFilterValue((old: any) => [old?.[0], e.target.value])
        }
        placeholder={`Max`}
        className="w-24 border shadow rounded"
      /> */}
    </div>
  ) : (
    <input
      type="text"
      value={(column.getFilterValue() ?? '') as string}
      onChange={(e) => column.setFilterValue(e.target.value)}
      placeholder={`Search...`}
      className="w-full border shadow rounded p-1 dark:bg-boxdark"
    />
  );
}

export default DataTable;
