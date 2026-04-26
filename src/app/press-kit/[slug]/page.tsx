import { presskit } from "@/app/data/presskit";
import { notFound } from "next/navigation";
import PresskitClient from "./PresskitClient";

// 1. This function MUST run on the server
export async function generateStaticParams() {
  return presskit.map((file) => ({
    slug: file.slug,
  }));
}

type PressKitPageProps = {
  params: {
    slug: string;
  };
};

// 2. This component runs on the server, fetches data, and passes it to the client component
const PressKitPage = ({ params }: PressKitPageProps) => {
  const file = presskit.find((file) => file.slug === params.slug);

  if (!file) {
    notFound();
  }

  // Pass the data object (file) to the client component
  return <PresskitClient file={file} />;
};

export default PressKitPage;
