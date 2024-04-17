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



export function Poetry_1() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Darkness</CardTitle>
        <CardDescription>Poetry - Medium</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
            <img src="./write/darkness.png" alt="Darkness" /> <br />
                Tags
                <Label htmlFor="name"><br /> forbidden_love;<br /> 
                inner_darkness; <br /> 
                twisted_connection; <br /> 
                moral_ambiguity; <br /> 
                psychological_intensity</Label>

            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <a href="https://medium.com/@pandeakshat/darkness-81b310fc3d87" target="_blank"> <Button>Link to Poem</Button></a>
      </CardFooter>
    </Card>
  )
}


export function Odyssey_1() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>PreFace</CardTitle>
        <CardDescription>Odyssey - Medium</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
            <img src="./write/preface.webp" alt="Preface" /> <br />
                Tags
                <Label htmlFor="name"><br /> autobiography;<br /> 
                self_improvement; <br /> 
                personal_project; <br /> 
                gamification; <br /> 
                creative_writing</Label>

            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <a href="https://medium.com/@pandeakshat/a-new-journey-odyssey-7d591afc95ab" target="_blank"> <Button>Link to Odyssey</Button></a>
      </CardFooter>
    </Card>
  )
}


export function Odyssey_2() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>The Beginning (Poem)</CardTitle>
        <CardDescription>Odyssey - Medium</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
            <img src="./write/odyssey_thebeginning.webp" alt="Odyssey - The Beginning" /> <br />
                Tags
                <Label htmlFor="name"><br /> introspection;<br /> 
                self_acceptance; <br /> 
                personal_growth; <br /> 
                solitude; <br /> 
                figurative_language</Label>

            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <a href="https://medium.com/@pandeakshat/odyssey-the-beginning-052dbe723967" target="_blank"> <Button>Link to Odyssey</Button></a>
      </CardFooter>
    </Card>
  )
}

export function Odyssey_3() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Chapter 1 - Odyssey</CardTitle>
        <CardDescription>Odyssey - Medium</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
            <img src="./write/chapter-1.png" alt="Chapter - 1 Odyssey" /> <br />
                Tags
                <Label htmlFor="name"><br /> raw;<br /> 
                self_reflection; <br /> 
                lost_love; <br /> 
                existential; <br /> 
                new_beginnings</Label>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <a href="https://medium.com/@pandeakshat/odyssey-chapter-1-the-intro-d177feffe4ae" target="_blank"> <Button>Link to Odyssey</Button></a>
      </CardFooter>
    </Card>
  )
}



export function Newsletter_1() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Welcome Newsletter</CardTitle>
        <CardDescription>Newsletter - Medium</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
            <img src="./write/welcomenewsletter.png" alt="Welcome Newsletter" /> <br />
                Tags
                <Label htmlFor="name"><br /> newsletter;<br /> 
                experiment; <br /> 
                experience; <br /> 
                expertise; <br /> 
                express</Label>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <a href="https://exp-er.beehiiv.com/p/welcome-to-new-exp-er" target="_blank"> <Button>Link to Newsletter</Button></a>
      </CardFooter>
    </Card>
  )
}
