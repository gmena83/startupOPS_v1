import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Success = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    // Simulate verification delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-accent mx-auto mb-4" />
          <p className="text-lg text-muted-foreground">
            Verifying your subscription...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle px-4">
      <div className="max-w-md w-full bg-card border border-border rounded-2xl p-8 text-center shadow-large animate-fade-in-up">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-500" />
        </div>

        <h1 className="text-3xl font-bold mb-4">Welcome to StartupOPS! 🎉</h1>

        <p className="text-lg text-muted-foreground mb-6">
          Your subscription has been successfully activated. You now have access
          to all your automations.
        </p>

        <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-6">
          <p className="text-sm font-medium text-accent-foreground">
            ✨ Your 14-day free trial has started!
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            You won't be charged until{" "}
            {new Date(
              Date.now() + 14 * 24 * 60 * 60 * 1000,
            ).toLocaleDateString()}
          </p>
        </div>

        {sessionId && (
          <p className="text-xs text-muted-foreground mb-6">
            Session ID: {sessionId}
          </p>
        )}

        <div className="space-y-3">
          <Button asChild className="w-full" size="lg" variant="hero">
            <Link to="/#automations">Start Using Automations</Link>
          </Button>

          <Button asChild className="w-full" size="lg" variant="outline">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>

        <p className="text-xs text-muted-foreground mt-6">
          Check your email for your receipt and getting started guide.
        </p>
      </div>
    </div>
  );
};
