import { useRouter } from "next/router";

export default function UserDetails() {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Detalhes do usuário {id}</h1>;
}
