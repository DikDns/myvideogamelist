import { PageProps } from "@/types/PageProps";
import getFranchise from "@/layouts/Franchises/getFranchise";
import Franchise from "@/layouts/Franchises/Franchise";

type FranchisePageProps = PageProps<{ slug: string }>;

export default async function FranchisePage({
  params: { slug },
}: FranchisePageProps) {
  const franchise = await getFranchise(slug);

  return (
    <div>
      <Franchise data={franchise} />
    </div>
  );
}
