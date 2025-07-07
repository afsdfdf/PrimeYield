export default function Loading() {
  return (
    <div className="min-h-screen cyber-grid flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 cyber-border rounded-full mx-auto flex items-center justify-center cyber-loading">
          <div className="w-8 h-8 bg-cyan-400 rounded-full cyber-pulse"></div>
        </div>
        <div className="cyber-text-primary text-xl font-light">Loading Platform...</div>
        <div className="cyber-text-muted">Initializing secure connection</div>
      </div>
    </div>
  )
}
