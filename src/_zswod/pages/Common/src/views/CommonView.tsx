import { FC } from 'react';
import { FetchArticleHeaders } from 'src/_zswod/modules/ArticleHeaders';
import { DashboardDesktop } from '../components/DashboardDesktop';

const CommonView: FC = () => (
  <>
    <FetchArticleHeaders />
    <DashboardDesktop />
  </>
);

export { CommonView };
