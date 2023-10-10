import { PageProps } from "@/types/PageProps";
import FranchiseDetailLayout from "@/features/franchises/components/FranchiseDetailLayout";
import fetchFranchiseDetail from "@/features/franchises/lib/fetchFranchiseDetail";

type FranchisePageProps = PageProps<{ slug: string }>;

export default async function FranchisePage({
  params: { slug },
}: FranchisePageProps) {
  const franchise = await fetchFranchiseDetail(slug);

  return <FranchiseDetailLayout data={franchise} />;
}
