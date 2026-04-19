export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        {/* Animated Logo */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-xl bg-accent/20 animate-ping" />
          <div className="relative w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
            <span className="text-white font-bold text-lg">R</span>
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-sm text-text-secondary animate-pulse">Loading...</p>

        {/* Skeleton Bars */}
        <div className="w-64 space-y-3 mt-8">
          <div className="h-4 skeleton rounded-lg w-full" />
          <div className="h-4 skeleton rounded-lg w-3/4" />
          <div className="h-4 skeleton rounded-lg w-1/2" />
        </div>
      </div>
    </div>
  );
}
