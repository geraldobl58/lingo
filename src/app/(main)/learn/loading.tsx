import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Loader2 className="size-6 text-muted-foreground animate-spin" />
    </div>
  );
};

export default Loading;
