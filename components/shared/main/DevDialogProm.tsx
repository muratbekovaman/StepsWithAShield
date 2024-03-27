'use client'
import { Copy } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
 
 function DevDialogProm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <div  className="flex items-center gap-3 bg-white/10  max-w-sm p-2 backdrop-blur-sm border border-gray-200 rounded-lg shadow hover:bg-white/30">
        <Image src="/assets/icons/web.png" alt='' width={70} height={50}/>
      <p className="font-normal text-white"> Информационный портал </p>
      </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Кибер Новости, Блог, Курсы</DialogTitle>
          <DialogDescription>
            Данные функций будут разработаны вне ITEENS 2024
            Связаться со мной можно по этой ссылке
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
            </Label>
            <Input
              id="link"
              defaultValue="https://www.instagram.com/aman_ioy/"
              readOnly
            />
          </div>
          <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
               Закрыть
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export default DevDialogProm