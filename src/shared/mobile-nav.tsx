'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { Button } from '@/components//ui/button';
import { Home, CreditCard, HelpCircle, LogIn, UserPlus } from 'lucide-react';

export default function MobileNav() {
  return (
    <nav className="block md:hidden">
      <NavigationMenu viewport={false} className="bottom-0 w-full border-t">
        <NavigationMenuList className="flex-between">
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/">
                <Home />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/subscription">
                <CreditCard />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/tutorial">
                <HelpCircle />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <>
            <Link href="/auth/login">
              <Button variant="ghost">
                <LogIn />
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button variant="ghost">
                <UserPlus />
              </Button>
            </Link>
          </>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
