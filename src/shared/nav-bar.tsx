import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NavBar() {
  return (
    <nav className="hidden md:block">
      <NavigationMenu viewport={false} className="flex-between top-0 border-b">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/" className="bg-transparent hover:bg-white">
                <h2>
                  PEER<span>FECTION</span>
                </h2>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/subscription">Subscription</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/tutorial">How It Works</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        <div className="flex-center gap-1">
          <Link href="/auth/login">
            <Button variant="ghost">Log In</Button>
          </Link>
          <Link href="/auth/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </NavigationMenu>
    </nav>
  );
}
