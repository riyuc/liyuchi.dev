import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ShowcasePage() {
  const personalProjects = [
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
      <div>
        <h1 className="mb-1 text-2xl font-bold text-custom-offwhite">Projects</h1>
        <p className="dark:text-zinc-50">
          Hello! Here you can find my projects & some of the pieces of software that I really liked and replicated.
        </p>
      </div>
      {/* Front-end Replications */}
      <div className="flex flex-col rounded-xl border border-border p-4 gap-y-4 sm:gap-y-6">
        <h2 className="px-2 text-lg font-medium">Front-end Replications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
      {/* Personal Projects */}
      <div className="flex flex-col rounded-xl border border-border p-4 gap-y-4 sm:gap-y-6">
        <h2 className="px-2 text-lg font-medium">Personal Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalProjects.map((replication) => (
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
      </div>
    </div>
  );
}

