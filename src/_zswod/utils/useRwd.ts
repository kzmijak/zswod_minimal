import useResponsive from 'src/hooks/useResponsive';

const useRwd = () => {
  const isDesktop = useResponsive('up', 'lg');

  return { isDesktop, isMobile: !isDesktop };
};

export { useRwd };
