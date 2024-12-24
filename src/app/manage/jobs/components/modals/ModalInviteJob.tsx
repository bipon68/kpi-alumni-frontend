import React, { useState } from "react";
import { Button } from "@/lib/ui/button";
import { Input } from "@/lib/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/lib/ui/dialog";
import { sendInvitation } from "../table-comps/jobsApi"; // API service for invitation

interface ModalInviteJobProps {
  closeModal: () => void;
  job: {
    id: number;
    title: string;
    jobLink: string;
  };
}

const ModalInviteJob: React.FC<ModalInviteJobProps> = ({ closeModal, job }) => {
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSendInvite = async () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    setIsSending(true);

    try {
      await sendInvitation(job.id, email); // Call API
      alert(`Invitation sent to ${email}`);
      closeModal();
    } catch (error) {
      console.error("Failed to send invitation:", error);
      alert("Failed to send invitation. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(job.jobLink);
    alert("Job link copied to clipboard!");
  };

  return (
    <Dialog open={true} onOpenChange={closeModal}>
      <DialogContent className="p-6 space-y-4">
        {/* Dialog Header */}
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-800">
            Share Job Opportunity
          </DialogTitle>
        </DialogHeader>

        {/* Input Section */}
        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            Invite a candidate to apply for the job: <span className="font-medium">{job.title}</span>.
          </p>
          <Input
            type="email"
            placeholder="Enter recipient's email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-gray-300 focus:border-primary focus:ring-primary"
          />
        </div>

        {/* Button Actions */}
        <div className="flex justify-between items-center space-x-3">
          <Button
            className="flex-1 py-2 text-white bg-secondary hover:bg-secondary-dark"
            onClick={handleSendInvite}
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Invitation"}
          </Button>
          <Button
            className="flex-1 py-2 text-white bg-blue-500 hover:bg-blue-600"
            onClick={handleCopyLink}
          >
            Copy Job Link
          </Button>
          <Button
            className="flex-1 py-2 text-white bg-red-500 hover:bg-red-600"
            onClick={closeModal}
          >
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalInviteJob;
