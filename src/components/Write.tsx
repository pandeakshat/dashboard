import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Article_1() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Mistakes as a programmer</CardTitle>
        <CardDescription>Article - Medium</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
            <img src="./write/mistakes_as_a_programmer.png" alt="Mistakes as a programmer" /> <br />
                Tags
                <Label htmlFor="name"><br /> coding_mistakes;<br /> 
programming_errors; <br /> 
beginner_coding; <br /> 
code_improvement; <br /> 
debugging_tips</Label>

            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <a href="https://medium.com/@pandeakshat/mistakes-as-a-programmer-4bffbc822b97" target="_blank"> <Button>Link to Article</Button></a>
      </CardFooter>
    </Card>
  )
}
