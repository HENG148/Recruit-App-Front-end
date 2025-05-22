import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const SignUp = () => {
  return (
    <>
      <div className="h-full flex items-center justify-center">
        <Card className="md:h-auto w-[80%] sm:w-[420] p-4 sm:p-8">
          <CardHeader>
            <CardTitle className="text-center">
              Sign Up
            </CardTitle>
            <CardDescription>

            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </>
  )
}

export default SignUp;