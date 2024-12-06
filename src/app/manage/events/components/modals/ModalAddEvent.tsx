import useModelStore from "@/lib/stores/useModelStore"
import { Button } from "@/lib/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/lib/ui/dialog"
import { Input } from "@/lib/ui/input"

interface TProps {
    closeModel: () => void
}

const ModalBody: React.FC<TProps> = ({ closeModel }) => {

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        console.log("Working...")
        closeModel()
    }

    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div>
                <Input id="picture" type="file" placeholder="Add Banner" />
            </div>
            <div className="flex gap-2">
                <Input placeholder="Title" />
                {/* to do :  add day picker , day js  or same  kind feature for adding date . */}
                <Input placeholder="Event Time" />
            </div>
            <div className="flex gap-2">
                <Input placeholder="Add Location" />
                <Input placeholder="Organizer" />
            </div>
            <div >
                <label htmlFor="description" className="text-base text-primary">Description</label>
                <Input className="w-full h-[100px] placeholder:" />
            </div>
            <div className="flex items-center justify-end gap-2">
                <Button type="button" className=" w-[100px] text-white bg-error" onClick={closeModel}>Cancel</Button>
                <Button type="submit" className="w-[100px] text-white bg-secondary">Add Event</Button>
            </div>
        </form>
    )
}

const ModalAddEvent = () => {

    const { closeModel, modalName } = useModelStore()

    return (
        <Dialog open={modalName === "add-event"} onOpenChange={closeModel}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                </DialogHeader>
                <DialogDescription></DialogDescription>
                <ModalBody closeModel={closeModel} />
            </DialogContent>
        </Dialog>

    )
}

export default ModalAddEvent