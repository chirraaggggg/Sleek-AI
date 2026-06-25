"use client"
import React, { useState } from 'react';
import { supabase } from '@/lib/supabase-client';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export const AuthModal = ({ isOpen, onClose, defaultMode = 'signin' }: { isOpen: boolean, onClose: () => void, defaultMode?: 'signin' | 'signup' }) => {
  const [mode, setMode] = useState<'signin' | 'signup'>(defaultMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (mode === 'signup') {
        const { error: signUpError } = await supabase.auth.signUp({ email, password });
        if (signUpError) throw signUpError;
        onClose();
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
        if (signInError) throw signInError;
        onClose();
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{mode === 'signup' ? 'Create an account' : 'Sign in'}</DialogTitle>
          <DialogDescription>
            {mode === 'signup' ? 'Enter your details below to create your account' : 'Enter your email below to login to your account'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Loading...' : mode === 'signup' ? 'Sign Up' : 'Sign In'}
          </Button>
          <p className="text-sm text-center text-muted-foreground mt-4 cursor-pointer" onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}>
            {mode === 'signin' ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
