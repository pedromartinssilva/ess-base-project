import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../../../../shared/components/Button";
import styles from "./index.module.css";

// Definindo o esquema para o formulário de recuperação de senha
const PasswordRecoveryFormSchema = z.object({
  email: z.string().email(),
});

type PasswordRecoveryFormType = z.infer<typeof PasswordRecoveryFormSchema>;

const PasswordRecovery = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordRecoveryFormType>({
    resolver: zodResolver(PasswordRecoveryFormSchema),
  });

  const onSubmit: SubmitHandler<PasswordRecoveryFormType> = async (data) => {
    // lógica do envio do e-mail de recuperação de senha
    console.log(data.email);
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Recuperação de Senha</h1>
      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formInputContainer}>
          <input
              data-cy="input-name"
              {...register("email")}
              placeholder="Digite o seu e-mail"
              className={styles.formInput}
            />          
          {errors.email && (
            <span data-cy="input-name-error" className={styles.formError}>
              {errors.email.message}
            </span>
          )}
        </div>
        <Button type="submit">Recuperar</Button>
      </form>
    </section>
  );
};

export default PasswordRecovery;