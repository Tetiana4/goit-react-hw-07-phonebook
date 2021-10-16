import Loader from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <>
      <Loader type="Puff" color="black" height={50} width={50} timeout={3000} />
    </>
  );
};
