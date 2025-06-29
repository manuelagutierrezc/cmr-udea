import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ColumnDef } from "@tanstack/react-table"
import { DataCard } from "@/components/data-card"

interface DataCardDialogProps<TData, TValue> {
    open: boolean
    onOpenChange: (open: boolean) => void
    title?: string
    cardTitle?: string
    data: TData | TData[]
    columns: ColumnDef<TData, TValue>[]
}

export function DataCardDialog<TData, TValue>({
    open,
    onOpenChange,
    title,
    cardTitle,
    data,
    columns,
}: DataCardDialogProps<TData, TValue>) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-4xl w-full">
            <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            </DialogHeader>
            <div className="mt-4 max-h-[75vh] overflow-y-auto pr-2">
                <DataCard title={cardTitle} data={data} columns={columns} />
            </div>
        </DialogContent>
        </Dialog>
    )
}