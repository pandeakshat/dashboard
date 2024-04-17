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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Project } from "@/components/Code"
import { Article_1 } from "@/components/Write"
import { buttonVariants } from '@/components/ui/button'





export function Dashboard() {
  return (
    <Tabs defaultValue="home" >
      <TabsList className="grid w-full grid-cols-7">
        <TabsTrigger value="home">Dashboard</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
        <TabsTrigger value="write">Write</TabsTrigger>
        <TabsTrigger value="read">Read</TabsTrigger>
        <TabsTrigger value="watch">Watch</TabsTrigger>
        <TabsTrigger value="finance">Finance</TabsTrigger>
        <TabsTrigger value="resume">Resume</TabsTrigger>
      </TabsList>
      <TabsContent value="home">
        <br />
        <h1 class="text-3xl text-center font-extrabold leading-tight tracking-tighter md:text-4xl">Welcome to the Dashboard</h1><br />
        <h2> A centralized structure for collection of everything that I will build.</h2>
        <br /> <br />
        <h2>  I am passionate about a lot of things. I love to code project in Python, Rust, and JavaScript and in the domains of Web Development, Blockchain, and Data Science. 
          <br /> 
            I also love to write! Articles and Poetry, plus my current project regarding Odyssey, and my newsletter, for which you can subscribe <a href="https://exp-er.beehiiv.com" target="_blank">here</a>. 
            <br /> 
              Moreover, I love to learn, read, watch, and share! Hence a reading list of the books, article, youtube videos, and podcasts that made me learn more and fascinated me about something I got to know. 
              <br /> 
                Just a few more, I don't watch a lot of things but I want to keep up with society so Anime and Manga for sure, and then some TV Shows and Movies, obviously with my reviews and opinions on the same. 
                <br /> 
                  Finally, except a resume for people who are interested in hiring me, there is a finance section, that includes my portfolio of currencies, stocks, crypto, commodities, and other assets that I own   </h2>
        <br />
        <br />
        <p> Make sure to check out my other projects </p>
        <br />

        <div class="flex gap-4">
          <a
            href="https://status.pandeakshat.com"
            target="_blank"
            rel="noreferrer"
            class={buttonVariants()}
          >
            Status Window
          </a>
          <a
            href="https://medium.com/@pandeakshat"
            target="_blank"
            rel="noreferrer"
            class={buttonVariants({ variant: 'outline' })}
          >
            Medium
          </a>
        </div>
      </TabsContent>
      <TabsContent value="code">
      <Tabs defaultValue="python">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="python">Python</TabsTrigger>
            <TabsTrigger value="data-science">Data Science</TabsTrigger>
            <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
            <TabsTrigger value="web-dev">Web Development</TabsTrigger>
            <TabsTrigger value="rust">Rust</TabsTrigger>
          </TabsList>
        </Tabs>

      </TabsContent>
      <TabsContent value="write">
        <Tabs defaultValue="article">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="article">Article</TabsTrigger>
            <TabsTrigger value="poetry">Poetry</TabsTrigger>
            <TabsTrigger value="odyssey">Odyssey</TabsTrigger>
            <TabsTrigger value="newsletter">Newsletter</TabsTrigger>
            <TabsTrigger value="quotes">Quotes</TabsTrigger>
          </TabsList>
          <TabsContent value="article">
            <Article_1 />
          </TabsContent>
          <TabsContent value="poetry">
            <Article_1 /> 
          </TabsContent>
          <TabsContent value="odyssey">
            <Article_1 />
          </TabsContent>
          <TabsContent value="newsletter">
            <Article_1 />
          </TabsContent>
          <TabsContent value="quotes">
            <Article_1 />
          </TabsContent>
        </Tabs>
      </TabsContent>
      <TabsContent value="read">
      <Tabs defaultValue="article">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="article">Article</TabsTrigger>
            <TabsTrigger value="book">Book</TabsTrigger>
            <TabsTrigger value="youtube">YouTube</TabsTrigger>
            <TabsTrigger value="documentary">Documentary</TabsTrigger>
            <TabsTrigger value="Podcast">Podcast</TabsTrigger>
          </TabsList>

        <TabsContent value="article">
        <h1
        class="text-3xl text-center font-extrabold leading-tight tracking-tighter md:text-4xl"
      >Article</h1>
          <Project />
        </TabsContent>
        <TabsContent value="book">
        <h1
        class="text-3xl text-center font-extrabold leading-tight tracking-tighter md:text-4xl"
      >Book</h1>
        </TabsContent>
        <TabsContent value="youtube">
        <h1
        class="text-3xl text-center font-extrabold leading-tight tracking-tighter md:text-4xl"
      >YouTube</h1>
        </TabsContent>
        <TabsContent value="documentary">
        <h1
        class="text-3xl text-center font-extrabold leading-tight tracking-tighter md:text-4xl"
      >Documentary</h1>
          </TabsContent>
          <TabsContent value="Podcast">
          <h1
        class="text-3xl text-center font-extrabold leading-tight tracking-tighter md:text-4xl"
      >Podcast</h1>
          </TabsContent>
          </Tabs>
      </TabsContent>
      <TabsContent value="watch">
      <Tabs defaultValue="manga">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="manga">Manga/Manhwa</TabsTrigger>
            <TabsTrigger value="anime">Anime</TabsTrigger>
            <TabsTrigger value="tv-show">TV Show</TabsTrigger>
            <TabsTrigger value="movie">Movie</TabsTrigger>
          </TabsList>
        </Tabs>
      </TabsContent>
      <TabsContent value="finance">
      <Tabs defaultValue="Currency">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="currency">Currency</TabsTrigger>
            <TabsTrigger value="stock">Stock</TabsTrigger>
            <TabsTrigger value="crypto">Crypto</TabsTrigger>
            <TabsTrigger value="commodity">Commodity</TabsTrigger>
            <TabsTrigger value="other-asset">Asset</TabsTrigger>
          </TabsList>
        </Tabs>
      </TabsContent>
      <TabsContent value="resume">  
      </TabsContent>
    </Tabs>
  )
}
