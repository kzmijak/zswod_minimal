import { useForm as useHookForm } from 'react-hook-form';
import { ArticleFormModel } from '../components/models/ArticleFormModel';
import { nullArticleFormObject } from '../components/models/nullArticleFormObject';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';

const useForm = () =>
  useHookForm<ArticleFormModel>({
    defaultValues: nullArticleFormObject,
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });

export { useForm };
