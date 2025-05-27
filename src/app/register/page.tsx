'use client'

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useState } from "react";

import { FaGithub, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [pending, setPending] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })
  }
  return (
    <>
      <div className="h-full flex items-center justify-center">
        <Card className="md:h-auto w-[80%] sm:w-[420] p-4 sm:p-8">
          <CardHeader>
            <CardTitle className="text-center">
              Sign Up
            </CardTitle>
            <CardDescription>
              Use email or service, to create account
            </CardDescription>
          </CardHeader>

          <CardContent className="px-2 sm:px-6">
            <form onSubmit={handleSubmit} action="" className="space-y-3">
              <Input
                type="text"
                disabled={pending}
                placeholder="Full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />

              <Input
                type="text"
                disabled={pending}
                placeholder="email"
                value={form.email}
                onChange={(e) => setForm({...form, email:e.target.value})}
                required
              />

              <Input
                type="Password"
                disabled={pending}
                placeholder="Password"
                value={form.password}
                onChange={(e) => setForm({...form, password:e.target.value})}
                required
              />

              <Input
                type="Password"
                disabled={false}
                placeholder="Confirm"
                value={form.confirmPassword}
                onChange={(e) => setForm({...form, confirmPassword:e.target.value})}
                required
              />
              <Button 
                className="w-full"
                size="lg"
                disabled={pending}
              >
                continue
              </Button>
            </form>
            <Separator />
            <div className="flex my-2 justify-evenly mx-auto items-center">
              <Button 
                disabled={pending}
                onClick={() => { }}
                variant="outline"
                size="lg"
                className="bg-slate-300 hover:bg-slate-400 hover:scale-110"
              >
                <FaGoogle className="size-8 left-2.5 top-2.5" />
              </Button>

              <Button 
                disabled={pending}
                onClick={() => { }}
                variant="outline"
                size="lg"
                className="bg-slate-300 hover:bg-slate-400 hover:scale-110"
              >
                <FaGithub className="size-8 left-2.5 top-2.5" />
              </Button>
            </div>
            <p className="text-center text-sm mt-2 text-muted-foreground">
              Already have an account?
              <Link
                href="sign-in"
                className="text-sky-700 ml-4 hover:underline cursor-pointer"
              >
                Sign in
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default SignUp;