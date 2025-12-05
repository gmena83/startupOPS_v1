import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const DesignSystem = () => {
  return (
    <div className="container mx-auto py-10 space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Vibecoding Design System
        </h1>
        <p className="text-muted-foreground text-lg">
          A visual showcase of our core components and tokens.
        </p>
      </div>

      <Separator />

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="cta">CTA Variant</Button>
          <Button variant="hero">Hero Variant</Button>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Badges</h2>
        <div className="flex flex-wrap gap-4">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Cards & Inputs</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Authentication</CardTitle>
              <CardDescription>
                Enter your credentials to access the vibe.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="hello@vibecoding.dev" />
              </div>
              <Button className="w-full">Sign In</Button>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle>Feature Highlight</CardTitle>
              <CardDescription>
                This card uses a muted background.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                The quick brown fox jumps over the lazy dog. Vibecoding is about
                speed, aesthetics, and flow.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default DesignSystem;
