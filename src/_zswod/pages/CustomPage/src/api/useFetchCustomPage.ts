import { useCallback, useEffect, useState } from 'react';
import { CustomPageModel, mapCustomPageDtoToModel } from 'src/_zswod/models/CustomPage';
import { api } from 'src/_zswod/modules/Axios';
import { RequestStatus } from 'src/_zswod/utils/requestStatus';

const fetchCustomPage = async (sectionUrl: string, titleUrl: string) => {
  const response = await api.get<CustomPageModel>(`customPages/${sectionUrl}/${titleUrl}`);

  return mapCustomPageDtoToModel(response.data);
};

const useFetchCustomPage = (sectionUrl: string, titleUrl: string) => {
  const [fetchStatus, setFetchStatus] = useState<RequestStatus>('idle');
  const [customPage, setCustomPage] = useState<CustomPageModel>();
  const currentUrl = sectionUrl + '/' + titleUrl;

  const invalidateFetchCustomPage = () => {
    setCustomPage(undefined);
    setFetchStatus('idle');
  };

  const executeFetchCustomPage = useCallback(async () => {
    setFetchStatus('loading');

    try {
      const customPage = await fetchCustomPage(sectionUrl, titleUrl);
      setCustomPage(customPage);
      setFetchStatus('success');
    } catch {
      setFetchStatus('error');
    }
  }, [sectionUrl, titleUrl]);

  useEffect(() => {
    if (Boolean(customPage) && customPage!.url !== currentUrl) {
      setFetchStatus('idle');
    }
  }, [currentUrl, customPage]);

  useEffect(() => {
    if (fetchStatus === 'idle') executeFetchCustomPage();
  }, [currentUrl, customPage, executeFetchCustomPage, fetchStatus]);

  return { invalidateFetchCustomPage, fetchStatus, customPage };
};

export { useFetchCustomPage };
