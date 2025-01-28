"use client"

import { ColumnDef } from "@tanstack/react-table"

export type WorkItem = {
  title: string
  company: string | null
  startDate: string
  endDate: string | null
}

export const columns: ColumnDef<WorkItem>[] = [
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

