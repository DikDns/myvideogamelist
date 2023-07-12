export interface PageProps<TParams> {
  params: TParams;
  searchParams: { [key: string]: string | string[] | undefined };
}
