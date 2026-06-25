"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase-client';

type AuthContextType = {
  isLoaded: boolean;
  isSignedIn: boolean;
  user: any | null;
};

const AuthContext = createContext<AuthContextType>({
  isLoaded: false,
  isSignedIn: false,
  user: null,
});

export const SupabaseProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const initSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setIsLoaded(true);
    };
    initSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      if (event === 'SIGNED_IN' || event === 'SIGNED_OUT') {
         setIsLoaded(true);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ isLoaded, isSignedIn: !!user, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
