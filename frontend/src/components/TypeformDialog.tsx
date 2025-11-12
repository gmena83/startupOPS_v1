import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface TypeformDialogProps {
  isOpen: boolean;
  onClose: () => void;
  typeformUrl: string;
  automationName: string;
  automationDescription: string;
  automationBenefit: string;
}

export const TypeformDialog = ({
  isOpen,
  onClose,
  typeformUrl,
  automationName,
  automationDescription,
  automationBenefit,
}: TypeformDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] sm:w-full h-[90vh] sm:h-[85vh] p-0 gap-0 flex flex-col">
        <DialogHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 border-b">
          <DialogTitle className="text-xl sm:text-2xl mb-2">{automationName}</DialogTitle>
          <div className="space-y-2 text-left">
            <p className="text-xs sm:text-sm text-muted-foreground">
              {automationDescription}
            </p>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-2 sm:p-3">
              <p className="text-xs sm:text-sm font-medium text-accent-foreground">
                {automationBenefit}
              </p>
            </div>
          </div>
        </DialogHeader>
        <div className="flex-1 overflow-hidden">
          <iframe
            src={typeformUrl}
            className="w-full h-full"
            frameBorder="0"
            allow="camera; microphone; autoplay; encrypted-media;"
            title={`${automationName} Form`}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
