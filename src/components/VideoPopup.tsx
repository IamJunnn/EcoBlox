import { X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface VideoPopupProps {
  children: React.ReactNode;
  videoUrl: string;
  title?: string;
}

const VideoPopup = ({ children, videoUrl, title = "Sample Class" }: VideoPopupProps) => {
  // Extract Vimeo video ID from the URL
  const getVimeoEmbedUrl = (url: string) => {
    const videoId = url.split('/').pop();
    return `https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479`;
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-4xl w-[95vw] sm:w-[90vw] p-0 bg-black border-0 mx-2 sm:mx-4">
        <div className="relative">
          {/* Video Container */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 Aspect Ratio */ }}>
            <iframe
              src={getVimeoEmbedUrl(videoUrl)}
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={title}
            />
          </div>

          {/* Close Button */}
          <AlertDialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/70 text-white hover:bg-black/90 z-10 h-8 w-8 sm:h-10 sm:w-10"
            >
              <X className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </AlertDialogTrigger>

          {/* Mobile-friendly video title overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 rounded-b-lg sm:hidden">
            <p className="text-white text-sm font-medium">{title}</p>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default VideoPopup;