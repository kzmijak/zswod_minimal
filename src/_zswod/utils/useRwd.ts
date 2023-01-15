import useResponsive from 'src/hooks/useResponsive';

const useRwd = () => {
  const isDesktop = useResponsive('up', 'lg');
  const isMobile = useResponsive('only', 'xs');
  return { isDesktop, isMobile };
};

export { useRwd };
