import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ShowcasePage() {
  const personalProjects = [
    {
      name: "Item1",
      image: "img1",
    },
  ];

  const replications = [
    {
      name: "Paper Grid",
      inspiredBy: "hex.tech",
      imageSrc: "/projects/papergrid.png",
      link: "https://your-demo-link.com/paper-grid"
    },
    {
      name: "Paper Grid2",
      inspiredBy: "hex.tech",
      imageSrc: "/projects/papergrid.png",
      link: "https://your-demo-link.com/paper-grid"
    },
    {
      name: "Paper Grid3",
      inspiredBy: "hex.tech",
      imageSrc: "/projects/papergrid.png",
      link: "https://your-demo-link.com/paper-grid"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen max-w-full min-w-[50rem] overflow-hidden px-10 gap-y-10">
      <h1 className="mb-1 text-2xl font-bold text-custom-offwhite">Projects</h1>
      <p className="dark:text-zinc-50">
        Hello! Here you can find my projects & some of the pieces of software that I really liked and replicated.
      </p>
      {/* Front-end Replications */}
      <p>Front-end Replications</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border border-border p-4 rounded-xl">
          {replications.map((replication) => (
            <Link href={replication.link} key={replication.name}>
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={replication.imageSrc}
                      alt={replication.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-semibold mb-2">{replication.name}</h2>
                    <Badge variant="secondary">Inspired by {replication.inspiredBy}</Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      {/* Personal Projects */}
      <div className="flex flex-col rounded-xl border border-border p-4 gap-y-4 sm:gap-y-6">
        {personalProjects.map((project) => (
          <div key={project.name} className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="border border-border p-4 rounded-lg">
              <h3>{project.name}</h3>
              <p>{project.image}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

