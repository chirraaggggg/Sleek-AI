"use client"
import React, { cloneElement, useState } from 'react';
import { useAuth, SupabaseProvider } from './auth-context';
import { AuthModal } from './auth-modal';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { supabase } from '@/lib/supabase-client';
import { useRouter } from 'next/navigation';

export { useAuth, SupabaseProvider };

export const SignedIn = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn } = useAuth();
  return isSignedIn ? <>{children}</> : null;
};

export const SignedOut = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn } = useAuth();
  return !isSignedIn ? <>{children}</> : null;
};

export const SignInButton = ({ children }: { children?: React.ReactElement }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {children ? (
        cloneElement(children as React.ReactElement<any>, { onClick: () => setIsOpen(true) })
      ) : (
        <Button onClick={() => setIsOpen(true)}>Sign in</Button>
      )}
      <AuthModal isOpen={isOpen} onClose={() => setIsOpen(false)} defaultMode="signin" />
    </>
  );
};

export const SignUpButton = ({ children }: { children?: React.ReactElement }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {children ? (
        cloneElement(children as React.ReactElement<any>, { onClick: () => setIsOpen(true) })
      ) : (
        <Button onClick={() => setIsOpen(true)}>Sign up</Button>
      )}
      <AuthModal isOpen={isOpen} onClose={() => setIsOpen(false)} defaultMode="signup" />
    </>
  );
};

type UserButtonProps = {
  mode?: string;
  afterSignOutUrl?: string;
  showProfile?: boolean;
};

export const UserButton = ({ afterSignOutUrl = '/' }: UserButtonProps) => {
  const { user } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push(afterSignOutUrl);
  };

  if (!user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="" alt={user.email || "User"} />
            <AvatarFallback>{user.email?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuItem className="flex-col items-start">
          <div className="text-sm font-medium">{user.email}</div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
