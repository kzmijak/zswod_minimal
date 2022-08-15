import * as yup from 'yup';
import { ArticleFormModel } from '../components/models/ArticleFormModel';

const schema: yup.SchemaOf<ArticleFormModel> = yup.object().shape({
  title: yup.string().required('Tytuł jest wymagany'),

  short: yup.string().required('Krótki opis jest wymagany'),

  content: yup.string().required('Treść nie może być pusta'),
});

export { schema };
