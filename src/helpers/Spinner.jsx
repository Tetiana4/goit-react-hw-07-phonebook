import Loader from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <>
      <Loader type="Puff" color="black" height={90} width={90} timeout={3000} />
    </>
  );
};
