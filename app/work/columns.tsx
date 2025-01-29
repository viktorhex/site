"use client"

import { ColumnDef } from "@tanstack/react-table"

export type ProjectItem = {
  title: string
  tools: string,
  startDate: string,
  endDate: string
}

function getFormattedYear(row: { getValue: (id: string) => string}, accessor: string){
    const val: string = row.getValue(accessor);
    const formattedYear = new Date(val).getFullYear();
    return formattedYear
}

export const projectItemColumns: ColumnDef<ProjectItem>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "tools",
    header: "Tools",
  },
  {
    accessorKey: "startDate",
    header: "Start",
    cell: ({row}) => getFormattedYear(row, "startDate")
  },
  {
    accessorKey: "endDate",
    header: () => <div className="text-right">End</div>,
    cell: ({row}) => getFormattedYear(row, "endDate")
  }
]

export type WorkItem = {
  title: string
  company: string | null
  startDate: string
  endDate: string | null
}

export const workItemColumns: ColumnDef<WorkItem>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "company",
    header: "Company",
  },
  {
    accessorKey: "startDate",
    header: "Start",
  },
  {
    accessorKey: "endDate",
    header: "End",
  }
]

