import { Login } from "@/services/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function useLogin() {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      Login(email, password),
    onSuccess: (data) => {
      // salva usuario no cache global
      queryClient.setQueryData(["user"], data.user);
      router.replace("/home");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}
