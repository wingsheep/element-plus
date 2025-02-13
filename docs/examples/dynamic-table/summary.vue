<template>
  <ElDynamicTable
    :columns="columns"
    :data="tableData"
    border
    show-summary
    :pagination="false"
  />

  <ElDynamicTable
    style="width: 100%; margin-top: 20px"
    :columns="columns"
    :data="tableData"
    border
    height="200"
    show-summary
    :summary-method="getSummaries"
    :pagination="false"
  />
</template>

<script lang="ts" setup>
import { reactive } from '@vue/runtime-core'
import { ElDynamicTable } from '@element-plus/components/dynamic-table'
import type { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults'

interface Product {
  id: string
  name: string
  amount1: string
  amount2: string
  amount3: number
}
const columns = [
  {
    label: 'ID',
    prop: 'id',
    width: 180,
  },
  {
    label: 'Name',
    prop: 'name',
  },
  {
    label: 'Cost 1 ($)',
    prop: 'amount1',
  },
  {
    label: 'Cost 2 ($)',
    prop: 'amount2',
  },
  {
    label: 'Cost 3 ($)',
    prop: 'amount3',
  },
]

interface SummaryMethodProps<T = Product> {
  columns: TableColumnCtx<T>[]
  data: T[]
}

const getSummaries = (param: any) => {
  const { columns, data } = param
  const sums: string[] = []
  columns.forEach((column, index) => {
    if (index === 0) {
      sums[index] = 'Total Cost'
      return
    }
    const values = data.map((item) => Number(item[column.property]))
    if (!values.every((value) => Number.isNaN(value))) {
      sums[index] = `$ ${values.reduce((prev, curr) => {
        const value = Number(curr)
        if (!Number.isNaN(value)) {
          return prev + curr
        } else {
          return prev
        }
      }, 0)}`
    } else {
      sums[index] = 'N/A'
    }
  })

  return sums
}

const tableData: Product[] = [
  {
    id: '12987122',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
  },
  {
    id: '12987123',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 12,
  },
  {
    id: '12987124',
    name: 'Tom',
    amount1: '324',
    amount2: '1.9',
    amount3: 9,
  },
  {
    id: '12987124',
    name: 'Tom',
    amount1: '324',
    amount2: '1.9',
    amount3: 9,
  },
  {
    id: '12987124',
    name: 'Tom',
    amount1: '324',
    amount2: '1.9',
    amount3: 9,
  },
]
</script>

<style lang="scss" scoped></style>
