import { UserRole } from 'src/_zswod/models/User';
import * as yup from 'yup';

const yupStringSchemas = {
  password: yup
    .string()
    .required('Najpierw musisz podać hasło ')
    .min(6, 'Hasło powinno się składać z przynajmniej 6 znaków')
    .max(64, '64 znaki to naprawdę wystarczająca długość hasła 😉'),
  passwordConfirm: yup
    .string()
    .required('Potwierdź hasło')
    .oneOf([yup.ref('password')], 'Hasła muszą być identyczne'),
  email: yup
    .string()
    .email('To nie jest poprawny adres e-mail')
    .required('Musisz podać adres e-mail')
    .min(6, 'Minimalna długość adresu email powinna wynieść 6 znaków')
    .max(64, 'Ten adres wygląda na zbyt długi!'),
  role: yup
    .string()
    .oneOf<UserRole>(['Student', 'LegalGuardian'])
    .required('Musisz wybrać kim jesteś'),
};

export { yupStringSchemas };
