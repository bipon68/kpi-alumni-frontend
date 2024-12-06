import useModelStore from "@/lib/stores/useModelStore"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/lib/ui/dialog"

const ModalBody = () => {
    return (
        <div>ModalBody</div>
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
                <ModalBody />
            </DialogContent>
        </Dialog>

    )
}

export default ModalAddEvent